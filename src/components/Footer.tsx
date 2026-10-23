import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" }, { name: "Pricing", path: "/pricing" }, { name: "Testimonials", path: "/testimonials" }, { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">
          <div>
            <Link to="/" aria-label="QOA Creative Tech home" className="mb-4 inline-flex"><img src={logo} alt="QOA Creative Tech" className="h-24 w-24 object-contain" /></Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">E-commerce growth, digital marketing, web development, and technology solutions—connected around your business.</p>
          </div>
          <div><h2 className="mb-4 text-sm font-semibold">Explore</h2><ul className="grid grid-cols-2 gap-x-4 gap-y-2">{quickLinks.map((link) => <li key={link.path}><Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-accent">{link.name}</Link></li>)}</ul></div>
          <div><h2 className="mb-4 text-sm font-semibold">Our services</h2><ul className="space-y-2 text-sm text-muted-foreground"><li>E-commerce development</li><li>SEO & search visibility</li><li>Email marketing</li><li>Paid advertising</li><li>Technical support</li></ul></div>
          <div><h2 className="mb-4 text-sm font-semibold">Get in touch</h2><ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-accent" /><a href="mailto:hello@qoacreative.sbs" className="break-all transition-colors hover:text-accent">hello@qoacreative.sbs</a></li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-accent" /><a href="mailto:qoatechcreative@gmail.com" className="break-all transition-colors hover:text-accent">qoatechcreative@gmail.com</a></li>
            <li className="flex items-start gap-2"><MessageCircle size={16} className="mt-0.5 shrink-0 text-accent" /><a href="https://wa.me/14173826911" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">WhatsApp: +1 (417) 382-6911</a></li>
            <li><a href="https://www.instagram.com/qoacreative_tech?igsh=NWRzOWNwemR2MnMz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-accent"><Instagram size={16} className="text-accent" />@qoacreative_tech</a></li>
          </ul></div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} QOA Creative Tech. All rights reserved.</span><span>Building Better Digital Experiences. Driving Smarter E-commerce Growth.</span></div>
      </div>
    </footer>
  );
};

export default Footer;