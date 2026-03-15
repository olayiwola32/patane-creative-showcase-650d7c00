import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Mail, Phone, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    if (searchParams.get("payment") === "success") {
      toast({
        title: "Payment Successful! 🎉",
        description: "Thank you for your payment. We'll be in touch shortly to get started.",
      });
    }
  }, [searchParams, toast]);
  const serviceCategories = [
    {
      title: "Branding & Identity",
      description: "Logo design, brand guidelines, visual identity systems",
      features: [
        "Custom logo design",
        "Brand color palette",
        "Typography selection",
        "Brand guidelines document",
        "Social media assets"
      ]
    },
    {
      title: "Marketing Materials",
      description: "Print and digital marketing collateral",
      features: [
        "Business cards & stationery",
        "Brochures & flyers",
        "Social media graphics",
        "Email templates",
        "Presentation decks"
      ]
    },
    {
      title: "Digital Design",
      description: "Web and app design solutions",
      features: [
        "Website design",
        "Landing page design",
        "UI/UX design",
        "Mobile app design",
        "Interactive prototypes"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Custom Pricing for Your Vision
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Every project is unique, and so is our pricing. We create tailored solutions 
            that match your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Get a Custom Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our service categories and request a personalized quote
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover-scale border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6" variant="outline">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Custom Pricing?
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in transparent, fair pricing based on your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Tailored Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every business has unique needs. Our pricing reflects the specific 
                  scope, complexity, and timeline of your project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  No Hidden Costs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide detailed quotes with clear breakdowns, so you know 
                  exactly what you're paying for.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Flexible Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you need a one-time project or ongoing design support, 
                  we can create a package that fits your budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Value-Driven
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our focus is on delivering exceptional value and results that 
                  exceed your investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a personalized quote tailored to your project
          </p>
          
          <div className="flex flex-col gap-4 justify-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="font-medium">qoatechcreative@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5 text-accent" />
              <span className="font-medium">Available for calls</span>
            </div>
          </div>

          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Get Your Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
