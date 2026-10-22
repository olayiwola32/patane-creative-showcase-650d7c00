import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Shield, Store, Target, TrendingUp, Mail } from "lucide-react";
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

const caseStudies = [
  {
    id: 1,
    title: "Cross Toss Trading — Complete Store Management",
    category: "Store Management & Growth",
    platform: "Shopify",
    client: "Cross Toss Trading",
    duration: "Ongoing",
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
    icon: Target,
    images: [{ src: seoOptimizationDashboard, alt: "Urban Pet Club SEO optimization dashboard" }],
    challenge: "The pet supply store wanted to improve its organic search visibility and on-page SEO to bring in more qualified traffic.",
    solution: "Conducted a comprehensive SEO audit and implemented on-page improvements to metadata, page structure, server configuration, and content.",
    results: [{ metric: "On-Page Score", value: "78%", description: "SEO health" }, { metric: "Meta Data", value: "85%", description: "Optimized" }, { metric: "Page Structure", value: "92%", description: "Well organized" }, { metric: "Server", value: "100%", description: "Fully optimized" }],
    services: ["SEO Audit", "On-Page Optimization", "Meta Data", "Content Strategy"],
    testimonial: "Our organic traffic has steadily increased since implementing the SEO recommendations.",
    testimonialAuthor: "Urban Pet Club Owner",
  },
];

const Portfolio = () => (
  <div>
    <section className="bg-primary py-16 text-primary-foreground md:py-20"><div className="container mx-auto px-4"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Portfolio & case studies</p><h1 className="mb-5 max-w-3xl text-4xl font-bold md:text-5xl">Real work, with the details behind it.</h1><p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">Explore e-commerce projects across store development, marketing, visibility, and technical support.</p></div></section>
    <section className="border-b border-border bg-secondary py-8"><div className="container mx-auto grid grid-cols-2 gap-5 px-4 text-center sm:grid-cols-4">{[{ value: "7", label: "Featured case studies" }, { value: "4", label: "Growth areas" }, { value: "50+", label: "Projects completed" }, { value: "3+", label: "Years of experience" }].map((stat) => <div key={stat.label}><span className="block text-2xl font-bold text-accent">{stat.value}</span><span className="mt-1 block text-xs text-muted-foreground sm:text-sm">{stat.label}</span></div>)}</div></section>
    <section className="py-14 md:py-20"><div className="container mx-auto space-y-20 px-4 md:space-y-24">
      {caseStudies.map((study) => <article key={study.id} className="border-t border-border pt-7">
        <div className="mb-7 grid gap-5 md:grid-cols-[1fr_auto] md:items-end"><div><Badge variant="secondary" className="mb-3">{study.category}</Badge><h2 className="max-w-3xl text-2xl font-bold leading-tight md:text-3xl">{study.title}</h2><p className="mt-2 text-sm text-muted-foreground">{study.client} <span aria-hidden="true">·</span> {study.platform}</p></div><div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4 text-accent" />{study.duration}</div></div>
        <div className="mb-8 grid gap-3 md:grid-cols-2">{study.images.map((image, index) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" className={`w-full border border-border object-contain ${study.images.length > 2 ? "aspect-[16/9] bg-muted" : "aspect-[16/8] bg-muted"} ${study.images.length === 1 ? "md:col-span-2" : ""}`} />)}</div>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1.2fr]"><div><h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">The challenge</h3><p className="leading-relaxed">{study.challenge}</p></div><div><h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Our solution</h3><p className="leading-relaxed">{study.solution}</p></div><div><h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Measurable results</h3><div className="grid grid-cols-2 gap-x-4">{study.results.map((result) => <div key={result.metric} className="border-t border-border py-3"><span className="block text-2xl font-bold text-accent">{result.value}</span><span className="mt-1 block text-sm font-semibold">{result.metric}</span><span className="block text-xs text-muted-foreground">{result.description}</span></div>)}</div></div></div>
        <div className="mt-6 flex flex-wrap gap-2">{study.services.map((service) => <Badge key={service} variant="outline" className="font-normal">{service}</Badge>)}</div>
        <blockquote className="mt-7 border-l-2 border-accent pl-5"><p className="text-base italic leading-relaxed">“{study.testimonial}”</p><footer className="mt-2 text-sm font-semibold text-muted-foreground">— {study.testimonialAuthor}</footer></blockquote>
      </article>)}
    </div></section>
    <section className="bg-secondary py-16 md:py-20"><div className="container mx-auto flex flex-col gap-5 px-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Your next project</p><h2 className="text-3xl font-bold">Ready to build what’s next?</h2><p className="mt-2 text-muted-foreground">Tell us what you’re working toward.</p></div><Button asChild size="lg" variant="hero"><Link to="/contact">Start a Conversation <ArrowRight /></Link></Button></div></section>
  </div>
);

export default Portfolio;