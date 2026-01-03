import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Commercial Painting", href: "/commercial" },
  { name: "Residential Painting", href: "/residential" },
  { name: "Epoxy Flooring", href: "/epoxy" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-1 left-0 right-0 z-50 bg-transparent">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <span className="font-display text-xl md:text-2xl font-bold text-white">
            Color Masters
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="font-body font-bold text-[13px] text-white/90 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:509-554-1969"
            className="flex items-center gap-2 font-body font-bold text-[13px] text-white/90 hover:text-white transition-colors"
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
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block font-body font-bold text-[13px] text-white/90 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/20 space-y-4">
              <a
                href="tel:509-554-1969"
                className="flex items-center gap-2 font-body font-bold text-[13px] text-white/90"
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
    </header>
  );
}
