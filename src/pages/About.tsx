import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Heart } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";
import seanImage from "@/assets/team-sean.jpg";
import rossImage from "@/assets/team-ross.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-10 h-10 text-accent" />,
      title: "Results-Focused",
      description:
        "Every strategy and decision is driven by measurable outcomes and your business growth.",
    },
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "Client-Centered",
      description:
        "Your success is our success. We prioritize your goals and work as an extension of your team.",
    },
    {
      icon: <Award className="w-10 h-10 text-accent" />,
      title: "Quality Excellence",
      description:
        "We never compromise on quality. Every project receives our full attention and expertise.",
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Collaborative Approach",
      description:
        "Transparent communication and partnership every step of the way to ensure alignment.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Patane Creative</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Your trusted partner in e-commerce success, delivering expert solutions with passion and
            proven results.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={teamImage} alt="Patane Creative Team" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Patane Creative was founded with a clear mission: to empower e-commerce businesses
                  with the tools, strategies, and expertise they need to thrive in the digital
                  marketplace.
                </p>
                <p>
                  With over 3 years of hands-on experience, our team of 2 dedicated specialists has
                  helped numerous store owners transform their online presence and achieve remarkable
                  growth. From small startups to established brands, we've partnered with businesses
                  across diverse industries.
                </p>
                <p>
                  What sets us apart is our comprehensive approach. We don't just build stores or run
                  ads—we become your strategic partner, understanding your business inside and out,
                  and crafting solutions that align with your unique goals and vision.
                </p>
                <p className="font-semibold text-foreground">
                  Today, we're proud to be a trusted name in e-commerce solutions, with a track
                  record of satisfied clients and successful projects that speak for themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and ensure exceptional results for our
              clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Expertise
            </h2>

            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    E-Commerce Platform Specialists
                  </h3>
                  <p className="text-muted-foreground">
                    Deep expertise in Shopify and Wix platforms, including custom development, theme
                    customization, app integrations, and performance optimization. We know these
                    platforms inside and out.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Digital Marketing Professionals
                  </h3>
                  <p className="text-muted-foreground">
                    Proven track record in SEO, email marketing with Klaviyo, social media
                    advertising, and Google Ads management. We create data-driven campaigns that
                    deliver measurable ROI.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Technical Problem Solvers
                  </h3>
                  <p className="text-muted-foreground">
                    Expert backend developers who can troubleshoot complex issues, optimize site
                    performance, implement custom functionality, and ensure your store operates
                    flawlessly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">By the Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">2</div>
              <div className="text-muted-foreground">Dedicated Specialists</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to partner with a team that's committed to your success? Let's discuss your
            project.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;