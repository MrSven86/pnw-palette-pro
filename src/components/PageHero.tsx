import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface PageHeroProps {
  preHeadline?: string;
  headline: string;
  subHeadline: string;
  backgroundImage: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showBadges?: boolean;
}

export function PageHero({
  preHeadline,
  headline,
  subHeadline,
  backgroundImage,
  primaryCta = { text: "Get Your Free Estimate", href: "/contact" },
  secondaryCta,
  showBadges = false,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          {preHeadline && (
            <p className="text-primary font-medium text-sm md:text-base uppercase tracking-wide">
              {preHeadline}
            </p>
          )}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-card leading-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-card/90 max-w-2xl">
            {subHeadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild variant="hero" size="lg">
              <Link to={primaryCta.href}>{primaryCta.text}</Link>
            </Button>
            {secondaryCta ? (
              <Button asChild variant="heroOutline" size="lg">
                <Link to={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            ) : (
              <Button asChild variant="heroOutline" size="lg">
                <a href="tel:509-554-1969">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us: 509-554-1969
                </a>
              </Button>
            )}
          </div>

          {showBadges && (
            <div className="pt-8 space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-card/20 backdrop-blur-sm rounded-lg text-card text-sm font-medium border border-card/30">
                  BBB A+ Rated
                </span>
                <span className="px-4 py-2 bg-card/20 backdrop-blur-sm rounded-lg text-card text-sm font-medium border border-card/30">
                  Oregon CCB 218151
                </span>
                <span className="px-4 py-2 bg-card/20 backdrop-blur-sm rounded-lg text-card text-sm font-medium border border-card/30">
                  Washington COLORMP822NT
                </span>
                <span className="px-4 py-2 bg-card/20 backdrop-blur-sm rounded-lg text-card text-sm font-medium border border-card/30">
                  Idaho RCE-52605
                </span>
              </div>
              <p className="text-card/70 text-sm">
                $1,000,000 Liability Insurance • BuildZoom Top 16% • Serving OR,
                WA, ID Since 2017
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
