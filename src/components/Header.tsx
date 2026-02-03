import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Commercial Painting", href: "/commercial" },
  { name: "Residential Painting", href: "/residential" },
  { name: "Epoxy Flooring", href: "/epoxy" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ backgroundColor: "transparent" }}
      animate={{ 
        backgroundColor: scrolled ? "rgba(255, 255, 255, 1)" : "transparent",
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img 
            src={logoWhite} 
            alt="Color Masters Painting Inc" 
            className={`h-8 md:h-10 w-auto transition-all duration-300 ${
              scrolled ? "brightness-0" : ""
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`font-body font-bold text-[13px] transition-all duration-300 ${
                scrolled 
                  ? "text-foreground/80 hover:text-foreground" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:208-447-7085"
            className={`flex items-center gap-2 font-body font-bold text-[13px] transition-all duration-300 ${
              scrolled 
                ? "text-foreground/80 hover:text-foreground" 
                : "text-white/90 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            (208) 447-7085
          </a>
          <a
            href="tel:509-554-1969"
            className={`flex items-center gap-2 font-body font-bold text-[13px] transition-all duration-300 ${
              scrolled 
                ? "text-foreground/80 hover:text-foreground" 
                : "text-white/90 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            (509) 554-1969
          </a>
          <Button asChild className="rounded-md px-5">
            <Link to="/contact">Book now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`lg:hidden ${scrolled ? "bg-white" : "bg-black/90 backdrop-blur-sm"}`}>
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block font-body font-bold text-[13px] transition-colors ${
                  scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className={`pt-4 border-t ${scrolled ? "border-foreground/20" : "border-white/20"} space-y-4`}>
              <a
                href="tel:208-447-7085"
                className={`flex items-center gap-2 font-body font-bold text-[13px] ${
                  scrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                <Phone className="h-5 w-5" />
                (208) 447-7085
              </a>
              <a
                href="tel:509-554-1969"
                className={`flex items-center gap-2 font-body font-bold text-[13px] ${
                  scrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                <Phone className="h-5 w-5" />
                (509) 554-1969
              </a>
              <Button asChild className="w-full">
                <Link to="/contact">Book now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
