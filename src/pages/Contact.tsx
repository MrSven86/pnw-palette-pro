import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

import heroHome from "@/assets/hero-home.jpg";

const serviceAreas = [
  "Northeast Oregon (Hermiston, Pendleton, La Grande)",
  "Tri-Cities, Washington (Richland, Kennewick, Pasco)",
  "Boise region, Idaho",
  "Surrounding communities throughout OR, WA, ID",
];

const contactSteps = [
  {
    step: 1,
    description: "We'll contact you within 1 business day to discuss your project and schedule a free property assessment.",
  },
  {
    step: 2,
    description: "We visit your property to evaluate the scope of work and discuss your specific needs and preferences.",
  },
  {
    step: 3,
    description: "You'll receive a detailed written estimate with clear pricing and project timeline.",
  },
  {
    step: 4,
    description: "Once approved, we schedule your project with specific start and finish dates.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    propertyType: "residential",
    serviceNeeded: "interior",
    message: "",
    contactMethod: "phone",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 1 business day to discuss your project.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      propertyType: "residential",
      serviceNeeded: "interior",
      message: "",
      contactMethod: "phone",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroHome})` }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-4">
            Get in Touch with Color Masters Painting
          </h1>
          <p className="text-lg md:text-xl text-card/90 max-w-2xl mx-auto">
            Request a free estimate or call us directly. We serve residential and commercial properties across Oregon, Washington, and Idaho.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h2 className="font-display text-2xl font-semibold mb-6">Request Your Free Estimate</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Property Address</label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="123 Main St, City, State"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Property Type</label>
                  <select
                    className="w-full h-11 px-3 rounded-lg border border-input bg-background"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Needed</label>
                  <select
                    className="w-full h-11 px-3 rounded-lg border border-input bg-background"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  >
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="epoxy">Epoxy Flooring</option>
                    <option value="cabinets">Cabinet Refinishing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Description</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                <select
                  className="w-full h-11 px-3 rounded-lg border border-input bg-background"
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                >
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                </select>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send My Request
              </Button>
            </form>
          </div>

          {/* Direct Contact */}
          <div className="space-y-8">
            <div className="bg-background-alt rounded-xl p-8">
              <h2 className="font-display text-2xl font-semibold mb-6">Direct Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us Directly:</p>
                    <a href="tel:509-554-1969" className="text-secondary hover:underline block">509-554-1969</a>
                    <a href="tel:208-447-7085" className="text-secondary hover:underline block">208-447-7085</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <a href="mailto:contact@colormasterspaintinginc.com" className="text-secondary hover:underline break-all">
                      contact@colormasterspaintinginc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Mailing Address:</p>
                    <p className="text-muted-foreground">
                      Color Masters Painting Inc.<br />
                      PO Box 334<br />
                      Hermiston, OR 97838
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Hours:</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Licensed States */}
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold mb-4">Licensed in Three States:</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p><strong>Oregon:</strong> CCB 218151</p>
                <p><strong>Washington:</strong> COLORMP822NT</p>
                <p><strong>Idaho:</strong> RCE-52605</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Area */}
      <Section variant="alt">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl font-bold">Where We Serve</h2>
          <p className="text-muted-foreground">
            Color Masters Painting is licensed to serve properties throughout Oregon, Washington, and Idaho. We're based in Hermiston, Oregon, and serve the broader Pacific Northwest region.
          </p>
          <div className="pt-4">
            <h3 className="font-semibold mb-4">Primary Service Areas:</h3>
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

      {/* What to Expect */}
      <Section>
        <SectionHeader title="What Happens Next?" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactSteps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Credentials */}
      <Section variant="alt">
        <SectionHeader title="Licensed, Insured, and Trusted" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 shadow-soft text-center">
            <Award className="w-10 h-10 text-secondary mx-auto mb-3" />
            <p className="font-semibold">BBB Accredited</p>
            <p className="text-sm text-muted-foreground">A+ Rating Since 2018</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-soft text-center">
            <Award className="w-10 h-10 text-secondary mx-auto mb-3" />
            <p className="font-semibold">Top 16% Score</p>
            <p className="text-sm text-muted-foreground">98 out of 100</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-soft text-center">
            <Shield className="w-10 h-10 text-secondary mx-auto mb-3" />
            <p className="font-semibold">$1M Liability</p>
            <p className="text-sm text-muted-foreground">Fully Insured</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-soft text-center">
            <MapPin className="w-10 h-10 text-secondary mx-auto mb-3" />
            <p className="font-semibold">Tri-State Licensed</p>
            <p className="text-sm text-muted-foreground">OR, WA, ID</p>
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-8">
          Have questions before requesting an estimate? Call us at <a href="tel:509-554-1969" className="text-secondary font-medium hover:underline">509-554-1969</a> or <a href="tel:208-447-7085" className="text-secondary font-medium hover:underline">208-447-7085</a> to speak with Rick or Victor directly.
        </p>
      </Section>
    </Layout>
  );
};

export default Contact;
