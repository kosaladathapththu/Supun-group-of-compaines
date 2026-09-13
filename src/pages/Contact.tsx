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
      <style>{`
        .contact-hero-grid { display:grid; grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr); align-items:stretch; }
        .contact-direct { background:#e9edf2!important; color:#10233f; border-color:rgba(16,35,63,.1)!important; }
        .contact-direct > p, .contact-direct small { color:#6b7b90!important; }
        .contact-direct nav, .contact-direct a { border-color:rgba(16,35,63,.11)!important; }
        .contact-direct a { background:#fff!important; color:#10233f!important; }
        .contact-direct a:hover { background:#f4f7f1!important; }
        .contact-direct svg { color:#5c9c30!important; }
        .contact-method { display:grid!important; grid-template-columns:46px minmax(0,1fr) 20px; align-items:center; gap:1rem; min-height:94px; }
        .contact-method-icon { display:grid; width:46px; height:46px; place-items:center; border-radius:50%; background:#e8f2df; }
        .enquiry-grid { position:relative; display:grid; grid-template-columns:minmax(340px,.78fr) minmax(0,1.22fr); gap:1.5rem; align-items:stretch; }
        .enquiry-grid::before { content:"→"; position:absolute; z-index:5; left:39%; top:50%; display:grid; width:54px; height:54px; place-items:center; border:7px solid #f4f6f8; border-radius:50%; background:#78be43; color:#10233f; font-size:1.35rem; font-weight:800; line-height:1; transform:translate(-50%,-50%); box-shadow:0 10px 25px rgba(16,35,63,.18); }
        .enquiry-intro { position:relative; overflow:hidden; min-height:620px; border-radius:2rem; background:linear-gradient(145deg,#071a31 0%,#102f57 100%); color:#fff; padding:3.25rem; box-shadow:0 24px 60px rgba(7,26,49,.28); }
        .enquiry-intro::before,.enquiry-intro::after { content:""; position:absolute; border-radius:50%; pointer-events:none; }
        .enquiry-intro::before { width:310px; height:310px; right:-130px; top:-105px; border:54px solid rgba(255,255,255,.065); }
        .enquiry-intro::after { width:190px; height:190px; left:-105px; bottom:-85px; border:1px solid rgba(255,255,255,.18); }
        .enquiry-note { position:relative; margin-top:3rem; border:1px solid rgba(255,255,255,.18); border-radius:1.25rem; background:rgba(255,255,255,.10); padding:1.35rem; backdrop-filter:blur(8px); }
        .enquiry-form { border:1px solid rgba(16,35,63,.1); border-radius:2rem; background:#fff; padding:3rem; box-shadow:0 24px 60px rgba(16,35,63,.09); }
        .enquiry-field { border:1px solid #dce3eb; border-radius:1rem; background:#f8fafc; padding:.8rem 1rem .45rem; transition:border-color .2s,box-shadow .2s,background .2s; }
        .enquiry-field:focus-within { border-color:#315f9f; background:#fff; box-shadow:0 0 0 4px rgba(49,95,159,.1); }
        .enquiry-field label { display:block; color:#617086; font-size:.67rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        .enquiry-field input,.enquiry-field textarea { border:0!important; background:transparent!important; padding-left:0!important; padding-right:0!important; box-shadow:none!important; }
        .directory-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1rem; }
        .directory-card { position:relative; display:flex; min-height:230px; flex-direction:column; overflow:hidden; border:1px solid rgba(16,35,63,.11); border-radius:1.5rem; background:#fff; padding:1.55rem; transition:transform .25s,border-color .25s,box-shadow .25s; }
        multiline్జ .directory-card::before { content:""; position:absolute; inset:0 auto auto 0; width:100%; height:4px; background:linear-gradient(90deg,#315f9f 0 72%,#78be43 72%); transform:scaleX(.28); transform-origin:left; transition:transform .3s; }
        .directory-card:hover { transform:translateY(-5px); border-color:rgba(49,95,159,.3); box-shadow:0 18px 42px rgba(16,35,63,.1); }
        .directory-card:hover::before { transform:scaleX(1); }
        .directory-icon { display:grid; width:46px; height:46px; place-items:center; border-radius:14px; background:#eef3f8; color:#315f9f; }
        @media(max-width:1100px) { .directory-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        @media(max-width:900px) { .contact-hero-grid { grid-template-columns:1fr; } }
        @media(max-width:900px) { .enquiry-grid { grid-template-columns:1fr; gap:1.5rem; } .enquiry-grid::before { left:50%; top:50%; transform:translate(-50%,-50%) rotate(90deg); } .enquiry-intro { min-height:auto; } .enquiry-intro,.enquiry-form { padding:1.75rem; } }
        @media(max-width:680px) { .directory-grid { grid-template-columns:1fr; } .directory-card { min-height:205px; } }
      `}</style>

      <section className="bg-white px-5 pb-10 pt-60 md:px-8 md:pt-64">
        <div
          className="container mx-auto overflow-hidden rounded-[2rem] border border-[#10233f]/10 shadow-[0_24px_65px_rgba(16,35,63,.10)]"
          style={{ backgroundColor: "#f3f5f1", color: "#10233f" }}
        >
          <div className="contact-hero-grid">
            <div className="relative overflow-hidden px-7 py-12 md:px-12 md:py-16 lg:px-16">
              <div className="absolute -left-24 -top-36 h-96 w-96 rounded-full border border-white/10" />
              <div className="absolute -left-8 -top-20 h-60 w-60 rounded-full border border-[#78be43]/25" />
              <p className="relative flex items-center gap-3 text-xs font-bold uppercase tracking-[.24em] text-[#9bd36d]"><span className="h-px w-10 bg-[#78be43]" /> Contact us</p>
              <h1 className="relative mt-7 max-w-3xl text-5xl font-bold leading-[.98] tracking-[-.05em] md:text-6xl lg:text-7xl">Ideas begin with a conversation.</h1>
              <p className="relative mt-6 max-w-2xl text-base leading-7 text-[#607189] md:text-lg">For partnerships, company enquiries or general assistance, connect with Supun Group through the channel that works best for you.</p>
              <div className="relative mt-9 flex flex-wrap gap-3">
                <a href="#enquiry" className="inline-flex items-center gap-3 rounded-full bg-[#78be43] px-6 py-3.5 text-sm font-bold text-[#0d2340] transition hover:bg-white">Send an enquiry <ArrowRight size={17} /></a>
                <span className="inline-flex items-center gap-2 px-2 py-3 text-sm text-[#687a91]"><Clock3 size={16} className="text-[#5c9c30]" /> Mon–Fri, 9 AM–6 PM</span>
              </div>
            </div>

            <div className="contact-direct border-t p-5 lg:border-l lg:border-t-0 md:p-8">
              <p className="px-3 pb-4 text-xs font-bold uppercase tracking-[.2em] text-white/45">Direct contacts</p>
              <div className="overflow-hidden rounded-[1.4rem] border border-white/12">
                {methods.map(({ label, value, href, icon: Icon }) => (
                  <a key={label} href={href} target={label === "Head office" ? "_blank" : undefined} rel={label === "Head office" ? "noopener noreferrer" : undefined} className="contact-method group border-b p-5 transition last:border-b-0 md:p-6">
                    <span className="contact-method-icon"><Icon size={19} /></span>
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
        <div className="enquiry-grid container mx-auto">
          <div className="enquiry-intro">
            <p className="relative text-xs font-bold uppercase tracking-[.22em] text-[#a9dc7d]">Your enquiry</p>
            <h2 className="relative mt-5 max-w-md text-4xl font-bold leading-[1.03] tracking-[-.04em] md:text-5xl">Let’s find the right team for you.</h2>
            <p className="relative mt-6 max-w-md leading-7 text-white/75">Tell us what you need. Your email application will open with the information prepared for our Group office.</p>
            <div className="enquiry-note">
              <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#91cf5c] text-[#10233f]"><Send size={19} /></span><div><strong className="block text-sm text-white">One message is enough</strong><p className="mt-1 text-sm leading-6 text-white/70">We will direct your enquiry to the most relevant company or department.</p></div></div>
            </div>
          </div>

          <div className="enquiry-form">
            <div className="mb-8 flex items-end justify-between gap-5 border-b border-[#10233f]/10 pb-6">
              <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#5c9c30]">Send a message</p><h3 className="mt-2 text-3xl font-bold tracking-[-.03em]">How can we help?</h3></div>
              <span className="hidden h-12 w-12 place-items-center rounded-full bg-[#eef4e9] text-[#5c9c30] sm:grid"><Mail size={20} /></span>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="enquiry-field"><Label htmlFor="fullName">Full name</Label><Input id="fullName" name="fullName" required className="h-11" placeholder="Your name" /></div>
              <div className="enquiry-field"><Label htmlFor="email">Email address</Label><Input id="email" name="email" type="email" required className="h-11" placeholder="you@company.com" /></div>
              <div className="enquiry-field"><Label htmlFor="phone">Phone number</Label><Input id="phone" name="phone" className="h-11" placeholder="+94" /></div>
              <div className="enquiry-field"><Label htmlFor="companyName">Company</Label><Input id="companyName" name="companyName" className="h-11" placeholder="Optional" /></div>
              <div className="enquiry-field sm:col-span-2"><Label htmlFor="message">Your message</Label><Textarea id="message" name="message" rows={5} required className="resize-none" placeholder="Tell us briefly about your enquiry..." /></div>
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
