import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import estimateBg from "@/assets/estimate-bg.avif";
import bbbAplus from "@/assets/bbb-aplus.png";
import bbbAccredited from "@/assets/bbb-accredited.png";

interface EstimateSectionProps {
  title?: string;
}

const benefits = [
  { bold: "Tri-state licensed coverage", text: "One contractor for your entire Pacific Northwest portfolio" },
  { bold: "Experienced, stable crews", text: "Same team working together for 8+ years" },
  { bold: "Complete protection", text: "$1M liability insurance and proper licensing in all three states" },
  { bold: "Transparent process", text: "Free estimates with detailed property assessments and scheduled start/finish dates" },
  { bold: "BBB A+ rated service", text: "Maintaining accreditation since 2018" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function EstimateSection({ title = "Why Property Owners\nChoose Color Masters:" }: EstimateSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={estimateBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Side - Why Choose Us */}
          <motion.div 
            className="text-white pt-12"
            variants={containerVariants}
          >
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold mb-8 whitespace-pre-line"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" as const }
                },
              }}
            >
              {title}
            </motion.h2>
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>{benefit.bold}</strong> – {benefit.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div 
              className="flex items-center gap-4 mt-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 }
                },
              }}
            >
              <img src={bbbAplus} alt="BBB A+ Rating" className="h-12 w-auto" />
              <img src={bbbAccredited} alt="BBB Accredited Business" className="h-10 w-auto" />
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.7, 
                  ease: "easeOut" as const,
                }
              },
            }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Request Your Free Estimate
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                <input 
                  type="text" 
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 555-5555"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Property Address</label>
                <input 
                  type="text" 
                  placeholder="123 Main St, City, State"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Property Type</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Service Needed</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Cabinet Refinishing</option>
                    <option>Epoxy Flooring</option>
                    <option>Commercial Painting</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Project Description</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Preferred Contact Method</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                  <option>Phone</option>
                  <option>Email</option>
                  <option>Text</option>
                </select>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send My Request
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
