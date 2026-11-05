import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check, Clapperboard, Code2, Mail, Search, ShoppingBag, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";
import heroStudio from "@/assets/hero-studio.jpg";
import crossTossDashboard from "@/assets/portfolio/cross-toss-dashboard.png";
import autumnBlissSales from "@/assets/portfolio/autumn-bliss-sales.png";
import petStoreRebrand from "@/assets/portfolio/haustierbedarf-rebrand.png";

const easeOut = [0.22, 1, 0.36, 1] as const;

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  const services = [
    { number: "01", icon: ShoppingBag, title: "E-commerce development", description: "Thoughtful storefronts, migrations, redesigns, and technical improvements across leading commerce platforms.", href: "/services" },
    { number: "02", icon: Search, title: "Search & visibility", description: "Technical and on-page SEO that makes your products easier to discover and your site easier to use.", href: "/services" },
    { number: "03", icon: Mail, title: "Email & retention", description: "Klaviyo campaigns and automated customer journeys designed to encourage meaningful repeat visits.", href: "/services" },
    { number: "04", icon: TrendingUp, title: "Paid growth", description: "Focused Google and social advertising, supported by clear tracking and practical optimization.", href: "/services" },
    { number: "05", icon: Clapperboard, title: "Video & book marketing", description: "AI-powered product and promotional videos, plus marketing that puts books in front of real readers.", href: "/services" },
    { number: "06", icon: Code2, title: "Technology & support", description: "Hands-on troubleshooting, integrations, security fixes, and continuing technical care.", href: "/services" },
  ];

  const platforms = ["Shopify", "WooCommerce", "Wix", "BigCommerce", "Squarespace Commerce", "Adobe Commerce", "Klaviyo", "Google Ads"];

  const projects = [
    { client: "Cross Toss Trading", focus: "Store management · Shopify", result: "5,260 sessions · $9,860 in sales", image: crossTossDashboard, alt: "Cross Toss Trading Shopify performance dashboard" },
    { client: "Autumn Bliss Market", focus: "Email marketing · Health & beauty", result: "+129% sales growth · 100/100 store audit", image: autumnBlissSales, alt: "Autumn Bliss Market Shopify sales dashboard" },
    { client: "Haustierbedarf4You", focus: "Store rebrand · E-commerce", result: "A refreshed, localized shopping experience", image: petStoreRebrand, alt: "Haustierbedarf4You redesigned online store" },
  ];

  const process = [
    { step: "01", title: "Discover", description: "Understand your business, customers, and current opportunity." },
    { step: "02", title: "Strategize", description: "Agree on practical priorities, scope, and success measures." },
    { step: "03", title: "Implement", description: "Build, improve, and launch together with clear project updates." },
    { step: "04", title: "Optimize", description: "Review real performance and refine what matters most." },
    { step: "05", title: "Grow", description: "Keep momentum through continued, focused support." },
  ];

  const stats = [
    { value: "3+", label: "Years of experience" },
    { value: "30+", label: "Projects completed" },
    { value: "100%", label: "Client satisfaction" },
  ];

  return (
    <div>
      {/* ============ Hero ============ */}
      <section ref={heroRef} className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-primary text-primary-foreground md:min-h-[640px]">
        <motion.img
          src={heroStudio}
          alt="A digital commerce team reviewing an online store in a warm, modern studio"
          style={shouldReduceMotion ? undefined : { y: backgroundY, scale: backgroundScale }}
          className="absolute inset-0 -z-20 h-[115%] w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,hsl(36_72%_48%/0.25),transparent_55%)]" />

        <motion.div style={shouldReduceMotion ? undefined : { y: contentY }} className="container mx-auto w-full px-4 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/80 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Building better digital experiences. Driving smarter e-commerce growth.
            </motion.div>

            <h1 className="mb-7 text-4xl font-bold leading-[1.06] md:text-6xl lg:text-[4.25rem]">
              {["Your Growth.", "Our Expertise.", "One Powerful", "Partnership."].map((line, index) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + index * 0.12, ease: easeOut }}
                >
                  {index === 2 ? (
                    <>
                      One Powerful <span className="shimmer-text">Digital</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
              className="mb-9 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl"
            >
              From e-commerce development and search visibility to paid advertising, brand experiences, and customer retention, QOA Creative Tech brings together the expertise your business needs to grow online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: easeOut }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild size="lg" variant="hero" className="group"><Link to="/services">Explore Our Services <ArrowRight className="transition-transform group-hover:translate-x-1" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/portfolio">View Our Work</Link></Button>
            </motion.div>
          </div>

          <div className="mt-14 grid max-w-3xl gap-5 sm:grid-cols-3 lg:mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 + index * 0.15, ease: easeOut }}
                className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur-sm"
              >
                <span className="mb-1 block text-3xl font-bold text-accent">{stat.value}</span>
                <span className="text-sm text-primary-foreground/75">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: easeOut }}
          className="absolute bottom-0 left-0 right-0 h-1 origin-left bg-accent"
        />
      </section>

      {/* ============ Platform marquee ============ */}
      <section className="overflow-hidden border-b border-border bg-background py-7" aria-label="Platform expertise">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...platforms, ...platforms].map((platform, index) => (
              <span key={`${platform}-${index}`} className="flex items-center gap-14 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {platform}
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Services ============ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_390px] md:items-end">
            <Reveal><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">What we do</p><h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">A connected team for every stage of online growth.</h2></Reveal>
            <Reveal delay={0.1}><p className="text-muted-foreground">Creative, technical, and commercial expertise working together to build, improve, and market your online business.</p></Reveal>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={(index % 2) * 0.08}>
                <Link to={service.href} className="group grid grid-cols-[44px_1fr_24px] gap-4 border-t border-border py-6 transition-colors hover:border-accent">
                  <span className="pt-1 text-xs font-semibold text-accent">{service.number}</span>
                  <span><span className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground"><service.icon className="h-5 w-5 text-accent" />{service.title}</span><span className="block text-sm leading-relaxed text-muted-foreground">{service.description}</span></span>
                  <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}><Button asChild variant="outline" className="mt-7"><Link to="/services">Explore all services <ArrowRight /></Link></Button></Reveal>
        </div>
      </section>

      {/* ============ Why QOA ============ */}
      <section className="overflow-hidden bg-secondary py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal from="left" className="relative">
            <div className="relative">
              <motion.img
                src={heroImage}
                alt="QOA Creative Tech collaborators working with an e-commerce business"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="aspect-[4/3] w-full object-cover shadow-[var(--shadow-large)]"
              />
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
                className="absolute bottom-0 left-0 max-w-[260px] bg-background p-5"
              >
                <p className="text-sm font-semibold text-foreground">Building better digital experiences.</p>
                <p className="mt-1 text-sm text-muted-foreground">Practical work, built around your business.</p>
              </motion.div>
              <div className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-full border-2 border-accent/40 md:block" aria-hidden="true" />
            </div>
          </Reveal>
          <div>
            <Reveal from="right"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Why QOA Creative Tech</p>
            <h2 className="mb-5 max-w-xl text-3xl font-bold leading-tight md:text-4xl">Strategy, creativity, and implementation—under one roof.</h2>
            <p className="mb-7 leading-relaxed text-muted-foreground">A strong online business depends on more than a good-looking store. We bring the technical, creative, and commercial pieces together, with clear communication at every stage.</p></Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Specialist e-commerce expertise", "Platform-flexible solutions", "Creative and technical capabilities", "Transparent project updates", "Practical, measurable improvements", "Long-term optimization support"].map((point, index) => (
                <Reveal key={point} delay={0.08 * index}>
                  <li className="flex list-none gap-3 border-t border-border pt-3 text-sm font-medium"><Check className="h-4 w-4 shrink-0 text-accent" />{point}</li>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}><Button asChild variant="link" className="mt-6 px-0"><Link to="/about">Learn about our approach <ArrowRight /></Link></Button></Reveal>
          </div>
        </div>
      </section>

      {/* ============ Selected work ============ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Selected work</p><h2 className="text-3xl font-bold md:text-4xl">Real projects. Practical progress.</h2></Reveal>
            <Reveal delay={0.1}><Button asChild variant="outline"><Link to="/portfolio">See all case studies <ArrowRight /></Link></Button></Reveal>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.client} delay={index * 0.1}>
                <Link to="/portfolio" className="group block">
                  <div className="relative overflow-hidden bg-muted">
                    <img src={project.image} alt={project.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="border-b border-border py-5"><p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent">{project.focus}</p><h3 className="mb-2 text-xl font-semibold">{project.client}</h3><p className="text-sm text-muted-foreground">{project.result}</p></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Process ============ */}
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto px-4">
          <Reveal><div className="mb-12 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">How we work</p><h2 className="text-3xl font-bold md:text-4xl">A clear path from opportunity to progress.</h2></div></Reveal>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((phase, index) => (
              <Reveal key={phase.step} delay={index * 0.09}>
                <div className="border-l border-primary-foreground/25 py-4 pl-5 pr-4 lg:min-h-[150px]">
                  <span className="mb-5 block text-sm font-semibold text-accent">{phase.step}</span><h3 className="mb-2 text-lg font-semibold">{phase.title}</h3><p className="text-sm leading-relaxed text-primary-foreground/75">{phase.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="border-t border-border bg-secondary py-20 md:py-24">
        <div className="container mx-auto grid gap-7 px-4 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal from="left">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent"><Sparkles className="h-4 w-4" /> A better digital experience starts here</p>
            <h2 className="mb-4 max-w-2xl text-3xl font-bold md:text-4xl">Let’s Build What’s Next for Your Business.</h2>
            <p className="max-w-2xl text-muted-foreground">Whether you’re launching, improving, or scaling your online store, our team can help identify the right opportunities and turn them into practical action.</p>
          </Reveal>
          <Reveal from="right"><div className="flex flex-wrap gap-3"><Button asChild size="lg" variant="hero"><Link to="/contact">Start a Project <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/contact">Contact Our Team</Link></Button></div></Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
