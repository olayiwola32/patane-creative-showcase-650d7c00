import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Target, Shield, Mail, Store } from "lucide-react";
import { Link } from "react-router-dom";

// Portfolio images
import sslRedirectFix from "@/assets/portfolio/ssl-redirect-fix.png";
import sslCertificateSetup from "@/assets/portfolio/ssl-certificate-setup.png";
import autumnBlissSales from "@/assets/portfolio/autumn-bliss-sales.png";
import crossTossTraffic from "@/assets/portfolio/cross-toss-traffic.png";
import crossTossDashboard from "@/assets/portfolio/cross-toss-dashboard.png";
import klaviyoRevenue from "@/assets/portfolio/klaviyo-revenue.png";
import klaviyoFlows from "@/assets/portfolio/klaviyo-flows.png";
import klaviyoCampaigns from "@/assets/portfolio/klaviyo-campaigns.png";
import haustierbedarfRebrand from "@/assets/portfolio/haustierbedarf-rebrand.png";
import autumnBlissRedesign from "@/assets/portfolio/autumn-bliss-redesign.png";

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Cross Toss Trading - Complete Store Management",
      category: "Store Management & Growth",
      platform: "Shopify",
      client: "Cross Toss Trading",
      duration: "Ongoing",
      icon: Store,
      images: [crossTossDashboard, crossTossTraffic],
      challenge: "The client needed comprehensive store management to scale their e-commerce operations, increase traffic, and boost overall sales performance.",
      solution: "Implemented full store management including product optimization, traffic strategies, conversion optimization, and ongoing analytics monitoring to maximize revenue.",
      results: [
        { metric: "Sessions", value: "5,260", description: "+177% increase" },
        { metric: "Total Sales", value: "$9,860", description: "+55% growth" },
        { metric: "Orders", value: "100+", description: "+56% increase" },
        { metric: "Conversion Rate", value: "1.81%", description: "+80% improvement" },
      ],
      services: ["Store Management", "Traffic Optimization", "Sales Strategy", "Analytics"],
      testimonial: "Patane Creative transformed our store performance. The results speak for themselves - our sales nearly doubled!",
      testimonialAuthor: "Cross Toss Trading Team"
    },
    {
      id: 2,
      title: "Autumn Bliss Market - Email Marketing & Sales Growth",
      category: "Email Marketing & Klaviyo",
      platform: "Shopify + Klaviyo",
      client: "Autumn Bliss Market",
      duration: "Ongoing",
      icon: Mail,
      images: [klaviyoRevenue, klaviyoFlows, klaviyoCampaigns, autumnBlissSales, autumnBlissRedesign],
      challenge: "The boutique needed a complete email marketing strategy to increase customer retention, recover abandoned carts, and drive consistent revenue from email campaigns.",
      solution: "Implemented comprehensive Klaviyo email flows including abandoned cart recovery, browse abandonment, customer winback, welcome series with discounts, and strategic email campaigns.",
      results: [
        { metric: "Email Revenue", value: "$1,702", description: "+92% vs previous period" },
        { metric: "Flow Revenue", value: "$61.61", description: "100% from automated flows" },
        { metric: "Sessions", value: "198", description: "+113% traffic increase" },
        { metric: "Sales", value: "$195.66", description: "+70% weekly growth" },
      ],
      services: ["Klaviyo Email Flows", "Email Campaigns", "Abandoned Cart Recovery", "Welcome Series", "Store Redesign"],
      testimonial: "The email automation is incredible. We're recovering sales we would have lost and customers love the personalized experience.",
      testimonialAuthor: "Autumn Bliss Market Owner"
    },
    {
      id: 3,
      title: "Haustierbedarf4You - German Pet Store Rebrand",
      category: "Store Rebrand & Design",
      platform: "Shopify",
      client: "Haustierbedarf4You (Oliver Ormans)",
      duration: "4 weeks",
      icon: Store,
      images: [haustierbedarfRebrand],
      challenge: "The German pet supply store needed a complete visual rebrand to better connect with pet owners and create a premium, trustworthy shopping experience.",
      solution: "Complete store redesign with modern branding, engaging hero section featuring adorable pet imagery, multilingual support with German localization, and optimized user experience.",
      results: [
        { metric: "Brand Identity", value: "100%", description: "Complete rebrand" },
        { metric: "User Experience", value: "Enhanced", description: "Modern design" },
        { metric: "Mobile Ready", value: "Yes", description: "Fully responsive" },
        { metric: "Localization", value: "German", description: "Native language support" },
      ],
      services: ["Store Rebrand", "Visual Design", "UX Optimization", "Localization"],
      testimonial: "Die Besten Produkte für Pelzige Freunde - Our new store perfectly captures our brand mission!",
      testimonialAuthor: "Oliver Ormans, Owner"
    },
    {
      id: 4,
      title: "XIT Offroad - SSL Certificate Fix & Security",
      category: "Technical Fixes & Security",
      platform: "E-commerce",
      client: "XIT Offroad",
      duration: "1 week",
      icon: Shield,
      images: [sslCertificateSetup, sslRedirectFix],
      challenge: "The client's e-commerce store was showing SSL certificate errors, causing browser warnings that scared away customers and hurt SEO rankings.",
      solution: "Complete SSL certificate setup and verification including certificate parsing, chain of trust building, domain validation, cipher suite negotiation, and proper redirect configuration.",
      results: [
        { metric: "SSL Status", value: "Verified", description: "Fully secured" },
        { metric: "Certificate", value: "SHA-256", description: "Industry standard" },
        { metric: "Browser Trust", value: "100%", description: "No warnings" },
        { metric: "SEO Impact", value: "Restored", description: "HTTPS ranking boost" },
      ],
      services: ["SSL Certificate Setup", "Security Configuration", "Domain Verification", "Technical Fixes"],
      testimonial: "Our customers can now shop with confidence. No more security warnings - just smooth, secure checkout.",
      testimonialAuthor: "XIT Offroad Team"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Portfolio & Case Studies</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results for Real Businesses
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore detailed case studies of how we've transformed e-commerce stores, 
              driving measurable growth and sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <Badge variant="secondary" className="mb-3">{study.category}</Badge>
                      <CardTitle className="text-3xl mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-base">{study.client} • {study.platform}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{study.duration}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Project Images Gallery */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <study.icon className="h-5 w-5 text-primary" />
                      Project Showcase
                    </h3>
                    <div className={`grid gap-4 ${study.images.length === 1 ? 'grid-cols-1' : study.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                      {study.images.map((image, idx) => (
                        <img 
                          key={idx}
                          src={image} 
                          alt={`${study.title} - Image ${idx + 1}`}
                          className="w-full rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-destructive" />
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-accent" />
                        Our Solution
                      </h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {study.results.map((result, idx) => (
                        <Card key={idx} className="bg-accent/5">
                          <CardContent className="p-6">
                            <div className="text-3xl font-bold text-accent mb-1">{result.value}</div>
                            <div className="font-semibold mb-1">{result.metric}</div>
                            <div className="text-sm text-muted-foreground">{result.description}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Services Used */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Services Applied</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, idx) => (
                        <Badge key={idx} variant="outline">{service}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <p className="text-lg italic mb-2">"{study.testimonial}"</p>
                    <p className="text-sm font-semibold">— {study.testimonialAuthor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Store?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the growing list of successful e-commerce businesses we've helped scale. 
            Let's discuss your project and create a custom growth strategy.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link to="/contact">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
