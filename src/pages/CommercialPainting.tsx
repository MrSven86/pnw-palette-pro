import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { EstimateSection } from "@/components/EstimateSection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { Building2, Home, Factory } from "lucide-react";
import { motion } from "framer-motion";

import commercialHero from "@/assets/commercial-hero.jpg";
import commercialBuilding from "@/assets/commercial-building.jpg";
import iconLiability from "@/assets/icon-liability.png";
import iconTristate from "@/assets/icon-tristate.png";
import iconBbb from "@/assets/icon-bbb.png";

const commercialServices = {
  small: [
    "Retail spaces",
    "Office buildings",
    "Restaurants and cafes",
    "Professional offices",
    "Medical facilities",
    "Small warehouses",
  ],
  multiUnit: [
    "Apartment complexes",
    "Condominium buildings",
    "Multi-family properties",
    "Property management portfolios",
    "HOA communities",
  ],
  industrial: [
    "Warehouses",
    "Distribution centers",
    "Manufacturing facilities",
    "Storage facilities",
    "Industrial office spaces",
  ],
};

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

const serviceCards = [
  {
    icon: Building2,
    title: "Small Commercial Properties",
    items: commercialServices.small,
  },
  {
    icon: Home,
    title: "Multi-Unit Residential",
    items: commercialServices.multiUnit,
  },
  {
    icon: Factory,
    title: "Light Industrial",
    items: commercialServices.industrial,
  },
];

const CommercialPainting = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Commercial & Industrial Painting Services"
        headline="Professional Painting for Commercial Properties Across OR, WA, and ID"
        subHeadline="From small commercial buildings to large apartment complexes and light industrial facilities, we deliver quality results that enhance property value with minimal disruption to your operations."
        backgroundImage={commercialHero}
        primaryCta={{ text: "Request Commercial Quote", href: "/contact" }}
      />

      {/* Intro Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img 
              src={commercialBuilding} 
              alt="Commercial building painting project" 
              className="rounded-xl shadow-card w-full aspect-[4/3] object-cover"
            />
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Commercial & Industrial Painting Services
            </h1>
            <p className="text-lg font-medium text-secondary">
              Professional Building Painting for Property Managers, Facility Owners & General Contractors
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Color Masters Painting handles commercial and light industrial painting projects across Northeast Oregon, Tri-Cities Washington, and Idaho. We understand commercial clients need scheduled completion dates, minimal operational disruption, and contractors who deliver quality work without excuses.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <section className="relative z-20 pb-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            Reliable Commercial Painting Across Three States
          </h2>
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

      {/* Services Overview - moved above Our Commercial Work */}
      <Section>
        <SectionHeader title="Commercial Painting Expertise" />
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{card.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Recent Work Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="text-center mb-12 container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Commercial Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See examples of our quality workmanship across commercial and industrial properties.
          </p>
        </div>
        <div className="px-4">
          <ProjectSlideshow />
        </div>
      </section>

      <EstimateSection title="Get a Quote for Your Commercial Property" />
    </Layout>
  );
};

export default CommercialPainting;
