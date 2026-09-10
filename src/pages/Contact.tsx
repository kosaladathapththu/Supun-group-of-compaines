import { FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Seo, { SITE_NAME, SITE_URL } from "@/components/Seo";
import { companies } from "@/data/companies";

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry from ${String(data.get("fullName") || "Visitor")}`;
    const body = [`Name: ${String(data.get("fullName") || "")}`, `Email: ${String(data.get("email") || "")}`, `Phone: ${String(data.get("phone") || "")}`, `Company: ${String(data.get("companyName") || "")}`, "", String(data.get("message") || "")].join("\n");
    window.location.href = `mailto:info@supungroup.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return <div className="min-h-screen">
    <Seo title="Contact Supun Group of Companies | Colombo, Sri Lanka" description="Contact Supun Group of Companies in Colombo, Sri Lanka. Find the Group's phone, email, business hours and company directory." keywords="Contact Supun Group, Supun Group Colombo, info@supungroup.lk, Supun companies contact" jsonLd={{"@context":"https://schema.org","@type":"Organization",name:SITE_NAME,url:SITE_URL,email:"info@supungroup.lk",telephone:"+94 112 055 026",address:{"@type":"PostalAddress",addressLocality:"Colombo",addressCountry:"LK"}}} />
    <section className="gradient-hero py-24 text-white text-center"><div className="container mx-auto px-4"><p className="text-accent font-semibold uppercase tracking-[0.2em] mb-4">Contact</p><h1 className="text-5xl md:text-6xl normal-case mb-6">Get in touch with Supun Group</h1><p className="text-xl max-w-3xl mx-auto text-white/85">Group enquiries and contact details for our companies.</p></div></section>
    <section className="py-16 bg-muted/40"><div className="container mx-auto px-4"><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
      <Card><CardContent className="p-6"><Mail className="text-primary mb-4" /><h2 className="text-lg normal-case">Email</h2><a className="text-primary hover:underline break-all" href="mailto:info@supungroup.lk">info@supungroup.lk</a></CardContent></Card>
      <Card><CardContent className="p-6"><Phone className="text-primary mb-4" /><h2 className="text-lg normal-case">Phone</h2><a className="text-primary hover:underline" href="tel:+94112055026">+94 112 055 026</a></CardContent></Card>
      <Card><CardContent className="p-6"><MapPin className="text-primary mb-4" /><h2 className="text-lg normal-case">Location</h2><p className="text-muted-foreground">Colombo, Sri Lanka</p></CardContent></Card>
      <Card><CardContent className="p-6"><Clock className="text-primary mb-4" /><h2 className="text-lg normal-case">Business Hours</h2><p className="text-sm text-muted-foreground">Mon–Fri 9:00 AM–6:00 PM<br />Sat 9:00 AM–1:00 PM<br />Sun Closed</p></CardContent></Card>
    </div></div></section>
    <section className="py-20"><div className="container mx-auto px-4 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 max-w-6xl"><div><p className="text-accent font-semibold uppercase tracking-wider mb-3">Send an Enquiry</p><h2 className="text-4xl normal-case mb-5">Tell us how we can help</h2><p className="text-muted-foreground leading-relaxed mb-5">Complete the form and your email application will open with the details prepared for Supun Group.</p><p className="text-sm text-muted-foreground">A server-side form endpoint can be connected later if the Group wants messages stored directly from the website.</p></div><Card className="shadow-elegant"><CardContent className="p-7"><form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5"><div className="space-y-2"><Label htmlFor="fullName">Full Name</Label><Input id="fullName" name="fullName" required /></div><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required /></div><div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" /></div><div className="space-y-2"><Label htmlFor="companyName">Company Name</Label><Input id="companyName" name="companyName" /></div><div className="space-y-2 sm:col-span-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={6} required /></div><div className="sm:col-span-2"><Button type="submit" size="lg">Continue by Email</Button></div></form></CardContent></Card></div></section>
    <section className="py-20 bg-muted/50"><div className="container mx-auto px-4 max-w-7xl"><div className="text-center max-w-3xl mx-auto mb-12"><p className="text-accent font-semibold uppercase tracking-wider mb-3">Company Directory</p><h2 className="text-4xl normal-case">Contact our companies</h2></div><div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{companies.map((company) => <Card key={company.id} className="h-full"><CardContent className="p-6"><h3 className="text-xl normal-case">{company.shortName}</h3><div className="mt-4 space-y-3 text-sm">{company.phone && <a className="flex gap-2 text-primary hover:underline" href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}><Phone size={16} className="shrink-0 mt-0.5" />{company.phone}</a>}{company.email && <a className="flex gap-2 text-primary hover:underline break-all" href={`mailto:${company.email}`}><Mail size={16} className="shrink-0 mt-0.5" />{company.email}</a>}{company.location && <div className="flex gap-2 text-muted-foreground"><MapPin size={16} className="shrink-0 mt-0.5" />{company.location}</div>}{!company.phone && !company.email && !company.location && <p className="text-muted-foreground">Please contact the Group head office for this company.</p>}</div></CardContent></Card>)}</div></div></section>
  </div>;
};

export default Contact;
