import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, TrendingUp, Mail, Search, Wrench, Award } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";
import servicesIllustration from "@/assets/services-illustration.jpg";

const Home = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-accent" />,
      title: "Store Development",
      description: "Expert Shopify & Wix store setup, rebrand, and revamp services",
    },
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      title: "SEO Optimization",
      description: "Advanced SEO strategies to boost your store's visibility",
    },
    {
      icon: <Mail className="w-8 h-8 text-accent" />,
      title: "Email Marketing",
      description: "Strategic Klaviyo flows and campaigns that convert",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Digital Advertising",
      description: "Targeted social media and Google ads management",
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: "Technical Support",
      description: "Backend fixes and technical optimization",
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Proven Results",
      description: "3+ years of delivering measurable growth",
    },
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2", label: "Expert Team Members" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your E-Commerce Success
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert Shopify & Wix solutions, cutting-edge SEO, and proven digital marketing
              strategies to grow your online business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive E-Commerce Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From store setup to advanced marketing strategies, we provide end-to-end solutions
              for your online business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={servicesIllustration}
                alt="E-commerce success visualization"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose QOA Tech?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      Over 3 years of successful e-commerce projects with measurable results
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Full-Service Solutions</h3>
                    <p className="text-muted-foreground">
                      From design to marketing, we handle every aspect of your online presence
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dedicated Team</h3>
                    <p className="text-muted-foreground">
                      Expert specialists focused on your success with personalized attention
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Results-Driven</h3>
                    <p className="text-muted-foreground">
                      Data-backed strategies that deliver real ROI and business growth
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild variant="hero" size="lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your E-Commerce Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your online store and drive real results.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
