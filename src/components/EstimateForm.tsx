import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const inputClass = "w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary";
const selectClass = `${inputClass} bg-white`;

export function EstimateForm() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    propertyType: "Residential",
    service: "Interior Painting",
    description: "",
    contactMethod: "Phone",
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const message = [
      form.description && `Project Description: ${form.description}`,
      form.address && `Property Address: ${form.address}`,
      `Property Type: ${form.propertyType}`,
      `Service Needed: ${form.service}`,
      `Preferred Contact Method: ${form.contactMethod}`,
    ].filter(Boolean).join("\n");

    setSubmitting(true);
    try {
      const res = await fetch("https://velocity-contact-form-api.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message,
          website: "colormastersinc.com",
          clientEmail: "tomas.gustav.eriksson@gmail.com",
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Your estimate request has been sent! We'll be in touch soon.");
      setForm({ name: "", phone: "", email: "", address: "", propertyType: "Residential", service: "Interior Painting", description: "", contactMethod: "Phone" });
    } catch {
      toast.error("Something went wrong. Please call us directly or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
        <input type="text" placeholder="Your full name" className={inputClass} value={form.name} onChange={update("name")} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
          <input type="tel" placeholder="(555) 555-5555" className={inputClass} value={form.phone} onChange={update("phone")} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
          <input type="email" placeholder="you@example.com" className={inputClass} value={form.email} onChange={update("email")} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Property Address</label>
        <input type="text" placeholder="123 Main St, City, State" className={inputClass} value={form.address} onChange={update("address")} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Property Type</label>
          <select className={selectClass} value={form.propertyType} onChange={update("propertyType")}>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Service Needed</label>
          <select className={selectClass} value={form.service} onChange={update("service")}>
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
        <textarea rows={3} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} value={form.description} onChange={update("description")} />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Preferred Contact Method</label>
        <select className={selectClass} value={form.contactMethod} onChange={update("contactMethod")}>
          <option>Phone</option>
          <option>Email</option>
          <option>Text</option>
        </select>
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send My Request"}
      </Button>
    </form>
  );
}
