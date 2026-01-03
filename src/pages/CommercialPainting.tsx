import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { ProcessStep } from "@/components/Cards";
import { EstimateSection } from "@/components/EstimateSection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { Building2, Home, Factory, MapPin, Shield, Clock, FileCheck, Users } from "lucide-react";

import commercialHero from "@/assets/commercial-hero.jpg";

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

const features = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Tri-State Coverage",
    description: "Manage your entire Pacific Northwest property portfolio with one licensed contractor. We're properly licensed in Oregon, Washington, and Idaho.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Minimal Disruption",
    description: "We schedule work to minimize impact on your operations and tenants, with flexible timing options including evenings and weekends when needed.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Complete Insurance",
    description: "$1,000,000 liability coverage and proper licensing protect your property and provide peace of mind for property managers and owners.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Experienced Crews",
    description: "Our teams have worked together for 8+ years, bringing professional standards and consistent quality to every commercial project.",
  },
];

const processSteps = [
  {
    title: "Property Assessment",
    description: "We evaluate your property's needs, discuss scheduling requirements, and provide a detailed written proposal for your review.",
  },
  {
    title: "Scheduling Coordination",
    description: "We work with your timeline to minimize operational disruption, coordinating with property managers and tenants as needed.",
  },
  {
    title: "Professional Execution",
    description: "Our crews arrive on schedule, protect your property, and complete work efficiently with attention to quality and safety standards.",
  },
  {
    title: "Final Inspection",
    description: "We conduct a thorough walkthrough to ensure all work meets specifications and address any final details before project completion.",
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

      {/* Services Overview */}
      <Section>
        <SectionHeader title="Commercial Painting Expertise" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">Small Commercial Properties</h3>
            <ul className="space-y-2 text-muted-foreground">
              {commercialServices.small.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">Multi-Unit Residential</h3>
            <ul className="space-y-2 text-muted-foreground">
              {commercialServices.multiUnit.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">Light Industrial</h3>
            <ul className="space-y-2 text-muted-foreground">
              {commercialServices.industrial.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Why Property Managers Choose Us */}
      <Section variant="alt">
        <SectionHeader title="Reliable Commercial Painting Across Three States" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader title="From Quote to Completion" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
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
