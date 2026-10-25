import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        business: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Contact QOA Creative Tech</p>
          <h1 className="mb-5 max-w-3xl text-4xl font-bold md:text-5xl">Tell us what you’re working toward.</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">Ready to improve your e-commerce business? Share a little about your project and we’ll be in touch within 24 hours.</p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Contact Form */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Project inquiry</p>
              <h2 className="mb-7 text-3xl font-bold text-foreground">Start a conversation.</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Business Name
                  </label>
                  <Input
                    id="business"
                    name="business"
                    type="text"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your Business Name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="shopify">Shopify Development</option>
                    <option value="woocommerce">WooCommerce Development</option>
                    <option value="wix">Wix Solutions</option>
                    <option value="bigcommerce">BigCommerce Solutions</option>
                    <option value="squarespace">Squarespace Commerce</option>
                    <option value="adobe-commerce">Adobe Commerce</option>
                    <option value="rebrand">Store Rebrand & Revamp</option>
                    <option value="seo">SEO & Search Visibility</option>
                    <option value="email">Email Marketing & Klaviyo</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="ads">Paid Advertising & Google Ads</option>
                    <option value="technical">Technical Support & Security</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-7">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Contact information</p>
                <h2 className="mb-3 text-3xl font-bold text-foreground">Here to help you move forward.</h2>
                <p className="text-muted-foreground">Have questions? Reach out through any of these channels.</p>
              </div>

              <div className="divide-y divide-border border-y border-border">
                <div className="py-5"><h3 className="mb-2 flex items-center gap-3 font-semibold text-foreground"><Mail className="h-5 w-5 text-accent" />Email Us</h3><div className="space-y-1 pl-8"><a href="mailto:hello@qoacreative.sbs" className="block break-all text-sm text-muted-foreground hover:text-accent">hello@qoacreative.sbs</a><a href="mailto:qoatechcreative@gmail.com" className="block break-all text-sm text-muted-foreground hover:text-accent">qoatechcreative@gmail.com</a><p className="mt-2 text-sm text-muted-foreground">For general inquiries and project discussions</p></div></div>
                <div className="py-5"><h3 className="mb-2 flex items-center gap-3 font-semibold text-foreground"><svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.199.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.248-.57-.397m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /><path d="m.057 24 1.653-6.053A11.882 11.882 0 0 1 .157 11.892C.16 5.335 5.495 0 12.05 0a11.815 11.815 0 0 1 8.414 3.488 11.821 11.821 0 0 1 3.48 8.413c-.003 6.558-5.339 11.893-11.893 11.893h-.005a11.882 11.882 0 0 1-5.683-1.448z" /></svg>WhatsApp</h3><div className="pl-8"><a href="https://wa.me/14173826911" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent">+1 (417) 382-6911</a><p className="mt-2 text-sm text-muted-foreground">Message us on WhatsApp for quick responses</p></div></div>
                <div className="py-5"><h3 className="mb-2 flex items-center gap-3 font-semibold text-foreground"><Clock className="h-5 w-5 text-accent" />Response Time</h3><div className="pl-8"><p className="text-sm text-muted-foreground">Within 24 hours</p><p className="mt-2 text-sm text-muted-foreground">We typically respond to all inquiries within one business day</p></div></div>
              </div>

              <div className="border-l-2 border-accent pl-5"><h3 className="mb-2 font-semibold text-foreground">Ready to get started?</h3><p className="text-sm leading-relaxed text-muted-foreground">Book a free 30-minute consultation to discuss your e-commerce goals and how we can help you achieve them.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-accent">A few helpful details</p>
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">Frequently asked questions</h2>

          <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
            <div className="py-5">
                <h3 className="mb-2 text-lg font-semibold text-foreground">What is your typical project timeline?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Timelines vary based on project scope. A basic store setup takes 2-3 weeks, while
                  comprehensive rebrands can take 4-6 weeks. We'll provide a detailed timeline
                  during consultation.
                </p>
            </div>

            <div className="py-5">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Do you offer ongoing support?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Yes! We offer flexible maintenance and support packages to ensure your store
                  continues to perform optimally after launch.
                </p>
            </div>

            <div className="py-5">
                <h3 className="mb-2 text-lg font-semibold text-foreground">What is your pricing structure?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We offer customized pricing based on your specific needs and project scope. Contact
                  us for a detailed quote tailored to your requirements.
                </p>
            </div>

            <div className="py-5">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Can you work with my existing store?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Absolutely! We specialize in both new store development and improving existing
                  stores through rebrands, optimization, and technical enhancements.
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
