import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  phone1?: string;
  phone2?: string;
}

export function CTASection({
  title = "Ready to Start Your Painting Project?",
  description = "Get a free estimate with detailed property assessment. We serve residential and commercial properties across Oregon, Washington, and Idaho with licensed, insured crews.",
  primaryCta = { text: "Get Your Free Estimate", href: "/contact" },
  phone1 = "509-554-1969",
  phone2 = "208-447-7085",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            {title}
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="xl"
              className="bg-card text-foreground hover:bg-card/90"
            >
              <Link to={primaryCta.href}>{primaryCta.text}</Link>
            </Button>
            <div className="text-primary-foreground/90">
              <p className="text-sm">Or call us directly:</p>
              <div className="flex gap-4 font-semibold">
                <a href={`tel:${phone1}`} className="hover:text-card transition-colors">
                  {phone1}
                </a>
                <span>or</span>
                <a href={`tel:${phone2}`} className="hover:text-card transition-colors">
                  {phone2}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-primary-foreground/80">
            <div>
              <p className="font-semibold text-primary-foreground">Oregon</p>
              <p>CCB 218151</p>
            </div>
            <div>
              <p className="font-semibold text-primary-foreground">Washington</p>
              <p>COLORMP822NT</p>
            </div>
            <div>
              <p className="font-semibold text-primary-foreground">Idaho</p>
              <p>RCE-52605</p>
            </div>
            <div>
              <p className="font-semibold text-primary-foreground">Insurance</p>
              <p>$1M Liability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
