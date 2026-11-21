import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Linkedin, Target, Users } from "lucide-react";
import portrait from "@/assets/qudus-olayiwola-profile.png.asset.json";
import Reveal from "@/components/Reveal";

const values = [
  { icon: Target, title: "Results-Focused", description: "Every strategy and decision is guided by measurable outcomes and your business growth." },
  { icon: Heart, title: "Client-Centered", description: "We prioritize your goals and work alongside you as an extension of your team." },
  { icon: Award, title: "Quality Excellence", description: "Every project receives careful attention and the right expertise for the work." },
  { icon: Users, title: "Collaborative", description: "Transparent communication and partnership keep the work aligned at every step." },
];

const capabilities = [
  {
    title: "E-commerce store management",
    description: "Strategic store operations and ongoing improvements across Shopify, Wix, WooCommerce, and other commerce platforms.",
  },
  {
    title: "Shopify store optimization & SEO",
    description: "For businesses seeking a Shopify store expert or Shopify SEO specialist, I strengthen technical foundations, search visibility, and the path to purchase.",
  },
  {
    title: "E-commerce website development",
    description: "Store builds and redesigns, including WooCommerce website development and support from a Wix e-commerce specialist.",
  },
  {
    title: "Conversion rate optimization",
    description: "Research-led improvements to customer journeys, marketing, and retention that support sustainable e-commerce growth.",
  },
];

const About = () => (
  <div>
    <section className="bg-primary py-14 text-primary-foreground md:py-20">
      <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-[0.82fr_1.18fr] md:gap-14">
        <Reveal from="left" className="relative mx-auto w-full max-w-xl md:max-w-none">
          <div className="overflow-hidden rounded-sm border border-primary-foreground/15 bg-secondary shadow-[var(--shadow-large)]">
            <img
              src={portrait.url}
              alt="Qudus Olayiwola, Founder and Lead E-commerce Specialist at QOA Creative Tech."
              className="aspect-[4/5] max-h-[680px] w-full object-cover object-[center_36%]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 border-l-2 border-accent bg-background/95 px-4 py-3 text-foreground sm:bottom-6 sm:left-6 sm:right-6">
            <p className="text-sm font-semibold">Founder &amp; Lead E-commerce Specialist</p>
            <p className="mt-1 text-xs text-muted-foreground">QOA Creative Tech</p>
          </div>
        </Reveal>

        <Reveal from="right" className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">About the founder</p>
          <h1 className="mb-3 text-4xl font-bold leading-tight md:text-5xl">Qudus Olayiwola</h1>
          <p className="mb-6 text-lg font-semibold text-primary-foreground/90">Founder and Lead E-commerce Specialist, QOA Creative Tech</p>
          <div className="space-y-4 text-sm leading-relaxed text-primary-foreground/80 md:text-base">
            <p>My name is Qudus Olayiwola, Founder and Lead E-commerce Specialist at QOA Creative Tech. I am an e-commerce specialist with over three years of experience helping businesses build, manage, optimize, and grow their online stores.</p>
            <p>My work focuses on improving e-commerce experiences through strategic store development, website redesign, search engine optimization, conversion rate optimization, digital marketing, and customer retention.</p>
            <p>I work across multiple e-commerce platforms, including Shopify, Wix, WooCommerce, and other leading commerce solutions, helping businesses improve their online visibility, customer experience, and overall store performance.</p>
            <p>At QOA Creative Tech, I lead a team of four additional specialists with expertise in brand strategy, website development, technical optimization, email marketing, and digital content.</p>
            <p>Together, we combine technical expertise, creativity, and practical growth strategies to help businesses build stronger online experiences and achieve sustainable growth.</p>
            <p>My goal is simple: to help businesses get more from their e-commerce platforms through better technology, visibility, strategy, and execution.</p>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-primary-foreground/15 pt-5">
            <Button asChild variant="secondary">
              <a href="https://ng.linkedin.com/in/qudus-odunewu" target="_blank" rel="noopener noreferrer" aria-label="View Qudus Olayiwola's LinkedIn profile">
                <Linkedin aria-hidden="true" /> Connect on LinkedIn
              </a>
            </Button>
            <span className="text-sm text-primary-foreground/75">3+ years of e-commerce experience</span>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">What guides us</p>
            <h2 className="text-3xl font-bold md:text-4xl">A thoughtful way to work.</h2>
            <p className="mt-3 text-muted-foreground">The principles behind our client relationships and day-to-day work.</p>
          </Reveal>
        </div>
        <div className="grid gap-x-9 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <article className="border-t border-border py-6">
                <span className="mb-5 inline-flex text-accent"><value.icon className="h-6 w-6" /></span>
                <span className="mb-3 block text-xs font-semibold text-accent">0{index + 1}</span>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Our expertise</p>
            <h2 className="text-3xl font-bold md:text-4xl">E-commerce growth, beyond store builds.</h2>
            <p className="mt-3 text-muted-foreground">As an e-commerce growth specialist, I connect store management, development, optimization, and marketing around each business’s goals.</p>
          </Reveal>
        </div>
        <div className="grid gap-x-10 sm:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 0.08}>
              <article className="border-t border-border py-6">
                <h3 className="mb-2 text-lg font-semibold">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{capability.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="border-y border-border bg-secondary py-10">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 text-center sm:grid-cols-3">
        {[{ number: "3+", label: "Years of experience" }, { number: "30+", label: "Projects completed" }, { number: "100%", label: "Client satisfaction" }].map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.07}>
            <div><span className="block text-3xl font-bold text-accent">{stat.number}</span><span className="mt-2 block text-sm text-muted-foreground">{stat.label}</span></div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto flex flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
        <Reveal from="left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Explore QOA Creative Tech</p>
          <h2 className="mb-2 text-3xl font-bold">Let’s work together.</h2>
          <p className="text-muted-foreground">See how our services and experience can support your next stage of growth.</p>
        </Reveal>
        <Reveal from="right" className="flex flex-wrap gap-3">
          <Button asChild variant="outline"><Link to="/services">Services</Link></Button>
          <Button asChild variant="outline"><Link to="/portfolio">Portfolio</Link></Button>
          <Button asChild variant="hero"><Link to="/contact">Get in Touch <ArrowRight /></Link></Button>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;