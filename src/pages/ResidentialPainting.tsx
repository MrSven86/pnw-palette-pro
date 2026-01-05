import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { EstimateSection } from "@/components/EstimateSection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { MapPin, CheckCircle } from "lucide-react";

import residentialHero from "@/assets/residential-hero.avif";
import residentialHouse from "@/assets/residential-house.jpg";
import interiorPainting from "@/assets/interior-painting.jpg";
import iconLiability from "@/assets/icon-liability.png";
import iconTristate from "@/assets/icon-tristate.png";
import iconBbb from "@/assets/icon-bbb.png";

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


const ResidentialPainting = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Professional Residential Painting Services"
        headline="Interior & Exterior Painting for Homes Across Oregon, Washington, and Idaho"
        subHeadline="Protect and beautify your home with licensed, insured painting crews experienced in Pacific Northwest conditions. We handle proper surface preparation, use quality paints, and deliver clean, long-lasting results."
        backgroundImage={residentialHero}
      />

      {/* Intro Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Decorative background shapes */}
            <div className="absolute -top-6 -left-6 w-[85%] h-[85%] bg-secondary rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-32 bg-primary rounded-xl -z-10" />
            <img 
              src={residentialHouse} 
              alt="Residential house painting project" 
              className="rounded-xl shadow-card w-full aspect-[4/3] object-cover relative z-10"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Residential Interior & Exterior Painting
            </h1>
            <p className="text-lg font-medium text-secondary">
              Professional Home Painting Services Across OR, WA & ID
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Color Masters Painting provides complete residential painting services throughout Northeast Oregon, Tri-Cities Washington, and Idaho. We handle everything from single-room updates to whole-house interior and exterior repaints, always with proper surface preparation, quality materials, and attention to detail.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <section className="relative z-20 pb-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            Why Homeowners Trust Color Masters Painting
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

      {/* What's Included Section - moved above Our Residential Work */}
      <Section variant="alt">
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

      {/* Recent Work Gallery */}
      <section className="py-20">
        <div className="text-center mb-12 container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Residential Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See examples of our quality workmanship across residential properties.
          </p>
        </div>
        <div className="px-4">
          <ProjectSlideshow />
        </div>
      </section>

      <EstimateSection title="Ready to Refresh Your Home?" />
    </Layout>
  );
};

export default ResidentialPainting;
