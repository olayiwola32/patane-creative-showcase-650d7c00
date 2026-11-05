import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clapperboard, Clock, Shield, Store, Target, TrendingUp, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

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
import autumnBliss3MonthDashboard from "@/assets/portfolio/autumn-bliss-3month-dashboard.png";
import storeAuditResults from "@/assets/portfolio/store-audit-results.png";
import googleTagManagerSetup from "@/assets/portfolio/google-tag-manager-setup.png";
import somaGoogleAds from "@/assets/portfolio/soma-google-ads.png";
import tropixMarketingDashboard from "@/assets/portfolio/tropix-marketing-dashboard.png";
import seoOptimizationDashboard from "@/assets/portfolio/seo-optimization-dashboard.png";

import oliveBeforeHero from "@/assets/portfolio/olive-b4-1.png.asset.json";
import oliveBeforeCollections from "@/assets/portfolio/olive-b4-2.png.asset.json";
import oliveBeforeDesign from "@/assets/portfolio/olive-b4-3.png.asset.json";
import oliveAfterHero from "@/assets/portfolio/olive-after-1.png.asset.json";
import oliveAfterCollections from "@/assets/portfolio/olive-after-2.png.asset.json";
import oliveAfterExperience from "@/assets/portfolio/olive-after-3.png.asset.json";
import olivePromoVideo from "@/assets/videos/olive-promo-video.mp4.asset.json";

type CaseStudy = {
  id: number;
  title: string;
  category: string;
  platform: string;
  client: string;
  duration: string;
  highlight: string;
  tags: string[];
  icon: typeof Store;
  images: { src: string; alt: string; label?: string }[];
  video?: { src: string; poster?: string; alt: string };
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  services: string[];
  testimonial: string;
  testimonialAuthor: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Cross Toss Trading — Complete Store Management",
    category: "Store Management & Growth",
    platform: "Shopify",
    client: "Cross Toss Trading",
    duration: "Ongoing",
    highlight: "$9,860 in sales",
    tags: ["stores", "growth"],
    icon: Store,
    images: [{ src: crossTossDashboard, alt: "Cross Toss Trading Shopify analytics dashboard" }, { src: crossTossTraffic, alt: "Cross Toss Trading traffic performance report" }],
    challenge: "The client needed comprehensive store management to scale e-commerce operations, increase traffic, and boost overall sales performance.",
    solution: "Implemented full store management including product optimization, traffic strategies, conversion optimization, and ongoing analytics monitoring.",
    results: [{ metric: "Sessions", value: "5,260", description: "+177% increase" }, { metric: "Total Sales", value: "$9,860", description: "+55% growth" }, { metric: "Orders", value: "100+", description: "+56% increase" }, { metric: "Conversion Rate", value: "1.81%", description: "+80% improvement" }],
    services: ["Store Management", "Traffic Optimization", "Sales Strategy", "Analytics"],
    testimonial: "QOA Creative Tech transformed our store performance. The results speak for themselves - our sales nearly doubled!",
    testimonialAuthor: "Cross Toss Trading Team",
  },
  {
    id: 2,
    title: "Autumn Bliss Market — Email Marketing & Sales Growth",
    category: "Email Marketing & Klaviyo",
    platform: "Shopify + Klaviyo",
    client: "Autumn Bliss Market",
    duration: "Ongoing",
    highlight: "+129% sales growth",
    tags: ["email", "growth"],
    icon: Mail,
    images: [
      { src: autumnBliss3MonthDashboard, alt: "Autumn Bliss Market three-month store analytics" }, { src: klaviyoRevenue, alt: "Autumn Bliss Market email revenue report" },
      { src: klaviyoFlows, alt: "Autumn Bliss Market automated Klaviyo email flows" }, { src: klaviyoCampaigns, alt: "Autumn Bliss Market Klaviyo campaign overview" },
      { src: autumnBlissSales, alt: "Autumn Bliss Market sales dashboard" }, { src: autumnBlissRedesign, alt: "Autumn Bliss Market health and beauty store redesign" },
      { src: storeAuditResults, alt: "Autumn Bliss Market store audit results" }, { src: googleTagManagerSetup, alt: "Autumn Bliss Market Google Tag Manager setup" },
    ],
    challenge: "The health and beauty store needed an email marketing strategy to support retention, recover abandoned carts, and drive consistent campaign revenue.",
    solution: "Implemented Klaviyo email flows, including abandoned cart recovery, browse abandonment, winback and welcome journeys, along with campaigns, Google Tag Manager setup, and a store audit.",
    results: [{ metric: "Sessions", value: "1,809", description: "+276% increase" }, { metric: "Total Sales", value: "$1,835", description: "+129% growth" }, { metric: "Orders", value: "34", description: "+55% increase" }, { metric: "Store Audit", value: "100/100", description: "SSL, Mobile, Content" }],
    services: ["Klaviyo Email Flows", "Email Campaigns", "Google Tag Manager", "Store Audit", "Store Redesign"],
    testimonial: "The email automation is incredible. We're recovering sales we would have lost and customers love the personalized experience.",
    testimonialAuthor: "Autumn Bliss Market Owner",
  },
  {
    id: 3,
    title: "Haustierbedarf4You — German Pet Store Rebrand",
    category: "Store Rebrand & Design",
    platform: "Shopify",
    client: "Haustierbedarf4You (Oliver Ormans)",
    duration: "4 weeks",
    highlight: "Complete rebrand",
    tags: ["stores"],
    icon: Store,
    images: [{ src: haustierbedarfRebrand, alt: "Haustierbedarf4You German-language pet store rebrand" }],
    challenge: "The German pet supply store needed a visual rebrand to connect with pet owners and create a premium, trustworthy shopping experience.",
    solution: "Redesigned the store with modern branding, an engaging hero section, German localization, and a more considered shopping experience.",
    results: [{ metric: "Brand Identity", value: "100%", description: "Complete rebrand" }, { metric: "User Experience", value: "Enhanced", description: "Modern design" }, { metric: "Mobile Ready", value: "Yes", description: "Fully responsive" }, { metric: "Localization", value: "German", description: "Native language support" }],
    services: ["Store Rebrand", "Visual Design", "UX Optimization", "Localization"],
    testimonial: "Die Besten Produkte für Pelzige Freunde - Our new store perfectly captures our brand mission!",
    testimonialAuthor: "Oliver Ormans, Owner",
  },
  {
    id: 4,
    title: "XIT Offroad — SSL Certificate Fix & Security",
    category: "Technical Fixes & Security",
    platform: "E-commerce",
    client: "XIT Offroad",
    duration: "1 week",
    highlight: "100% browser trust",
    tags: ["technical"],
    icon: Shield,
    images: [{ src: sslCertificateSetup, alt: "XIT Offroad SSL certificate configuration" }, { src: sslRedirectFix, alt: "XIT Offroad HTTPS redirect configuration" }],
    challenge: "The store was showing SSL certificate errors, causing browser warnings that could discourage customers and affect search visibility.",
    solution: "Configured the SSL certificate and verified certificate chain, domain validation, compatible ciphers, and secure redirects.",
    results: [{ metric: "SSL Status", value: "Verified", description: "Fully secured" }, { metric: "Certificate", value: "SHA-256", description: "Industry standard" }, { metric: "Browser Trust", value: "100%", description: "No warnings" }, { metric: "SEO Impact", value: "Restored", description: "HTTPS ranking boost" }],
    services: ["SSL Certificate Setup", "Security Configuration", "Domain Verification", "Technical Fixes"],
    testimonial: "Our customers can now shop with confidence. No more security warnings - just smooth, secure checkout.",
    testimonialAuthor: "XIT Offroad Team",
  },
  {
    id: 5,
    title: "Soma Dental — Google Ads Campaign Management",
    category: "Paid Advertising",
    platform: "Google Ads",
    client: "Soma Dental",
    duration: "Ongoing",
    highlight: "1,598 conversions",
    tags: ["ads", "social"],
    icon: TrendingUp,
    images: [{ src: somaGoogleAds, alt: "Soma Dental Google Ads campaign performance" }],
    challenge: "The dental practice wanted to increase patient bookings through targeted paid advertising while maintaining efficient acquisition costs.",
    solution: "Implemented targeted Google Ads campaigns with optimized audiences, ad copy, and conversion tracking.",
    results: [{ metric: "Conversions", value: "1,598", description: "New patient leads" }, { metric: "Conversion Rate", value: "21.68%", description: "Above industry average" }, { metric: "Clicks", value: "1,829", description: "Qualified traffic" }, { metric: "Cost/Conversion", value: "$204.94", description: "Efficient CPA" }],
    services: ["Google Ads Management", "Campaign Optimization", "Conversion Tracking", "Ad Copywriting"],
    testimonial: "Our patient bookings have skyrocketed since working with QOA Creative Tech on our Google Ads campaigns.",
    testimonialAuthor: "Soma Dental Team",
  },
  {
    id: 6,
    title: "Tropix Beverages — Social Media Advertising",
    category: "Social Media Marketing",
    platform: "Facebook & Instagram Ads",
    client: "Tropix Beverages",
    duration: "3 months",
    highlight: "175K people reached",
    tags: ["ads", "social"],
    icon: TrendingUp,
    images: [{ src: tropixMarketingDashboard, alt: "Tropix Beverages social media advertising dashboard" }],
    challenge: "The beverage brand wanted to expand social reach and drive awareness while maintaining cost efficiency.",
    solution: "Developed a Facebook and Instagram advertising strategy with audience targeting, creative optimization, and multi-platform distribution.",
    results: [{ metric: "Reach", value: "175K", description: "People reached" }, { metric: "Impressions", value: "144K", description: "Ad views" }, { metric: "Clicks", value: "1,027", description: "Engaged users" }, { metric: "Avg CPC", value: "$1.27", description: "Cost efficient" }],
    services: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Creative Strategy"],
    testimonial: "The reach we achieved with our advertising budget exceeded all expectations. Great ROI!",
    testimonialAuthor: "Tropix Beverages Marketing Team",
  },
  {
    id: 7,
    title: "Urban Pet Club — SEO Optimization",
    category: "SEO & Content",
    platform: "E-commerce",
    client: "Urban Pet Club",
    duration: "Ongoing",
    highlight: "92% page structure",
    tags: ["seo"],
    icon: Target,
    images: [{ src: seoOptimizationDashboard, alt: "Urban Pet Club SEO optimization dashboard" }],
    challenge: "The pet supply store wanted to improve its organic search visibility and on-page SEO to bring in more qualified traffic.",
    solution: "Conducted a comprehensive SEO audit and implemented on-page improvements to metadata, page structure, server configuration, and content.",
    results: [{ metric: "On-Page Score", value: "78%", description: "SEO health" }, { metric: "Meta Data", value: "85%", description: "Optimized" }, { metric: "Page Structure", value: "92%", description: "Well organized" }, { metric: "Server", value: "100%", description: "Fully optimized" }],
    services: ["SEO Audit", "On-Page Optimization", "Meta Data", "Content Strategy"],
    testimonial: "Our organic traffic has steadily increased since implementing the SEO recommendations.",
    testimonialAuthor: "Urban Pet Club Owner",
  },
  {
    id: 8,
    title: "Olive&Coop Boutique — Website Revamp & Promo Video",
    category: "Website Revamp & Video",
    platform: "Shopify",
    client: "Olive&Coop Boutique",
    duration: "3 weeks",
    highlight: "Complete revamp + promo video",
    tags: ["stores"],
    icon: Store,
    images: [
      { src: oliveBeforeHero.url, alt: "Olive&Coop Boutique children's clothing storefront before the revamp", label: "Before" },
      { src: oliveAfterHero.url, alt: "Olive&Coop Boutique refreshed branded hero section", label: "After" },
      { src: oliveBeforeCollections.url, alt: "Olive&Coop Boutique collection grid before the revamp", label: "Before" },
      { src: oliveAfterCollections.url, alt: "Olive&Coop Boutique reorganized shop-by-collection experience", label: "After" },
      { src: oliveBeforeDesign.url, alt: "Olive&Coop Boutique earlier store sections before the revamp", label: "Before" },
      { src: oliveAfterExperience.url, alt: "Olive&Coop Boutique testimonials, journal and refreshed footer", label: "After" },
    ],
    video: { src: olivePromoVideo.url, poster: oliveAfterHero.url, alt: "Product promotional video created for Olive&Coop Boutique" },
    challenge: "The children's clothing boutique's storefront looked dated and generic, and it needed a refreshed shopping experience plus engaging promotional content to show off its warm brand.",
    solution: "Revamped the storefront with a new branded hero, reorganized shop-by-collection navigation, and refreshed product, testimonial, journal, and footer sections — and created an AI-powered product promotional video to bring the brand to life for shoppers.",
    results: [{ metric: "Store Revamp", value: "100%", description: "Full redesign" }, { metric: "Hero & Branding", value: "New", description: "Branded storefront" }, { metric: "Promo Video", value: "1", description: "Product video created" }, { metric: "Collections", value: "10+", description: "Reorganized" }],
    services: ["Website Revamp", "UI/UX Redesign", "AI Promotional Video", "Merchandising"],
    testimonial: "The new store feels like our brand finally came to life — and the promo video brings it to even more shoppers.",
    testimonialAuthor: "Olive&Coop Boutique Team",
  },
];

const filters = [
  { id: "all", label: "All work" },
  { id: "stores", label: "Stores & Design" },
  { id: "growth", label: "Growth & Email" },
  { id: "ads", label: "Paid Ads & Social" },
  { id: "seo", label: "SEO" },
  { id: "technical", label: "Technical" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const visibleStudies = caseStudies.filter(
    (study) => activeFilter === "all" || study.tags.includes(activeFilter)
  );

  const stats = [
    { value: `${caseStudies.length}`, label: "Featured case studies" },
    { value: "5", label: "Growth areas" },
    { value: "30+", label: "Projects completed" },
    { value: "3+", label: "Years of experience" },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(36_72%_48%/0.2),transparent_55%)]" />
        <div className="container mx-auto px-4">
          <Reveal><p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Portfolio & case studies</p>
          <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">Real work, with the details behind it.</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">Explore e-commerce projects across store development, marketing, visibility, and technical support. Open any case study to see the full story.</p></Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-secondary py-8">
        <div className="container mx-auto grid grid-cols-2 gap-5 px-4 text-center sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.07}>
              <div><span className="block text-2xl font-bold text-accent">{stat.value}</span><span className="mt-1 block text-xs text-muted-foreground sm:text-sm">{stat.label}</span></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-9 flex flex-wrap gap-2" role="tablist" aria-label="Filter case studies">
            {filters.map((filter) => (
              <button
                key={filter.id}
                role="tab"
                aria-selected={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "border-accent bg-accent text-accent-foreground shadow-md"
                    : "border-border bg-background text-muted-foreground hover:border-accent hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Case study cards */}
          <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleStudies.map((study) => (
                <motion.article
                  layout
                  key={study.id}
                  initial={{ opacity: 0, scale: 0.94, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 24 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => setActiveStudy(study)}
                    className="group block w-full overflow-hidden rounded-lg border border-border bg-card text-left shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-large)]"
                  >
                    <div className="relative overflow-hidden bg-muted">
                      <img src={study.images[0].src} alt={study.images[0].alt} loading="lazy" className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur-sm"><study.icon className="h-3.5 w-3.5 text-accent" />{study.category}</span>
                      {study.video && (
                        <span className="absolute right-4 top-16 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-md">
                          <Clapperboard className="h-3.5 w-3.5" />Promo video
                        </span>
                      )}
                      <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-accent">{study.highlight}</p>
                        <h2 className="text-lg font-bold leading-snug">{study.client}</h2>
                      </div>
                      <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 p-5">
                      <div>
                        <h3 className="text-sm font-semibold leading-snug">{study.title.split("—")[0].trim()}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{study.platform}</p>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-accent"><Clock className="h-3.5 w-3.5" />{study.duration}</span>
                    </div>
                  </button>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto flex flex-col gap-5 px-4 sm:flex-row sm:items-center sm:justify-between">
          <Reveal from="left"><p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Your next project</p><h2 className="text-3xl font-bold">Ready to build what’s next?</h2><p className="mt-2 text-muted-foreground">Tell us what you’re working toward.</p></Reveal>
          <Reveal from="right"><Button asChild size="lg" variant="hero"><Link to="/contact">Start a Conversation <ArrowRight /></Link></Button></Reveal>
        </div>
      </section>

      {/* Case study detail dialog */}
      <Dialog open={activeStudy !== null} onOpenChange={(open) => !open && setActiveStudy(null)}>
        <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto rounded-lg">
          <DialogHeader className="text-left">
            <Badge variant="secondary" className="mb-1 w-fit">{activeStudy?.category}</Badge>
            <DialogTitle className="text-2xl leading-snug">{activeStudy?.title}</DialogTitle>
            <DialogDescription>{activeStudy?.client} · {activeStudy?.platform} · {activeStudy?.duration}</DialogDescription>
          </DialogHeader>

          {activeStudy && (
            <div className="space-y-7">
              <div className={`grid gap-3 ${activeStudy.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {activeStudy.images.map((image) => (
                  <div key={image.src} className="relative overflow-hidden rounded-md border border-border bg-muted">
                    <img src={image.src} alt={image.alt} loading="lazy" className="w-full object-contain" />
                    {image.label && (
                      <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">{image.label}</span>
                    )}
                  </div>
                ))}
              </div>

              {activeStudy.video && (
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Product promotional video</h3>
                  <video
                    controls
                    preload="metadata"
                    poster={activeStudy.video.poster}
                    className="w-full rounded-md border border-border bg-muted shadow-[var(--shadow-soft)]"
                  >
                    <source src={activeStudy.video.src} type="video/mp4" />
                    {activeStudy.video.alt}
                  </video>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <div><h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">The challenge</h3><p className="leading-relaxed">{activeStudy.challenge}</p></div>
                <div><h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Our solution</h3><p className="leading-relaxed">{activeStudy.solution}</p></div>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Measurable results</h3>
                <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-4">
                  {activeStudy.results.map((result) => (
                    <div key={result.metric} className="border-t border-border py-3">
                      <span className="block text-xl font-bold text-accent">{result.value}</span>
                      <span className="mt-1 block text-sm font-semibold">{result.metric}</span>
                      <span className="block text-xs text-muted-foreground">{result.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">{activeStudy.services.map((service) => <Badge key={service} variant="outline" className="font-normal">{service}</Badge>)}</div>

              <blockquote className="border-l-2 border-accent pl-5">
                <p className="italic leading-relaxed">“{activeStudy.testimonial}”</p>
                <footer className="mt-2 text-sm font-semibold text-muted-foreground">— {activeStudy.testimonialAuthor}</footer>
              </blockquote>

              <Button asChild variant="hero" className="w-full sm:w-auto"><Link to="/contact">Start a similar project <ArrowRight /></Link></Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
