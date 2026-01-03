import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { EstimateSection } from "@/components/EstimateSection";
import { Shield, Users, Award, MapPin, CheckCircle, FileCheck } from "lucide-react";

import exteriorPainting from "@/assets/exterior-painting.jpg";
import heroHome from "@/assets/hero-home.jpg";

const differentiators = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Tri-State Licensed Coverage",
    description: "We're fully licensed in Oregon (CCB 218151), Washington (COLORMP822NT), and Idaho (RCE-52605). One contractor for your entire Pacific Northwest region.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Experienced, Stable Crews",
    description: "Our teams have worked together since before 2017, bringing consistent quality and professional standards to every project.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Complete Protection",
    description: "We carry $1,000,000 in liability insurance through Ohio Security Insurance Company and maintain a $15,000 surety bond through Nationwide Mutual Insurance.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Third-Party Validation",
    description: "BBB A+ rated since 2018 and BuildZoom score of 98, ranking in the top 16% of over 62,000 Oregon licensed contractors.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Transparent Process",
    description: "We provide free estimates with detailed property assessments, scheduled start and finish dates, and clear communication throughout your project.",
  },
];

const serviceAreas = [
  "Northeast Oregon (Hermiston, Pendleton, La Grande)",
  "Tri-Cities, Washington (Richland, Kennewick, Pasco)",
  "Boise region, Idaho",
  "Surrounding communities throughout OR, WA, ID",
];

const AboutUs = () => {
  return (
    <Layout>
      <PageHero
        preHeadline=""
        headline="Built on Desert Drywall's Legacy of Quality Craftsmanship"
        subHeadline="Color Masters Painting was created in 2017 to preserve the skilled painting crews and professional standards that Desert Drywall built its reputation on across the Pacific Northwest."
        backgroundImage={exteriorPainting}
      />

      {/* Our Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">How Color Masters Painting Began</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When Desert Drywall owner Brent Bieren passed away unexpectedly in March 2017, the decision was made to close the company after several months. Rick Wilson, who had managed Desert Drywall's Oregon projects as Brent's brother-in-law, knew these skilled painters shouldn't scatter to different companies.
              </p>
              <p>
                Rick partnered with Victor Perez, Desert Drywall's painting crew manager, to create Color Masters Painting Inc. The goal was simple: keep the crew together and take their expertise to the next level while maintaining the same professional standards Desert Drywall was known for.
              </p>
              <p>
                Today, our crews have worked together continuously for over 8 years, bringing that same dedication to quality that Desert Drywall built across Northeast Oregon, Washington, and Idaho.
              </p>
            </div>
          </div>
          <div>
            <img
              src={heroHome}
              alt="Color Masters Painting work"
              className="rounded-xl shadow-elevated"
            />
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section variant="alt">
        <SectionHeader title="Who We Are" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-card text-center">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-4">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Rick Wilson</h3>
            <p className="text-primary font-medium mb-4">Co-Owner</p>
            <p className="text-muted-foreground text-sm">
              Rick managed Desert Drywall's Oregon operations before co-founding Color Masters Painting. His experience in project management ensures every job is coordinated professionally from estimate to completion.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-card text-center">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-4">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Victor Perez</h3>
            <p className="text-primary font-medium mb-4">Co-Owner</p>
            <p className="text-muted-foreground text-sm">
              Victor led Desert Drywall's painting crews before partnering to create Color Masters Painting. His hands-on expertise ensures quality craftsmanship on every project.
            </p>
          </div>
        </div>
      </Section>

      {/* What Sets Us Apart */}
      <Section>
        <SectionHeader title="What Sets Us Apart" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Service Area */}
      <Section variant="alt">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <MapPin className="w-12 h-12 text-secondary mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-bold">Serving the Pacific Northwest</h2>
          <p className="text-lg text-muted-foreground">
            Based in Hermiston, Oregon, we serve residential and commercial properties throughout Oregon, Washington, and Idaho. Our tri-state licensing allows us to handle projects across the entire region with proper credentials and insurance coverage.
          </p>
          <div className="pt-4">
            <h3 className="font-display text-xl font-semibold mb-4">Primary Service Areas:</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <EstimateSection title="Ready to Work with Us?" />
    </Layout>
  );
};

export default AboutUs;
