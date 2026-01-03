import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { FeatureCard, ProcessStep } from "@/components/Cards";
import { EstimateSection } from "@/components/EstimateSection";
import { Shield, Droplets, Sparkles, Home, Building2, CheckCircle } from "lucide-react";

import epoxyFlooring from "@/assets/epoxy-flooring.jpg";

const benefits = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Exceptional Durability",
    description: "Epoxy floors withstand heavy foot traffic, vehicle traffic, and impact better than standard concrete. Perfect for high-use areas like garages and workspaces.",
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: "Chemical & Stain Resistant",
    description: "Resistant to oil, gasoline, chemicals, and common stains. Easy to clean with simple mopping—spills wipe up without leaving marks.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Professional Appearance",
    description: "Available in multiple colors and finishes, epoxy creates a seamless, polished surface that enhances any space from residential garages to commercial showrooms.",
  },
];

const residentialApplications = [
  "Garages (single and multi-car)",
  "Basements and recreation rooms",
  "Home workshops",
  "Laundry rooms",
  "Mudrooms and entryways",
];

const commercialApplications = [
  "Showrooms and retail spaces",
  "Warehouses and distribution centers",
  "Auto repair shops",
  "Manufacturing facilities",
  "Commercial kitchens",
];

const processSteps = [
  {
    title: "Surface Preparation",
    description: "We thoroughly clean and prepare the concrete surface, repairing cracks and ensuring proper adhesion for the epoxy coating.",
  },
  {
    title: "Application",
    description: "We apply epoxy coating in multiple layers, ensuring even coverage and proper thickness for maximum durability.",
  },
  {
    title: "Curing",
    description: "We allow proper curing time for the epoxy to bond completely with the concrete surface, ensuring long-lasting performance.",
  },
  {
    title: "Final Inspection",
    description: "We inspect the completed floor to ensure smooth, even coverage and professional finish throughout the space.",
  },
];

const colorOptions = [
  "Solid colors (gray, tan, blue, red, and more)",
  "Color flake systems for decorative texture",
  "High-gloss or satin finishes",
  "Clear topcoats for added protection",
];

const EpoxyFlooring = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Professional Epoxy Flooring Installation"
        headline="Durable Epoxy Floors for Garages, Basements, and Commercial Spaces"
        subHeadline="Transform your floors with seamless, high-performance epoxy coatings that resist stains, chemicals, and heavy traffic while providing a professional, polished appearance."
        backgroundImage={epoxyFlooring}
      />

      {/* Benefits */}
      <Section>
        <SectionHeader title="Why Choose Epoxy Flooring?" />
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </Section>

      {/* Applications */}
      <Section variant="alt">
        <SectionHeader title="Where Epoxy Flooring Works Best" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Residential Applications</h3>
            </div>
            <ul className="space-y-3">
              {residentialApplications.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Commercial Applications</h3>
            </div>
            <ul className="space-y-3">
              {commercialApplications.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader title="Professional Installation for Long-Lasting Results" />
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

      {/* Colors & Finishes */}
      <Section variant="alt">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={epoxyFlooring}
              alt="Epoxy flooring finish options"
              className="rounded-xl shadow-card"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Customize Your Epoxy Floor</h2>
            <p className="text-lg text-muted-foreground">
              Choose from a variety of colors and finishes to match your space. From neutral grays for garages to custom colors for showrooms, we help you select the right look for your application.
            </p>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold">Popular Options:</h3>
              <ul className="space-y-3">
                {colorOptions.map((option, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <EstimateSection title="Ready to Upgrade Your Floors?" />
    </Layout>
  );
};

export default EpoxyFlooring;
