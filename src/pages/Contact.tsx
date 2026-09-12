import { FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Building2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Seo, { SITE_NAME, SITE_URL } from "@/components/Seo";
import { companies } from "@/data/companies";

const contactMethods = [
  { label: "Email us", value: "info@supungroup.lk", href: "mailto:info@supungroup.lk", icon: Mail },
  { label: "Call us", value: "+94 112 055 026", href: "tel:+94112055026", icon: Phone },
  { label: "Visit us", value: "Colombo, Sri Lanka", href: "https://maps.google.com/?q=Colombo,Sri+Lanka", icon: MapPin },
];

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry from ${String(data.get("fullName") || "Visitor")}`;
    const body = [
      `Name: ${String(data.get("fullName") || "")}`,
      `Email: ${String(data.get("email") || "")}`,
      `Phone: ${String(data.get("phone") || "")}`,
      `Company: ${String(data.get("companyName") || "")}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:info@supungroup.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#10233f]">
      <Seo
        title="Contact Supun Group of Companies | Colombo, Sri Lanka"
        description="Contact Supun Group of Companies in Colombo, Sri Lanka. Find the Group's phone, email, business hours and company directory."
        keywords="Contact Supun Group, Supun Group Colombo, info@supungroup.lk, Supun companies contact"
        jsonLd={{ "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: SITE_URL, email: "info@supungroup.lk", telephone: "+94 112 055 026", address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" } }}
      />

      <section className="relative overflow-hidden border-b border-[#10233f]/10 bg-[#fafaf8] pb-14 pt-36 md:pb-20 md:pt-44">
        <div className="pointer-events-none absolute -right-20 top-24 select-none text-[25rem] font-bold leading-none text-[#10233f]/[0.025]">C</div>
        <div className="container relative mx-auto px-6 lg:px-12">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#315f9f]">
            <span className="h-px w-12 bg-[#78be43]" /> Contact Supun Group
          </p>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.25fr_.75fr]">
            <h1 className="max-w-4xl text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-6xl md:text-8xl">
              Let’s start a meaningful conversation.
            </h1>
            <p className="max-w-lg border-l border-[#78be43] pl-6 text-lg leading-8 text-[#61718a]">
              Whether you are exploring a partnership, contacting one of our companies, or simply have a question—we are ready to listen.
            </p>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[1.5rem] border border-[#10233f]/10 bg-white shadow-[0_20px_60px_rgba(16,35,63,.07)] md:grid-cols-3">
            {contactMethods.map(({ label, value, href, icon: Icon }, index) => (
              <a key={label} href={href} target={label === "Visit us" ? "_blank" : undefined} rel={label === "Visit us" ? "noopener noreferrer" : undefined} className={`group flex items-center gap-5 p-6 transition hover:bg-[#f2f6ed] md:p-8 ${index ? "border-t border-[#10233f]/10 md:border-l md:border-t-0" : ""}`}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#edf4e8] text-[#528b2d]"><Icon size={20} /></span>
                <span className="min-w-0"><small className="block text-xs font-bold uppercase tracking-[.16em] text-[#8090a6]">{label}</small><strong className="mt-1 block truncate text-base text-[#10233f]">{value}</strong></span>
                <ArrowUpRight className="ml-auto text-[#315f9f] transition group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[.72fr_1.28fr] lg:px-12">
          <aside className="flex flex-col justify-between rounded-[2rem] bg-[#10233f] p-8 text-white md:p-11">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#8ed05b]">Send an enquiry</p>
              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-.035em] md:text-5xl">Tell us how we can help.</h2>
              <p className="mt-6 max-w-sm leading-7 text-white/65">Share a few details and your email application will open with a prepared message to our Group office.</p>
            </div>
            <div className="mt-14 border-t border-white/15 pt-7">
              <div className="flex items-start gap-4"><Clock className="mt-1 text-[#8ed05b]" size={20} /><div><strong className="block">Business hours</strong><p className="mt-2 text-sm leading-6 text-white/55">Monday–Friday, 9:00 AM–6:00 PM<br />Saturday, 9:00 AM–1:00 PM</p></div></div>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-[#10233f]/10 bg-white p-7 shadow-[0_20px_60px_rgba(16,35,63,.06)] md:p-11">
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="fullName">Full name</Label><Input id="fullName" name="fullName" required className="h-13 rounded-xl border-[#10233f]/15 bg-[#fafaf8]" placeholder="Your name" /></div>
              <div className="space-y-2"><Label htmlFor="email">Email address</Label><Input id="email" name="email" type="email" required className="h-13 rounded-xl border-[#10233f]/15 bg-[#fafaf8]" placeholder="you@company.com" /></div>
              <div className="space-y-2"><Label htmlFor="phone">Phone number</Label><Input id="phone" name="phone" className="h-13 rounded-xl border-[#10233f]/15 bg-[#fafaf8]" placeholder="+94" /></div>
              <div className="space-y-2"><Label htmlFor="companyName">Company</Label><Input id="companyName" name="companyName" className="h-13 rounded-xl border-[#10233f]/15 bg-[#fafaf8]" placeholder="Company name" /></div>
              <div className="space-y-2 sm:col-span-2"><Label htmlFor="message">How can we help?</Label><Textarea id="message" name="message" rows={7} required className="resize-none rounded-xl border-[#10233f]/15 bg-[#fafaf8]" placeholder="Tell us about your enquiry..." /></div>
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-[#718097]">Your details are used only to respond to this enquiry.</p>
                <button type="submit" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#315f9f] px-7 font-bold text-white transition hover:bg-[#10233f]">
                  Continue by email <Send size={17} className="transition group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-[#10233f]/10 bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#315f9f]">Company directory</p><h2 className="mt-4 text-4xl font-bold tracking-[-.04em] md:text-6xl">Reach the right team.</h2></div>
            <p className="max-w-md leading-7 text-[#66758b]">Contact a Group company directly or use the enquiry form above for general requests.</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-[#10233f]/10 bg-[#10233f]/10 md:grid-cols-2 xl:grid-cols-3">
            {companies.map((company) => (
              <article key={company.id} className="group flex min-h-60 flex-col bg-[#fafaf8] p-7 transition hover:bg-[#f0f5eb]">
                <div className="flex items-start justify-between gap-4"><span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#315f9f] shadow-sm"><Building2 size={19} /></span><ArrowUpRight className="text-[#78be43] transition group-hover:-translate-y-1 group-hover:translate-x-1" size={19} /></div>
                <h3 className="mt-7 text-2xl font-bold tracking-[-.025em]">{company.shortName}</h3>
                <div className="mt-auto space-y-2 pt-6 text-sm">
                  {company.phone && <a className="flex items-center gap-2 text-[#315f9f] hover:underline" href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}><Phone size={14} />{company.phone}</a>}
                  {company.email && <a className="flex items-center gap-2 break-all text-[#315f9f] hover:underline" href={`mailto:${company.email}`}><Mail size={14} />{company.email}</a>}
                  {company.location && <p className="flex items-start gap-2 text-[#718097]"><MapPin size={14} className="mt-0.5 shrink-0" />{company.location}</p>}
                  {!company.phone && !company.email && !company.location && <a href="mailto:info@supungroup.lk" className="inline-flex items-center gap-2 font-semibold text-[#315f9f]">Contact Group office <ArrowRight size={14} /></a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
