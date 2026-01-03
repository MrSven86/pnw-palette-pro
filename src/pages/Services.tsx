import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/Cards";
import { EstimateSection } from "@/components/EstimateSection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";

import heroHome from "@/assets/hero-home.jpg";
import interiorPainting from "@/assets/interior-painting.jpg";
import exteriorPainting from "@/assets/exterior-painting.jpg";
import commercialPainting from "@/assets/commercial-painting.jpg";
import epoxyFlooring from "@/assets/epoxy-flooring.jpg";
import cabinetRefinishing from "@/assets/cabinet-refinishing.jpg";
import trimWork from "@/assets/trim-work.jpg";

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
  {
    image: epoxyFlooring,
    title: "Epoxy Flooring",
    description: "Transform garages, basements, and workspaces with durable, chemical-resistant epoxy flooring that withstands heavy traffic and looks professional for years.",
    href: "/epoxy",
  },
  {
    image: cabinetRefinishing,
    title: "Cabinet Refinishing",
    description: "Refresh your kitchen or bathroom cabinets on-site or in our specialized facility with custom colors and finishes.",
    href: "/cabinets",
  },
  {
    image: trimWork,
    title: "Trim & Specialty Work",
    description: "Complete trim packages including baseboards, crown molding, window casings, door frames, fence staining, and rough beam lams.",
    href: "/residential",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Our Services"
        headline="Professional Painting Services Across the Pacific Northwest"
        subHeadline="From residential repaints to commercial projects and specialty finishes, we deliver quality results with experienced crews licensed in Oregon, Washington, and Idaho."
        backgroundImage={heroHome}
      />

      <Section>
        <SectionHeader
          title="Complete Painting Solutions"
          subtitle="Color Masters Painting offers a full range of professional painting services for residential and commercial properties."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeader
          title="Our Recent Projects"
          subtitle="See examples of our quality workmanship across residential and commercial properties."
        />
        <ProjectSlideshow />
      </Section>

      <EstimateSection />
    </Layout>
  );
};

export default Services;
