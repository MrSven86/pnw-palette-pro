import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { ProcessStep } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Home, Building2, CheckCircle, Paintbrush, Palette } from "lucide-react";

import cabinetRefinishing from "@/assets/cabinet-refinishing.jpg";

const onsiteFeatures = [
  "Cabinets remain installed",
  "Less disruption to daily life",
  "Completed in your home",
  "Suitable for most cabinet types",
];

const facilityFeatures = [
  "Controlled refinishing environment",
  "More extensive repair options available",
  "Professional-grade equipment",
  "Suitable for complex projects",
];

const cabinetTypes = [
  "Kitchen cabinets",
  "Bathroom vanities",
  "Built-in shelving and bookcases",
  "Entertainment centers",
  "Office cabinetry",
  "Commercial millwork",
];

const processSteps = [
  {
    title: "Assessment",
    description: "We evaluate your cabinets' condition and discuss your color and finish preferences to determine the best refinishing approach.",
  },
  {
    title: "Preparation",
    description: "Surfaces are properly cleaned, sanded, and prepared. Hardware is removed and labeled for reinstallation.",
  },
  {
    title: "Refinishing",
    description: "We apply stain or paint with multiple coats, ensuring even coverage and durable finish that will last for years.",
  },
  {
    title: "Reinstallation & Inspection",
    description: "For facility work, we carefully reinstall cabinets. All hardware is reattached and we inspect to ensure quality results.",
  },
];

const stainOptions = [
  "Natural wood tones",
  "Espresso and dark stains",
  "Light oak and maple tones",
  "Custom color matching",
];

const paintOptions = [
  "White and off-white",
  "Gray tones",
  "Bold colors for accent cabinets",
  "Custom colors available",
];

const finishOptions = [
  "Matte for subtle elegance",
  "Satin for easy cleaning",
  "Semi-gloss for durability",
];

const CabinetRefinishing = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Professional Cabinet Refinishing Services"
        headline="Transform Your Cabinets with Custom Refinishing"
        subHeadline="Refresh your kitchen or bathroom cabinets with professional refinishing services—on-site or in our specialized facility. Choose custom colors and finishes that complement your décor."
        backgroundImage={cabinetRefinishing}
      />

      {/* Refinishing Options */}
      <Section>
        <SectionHeader title="On-Site or Facility Refinishing" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold">On-Site Refinishing</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              We come to your location and refinish cabinets in place, minimizing disruption to your home or business. Ideal for occupied properties where cabinet removal isn't practical.
            </p>
            <h4 className="font-semibold mb-3">Benefits:</h4>
            <ul className="space-y-2">
              {onsiteFeatures.map((item, index) => (
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
              <h3 className="font-display text-2xl font-semibold">Facility Refinishing</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Cabinets are removed and refinished in our specialized facility, allowing for more controlled conditions and additional options like full stripping and repairs.
            </p>
            <h4 className="font-semibold mb-3">Benefits:</h4>
            <ul className="space-y-2">
              {facilityFeatures.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What We Refinish */}
      <Section variant="alt">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={cabinetRefinishing}
              alt="Cabinet refinishing"
              className="rounded-xl shadow-card"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Cabinet Refinishing Services</h2>
            <p className="text-lg text-muted-foreground">
              We refinish both new and used cabinets for residential and commercial properties:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cabinetTypes.map((type, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Paintbrush className="w-4 h-4 text-primary shrink-0" />
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader title="From Worn to Beautiful" />
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

      {/* Color & Finish Options */}
      <Section variant="alt">
        <SectionHeader
          title="Choose Your Perfect Look"
          subtitle="Select from a wide range of colors and finishes to match your style:"
        />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-6 h-6 text-secondary" />
              <h3 className="font-display text-lg font-semibold">Stain Options</h3>
            </div>
            <ul className="space-y-2">
              {stainOptions.map((option, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Paintbrush className="w-6 h-6 text-secondary" />
              <h3 className="font-display text-lg font-semibold">Paint Options</h3>
            </div>
            <ul className="space-y-2">
              {paintOptions.map((option, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Paintbrush className="w-6 h-6 text-secondary" />
              <h3 className="font-display text-lg font-semibold">Finishes</h3>
            </div>
            <ul className="space-y-2">
              {finishOptions.map((option, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection title="Ready to Refresh Your Cabinets?" />
    </Layout>
  );
};

export default CabinetRefinishing;
