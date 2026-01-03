import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 py-24 pt-32">
        <div className="max-w-2xl space-y-6">
          {preHeadline && (
            <motion.p 
              className="flex items-center gap-2 text-white/90 font-medium text-xs md:text-sm uppercase tracking-[0.2em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {preHeadline}
            </motion.p>
          )}
          <motion.h1 
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {headline}
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {subHeadline}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Button asChild variant="hero" size="lg" className="rounded-md">
              <Link to={primaryCta.href}>{primaryCta.text}</Link>
            </Button>
            {secondaryCta ? (
              <Button asChild variant="heroOutline" size="lg" className="rounded-md">
                <Link to={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            ) : (
              <Button asChild variant="heroOutline" size="lg" className="rounded-md bg-white/10 border-white/30 hover:bg-white/20">
                <a href="tel:509-554-1969">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us: (509) 554-1969
                </a>
              </Button>
            )}
          </motion.div>

          {showBadges && (
            <motion.div 
              className="pt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium border border-white/20">
                  BBB A+ Rated
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium border border-white/20">
                  Oregon CCB 218151
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium border border-white/20">
                  Washington COLORMP822NT
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium border border-white/20">
                  Idaho RCE-52605
                </span>
              </div>
              <p className="text-white/60 text-sm">
                $1,000,000 Liability Insurance • BuildZoom Top 16% • Serving OR,
                WA, ID Since 2017
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
