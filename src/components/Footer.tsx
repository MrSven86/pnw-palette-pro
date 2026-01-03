import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe, Facebook, Instagram } from "lucide-react";

const serviceAreas = [
  "Portland Metro", "Salem", "Eugene", "Bend", "Hermiston",
  "Tri-Cities", "Spokane", "Seattle", "Boise", "Twin Falls",
  "Lewiston", "Coeur d'Alene"
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              COLOR MASTERS
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              As professional painting contractors serving the Pacific Northwest since 2017, we take pride in transforming properties across Oregon, Washington, and Idaho with quality craftsmanship, experienced crews, and complete project protection.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>
                  PO Box 334
                  <br />
                  Hermiston, OR 97838
                </span>
              </div>
              <a
                href="tel:509-554-1969"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                (509) 554-1969
              </a>
              <a
                href="tel:208-447-7085"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                (208) 447-7085
              </a>
              <a
                href="mailto:contact@colormasterspaintinginc.com"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@colormasterspaintinginc.com
              </a>
              <a
                href="https://colormasterspaintinginc.com"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4 text-primary" />
                colormasterspaintinginc.com
              </a>
            </div>

            {/* Licenses */}
            <div className="pt-4">
              <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide mb-3">
                Licenses
              </h4>
              <ul className="space-y-1 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Oregon CCB #218151
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Washington #COLORMP822NT
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Idaho RCE #52605
                </li>
              </ul>
            </div>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide">
              Service Areas
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              We serve the entire Pacific Northwest region including Oregon, Washington, and Idaho. Our service areas include {serviceAreas.join(", ")}, and surrounding communities throughout the tri-state area.
            </p>
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Request a Free Estimate →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} <span className="text-primary">Color Masters Painting Inc.</span> | All Rights Reserved
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary-foreground" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
