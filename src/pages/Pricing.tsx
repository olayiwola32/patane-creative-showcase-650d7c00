import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Mail, MessageCircle, Shield, ShieldCheck, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    if (searchParams.get("payment") === "success") {
      toast({ title: "Payment Successful! 🎉", description: "Thank you for your payment. We'll be in touch shortly to get started." });
    }
  }, [searchParams, toast]);

  const serviceCategories = [
    { title: "Branding & Identity", description: "Logo design, brand guidelines, visual identity systems", features: ["Custom logo design", "Brand color palette", "Typography selection", "Brand guidelines document", "Social media assets"] },
    { title: "Marketing Materials", description: "Print and digital marketing collateral", features: ["Business cards & stationery", "Brochures & flyers", "Social media graphics", "Email templates", "Presentation decks"] },
    { title: "Digital Design", description: "Web and app design solutions", features: ["Website design", "Landing page design", "UI/UX design", "Mobile app design", "Interactive prototypes"] },
  ];

  const fixedServices = [
    { id: "ssl-fix", icon: ShieldCheck, title: "Basic SSL Certificate Renewal Fix", description: "Complete SSL setup, configuration, and redirect fixes", price: 121.45, features: ["SSL certificate installation", "HTTPS redirect configuration", "Mixed content fixes", "Browser compatibility check", "Post-setup verification"] },
    { id: "ssl-standard", icon: Shield, title: "Standard SSL Certificate + ACME Protocol Fix", description: "Everything in Basic SSL Renewal plus advanced SSL & protocol upgrades", price: 238.49, popular: true, features: ["Everything in Basic SSL Renewal Fix", "Upgrade to Wildcard SSL Certificate", "Secures primary domain & all subdomains", "Restores online visibility lost during SSL inactivity", "Greater coverage & flexibility than basic SSL", "Update to ACME v2 Protocol", "Restores automatic SSL renewal", "Prevents future renewal failures"] },
  ];

  const pricingBenefits = [
    { title: "Tailored Solutions", desc: "Every business has unique needs. Our pricing reflects the specific scope, complexity, and timeline of your project." },
    { title: "No Hidden Costs", desc: "We provide detailed quotes with clear breakdowns, so you know exactly what you're paying for." },
    { title: "Flexible Options", desc: "Whether you need a one-time project or ongoing design support, we can create a package that fits your budget." },
    { title: "Value-Driven", desc: "Our focus is on delivering exceptional value and results that exceed your investment." },
  ];

  return (
    <div>
      <section className="bg-primary py-16 text-primary-foreground md:py-20"><div className="container mx-auto px-4"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Pricing & services</p><h1 className="mb-5 max-w-3xl text-4xl font-bold md:text-5xl">Clear fixed-price services. Custom quotes for your vision.</h1><p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">Choose a ready-to-purchase solution or tell us about the scope you have in mind.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg" variant="hero"><Link to="/contact">Get a Custom Quote <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/portfolio">View Our Work</Link></Button></div></div></section>
      <section className="py-16 md:py-20"><div className="container mx-auto px-4"><div className="mb-10 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">One-time services</p><h2 className="text-3xl font-bold md:text-4xl">Fixed-price SSL solutions.</h2><p className="mt-3 text-muted-foreground">Choose the certificate and protocol support that fits your store.</p></div><div className="grid gap-7 lg:grid-cols-2">{fixedServices.map((service) => <Card key={service.id} className={`relative overflow-hidden rounded-md ${service.popular ? "border-accent" : "border-border"}`}><div className="absolute inset-x-0 top-0 h-1 bg-accent" />{service.popular && <Badge className="absolute right-5 top-5">POPULAR</Badge>}<CardHeader className="pb-4"><div className="mb-2"><service.icon className="h-6 w-6 text-accent" /></div><CardTitle className="max-w-md text-2xl leading-snug">{service.title}</CardTitle><CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription></CardHeader><CardContent><div className="mb-5 flex items-baseline gap-2"><span className="text-4xl font-bold">${service.price.toFixed(2)}</span><span className="text-sm text-muted-foreground">one-time</span></div><ul className="mb-7 space-y-3">{service.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{feature}</span></li>)}</ul><Button asChild className="w-full" variant="hero" size="lg"><Link to={`/checkout?service=${service.id}`}>Buy Now — ${service.price.toFixed(2)} <ArrowRight /></Link></Button></CardContent></Card>)}</div></div></section>
      <section className="bg-secondary py-16 md:py-20"><div className="container mx-auto px-4"><div className="mb-10 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Creative services</p><h2 className="text-3xl font-bold md:text-4xl">What we offer.</h2><p className="mt-3 text-muted-foreground">Explore service categories and request a personalized quote.</p></div><div className="grid gap-x-10 md:grid-cols-3">{serviceCategories.map((category, index) => <article key={category.title} className="border-t border-border py-6"><span className="mb-4 block text-xs font-semibold text-accent">0{index + 1}</span><h3 className="mb-2 text-xl font-semibold">{category.title}</h3><p className="mb-5 text-sm leading-relaxed text-muted-foreground">{category.description}</p><ul className="space-y-3">{category.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{feature}</span></li>)}</ul><Button asChild className="mt-6" variant="outline"><Link to="/contact">Request Quote <ArrowRight /></Link></Button></article>)}</div></div></section>
      <section className="py-16 md:py-20"><div className="container mx-auto px-4"><div className="mb-10 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Custom projects</p><h2 className="text-3xl font-bold md:text-4xl">Why custom pricing?</h2><p className="mt-3 text-muted-foreground">Transparent, fair pricing shaped around your specific requirements.</p></div><div className="grid gap-x-10 sm:grid-cols-2">{pricingBenefits.map((item, index) => <article key={item.title} className="border-t border-border py-5"><span className="mb-3 block text-xs font-semibold text-accent">0{index + 1}</span><h3 className="mb-2 text-lg font-semibold">{item.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p></article>)}</div></div></section>
      <section className="border-t border-border bg-secondary py-14 md:py-16"><div className="container mx-auto px-4"><div className="mb-8 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Ready to get started?</p><h2 className="text-3xl font-bold md:text-4xl">Let’s discuss your project.</h2><p className="mt-3 text-muted-foreground">Contact us for a personalized quote tailored to the work you have in mind.</p></div><div className="mb-8 flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8"><a href="mailto:hello@qoacreative.sbs" className="flex items-center gap-2 font-medium hover:text-accent"><Mail className="h-4 w-4 text-accent" />hello@qoacreative.sbs</a><a href="mailto:qoatechcreative@gmail.com" className="flex items-center gap-2 font-medium hover:text-accent"><Mail className="h-4 w-4 text-accent" />qoatechcreative@gmail.com</a><a href="https://wa.me/14173826911" className="flex items-center gap-2 font-medium hover:text-accent"><MessageCircle className="h-4 w-4 text-accent" />WhatsApp: +1 (417) 382-6911</a></div><Button asChild size="lg" variant="hero"><Link to="/contact">Get Your Custom Quote <ArrowRight /></Link></Button></div></section>
    </div>
  );
};

export default Pricing;