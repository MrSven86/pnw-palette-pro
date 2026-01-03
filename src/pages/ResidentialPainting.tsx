import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { FeatureCard, ProcessStep } from "@/components/Cards";
import { EstimateSection } from "@/components/EstimateSection";
import { Shield, Users, Calendar, MapPin, CheckCircle } from "lucide-react";

import residentialHero from "@/assets/residential-hero.avif";
import interiorPainting from "@/assets/interior-painting.jpg";

const interiorServices = [
  "Living rooms, bedrooms, and common areas",
  "Kitchens and bathrooms",
  "Hallways and stairwells",
  "Ceilings and walls",
  "Doors and trim",
  "Color consultation available",
  "Furniture protection and masking",
  "Clean-up and removal of all materials",
];

const exteriorServices = [
  "Siding (all types)",
  "Trim, soffits, and fascia",
  "Doors and window frames",
  "Decks and railings",
  "Proper surface preparation (scraping, sanding, priming)",
  "Weather-resistant paint selection",
  "Protection of landscaping and fixtures",
  "Final inspection and touch-ups",
];

const features = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Complete Protection",
    description: "$1,000,000 liability insurance and tri-state licensing mean your home is protected throughout the project. We carry proper coverage so you have peace of mind.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Experienced Crews",
    description: "Our painting crews have worked together continuously for 8+ years, bringing consistent quality and professionalism to every home project.",
  },
  {
    icon: <Calendar className="w-7 h-7" />,
    title: "Transparent Process",
    description: "We provide free estimates with detailed property assessments, scheduled start and finish dates, and clear communication throughout your project.",
  },
];

const processSteps = [
  {
    title: "Free Consultation & Estimate",
    description: "We visit your home to assess the scope of work, discuss your color preferences, and provide a detailed written estimate with no obligation.",
  },
  {
    title: "Preparation & Protection",
    description: "We protect your furniture, flooring, and fixtures. For exteriors, we safeguard landscaping and prepare all surfaces properly for long-lasting results.",
  },
  {
    title: "Professional Application",
    description: "Our experienced crews apply quality paints with attention to detail, ensuring clean lines, smooth coverage, and uniform finish throughout your home.",
  },
  {
    title: "Final Walkthrough",
    description: "We inspect the completed work with you, address any concerns, and don't consider the job done until you're completely satisfied.",
  },
];

const ResidentialPainting = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Professional Residential Painting Services"
        headline="Interior & Exterior Painting for Homes Across Oregon, Washington, and Idaho"
        subHeadline="Protect and beautify your home with licensed, insured painting crews experienced in Pacific Northwest conditions. We handle proper surface preparation, use quality paints, and deliver clean, long-lasting results."
        backgroundImage={residentialHero}
      />

      {/* What's Included Section */}
      <Section>
        <SectionHeader title="Complete Residential Painting Services" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold mb-6 text-secondary">Interior Painting Includes:</h3>
            <ul className="space-y-3">
              {interiorServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold mb-6 text-secondary">Exterior Painting Includes:</h3>
            <ul className="space-y-3">
              {exteriorServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section variant="alt">
        <SectionHeader title="Why Homeowners Trust Color Masters Painting" />
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader title="How We Transform Your Home" />
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

      {/* Interior vs Exterior */}
      <Section variant="alt">
        <SectionHeader title="Interior & Exterior Painting: Key Considerations" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img src={interiorPainting} alt="Interior painting" className="rounded-xl shadow-card w-full aspect-video object-cover" />
            <h3 className="font-display text-2xl font-semibold">Interior Painting</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">Best Timing:</strong> Year-round project, though ventilation is important for proper drying.</p>
              <p><strong className="text-foreground">Typical Duration:</strong> Most interior projects completed in 2-5 days depending on home size and number of rooms.</p>
              <p><strong className="text-foreground">Surface Preparation:</strong> We patch holes, repair cracks, sand surfaces, and prime where needed for smooth, professional results.</p>
              <p><strong className="text-foreground">Paint Selection:</strong> We help you choose the right finishes for each room—matte for ceilings, satin for walls, semi-gloss for trim and high-traffic areas.</p>
            </div>
          </div>
          <div className="space-y-6">
            <img src={residentialHero} alt="Exterior painting" className="rounded-xl shadow-card w-full aspect-video object-cover" />
            <h3 className="font-display text-2xl font-semibold">Exterior Painting</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">Best Timing:</strong> Late spring through early fall when weather is dry and temperatures are stable. Pacific Northwest conditions require careful scheduling.</p>
              <p><strong className="text-foreground">Typical Duration:</strong> Most exterior projects completed in 3-7 days depending on home size, surface conditions, and weather.</p>
              <p><strong className="text-foreground">Surface Preparation:</strong> Thorough scraping, sanding, and priming of all surfaces. We address any rot or damage before painting begins.</p>
              <p><strong className="text-foreground">Paint Selection:</strong> We use weather-resistant, moisture and mildew-resistant paints with UV protection suitable for Oregon, Washington, and Idaho climates.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Area */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <MapPin className="w-12 h-12 text-secondary mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-bold">Serving Homeowners Throughout the Pacific Northwest</h2>
          <p className="text-lg text-muted-foreground">
            Color Masters Painting is licensed to serve residential properties across Oregon (CCB 218151), Washington (COLORMP822NT), and Idaho (RCE-52605). Whether you're in Hermiston, Tri-Cities, Boise, or anywhere in between, our crews bring the same professional standards to every home.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <span className="px-4 py-2 bg-background-alt rounded-lg">Northeast Oregon</span>
            <span className="px-4 py-2 bg-background-alt rounded-lg">Tri-Cities, Washington</span>
            <span className="px-4 py-2 bg-background-alt rounded-lg">Boise region, Idaho</span>
            <span className="px-4 py-2 bg-background-alt rounded-lg">Surrounding Pacific Northwest communities</span>
          </div>
        </div>
      </Section>

      <EstimateSection title="Ready to Refresh Your Home?" />
    </Layout>
  );
};

export default ResidentialPainting;
