import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Bella Fashion Boutique",
      rating: 5,
      text: "QOA Creative Tech completely transformed our Shopify store! The rebrand was exactly what we needed. Our conversion rate increased by 45% in just two months. They truly understand e-commerce.",
      project: "Shopify Store Rebrand & SEO",
    },
    {
      name: "James Rodriguez",
      business: "Tech Gadgets Pro",
      rating: 5,
      text: "Their Klaviyo email flows are incredible. We've seen a 3x increase in repeat purchases since implementing their automated campaigns. The team is responsive, professional, and delivers results.",
      project: "Email Marketing & Klaviyo Setup",
    },
    {
      name: "Emily Chen",
      business: "Green Living Store",
      rating: 5,
      text: "The SEO work they did was game-changing. We went from page 5 to page 1 for our main keywords within 3 months. Organic traffic has tripled, and sales are up 60%. Highly recommend!",
      project: "Advanced SEO Optimization",
    },
    {
      name: "Michael Thompson",
      business: "Fitness Gear Direct",
      rating: 5,
      text: "Outstanding Google Ads management! Our ROI improved by 200% with their strategic campaigns. They really know how to target the right audience and optimize for conversions.",
      project: "Google Ads & Social Media Marketing",
    },
    {
      name: "Lisa Anderson",
      business: "Handmade Jewelry Co",
      rating: 5,
      text: "From store setup to ongoing support, QOA Creative Tech has been amazing. They fixed technical issues we'd been struggling with for months and made our Wix store beautiful and functional.",
      project: "Wix Development & Technical Support",
    },
    {
      name: "David Park",
      business: "Urban Lifestyle Shop",
      rating: 5,
      text: "The social media campaigns they created for us generated more engagement than we ever thought possible. Our Instagram following grew 500% and translated into real sales. Worth every penny!",
      project: "Social Media Marketing & Ads",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Don't just take our word for it—hear what our satisfied clients have to say about
            working with QOA Tech.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5.0</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-xl transition-all duration-300 relative"
              >
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-accent/20 absolute top-4 right-4" />
                  <div className="mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{testimonial.business}</p>
                    <p className="text-sm text-accent font-medium">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Results That Matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our clients consistently see measurable improvements across key metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-accent mb-3">+150%</div>
                <p className="text-lg font-semibold text-foreground mb-2">Average Sales Growth</p>
                <p className="text-muted-foreground">Within the first 6 months of partnership</p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-accent mb-3">+200%</div>
                <p className="text-lg font-semibold text-foreground mb-2">ROI Improvement</p>
                <p className="text-muted-foreground">On marketing campaigns and ad spend</p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-accent mb-3">+300%</div>
                <p className="text-lg font-semibold text-foreground mb-2">Traffic Increase</p>
                <p className="text-muted-foreground">Through SEO and digital marketing efforts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who have transformed their e-commerce
            businesses with our help.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
