import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Building2, Copy, CheckCircle2, ArrowLeft, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SERVICES: Record<string, { name: string; price: number; description: string }> = {
  "ssl-fix": {
    name: "Basic SSL Certificate Renewal Fix",
    price: 121.45,
    description: "Complete SSL certificate setup, configuration, and redirect fixes for your website.",
  },
  "ssl-standard": {
    name: "Standard SSL Certificate + ACME Protocol Fix",
    price: 238.49,
    description: "Everything in Basic SSL Renewal plus Wildcard SSL upgrade and ACME v2 protocol restoration.",
  },
};

const BANK_DETAILS = {
  accountName: "Qudus Olayiwola Odunewu",
  bankName: "Lead Bank",
  accountNumber: "213824401345",
  routingNumber: "101019644",
  accountType: "Personal Checking",
  bankAddress: "9450 Southwest Gemini Drive, Beaverton, OR, 97008, USA",
};

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("service") || "ssl-fix";
  const service = SERVICES[serviceId];
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <Button asChild variant="outline">
          <Link to="/pricing">Back to Pricing</Link>
        </Button>
      </div>
    );
  }

  const handlePaystack = async () => {
    if (!email) {
      toast({ title: "Email required", description: "Please enter your email address.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("initialize-payment", {
        body: {
          email,
          amount: service.price,
          currency: "USD",
          metadata: { service: service.name, customer_name: name },
          callback_url: window.location.origin + "/pricing?payment=success",
        },
      });

      if (error) throw error;
      if (data?.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        throw new Error("Failed to get payment URL");
      }
    } catch (err: any) {
      console.error("Payment error:", err);
      toast({
        title: "Payment Error",
        description: "Could not initialize payment. Please try again or use bank transfer.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({ title: "Copied!", description: `${field} copied to clipboard.` });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const CopyButton = ({ text, field }: { text: string; field: string }) => (
    <button
      onClick={() => copyToClipboard(text, field)}
      className="ml-2 text-muted-foreground hover:text-accent transition-colors"
      aria-label={`Copy ${field}`}
    >
      {copiedField === field ? (
        <CheckCircle2 className="h-4 w-4 text-accent" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );

  const emailSubject = encodeURIComponent(`Payment Proof — ${service.name}`);
  const emailBody = encodeURIComponent(`Hi QOA Creative Tech,\n\nI have made a bank transfer of $${service.price.toFixed(2)} for the ${service.name} service.\n\nPlease find my payment proof attached.\n\nMy website URL: \n\nThank you!`);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/pricing">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Pricing
          </Link>
        </Button>

        {/* Order Summary */}
        <Card className="mb-8 border-accent/30">
          <CardHeader>
            <CardTitle className="text-2xl">Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">{service.name}</p>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
              <p className="text-2xl font-bold text-accent">${service.price.toFixed(2)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Tabs defaultValue="paystack" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="paystack" className="gap-2">
              <CreditCard className="h-4 w-4" /> Pay Online
            </TabsTrigger>
            <TabsTrigger value="bank" className="gap-2">
              <Building2 className="h-4 w-4" /> Bank Transfer
            </TabsTrigger>
          </TabsList>

          {/* Paystack Tab */}
          <TabsContent value="paystack">
            <Card>
              <CardHeader>
                <CardTitle>Pay with Card, Bank Transfer, or USSD</CardTitle>
                <CardDescription>
                  Secure payment powered by Paystack. Pay in your local currency.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Payment receipt will be sent to this email
                  </p>
                </div>
                <Button
                  onClick={handlePaystack}
                  disabled={loading || !email}
                  className="w-full"
                  variant="hero"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay $${service.price.toFixed(2)}`
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  You'll be redirected to Paystack's secure checkout.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bank Transfer Tab */}
          <TabsContent value="bank">
            <Card>
              <CardHeader>
                <CardTitle>Pay via Bank Transfer (USD)</CardTitle>
                <CardDescription>
                  Transfer ${service.price.toFixed(2)} USD to the account below and send your payment proof to our email.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Account Name</p>
                      <p className="font-medium">{BANK_DETAILS.accountName}</p>
                    </div>
                    <CopyButton text={BANK_DETAILS.accountName} field="Account Name" />
                  </div>
                  <div className="border-t border-border" />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Bank Name</p>
                      <p className="font-medium">{BANK_DETAILS.bankName}</p>
                    </div>
                    <CopyButton text={BANK_DETAILS.bankName} field="Bank Name" />
                  </div>
                  <div className="border-t border-border" />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Account Number</p>
                      <p className="font-medium font-mono">{BANK_DETAILS.accountNumber}</p>
                    </div>
                    <CopyButton text={BANK_DETAILS.accountNumber} field="Account Number" />
                  </div>
                  <div className="border-t border-border" />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Routing Number</p>
                      <p className="font-medium font-mono">{BANK_DETAILS.routingNumber}</p>
                    </div>
                    <CopyButton text={BANK_DETAILS.routingNumber} field="Routing Number" />
                  </div>
                  <div className="border-t border-border" />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Account Type</p>
                      <p className="font-medium">{BANK_DETAILS.accountType}</p>
                    </div>
                  </div>
                  <div className="border-t border-border" />
                  <div>
                    <p className="text-xs text-muted-foreground">Bank Address</p>
                    <p className="font-medium text-sm">{BANK_DETAILS.bankAddress}</p>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-sm">After transferring:</p>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                    <li>Take a screenshot of your payment confirmation</li>
                    <li>Send it to <span className="font-medium text-foreground">qoatechcreative@gmail.com</span></li>
                    <li>Include the service name and your website URL</li>
                    <li>We'll confirm receipt and begin work within 24 hours</li>
                  </ol>
                </div>

                <Button asChild variant="outline" className="w-full" size="lg">
                  <a href={`mailto:qoatechcreative@gmail.com?subject=${emailSubject}&body=${emailBody}`}>
                    Send Payment Proof via Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Checkout;