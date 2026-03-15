import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://esm.sh/zod@3.23.8";

const PAYSTACK_SECRET_KEY = Deno.env.get("PAYSTACK_SECRET_KEY")?.trim();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const paymentSchema = z.object({
  email: z.string().trim().email("Invalid email address"),
  amount: z.number().positive("Amount must be positive"),
  currency: z.string().default("USD"),
  metadata: z.object({
    service: z.string(),
    customer_name: z.string().optional(),
  }).optional(),
  callback_url: z.string().url().optional(),
});

async function getUsdToNgnRate(): Promise<number> {
  try {
    const response = await fetch(
      "https://api.exchangerate-data.com/v1/latest?base=USD"
    );
    if (response.ok) {
      const data = await response.json();
      if (data?.rates?.NGN) return data.rates.NGN;
    }
  } catch (e) {
    console.warn("Primary exchange API failed, trying fallback:", e);
  }

  // Fallback API
  try {
    const response = await fetch(
      "https://open.er-api.com/v6/latest/USD"
    );
    if (response.ok) {
      const data = await response.json();
      if (data?.rates?.NGN) return data.rates.NGN;
    }
  } catch (e) {
    console.warn("Fallback exchange API also failed:", e);
  }

  // Hard fallback rate (update periodically)
  console.warn("Using fallback exchange rate of 1600 NGN/USD");
  return 1600;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!PAYSTACK_SECRET_KEY) {
      throw new Error("Payment configuration error");
    }

    const body = await req.json();
    const validationResult = paymentSchema.safeParse(body);

    if (!validationResult.success) {
      return new Response(
        JSON.stringify({
          error: "Invalid input",
          details: validationResult.error.flatten().fieldErrors,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { email, amount, currency, metadata, callback_url } = validationResult.data;

    // Convert USD to NGN for Paystack (which deposits in NGN)
    let amountInSmallestUnit: number;
    let paystackCurrency = "NGN";
    let exchangeRate: number | null = null;

    if (currency === "USD") {
      exchangeRate = await getUsdToNgnRate();
      const ngnAmount = amount * exchangeRate;
      amountInSmallestUnit = Math.round(ngnAmount * 100); // kobo
      console.log(`Converting $${amount} USD → ₦${ngnAmount.toFixed(2)} NGN (rate: ${exchangeRate})`);
    } else {
      amountInSmallestUnit = Math.round(amount * 100);
      paystackCurrency = currency;
    }

    const enrichedMetadata = {
      ...metadata,
      original_amount_usd: amount,
      exchange_rate: exchangeRate,
    };

    console.log("Initializing Paystack payment for:", email, "Amount:", amountInSmallestUnit / 100, paystackCurrency);

    const paystackResponse = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amountInSmallestUnit,
        currency: paystackCurrency,
        metadata: enrichedMetadata,
        callback_url,
      }),
    });

    const paystackData = await paystackResponse.json();

    if (!paystackResponse.ok || !paystackData.status) {
      console.error("Paystack API error:", paystackData);
      throw new Error(`Payment initialization failed: ${paystackData.message || "Unknown error"}`);
    }

    console.log("Payment initialized successfully:", paystackData.data.reference);

    return new Response(
      JSON.stringify({
        authorization_url: paystackData.data.authorization_url,
        reference: paystackData.data.reference,
        access_code: paystackData.data.access_code,
        exchange_rate: exchangeRate,
        ngn_amount: exchangeRate ? (amount * exchangeRate) : null,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in initialize-payment function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
