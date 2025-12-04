import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Residential Painting", href: "/residential" },
    { name: "Commercial Painting", href: "/commercial" },
    { name: "Epoxy Flooring", href: "/epoxy" },
    { name: "Cabinet Refinishing", href: "/cabinets" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">Color Masters</h3>
            <p className="text-secondary-foreground/80 text-sm">
              Licensed Painting Contractors
              <br />
              Serving Oregon, Washington & Idaho
            </p>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  PO Box 334
                  <br />
                  Hermiston, OR 97838
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:509-554-1969"
                className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                509-554-1969
              </a>
              <a
                href="tel:208-447-7085"
                className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                208-447-7085
              </a>
              <a
                href="mailto:contact@colormasterspaintinginc.com"
                className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@colormasterspaintinginc.com
              </a>
            </div>
          </div>
        </div>

        {/* License Badges */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-foreground/80">
            <span className="px-3 py-1 bg-secondary-foreground/10 rounded">
              BBB A+ Rated
            </span>
            <span className="px-3 py-1 bg-secondary-foreground/10 rounded">
              OR CCB 218151
            </span>
            <span className="px-3 py-1 bg-secondary-foreground/10 rounded">
              WA COLORMP822NT
            </span>
            <span className="px-3 py-1 bg-secondary-foreground/10 rounded">
              ID RCE-52605
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
          <p>
            © {new Date().getFullYear()} Color Masters Painting Inc. | Licensed
            in OR, WA, ID | $1M Liability Insurance
          </p>
        </div>
      </div>
    </footer>
  );
}
