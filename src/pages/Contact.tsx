import { FormEvent } from "react";
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Seo, { SITE_NAME, SITE_URL } from "@/components/Seo";
import { companies } from "@/data/companies";
import { CompanyLogo } from "@/components/CompanyLogo";

const methods = [
  { label: "Email us", value: "info@supungroup.lk", note: "General and corporate enquiries", href: "mailto:info@supungroup.lk", icon: Mail },
  { label: "Call us", value: "+94 112 055 026", note: "Monday–Friday, 9 AM–6 PM", href: "tel:+94112055026", icon: Phone },
  { label: "Visit us", value: "Colombo, Sri Lanka", note: "Supun Group head office", href: "https://maps.google.com/?q=Colombo,Sri+Lanka", icon: MapPin },
];

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry from ${String(data.get("fullName") || "Visitor")}`;
    const body = [`Name: ${data.get("fullName") || ""}`, `Email: ${data.get("email") || ""}`, `Phone: ${data.get("phone") || ""}`, `Company: ${data.get("companyName") || ""}`, "", String(data.get("message") || "")].join("\n");
    window.location.href = `mailto:info@supungroup.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen bg-white text-[#10233f]">
      <Seo title="Contact Supun Group of Companies | Colombo, Sri Lanka" description="Contact Supun Group of Companies in Colombo, Sri Lanka." keywords="Contact Supun Group, Supun Group Colombo, info@supungroup.lk" jsonLd={{ "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: SITE_URL, email: "info@supungroup.lk", telephone: "+94 112 055 026" }} />

      <section className="bg-[#10233f] py-20 text-white md:py-24">
        <div className="container mx-auto px-4"><p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-white/65"><span className="h-px w-9 bg-[#78be43]" /> Contact Supun Group</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold normal-case leading-[1.01] tracking-[-.045em] md:text-6xl">A direct line to the right people.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">For a business proposal, company question or general enquiry, we’ll help your message reach the right team.</p></div>
      </section>

      <section className="border-b border-[#10233f]/10 py-12">
        <div className="container mx-auto grid gap-4 px-4 md:grid-cols-3">{methods.map(({ label, value, note, href, icon: Icon }) => <a key={label} href={href} target={label === "Visit us" ? "_blank" : undefined} rel={label === "Visit us" ? "noopener noreferrer" : undefined} className="border border-[#10233f]/10 bg-[#fafbfd] p-6"><Icon className="text-[#315f9f]" size={22} /><p className="mt-5 text-xs font-semibold uppercase tracking-[.14em] text-[#748195]">{label}</p><strong className="mt-2 block text-lg">{value}</strong><span className="mt-2 block text-sm text-[#65758a]">{note}</span></a>)}</div>
      </section>

      <section id="send-enquiry" className="scroll-mt-28 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid overflow-hidden border border-[#10233f]/10 lg:grid-cols-[.72fr_1.28fr]">
            <div className="bg-[#f7f9fc] p-7 md:p-10"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Send an enquiry</p><h2 className="mt-4 text-3xl font-semibold normal-case md:text-4xl">Tell us what you need.</h2><p className="mt-5 leading-7 text-[#65758a]">Complete the form once. It will prepare an email to the Group office so your enquiry can be directed to the relevant company or department.</p><div className="mt-8 border-t border-[#10233f]/10 pt-5 text-sm leading-6 text-[#65758a]"><ShieldCheck className="mb-3 text-[#315f9f]" size={20} />Your details are used only to answer this enquiry.</div></div>
            <form onSubmit={handleSubmit} className="grid gap-5 bg-white p-7 md:grid-cols-2 md:p-10">
              <label className="text-sm font-semibold">Full name<input name="fullName" required className="mt-2 h-11 w-full rounded-md border border-[#10233f]/15 px-3 font-normal outline-none focus:border-[#315f9f]" placeholder="Your name" /></label>
              <label className="text-sm font-semibold">Email address<input name="email" type="email" required className="mt-2 h-11 w-full rounded-md border border-[#10233f]/15 px-3 font-normal outline-none focus:border-[#315f9f]" placeholder="you@company.com" /></label>
              <label className="text-sm font-semibold">Phone number<input name="phone" className="mt-2 h-11 w-full rounded-md border border-[#10233f]/15 px-3 font-normal outline-none focus:border-[#315f9f]" placeholder="+94" /></label>
              <label className="text-sm font-semibold">Company<input name="companyName" className="mt-2 h-11 w-full rounded-md border border-[#10233f]/15 px-3 font-normal outline-none focus:border-[#315f9f]" placeholder="Optional" /></label>
              <label className="text-sm font-semibold md:col-span-2">Your message<textarea name="message" rows={5} required className="mt-2 w-full rounded-md border border-[#10233f]/15 p-3 font-normal outline-none focus:border-[#315f9f]" placeholder="Tell us briefly about your enquiry..." /></label>
              <div className="md:col-span-2 flex justify-end border-t border-[#10233f]/10 pt-5"><button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#10233f] px-6 py-3 text-sm font-semibold text-white">Prepare email <ArrowRight size={16} /></button></div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-[#10233f]/10 bg-[#f7f9fc] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Company directory</p><h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">Contact a business directly.</h2></div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{companies.map((company) => {
            const destination = company.website || (company.email ? `mailto:${company.email}` : company.phone ? `tel:${company.phone.replace(/[^+\d]/g, "")}` : "mailto:info@supungroup.lk");
            return <article key={company.id} className="flex min-h-[260px] flex-col border border-[#10233f]/10 bg-white p-5"><CompanyLogo companyId={company.id} companyName={company.shortName} className="h-24 w-full bg-[#fafbfd] p-2" imageClassName="h-full w-full object-contain" /><h3 className="mt-5 text-xl font-semibold normal-case">{company.shortName}</h3><p className="mt-1 text-sm text-[#65758a]">{company.industry}</p><div className="mt-auto pt-5">{company.email && <p className="text-sm text-[#65758a]">{company.email}</p>}{company.phone && <p className="mt-1 text-sm text-[#65758a]">{company.phone}</p>}<a href={destination} target={company.website ? "_blank" : undefined} rel={company.website ? "noopener noreferrer" : undefined} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#10233f]">Contact / visit <ArrowRight size={15} /></a></div></article>;
          })}</div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
