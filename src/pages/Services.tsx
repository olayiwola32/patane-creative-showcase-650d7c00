import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Globe, Mail, Palette, Search, ShoppingCart, TrendingUp, Wrench } from "lucide-react";

const services = [
  { icon: ShoppingCart, title: "Shopify Store Development", description: "Complete Shopify store setup, customization, and optimization. We create conversion-focused stores that represent your brand.", features: ["Custom theme development", "Store migration & setup", "App integration & optimization", "Mobile-responsive design"] },
  { icon: Globe, title: "Wix Solutions", description: "Professional Wix website development tailored to your e-commerce needs—beautiful, functional, and easy to manage.", features: ["Custom Wix design", "E-commerce functionality", "SEO optimization", "Content management training"] },
  { icon: Palette, title: "Store Rebrand & Revamp", description: "Transform your existing store with a fresh, modern look while improving the customer experience.", features: ["Brand strategy & identity", "UI/UX redesign", "Performance optimization", "A/B testing implementation"] },
  { icon: Search, title: "Advanced SEO", description: "Practical SEO strategies to improve organic visibility and bring qualified visitors to your store.", features: ["Technical SEO audit", "Keyword research & strategy", "On-page optimization", "Link building campaigns"] },
  { icon: Mail, title: "Email Marketing & Klaviyo", description: "Campaigns and automated flows that nurture customers and support repeat purchases.", features: ["Klaviyo setup & integration", "Automated email flows", "Segmentation strategies", "Campaign design & copywriting"] },
  { icon: TrendingUp, title: "Social Media Marketing", description: "Engaging social campaigns that build brand awareness and support conversions across major platforms.", features: ["Content strategy & creation", "Paid social advertising", "Community management", "Influencer partnerships"] },
  { icon: BarChart3, title: "Google Ads Management", description: "Data-informed Google Ads campaigns with strategy, execution, and performance tracking.", features: ["Campaign strategy & setup", "Keyword research & bidding", "Ad copy optimization", "Performance tracking & reporting"] },
  { icon: Wrench, title: "Backend & Technical Fixes", description: "Hands-on support to resolve issues, improve performance, and help your store run smoothly.", features: ["Bug fixes & troubleshooting", "Speed optimization", "Security enhancements", "Third-party integrations"] },
];

const platforms = ["Shopify", "WooCommerce", "Wix", "BigCommerce", "Squarespace Commerce", "Adobe Commerce"];

const Services = () => (
  <div>
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="container mx-auto px-4"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Our capabilities</p><h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">Thoughtful digital work, connected to your growth.</h1><p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">From store development to performance marketing and technical support, bring the right skills together for your next step.</p></div>
    </section>
    <section className="border-b border-border bg-secondary py-8"><div className="container mx-auto flex flex-wrap items-center gap-x-7 gap-y-3 px-4"><p className="mr-2 text-sm font-semibold">Platform-flexible support</p>{platforms.map((platform) => <span key={platform} className="text-sm text-muted-foreground">{platform}</span>)}<span className="text-sm text-muted-foreground">And more, where suitable</span></div></section>
    <section className="py-16 md:py-20"><div className="container mx-auto px-4"><div className="mb-11 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">What we can do together</p><h2 className="text-3xl font-bold md:text-4xl">Expertise for the details and the bigger picture.</h2></div><div className="grid gap-x-10 md:grid-cols-2">
      {services.map((service, index) => <article key={service.title} className="grid grid-cols-[42px_1fr] gap-4 border-t border-border py-7"><span className="pt-1 text-sm font-semibold text-accent">0{index + 1}</span><div><div className="mb-3 flex items-center gap-3"><service.icon className="h-5 w-5 text-accent" /><h3 className="text-xl font-semibold">{service.title}</h3></div><p className="mb-4 leading-relaxed text-muted-foreground">{service.description}</p><ul className="grid gap-2 sm:grid-cols-2">{service.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-muted-foreground"><span className="text-accent">—</span>{feature}</li>)}</ul></div></article>)}
    </div></div></section>
    <section className="bg-secondary py-16 md:py-20"><div className="container mx-auto px-4"><div className="mb-10 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">How we work</p><h2 className="text-3xl font-bold md:text-4xl">A clear, collaborative process.</h2><p className="mt-4 leading-relaxed text-muted-foreground">Stay aligned from the first conversation through launch and ongoing improvement.</p></div><div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">{[
      { step: "01", title: "Discover", description: "We learn about your business, audience, and goals." },
      { step: "02", title: "Strategize", description: "We shape the scope, priorities, and success measures together." },
      { step: "03", title: "Implement", description: "We put the agreed work into action and keep you informed." },
      { step: "04", title: "Optimize", description: "We review performance and make considered improvements." },
      { step: "05", title: "Grow", description: "We help you build on progress with continuing support." },
    ].map((phase) => <div key={phase.step} className="border-l border-border py-4 pl-5 pr-5"><span className="mb-4 block text-sm font-semibold text-accent">{phase.step}</span><h3 className="mb-2 text-lg font-semibold">{phase.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{phase.description}</p></div>)}</div></div></section>
    <section className="py-16 md:py-20"><div className="container mx-auto flex flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="mb-2 text-3xl font-bold">Have a project in mind?</h2><p className="text-muted-foreground">Let’s talk about the right scope for your business.</p></div><Button asChild variant="hero" size="lg"><Link to="/contact">Request a Consultation <ArrowRight /></Link></Button></div></section>
  </div>
);

export default Services;