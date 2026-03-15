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

    // Paystack expects amount in the smallest currency unit (kobo for NGN, cents for USD)
    const amountInSmallestUnit = Math.round(amount * 100);

    console.log("Initializing Paystack payment for:", email, "Amount:", amount, currency);

    const paystackResponse = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amountInSmallestUnit,
        currency,
        metadata,
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
