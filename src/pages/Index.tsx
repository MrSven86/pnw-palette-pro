import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard, FeatureCard, ProcessStep } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { ClipboardList, Calendar, Paintbrush, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import heroBanner from "@/assets/hero-banner.png";
import interiorPainting from "@/assets/interior-painting.jpg";
import exteriorPainting from "@/assets/exterior-new.avif";
import commercialPainting from "@/assets/commercial-new.jpg";
import iconLiability from "@/assets/icon-liability.png";
import iconTristate from "@/assets/icon-tristate.png";
import iconBbb from "@/assets/icon-bbb.png";
import iconPaintBucket from "@/assets/icon-paint-bucket.png";

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
      <section className="py-16 text-center">
        <div className="container max-w-3xl">
          <img 
            src={iconPaintBucket} 
            alt="Paint bucket icon" 
            className="h-16 w-auto mx-auto mb-6"
          />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Licensed, Insured, and Trusted Across Three States
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our crews have worked together continuously since before 2017, bringing that same dedication to quality that Desert Drywall built its reputation on. Today, we're proud to serve property owners across Oregon, Washington, and Idaho with the same professional standards and experienced craftsmanship.
          </p>
        </div>
      </section>

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
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="px-10">
              <Link to="/services">More services</Link>
            </Button>
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

      {/* Process Section */}
      <Section variant="alt">
        <SectionHeader
          title="How We Make Your Painting Project Smooth and Stress-Free"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Section>

      {/* About / Why Choose Us Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
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
            <div className="space-y-3 pt-4">
              <h3 className="font-display text-xl font-semibold">Why Property Owners Choose Color Masters:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Tri-state licensed coverage</strong> – One contractor for your entire Pacific Northwest portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Experienced, stable crews</strong> – Same team working together for 8+ years</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Complete protection</strong> – $1M liability insurance and proper licensing in all three states</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Transparent process</strong> – Free estimates with detailed property assessments and scheduled start/finish dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>BBB A+ rated service</strong> – Maintaining accreditation since 2018</span>
                </li>
              </ul>
            </div>
            <Button asChild size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="animate-slide-in-right" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <img
              src={exteriorPainting}
              alt="Color Masters Painting team at work"
              className="rounded-2xl shadow-elevated"
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Index;
