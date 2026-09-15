import { FormEvent, type CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Clock3, Globe2, Mail, MapPin, Phone, PhoneCall, Send, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
    <main className="contact-page min-h-screen text-[#10233f]">
      <Seo title="Contact Supun Group of Companies | Colombo, Sri Lanka" description="Contact Supun Group of Companies in Colombo, Sri Lanka." keywords="Contact Supun Group, Supun Group Colombo, info@supungroup.lk" jsonLd={{ "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: SITE_URL, email: "info@supungroup.lk", telephone: "+94 112 055 026" }} />
      <style>{`
        .contact-page{background:#f5f6f4}.contact-shell{width:min(1540px,calc(100% - 40px));margin-inline:auto}
        .contact-hero{position:relative;overflow:hidden;border:1px solid rgba(16,35,63,.1);border-radius:0 0 42px 42px;background:#fff}.contact-hero:after{content:"";position:absolute;width:520px;height:520px;right:-210px;top:-250px;border:78px solid rgba(120,190,67,.08);border-radius:50%}
        .hero-layout{display:grid;grid-template-columns:minmax(0,1.18fr) minmax(390px,.82fr);min-height:430px;align-items:end}.contact-methods{display:grid;gap:10px;padding:28px;border-radius:30px 30px 0 0;background:#10233f;color:#fff}
        .contact-method{display:grid;grid-template-columns:48px minmax(0,1fr) 36px;align-items:center;gap:15px;padding:17px;border:1px solid rgba(255,255,255,.12);border-radius:17px;transition:.25s ease}.contact-method:hover{transform:translateX(-5px);background:rgba(255,255,255,.08);border-color:rgba(155,211,109,.45)}.method-icon{display:grid;width:48px;height:48px;place-items:center;border-radius:14px;background:#78be43;color:#10233f}
        .enquiry-wrap{display:grid;grid-template-columns:minmax(300px,.68fr) minmax(0,1.32fr);overflow:hidden;border:1px solid rgba(16,35,63,.1);border-radius:32px;background:#fff;box-shadow:0 28px 70px rgba(16,35,63,.09)}.enquiry-message{position:relative;overflow:hidden;display:flex;min-height:620px;flex-direction:column;padding:52px;background:linear-gradient(145deg,#0d2a55,#173f7a);color:#fff}.enquiry-message:before{content:"";position:absolute;width:280px;height:280px;right:-130px;top:-100px;border:46px solid rgba(255,255,255,.06);border-radius:50%}
        .enquiry-steps{display:grid;gap:14px;margin-top:auto;padding-top:44px}.enquiry-step{display:grid;grid-template-columns:34px 1fr;gap:13px;align-items:center;padding:14px;border:1px solid rgba(255,255,255,.14);border-radius:15px;background:rgba(255,255,255,.07)}.step-number{display:grid;width:34px;height:34px;place-items:center;border-radius:50%;background:#78be43;color:#10233f;font-size:12px;font-weight:800}
        .form-panel{padding:52px}.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.field{border:1px solid #dce2e9;border-radius:15px;background:#f7f9fa;padding:10px 15px 5px;transition:.2s ease}.field:focus-within{border-color:#315f9f;background:#fff;box-shadow:0 0 0 4px rgba(49,95,159,.1)}.field label{display:block;color:#68778c;font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.field input,.field textarea{border:0!important;background:transparent!important;padding-inline:0!important;box-shadow:none!important}
        .directory-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.company-card{--brand:#315f9f;position:relative;display:flex;min-height:350px;flex-direction:column;overflow:hidden;border:1px solid rgba(16,35,63,.12);border-radius:20px;background:#fff;box-shadow:0 8px 28px rgba(16,35,63,.045);transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease}.company-card:before{content:"";position:absolute;inset:0 0 auto;height:4px;background:var(--brand);z-index:3}
        .company-card:hover{transform:translateY(-6px);border-color:color-mix(in srgb,var(--brand) 38%,transparent);box-shadow:0 22px 55px rgba(16,35,63,.12)}
        .company-logo-zone{position:relative;display:flex;height:150px;align-items:center;justify-content:center;overflow:hidden;border-bottom:1px solid rgba(16,35,63,.08);background:#f7f9fb}.company-logo{position:relative;z-index:1;width:220px;height:105px;background:transparent!important}.company-logo img{width:100%;height:100%;max-width:100%!important;max-height:100%!important;object-fit:contain;mix-blend-mode:normal;transform:none}.company-card-body{display:flex;flex:1;flex-direction:column;padding:24px}.company-sector{color:#315f9f;background:#edf3f9;border-color:#d7e2ee}
        .company-contact-row{display:flex;min-height:43px;align-items:center;gap:10px;border-top:1px solid rgba(16,35,63,.08);padding-top:15px;color:#53657b}.company-contact-row>svg{color:var(--brand)}.company-action{display:flex!important;width:auto!important;height:42px!important;align-items:center!important;justify-content:center!important;gap:8px;padding:0 16px!important;border-radius:999px;background:#10233f;color:#fff;font-size:12px;font-weight:800;white-space:nowrap;box-shadow:0 7px 18px rgba(16,35,63,.18);transition:.25s ease}.company-action svg{position:static!important;inset:auto!important;display:block!important;margin:0!important;transform:none!important;color:currentColor!important}.company-action .action-arrow{opacity:.65;transition:transform .25s ease}.company-card:hover .company-action{background:#5c9c30;transform:translateY(-2px)}.company-card:hover .company-action .action-arrow{transform:translate(2px,-2px)!important}
        @media(max-width:1050px){.hero-layout,.enquiry-wrap{grid-template-columns:1fr}.hero-layout{padding-top:80px}.contact-methods{border-radius:30px;margin:0 28px 28px}.enquiry-message{min-height:auto}.directory-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:680px){.contact-shell{width:min(100% - 24px,1540px)}.contact-hero{border-radius:0 0 28px 28px}.contact-methods{margin:0 14px 14px;padding:14px}.enquiry-message,.form-panel{padding:28px 22px}.form-grid,.directory-grid{grid-template-columns:1fr}}
      `}</style>

      <section className="contact-hero px-5 pt-0 md:px-8">
        <div className="contact-shell hero-layout relative z-10">
          <div className="pb-14 pr-6 md:pb-20 lg:pr-16">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#315f9f]"><span className="h-px w-11 bg-[#78be43]" /> Contact Supun Group</p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[.96] tracking-[-.055em] md:text-7xl lg:text-[5.6rem]">A direct line to the right people.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#65758a] md:text-lg">For a business proposal, a company question or a general enquiry, we’ll help your message reach the right team.</p>
            <a href="#send-enquiry" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#78be43] px-7 py-4 text-sm font-bold transition hover:bg-[#10233f] hover:text-white">Start an enquiry <ArrowRight size={17} /></a>
          </div>
          <aside className="contact-methods">
            <div className="mb-1 flex items-center justify-between px-2"><p className="text-xs font-bold uppercase tracking-[.2em] text-white/55">Connect directly</p><span className="h-2 w-2 rounded-full bg-[#78be43]" /></div>
            {methods.map(({ label, value, note, href, icon: Icon }) => <a key={label} href={href} target={label === "Visit us" ? "_blank" : undefined} rel={label === "Visit us" ? "noopener noreferrer" : undefined} className="contact-method group"><span className="method-icon"><Icon size={20} /></span><span className="min-w-0"><small className="block text-[10px] font-bold uppercase tracking-[.15em] text-white/45">{label}</small><strong className="mt-1 block truncate text-sm">{value}</strong><span className="mt-1 block text-xs text-white/50">{note}</span></span><ArrowUpRight className="text-white/45 transition group-hover:text-[#9bd36d]" size={18} /></a>)}
          </aside>
        </div>
      </section>

      <section id="send-enquiry" className="px-5 py-16 md:px-8 md:py-24">
        <div className="contact-shell enquiry-wrap">
          <div className="enquiry-message">
            <p className="relative text-xs font-bold uppercase tracking-[.23em] text-[#a4da78]">One message. The right team.</p><h2 className="relative mt-6 text-4xl font-bold leading-[1.02] tracking-[-.04em] md:text-5xl">Tell us what you need.</h2><p className="relative mt-6 max-w-md leading-7 text-white/70">Complete the form once and we will direct your enquiry to the relevant company or department.</p>
            <div className="enquiry-steps"><div className="enquiry-step"><span className="step-number">1</span><p className="text-sm text-white/70"><strong className="text-white">Share your details</strong><br />Give us the essentials.</p></div><div className="enquiry-step"><span className="step-number">2</span><p className="text-sm text-white/70"><strong className="text-white">Write one message</strong><br />We’ll identify the right team.</p></div><div className="flex items-center gap-2 pt-2 text-xs text-white/50"><Clock3 size={15} className="text-[#9bd36d]" /> Usually answered the next business day.</div></div>
          </div>
          <div className="form-panel">
            <div className="mb-8 flex items-start justify-between gap-5 border-b border-[#10233f]/10 pb-7"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#5c9c30]">Your enquiry</p><h3 className="mt-2 text-3xl font-bold tracking-[-.035em]">How can we help?</h3></div><span className="grid h-12 w-12 place-items-center rounded-full bg-[#edf4e8] text-[#5c9c30]"><Send size={20} /></span></div>
            <form onSubmit={handleSubmit} className="form-grid">
              <div className="field"><Label htmlFor="fullName">Full name</Label><Input id="fullName" name="fullName" required className="h-11" placeholder="Your name" /></div><div className="field"><Label htmlFor="email">Email address</Label><Input id="email" name="email" type="email" required className="h-11" placeholder="you@company.com" /></div><div className="field"><Label htmlFor="phone">Phone number</Label><Input id="phone" name="phone" className="h-11" placeholder="+94" /></div><div className="field"><Label htmlFor="companyName">Company</Label><Input id="companyName" name="companyName" className="h-11" placeholder="Optional" /></div><div className="field sm:col-span-2"><Label htmlFor="message">Your message</Label><Textarea id="message" name="message" rows={5} required className="resize-none" placeholder="Tell us briefly about your enquiry..." /></div>
              <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"><p className="flex items-center gap-2 text-xs text-[#718095]"><ShieldCheck size={15} className="text-[#5c9c30]" /> Used only to answer this enquiry.</p><button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#10233f] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#315f9f]">Prepare email <ArrowRight size={16} /></button></div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-[#10233f]/10 bg-white px-5 py-16 md:px-8 md:py-24">
        <div className="contact-shell"><div className="grid gap-7 border-b border-[#10233f]/10 pb-9 lg:grid-cols-[1fr_.65fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.23em] text-[#5c9c30]">Company directory</p><h2 className="mt-4 text-4xl font-bold tracking-[-.045em] md:text-5xl">Contact a business directly.</h2></div><p className="max-w-lg text-sm leading-7 text-[#6d7c90] lg:justify-self-end">Already know who you need? Connect directly with a Supun Group company.</p></div>
          <div className="directory-grid mt-8">{companies.map((company) => {
            const destination = company.website || (company.email ? `mailto:${company.email}` : company.phone ? `tel:${company.phone.replace(/[^+\d]/g, "")}` : "mailto:info@supungroup.lk");
            const brandColours: Record<string,string> = {"supun-traders":"#e5222a","supun-super-center":"#e2b600","supun-arcade-residency":"#00a6d6","area-56":"#17253b","supun-aerosoft":"#e32b37","aerostar-home-appliances":"#1e6b8d","camy-smart":"#ef2029","rodsons":"#315f9f","new-camy-smart":"#ef2029","fuji-industries":"#315f9f","camy-global":"#ef2029"};
            return <article key={company.id} className="company-card group" style={{"--brand":brandColours[company.id] || "#315f9f"} as CSSProperties}>
              <div className="company-logo-zone"><CompanyLogo companyId={company.id} companyName={company.shortName} className="company-logo" /></div>
              <div className="company-card-body">
                <div className="flex items-center justify-between gap-3"><span className="company-sector rounded-full border px-3 py-1 text-[9px] font-extrabold uppercase tracking-[.13em]">{company.industry}</span>{company.established && <span className="text-[10px] font-bold uppercase tracking-[.12em] text-[#8a96a6]">Since {company.established}</span>}</div>
                <div className="mt-5 flex-1"><h3 className="text-xl font-bold leading-tight">{company.shortName}</h3><p className="mt-2 text-sm leading-6 text-[#718095]">{company.tagline}</p></div>
                <div className="company-contact-row mt-5"><Phone size={15} className="shrink-0"/><span className="min-w-0 flex-1 truncate text-xs font-semibold">{company.phone || company.email || "Group office"}</span><a href={destination} target={company.website ? "_blank" : undefined} rel={company.website ? "noopener noreferrer" : undefined} className="company-action" aria-label={`Contact ${company.shortName}`}>{company.website ? <Globe2 size={16}/> : company.email ? <Mail size={16}/> : <PhoneCall size={16}/>}<span>{company.website ? "Website" : company.email ? "Email" : "Call"}</span><ArrowUpRight className="action-arrow" size={14}/></a></div>
              </div>
            </article>;
          })}</div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
