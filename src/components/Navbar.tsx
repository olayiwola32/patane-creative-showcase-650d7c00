import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/pricing" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center" aria-label="QOA Creative Tech home" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="QOA Creative Tech" className="h-[72px] w-[72px] object-contain" />
          </Link>
          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            {links.map((link) => <Link key={link.path} to={link.path} aria-current={isActive(link.path) ? "page" : undefined} className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-accent ${isActive(link.path) ? "text-accent" : "text-foreground"}`}>{link.name}</Link>)}
            <Button asChild variant="hero" size="sm"><Link to="/contact">Start a Project</Link></Button>
          </div>
          <Button type="button" variant="ghost" size="icon" className="shrink-0 lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {isOpen && <div className="border-t border-border pb-5 pt-3 lg:hidden"><div className="flex flex-col gap-1">{links.map((link) => <Link key={link.path} to={link.path} aria-current={isActive(link.path) ? "page" : undefined} onClick={() => setIsOpen(false)} className={`border-l-2 py-2 pl-3 text-sm font-medium transition-colors hover:text-accent ${isActive(link.path) ? "border-accent text-accent" : "border-transparent text-foreground"}`}>{link.name}</Link>)}<Button asChild variant="hero" className="mt-2 w-full"><Link to="/contact" onClick={() => setIsOpen(false)}>Start a Project</Link></Button></div></div>}
      </div>
    </nav>
  );
};

export default Navbar;