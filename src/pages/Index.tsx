import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard, FeatureCard, ProcessStep } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { ClipboardList, Calendar, Paintbrush, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import heroBanner from "@/assets/hero-banner.png";
import interiorPainting from "@/assets/interior-painting.jpg";
import exteriorPainting from "@/assets/exterior-new.avif";
import commercialPainting from "@/assets/commercial-new.jpg";
import iconLiability from "@/assets/icon-liability.png";
import iconTristate from "@/assets/icon-tristate.png";
import iconBbb from "@/assets/icon-bbb.png";
import iconPaintBucket from "@/assets/icon-paint-bucket.png";
import usMapTristate from "@/assets/us-map-tristate.png";
import estimateBg from "@/assets/estimate-bg.avif";
import bbbAccredited from "@/assets/bbb-accredited.png";
import bbbAplus from "@/assets/bbb-aplus.png";
import colorMastersTrucks from "@/assets/color-masters-trucks.jpg";

const services = [
  {
    image: interiorPainting,
    title: "Residential Interior Painting",
    description: "Transform your living spaces with professional interior painting. We protect your furniture, deliver clean lines, and provide smooth, long-lasting finishes that enhance your home.",
    href: "/residential",
  },
  {
    image: exteriorPainting,
    title: "Residential Exterior Painting",
    description: "Protect and beautify your home's exterior with proper surface preparation and weather-resistant paints suited for Pacific Northwest conditions.",
    href: "/residential",
  },
  {
    image: commercialPainting,
    title: "Commercial & Industrial Painting",
    description: "We handle projects from small commercial properties to large apartment complexes and light industrial facilities across OR, WA, and ID.",
    href: "/commercial",
  },
];

const trustFeatures = [
  {
    icon: iconLiability,
    title: "$1M Liability Protection",
    description: "We carry $1,000,000 in general liability insurance and a $15,000 surety bond, protecting your property throughout every project.",
  },
  {
    icon: iconTristate,
    title: "Tri-State Licensed",
    description: "Fully licensed in Oregon (CCB 218151), Washington (COLORMP822NT), and Idaho (RCE-52605) for complete regional coverage.",
  },
  {
    icon: iconBbb,
    title: "BBB A+ Rated",
    description: "Maintaining BBB Accreditation since 2018 with A+ rating and BuildZoom score of 98, ranking in the top 16% of Oregon contractors.",
  },
];

const processSteps = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Free Property Assessment",
    description: "We provide a detailed evaluation of your property's needs with transparent scope explanation and written estimate.",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Scheduled Start & Finish",
    description: "We inform you of exact dates for project start and completion, so you can plan accordingly.",
  },
  {
    icon: <Paintbrush className="w-5 h-5" />,
    title: "Professional Execution",
    description: "Our experienced crews arrive on time, protect your property, and deliver quality results with attention to detail.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Final Walkthrough",
    description: "We ensure you're completely satisfied before considering the project complete.",
  },
];

// Paint Bucket Section with tipping animation
const PaintBucketSection = ({ iconPaintBucket }: { iconPaintBucket: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-40%" });

  return (
    <section className="py-16 text-center">
      <div className="container max-w-3xl">
        <motion.img 
          ref={ref}
          src={iconPaintBucket} 
          alt="Paint bucket icon" 
          className="h-16 w-auto mx-auto mb-6 origin-center"
          animate={{ rotate: isInView ? 180 : 0 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Licensed, Insured, and Trusted Across Three States
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Our crews have worked together continuously since before 2017, bringing that same dedication to quality that Desert Drywall built its reputation on. Today, we're proud to serve property owners across Oregon, Washington, and Idaho with the same professional standards and experienced craftsmanship.
        </p>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        preHeadline="Licensed Painting Contractors Serving Oregon, Washington & Idaho"
        headline="Professional Painting with Tri-State Licensed Coverage and $1M Protection"
        subHeadline="Color Masters Painting delivers quality results across the Pacific Northwest with BBB A+ rated service, fully insured crews, and 8+ years of continuous crew experience from our Desert Drywall heritage."
        backgroundImage={heroBanner}
      />

      {/* Trust & Credibility Section */}
      <section className="relative -mt-8 z-20 pb-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {trustFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/[0.97] rounded-xl p-8 shadow-lg text-center"
              >
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="h-12 w-auto mx-auto mb-4"
                />
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensed & Trusted Section */}
      <PaintBucketSection iconPaintBucket={iconPaintBucket} />

      {/* Services Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Painting Services Across<br />Oregon, Washington, and Idaho
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From residential repaints to commercial projects and specialty finishes, we deliver quality results with experienced crews.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.href} 
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Slideshow Section */}
      <section id="gallery" className="py-20">
        <div className="text-center mb-12 container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Recent Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See examples of our quality workmanship across residential and commercial properties.
          </p>
        </div>
        <div className="px-4">
          <ProjectSlideshow />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built on Desert Drywall's Legacy of Quality Craftsmanship
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  When Desert Drywall owner Brent Bieren passed away unexpectedly in March 2017, we knew we couldn't let his skilled painting crew scatter. Rick Wilson, who managed Desert Drywall's Oregon projects, partnered with Victor Perez, the painting crew manager, to create Color Masters Painting Inc.
                </p>
                <p>
                  Our crews have worked together continuously since before 2017, bringing that same dedication to quality that Desert Drywall built its reputation on. Today, we're proud to serve property owners across Oregon, Washington, and Idaho with the same professional standards and experienced craftsmanship.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={colorMastersTrucks} 
                alt="Color Masters Painting trucks at a job site" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving the Entire Pacific Northwest
            </h2>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
              <span>Oregon</span>
              <span className="w-1 h-1 bg-primary-foreground rounded-full" />
              <span>Washington</span>
              <span className="w-1 h-1 bg-primary-foreground rounded-full" />
              <span>Idaho</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Oregon</h3>
              <p className="text-muted-foreground text-sm">CCB License #218151</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Washington</h3>
              <p className="text-muted-foreground text-sm">License #COLORMP822NT</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Idaho</h3>
              <p className="text-muted-foreground text-sm">RCE License #52605</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Estimate Section */}
      <section className="relative py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={estimateBg} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Why Choose Us */}
            <div className="text-white pt-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Why Property Owners<br />Choose Color Masters:
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Tri-state licensed coverage</strong> – One contractor for your entire Pacific Northwest portfolio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Experienced, stable crews</strong> – Same team working together for 8+ years</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Complete protection</strong> – $1M liability insurance and proper licensing in all three states</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Transparent process</strong> – Free estimates with detailed property assessments and scheduled start/finish dates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>BBB A+ rated service</strong> – Maintaining accreditation since 2018</span>
                </li>
              </ul>
              <div className="flex items-center gap-4 mt-8">
                <img src={bbbAplus} alt="BBB A+ Rating" className="h-12 w-auto" />
                <img src={bbbAccredited} alt="BBB Accredited Business" className="h-10 w-auto" />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Request Your Free Estimate
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 555-5555"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                    <input 
                      type="email" 
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Property Address</label>
                  <input 
                    type="text" 
                    placeholder="123 Main St, City, State"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Property Type</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Service Needed</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                      <option>Interior Painting</option>
                      <option>Exterior Painting</option>
                      <option>Cabinet Refinishing</option>
                      <option>Epoxy Flooring</option>
                      <option>Commercial Painting</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Project Description</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Preferred Contact Method</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                    <option>Phone</option>
                    <option>Email</option>
                    <option>Text</option>
                  </select>
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send My Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
