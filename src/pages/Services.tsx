import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  Mail,
  TrendingUp,
  Wrench,
  Palette,
  Globe,
  BarChart3,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-accent" />,
      title: "Shopify Store Development",
      description:
        "Complete Shopify store setup, customization, and optimization. We create stunning, conversion-focused stores that represent your brand perfectly.",
      features: [
        "Custom theme development",
        "Store migration & setup",
        "App integration & optimization",
        "Mobile-responsive design",
      ],
    },
    {
      icon: <Globe className="w-12 h-12 text-accent" />,
      title: "Wix Solutions",
      description:
        "Professional Wix website development tailored to your e-commerce needs. Beautiful, functional, and easy to manage.",
      features: [
        "Custom Wix design",
        "E-commerce functionality",
        "SEO optimization",
        "Content management training",
      ],
    },
    {
      icon: <Palette className="w-12 h-12 text-accent" />,
      title: "Store Rebrand & Revamp",
      description:
        "Transform your existing store with a fresh, modern look. We revitalize outdated designs while improving user experience and conversion rates.",
      features: [
        "Brand strategy & identity",
        "UI/UX redesign",
        "Performance optimization",
        "A/B testing implementation",
      ],
    },
    {
      icon: <Search className="w-12 h-12 text-accent" />,
      title: "Advanced SEO",
      description:
        "Cutting-edge SEO strategies to boost your organic visibility and drive qualified traffic to your store.",
      features: [
        "Technical SEO audit",
        "Keyword research & strategy",
        "On-page optimization",
        "Link building campaigns",
      ],
    },
    {
      icon: <Mail className="w-12 h-12 text-accent" />,
      title: "Email Marketing & Klaviyo",
      description:
        "Strategic email marketing campaigns and automated flows that nurture leads and drive repeat purchases.",
      features: [
        "Klaviyo setup & integration",
        "Automated email flows",
        "Segmentation strategies",
        "Campaign design & copywriting",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: "Social Media Marketing",
      description:
        "Engaging social media campaigns that build brand awareness and drive conversions across all major platforms.",
      features: [
        "Content strategy & creation",
        "Paid social advertising",
        "Community management",
        "Influencer partnerships",
      ],
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-accent" />,
      title: "Google Ads Management",
      description:
        "Data-driven Google Ads campaigns optimized for maximum ROI. We handle everything from strategy to execution.",
      features: [
        "Campaign strategy & setup",
        "Keyword research & bidding",
        "Ad copy optimization",
        "Performance tracking & reporting",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12 text-accent" />,
      title: "Backend & Technical Fixes",
      description:
        "Expert technical support to resolve issues, optimize performance, and ensure your store runs smoothly.",
      features: [
        "Bug fixes & troubleshooting",
        "Speed optimization",
        "Security enhancements",
        "Third-party integrations",
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Comprehensive e-commerce solutions designed to elevate your online business. From
            development to marketing, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures quality results and transparent communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your business, goals, and target audience",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Custom plan tailored to your specific needs and budget",
              },
              {
                step: "03",
                title: "Execution",
                description: "Expert implementation with regular updates and feedback",
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and improvements for best results",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for
            your business.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
