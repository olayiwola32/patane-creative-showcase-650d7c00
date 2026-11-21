import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const siteUrl = "https://qoacreative.sbs";
const organizationId = `${siteUrl}/#organization`;

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "QOA Creative Tech | E-commerce Growth & Digital Solutions",
    description: "QOA Creative Tech brings together e-commerce development, digital marketing, web design, and technology solutions to help businesses grow online.",
  },
  "/services": {
    title: "E-commerce Services | QOA Creative Tech",
    description: "Explore e-commerce website development, store optimization, SEO, email marketing, and digital growth services from QOA Creative Tech.",
  },
  "/about": {
    title: "Qudus Olayiwola | Lead E-commerce Specialist",
    description: "Qudus Olayiwola is Founder and Lead E-commerce Specialist at QOA Creative Tech, helping brands grow through store management, development, SEO, and optimization.",
  },
  "/portfolio": {
    title: "E-commerce Portfolio & Case Studies | QOA Creative Tech",
    description: "Explore e-commerce store redesigns, optimization projects, marketing work, and product videos from QOA Creative Tech.",
  },
  "/pricing": {
    title: "Service Pricing | QOA Creative Tech",
    description: "Review fixed-price e-commerce services and choose the support that fits your store and technical needs.",
  },
  "/testimonials": {
    title: "Client Testimonials | QOA Creative Tech",
    description: "Read client feedback about e-commerce development, digital marketing, and store growth projects with QOA Creative Tech.",
  },
  "/contact": {
    title: "Contact QOA Creative Tech | Start an E-commerce Project",
    description: "Contact QOA Creative Tech to discuss e-commerce store management, development, SEO, optimization, or digital marketing.",
  },
  "/checkout": {
    title: "Secure Checkout | QOA Creative Tech",
    description: "Complete your QOA Creative Tech service checkout.",
  },
};

const aboutPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/about#person`,
  name: "Qudus Olayiwola",
  jobTitle: "Founder and Lead E-commerce Specialist",
  description: "Founder and Lead E-commerce Specialist at QOA Creative Tech with over three years of experience in e-commerce store management, development, optimization, SEO, and growth.",
  url: `${siteUrl}/about`,
  sameAs: ["https://ng.linkedin.com/in/qudus-odunewu"],
  worksFor: { "@id": organizationId },
  knowsAbout: [
    "E-commerce Store Management",
    "Shopify Store Optimization",
    "E-commerce Website Development",
    "Shopify SEO",
    "E-commerce SEO",
    "WooCommerce Website Development",
    "Wix E-commerce",
    "Conversion Rate Optimization",
  ],
};

const RouteMetadata = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = pageMetadata[path];
  const canonicalUrl = page ? `${siteUrl}${path === "/" ? "/" : path}` : undefined;

  return (
    <Helmet>
      <title>{page?.title ?? "Page Not Found | QOA Creative Tech"}</title>
      <meta name="description" content={page?.description ?? "The page you requested could not be found."} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={page?.title ?? "Page Not Found | QOA Creative Tech"} />
      <meta property="og:description" content={page?.description ?? "The page you requested could not be found."} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={page?.title ?? "Page Not Found | QOA Creative Tech"} />
      <meta name="twitter:description" content={page?.description ?? "The page you requested could not be found."} />
      {!page && <meta name="robots" content="noindex, follow" />}
      {path === "/about" && <script type="application/ld+json">{JSON.stringify(aboutPersonSchema)}</script>}
    </Helmet>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteMetadata />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
