import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartBar as BarChart3, Check, Code as Code2, Mail, Search, ShoppingBag, Sparkles, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";
import crossTossDashboard from "@/assets/portfolio/cross-toss-dashboard.png";
import autumnBlissSales from "@/assets/portfolio/autumn-bliss-sales.png";
import petStoreRebrand from "@/assets/portfolio/haustierbedarf-rebrand.png";
import seanPhoto from "@/assets/team-sean.jpg";
import rossPhoto from "@/assets/team-ross.jpg";

const platforms = [
  "Shopify",
  "WooCommerce",
  "Wix",
  "BigCommerce",
  "Squarespace Commerce",
  "Adobe Commerce",
];

const services = [
  {
    number: "01",
    icon: <ShoppingBag className="h-5 w-5" />,
    title: "E-commerce Development",
    description:
      "Thoughtful storefronts, migrations, redesigns, and technical improvements across leading commerce platforms.",
    href: "/services",
    span: "md:col-span-2",
  },
  {
    number: "02",
    icon: <Search className="h-5 w-5" />,
    title: "Search & Visibility",
    description:
      "Technical and on-page SEO that makes your products easier to discover and your site easier to use.",
    href: "/services",
    span: "",
  },
  {
    number: "03",
    icon: <Mail className="h-5 w-5" />,
    title: "Email & Retention",
    description:
      "Klaviyo campaigns and automated customer journeys designed to encourage meaningful repeat visits.",
    href: "/services",
    span: "",
  },
  {
    number: "04",
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Paid Growth",
    description:
      "Focused Google and social advertising, supported by clear tracking and practical optimization.",
    href: "/services",
    span: "",
  },
  {
    number: "05",
    icon: <Code2 className="h-5 w-5" />,
    title: "Technology & Support",
    description:
      "Hands-on troubleshooting, integrations, security fixes, and continuing technical care.",
    href: "/services",
    span: "md:col-span-2",
  },
];

const projects = [
  {
    client: "Cross Toss Trading",
    focus: "Store Management · Shopify",
    result: "5,260 sessions · $9,860 in sales",
    image: crossTossDashboard,
    alt: "Cross Toss Trading Shopify performance dashboard",
  },
  {
    client: "Autumn Bliss Market",
    focus: "Email Marketing · Health & Beauty",
    result: "+129% sales growth · 100/100 store audit",
    image: autumnBlissSales,
    alt: "Autumn Bliss Market Shopify sales dashboard",
  },
  {
    client: "Haustierbedarf4You",
    focus: "Store Rebrand · E-commerce",
    result: "A refreshed, localized shopping experience",
    image: petStoreRebrand,
    alt: "Haustierbedarf4You redesigned online store",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand your business, customers, and current opportunity.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "Agree on practical priorities, scope, and success measures.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "Build, improve, and launch together with clear project updates.",
  },
  {
    step: "04",
    title: "Optimize",
    description: "Review real performance and refine what matters most.",
  },
  {
    step: "05",
    title: "Grow",
    description: "Keep momentum through continued, focused support.",
  },
];

const differentiators = [
  "Specialist e-commerce expertise",
  "Platform-flexible solutions",
  "Creative and technical capabilities",
  "Transparent project updates",
  "Practical, measurable improvements",
  "Long-term optimization support",
];

const people = [
  { name: "Sean Q.", role: "Founder & E-commerce Strategist", image: seanPhoto },
  { name: "Ross Brown", role: "Marketing Specialist", image: rossPhoto },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-primary text-primary-foreground md:min-h-[720px]">
        <img
          src={heroImage}
          alt="A digital commerce team discussing an online store project"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="container mx-auto grid items-center gap-12 px-4 py-24 md:grid-cols-[minmax(0,1fr)_320px] md:py-28">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up mb-7 flex items-center gap-3 text-sm font-semibold text-primary-foreground/80">
              <span className="h-px w-10 bg-accent" />
              Building Better Digital Experiences. Driving Smarter E-commerce Growth.
            </div>
            <h1 className="animate-fade-in-up animation-delay-100 mb-7 max-w-3xl text-4xl font-bold leading-[1.08] md:text-6xl">
              Your Growth. Our Expertise.{" "}
              <span className="text-gradient-accent">One Powerful Digital Partnership.</span>
            </h1>
            <p className="animate-fade-in-up animation-delay-200 mb-9 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              From e-commerce development and search visibility to paid advertising, brand experiences, and customer retention, QOA Creative Tech brings together the expertise your business needs to grow online.
            </p>
            <div className="animate-fade-in-up animation-delay-300 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/services">
                  Explore Our Services <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-primary-foreground/5 text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-400 hidden border-l border-primary-foreground/20 pl-8 md:block">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground/60">
              A connected growth partner
            </p>
            <div className="space-y-7">
              <div>
                <span className="mb-1 block text-4xl font-bold text-accent">3+</span>
                <span className="text-sm text-primary-foreground/75">Years of experience</span>
              </div>
              <div>
                <span className="mb-1 block text-4xl font-bold text-accent">50+</span>
                <span className="text-sm text-primary-foreground/75">Projects completed</span>
              </div>
              <div>
                <span className="mb-1 block text-4xl font-bold text-accent">100%</span>
                <span className="text-sm text-primary-foreground/75">Client satisfaction</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent" />
      </section>

      {/* Platform Marquee */}
      <section
        className="border-b border-border bg-background py-10"
        aria-labelledby="platform-heading"
      >
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-[260px_1fr] md:items-center">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Platform expertise
            </p>
            <h2 id="platform-heading" className="text-xl font-bold">
              Different platforms. One team.
            </h2>
          </div>
          <div className="overflow-hidden">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground md:justify-end">
              {platforms.map((platform) => (
                <span key={platform} className="transition-colors hover:text-foreground">
                  {platform}
                </span>
              ))}
              <span>And other suitable platforms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-14 grid gap-5 md:grid-cols-[1fr_400px] md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                What we do
              </p>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                A connected team for every stage of online growth.
              </h2>
            </div>
            <p className="text-muted-foreground">
              Creative, technical, and commercial expertise working together to build, improve, and market your online business.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-0 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.number}
                to={service.href}
                className={`group ${service.span} grid grid-cols-[44px_1fr_24px] gap-4 border-t border-border py-7 transition-all duration-300 hover:border-accent hover:pt-8`}
              >
                <span className="pt-1 text-xs font-semibold text-accent">{service.number}</span>
                <span>
                  <span className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground">
                    {service.icon}
                    {service.title}
                  </span>
                  <span className="block text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </span>
                </span>
                <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/services">
              Explore all services <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why QOA */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="group relative">
            <div className="overflow-hidden">
              <img
                src={heroImage}
                alt="QOA Creative Tech collaborators working with an e-commerce business"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 max-w-[280px] bg-background p-5 shadow-[var(--shadow-large)]">
              <p className="text-sm font-semibold text-foreground">
                Building better digital experiences.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Practical work, built around your business.
              </p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Why QOA Creative Tech
            </p>
            <h2 className="mb-5 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
              Strategy, creativity, and implementation — under one roof.
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              A strong online business depends on more than a good-looking store. We bring the technical, creative, and commercial pieces together, with clear communication at every stage.
            </p>
            <ul className="grid gap-0 sm:grid-cols-2">
              {differentiators.map((point, i) => (
                <li
                  key={point}
                  className="flex gap-3 border-t border-border py-3.5 text-sm font-medium"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="mt-6 px-0">
              <Link to="/about">
                Learn about our approach <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Selected work
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">Real projects. Practical progress.</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/portfolio">
                See all case studies <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <Link to="/portfolio" key={project.client} className="group">
                <div className="overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="border-b border-border py-5 transition-colors group-hover:border-accent">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                    {project.focus}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold">{project.client}</h3>
                  <p className="text-sm text-muted-foreground">{project.result}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              How we work
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              A clear path from opportunity to progress.
            </h2>
          </div>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((phase, i) => (
              <div
                key={phase.step}
                className={`border-l border-primary-foreground/20 py-5 pl-6 pr-4 lg:min-h-[160px] transition-colors hover:border-accent ${
                  i === process.length - 1 ? "lg:border-r lg:border-primary-foreground/20" : ""
                }`}
              >
                <span className="mb-5 block text-sm font-semibold text-accent">{phase.step}</span>
                <h3 className="mb-2 text-lg font-semibold">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Meet the specialists
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">The people behind the work.</h2>
            </div>
            <Button asChild variant="link" className="justify-start px-0 sm:justify-end">
              <Link to="/about">
                About QOA Creative Tech <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {people.map((person) => (
              <div
                key={person.name}
                className="group grid grid-cols-[120px_1fr] items-center gap-6 border-t border-border py-6 transition-colors hover:border-accent"
              >
                <div className="overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="aspect-square w-32 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-border bg-secondary py-20 md:py-24">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              <Sparkles className="h-4 w-4" /> A better digital experience starts here
            </p>
            <h2 className="mb-4 max-w-2xl text-3xl font-bold md:text-5xl">
              Let's Build What's Next for Your Business.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Whether you're launching, improving, or scaling your online store, our team can help identify the right opportunities and turn them into practical action.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">
                Start a Project <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
