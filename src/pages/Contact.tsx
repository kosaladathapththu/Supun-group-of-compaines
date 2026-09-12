import { FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Building2, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Seo, { SITE_NAME, SITE_URL } from "@/components/Seo";
import { companies } from "@/data/companies";

const methods = [
  { label: "Email", value: "info@supungroup.lk", href: "mailto:info@supungroup.lk", icon: Mail },
  { label: "Phone", value: "+94 112 055 026", href: "tel:+94112055026", icon: Phone },
  { label: "Head office", value: "Colombo, Sri Lanka", href: "https://maps.google.com/?q=Colombo,Sri+Lanka", icon: MapPin },
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
    <main className="min-h-screen text-[#10233f]" style={{ backgroundColor: "#f4f6f8" }}>
      <Seo
        title="Contact Supun Group of Companies | Colombo, Sri Lanka"
        description="Contact Supun Group of Companies in Colombo, Sri Lanka."
        keywords="Contact Supun Group, Supun Group Colombo, info@supungroup.lk"
        jsonLd={{ "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: SITE_URL, email: "info@supungroup.lk", telephone: "+94 112 055 026", address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" } }}
      />

      <section className="bg-white px-5 pb-10 pt-60 md:px-8 md:pt-64">
        <div
          className="container mx-auto overflow-hidden rounded-[2rem] border border-[#10233f]/10 shadow-[0_24px_65px_rgba(16,35,63,.10)]"
          style={{ backgroundColor: "#f3f5f1", color: "#10233f" }}
        >
          <div className="grid lg:grid-cols-[1.12fr_.88fr]">
            <div className="relative overflow-hidden px-7 py-12 md:px-12 md:py-16 lg:px-16">
              <div className="absolute -left-24 -top-36 h-96 w-96 rounded-full border border-white/10" />
              <div className="absolute -left-8 -top-20 h-60 w-60 rounded-full border border-[#78be43]/25" />
              <p className="relative flex items-center gap-3 text-xs font-bold uppercase tracking-[.24em] text-[#9bd36d]"><span className="h-px w-10 bg-[#78be43]" /> Contact us</p>
              <h1 className="relative mt-7 max-w-3xl text-5xl font-bold leading-[.98] tracking-[-.05em] md:text-6xl lg:text-7xl">Ideas begin with a conversation.</h1>
              <p className="relative mt-6 max-w-2xl text-base leading-7 text-white/68 md:text-lg">For partnerships, company enquiries or general assistance, connect with Supun Group through the channel that works best for you.</p>
              <div className="relative mt-9 flex flex-wrap gap-3">
                <a href="#enquiry" className="inline-flex items-center gap-3 rounded-full bg-[#78be43] px-6 py-3.5 text-sm font-bold text-[#0d2340] transition hover:bg-white">Send an enquiry <ArrowRight size={17} /></a>
                <span className="inline-flex items-center gap-2 px-2 py-3 text-sm text-white/55"><Clock3 size={16} className="text-[#9bd36d]" /> Mon–Fri, 9 AM–6 PM</span>
              </div>
            </div>

            <div className="border-t border-white/10 p-5 lg:border-l lg:border-t-0 md:p-8" style={{ backgroundColor: "rgba(255,255,255,.045)" }}>
              <p className="px-3 pb-4 text-xs font-bold uppercase tracking-[.2em] text-white/45">Direct contacts</p>
              <div className="overflow-hidden rounded-[1.4rem] border border-white/12">
                {methods.map(({ label, value, href, icon: Icon }) => (
                  <a key={label} href={href} target={label === "Head office" ? "_blank" : undefined} rel={label === "Head office" ? "noopener noreferrer" : undefined} className="group flex items-center gap-4 border-b border-white/10 bg-white/[.035] p-5 transition last:border-b-0 hover:bg-white/[.09] md:p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#78be43]/15 text-[#9bd36d]"><Icon size={19} /></span>
                    <span className="min-w-0"><small className="block text-[.65rem] font-bold uppercase tracking-[.17em] text-white/40">{label}</small><strong className="mt-1 block truncate text-sm md:text-base">{value}</strong></span>
                    <ArrowUpRight className="ml-auto text-white/45 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9bd36d]" size={18} />
                  </a>
                ))}
              </div>
              <p className="px-3 pt-5 text-xs leading-5 text-white/35">We usually respond to Group enquiries during the next business day.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="px-5 py-12 md:px-8 md:py-16">
        <div className="container mx-auto grid gap-7 lg:grid-cols-[.78fr_1.22fr]">
          <div className="relative overflow-hidden rounded-[1.8rem] p-8 md:p-11" style={{ backgroundColor: "#e7ecf2" }}>
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border-[42px] border-[#315f9f]/[.05]" />
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#315f9f]">Your enquiry</p>
            <h2 className="mt-5 max-w-md text-4xl font-bold leading-[1.03] tracking-[-.04em] md:text-5xl">Let’s find the right team for you.</h2>
            <p className="mt-6 max-w-md leading-7 text-[#607189]">Tell us what you need. Your email application will open with the information prepared for our Group office.</p>
            <div className="relative mt-10 rounded-2xl bg-white/75 p-5">
              <div className="flex gap-4"><Send className="mt-1 shrink-0 text-[#5c9c30]" size={20} /><div><strong className="block text-sm">One message is enough</strong><p className="mt-1 text-sm leading-6 text-[#6d7d91]">We will direct your enquiry to the most relevant company or department.</p></div></div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-[#10233f]/10 bg-white p-7 shadow-[0_18px_50px_rgba(16,35,63,.07)] md:p-10">
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="fullName">Full name</Label><Input id="fullName" name="fullName" required className="h-12 rounded-xl border-[#10233f]/15 bg-[#f8f9fa]" placeholder="Your name" /></div>
              <div className="space-y-2"><Label htmlFor="email">Email address</Label><Input id="email" name="email" type="email" required className="h-12 rounded-xl border-[#10233f]/15 bg-[#f8f9fa]" placeholder="you@company.com" /></div>
              <div className="space-y-2"><Label htmlFor="phone">Phone number</Label><Input id="phone" name="phone" className="h-12 rounded-xl border-[#10233f]/15 bg-[#f8f9fa]" placeholder="+94" /></div>
              <div className="space-y-2"><Label htmlFor="companyName">Company</Label><Input id="companyName" name="companyName" className="h-12 rounded-xl border-[#10233f]/15 bg-[#f8f9fa]" placeholder="Optional" /></div>
              <div className="space-y-2 sm:col-span-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={6} required className="resize-none rounded-xl border-[#10233f]/15 bg-[#f8f9fa]" placeholder="How can we help?" /></div>
              <div className="flex flex-col gap-4 pt-1 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#79889b]">Your details are used only to respond to this enquiry.</p>
                <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#315f9f] px-6 text-sm font-bold text-white transition hover:bg-[#0d2340]">Continue by email <ArrowRight size={16} /></button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-[#10233f]/10 bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="container mx-auto">
          <div className="grid gap-8 border-b border-[#10233f]/10 pb-9 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#5c9c30]">Company directory</p><h2 className="mt-4 text-4xl font-bold tracking-[-.04em] md:text-5xl">Contact a business directly.</h2></div>
            <p className="max-w-lg text-sm leading-6 text-[#697a90] lg:justify-self-end">Choose a company below, or use the enquiry form when you are unsure which team you need.</p>
          </div>

          <div className="mt-5 grid lg:grid-cols-2">
            {companies.map((company, index) => (
              <article key={company.id} className={`group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-[#10233f]/10 py-6 transition hover:bg-[#f6f8f4] sm:px-4 ${index % 2 === 0 ? "lg:border-r lg:pr-8" : "lg:pl-8"}`}>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf3e8] text-[#5c9c30]"><Building2 size={18} /></span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold">{company.shortName}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#6a7a8e]">
                    {company.phone && <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="hover:text-[#315f9f]">{company.phone}</a>}
                    {company.email && <a href={`mailto:${company.email}`} className="truncate hover:text-[#315f9f]">{company.email}</a>}
                    {!company.phone && !company.email && <span>Via Group head office</span>}
                  </div>
                </div>
                <ArrowUpRight className="mt-1 text-[#315f9f]/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#315f9f]" size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
