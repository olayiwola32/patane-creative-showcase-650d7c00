import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, TrendingUp, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudy1Before from "@/assets/case-study-1-before.jpg";
import caseStudy1After from "@/assets/case-study-1-after.jpg";
import caseStudy2Before from "@/assets/case-study-2-before.jpg";
import caseStudy2After from "@/assets/case-study-2-after.jpg";
import caseStudy3Before from "@/assets/case-study-3-before.jpg";
import caseStudy3After from "@/assets/case-study-3-after.jpg";

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Luxury Skincare Brand Transformation",
      category: "Store Rebrand & SEO",
      platform: "Shopify",
      client: "Premium Beauty Co.",
      duration: "6 weeks",
      beforeImage: caseStudy1Before,
      afterImage: caseStudy1After,
      challenge: "The client's Shopify store had outdated branding, poor mobile experience, and wasn't ranking for key search terms. Cart abandonment was at 78%.",
      solution: "Complete store rebrand with modern design system, mobile-first approach, advanced SEO optimization with schema markup, and strategic product categorization.",
      results: [
        { metric: "Conversion Rate", value: "+187%", description: "From 1.2% to 3.4%" },
        { metric: "Organic Traffic", value: "+245%", description: "Monthly visitors increased" },
        { metric: "Cart Abandonment", value: "-43%", description: "Reduced to 35%" },
        { metric: "Page Load Speed", value: "+165%", description: "From 4.2s to 1.6s" },
      ],
      services: ["Store Rebrand", "Advanced SEO", "Mobile Optimization", "Speed Optimization"],
      testimonial: "Patane Creative completely transformed our online presence. Sales tripled in just two months!",
      testimonialAuthor: "Sarah Mitchell, Founder"
    },
    {
      id: 2,
      title: "Home Decor Store SEO Overhaul",
      category: "SEO & Technical Fixes",
      platform: "Wix",
      client: "Modern Living Spaces",
      duration: "8 weeks",
      beforeImage: caseStudy2Before,
      afterImage: caseStudy2After,
      challenge: "The Wix store had minimal search visibility, technical issues causing slow load times, and poor product discoverability. Monthly revenue was stagnant.",
      solution: "Comprehensive SEO strategy with keyword research, technical backend optimization, improved site architecture, and enhanced product descriptions with rich snippets.",
      results: [
        { metric: "Search Rankings", value: "Top 3", description: "For 24 target keywords" },
        { metric: "Monthly Revenue", value: "+320%", description: "Year-over-year growth" },
        { metric: "Site Speed", value: "+180%", description: "Improved performance score" },
        { metric: "Product Views", value: "+275%", description: "Average per product" },
      ],
      services: ["Advanced SEO", "Technical Fixes", "Site Architecture", "Content Optimization"],
      testimonial: "The SEO results exceeded all expectations. We're now ranking above competitors who've been in business for decades.",
      testimonialAuthor: "Michael Chen, Owner"
    },
    {
      id: 3,
      title: "Fashion Boutique Email Automation",
      category: "Email Marketing & Klaviyo",
      platform: "Shopify",
      client: "Chic Styles Boutique",
      duration: "5 weeks",
      beforeImage: caseStudy3Before,
      afterImage: caseStudy3After,
      challenge: "The boutique had no email marketing automation, relied solely on paid ads, and struggled with customer retention. LTV was extremely low.",
      solution: "Implemented advanced Klaviyo email flows including welcome series, abandoned cart recovery, post-purchase sequences, and VIP customer campaigns with personalization.",
      results: [
        { metric: "Email Revenue", value: "+425%", description: "From email campaigns" },
        { metric: "Customer LTV", value: "+156%", description: "Average lifetime value" },
        { metric: "Repeat Purchases", value: "+89%", description: "Return customer rate" },
        { metric: "Cart Recovery", value: "32%", description: "Abandoned carts recovered" },
      ],
      services: ["Klaviyo Email Flows", "Email Marketing", "Customer Segmentation", "Automation"],
      testimonial: "The email automation pays for itself 10x over every month. Game-changing for our retention strategy.",
      testimonialAuthor: "Jessica Rivera, Marketing Director"
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
            {caseStudies.map((study, index) => (
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
                  {/* Before/After Images */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Visual Transformation</h3>
                    <Tabs defaultValue="before" className="w-full">
                      <TabsList className="grid w-full max-w-md grid-cols-2">
                        <TabsTrigger value="before">Before</TabsTrigger>
                        <TabsTrigger value="after">After</TabsTrigger>
                      </TabsList>
                      <TabsContent value="before" className="mt-4">
                        <img 
                          src={study.beforeImage} 
                          alt={`${study.title} - Before`}
                          className="w-full rounded-lg border shadow-lg"
                        />
                      </TabsContent>
                      <TabsContent value="after" className="mt-4">
                        <img 
                          src={study.afterImage} 
                          alt={`${study.title} - After`}
                          className="w-full rounded-lg border shadow-lg"
                        />
                      </TabsContent>
                    </Tabs>
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
