import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { EstimateSection } from "@/components/EstimateSection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { Building2, Home, Factory, MapPin, Shield, Clock, Users } from "lucide-react";

import commercialHero from "@/assets/commercial-hero.jpg";
import commercialBuilding from "@/assets/commercial-building.jpg";

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
          <div className="order-2 lg:order-1">
            <img 
              src={commercialBuilding} 
              alt="Commercial building painting project" 
              className="rounded-xl shadow-card w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Commercial & Industrial Painting Services
            </h1>
            <p className="text-lg font-medium text-secondary">
              Professional Building Painting for Property Managers, Facility Owners & General Contractors
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Color Masters Painting handles commercial and light industrial painting projects across Northeast Oregon, Tri-Cities Washington, and Idaho. We understand commercial clients need scheduled completion dates, minimal operational disruption, and contractors who deliver quality work without excuses.
            </p>
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

      {/* Services Overview - moved above Our Commercial Work */}
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
