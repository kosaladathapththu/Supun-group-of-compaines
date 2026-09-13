import { FormEvent, useState } from "react";
import { ArrowRight, Building2, Factory, GraduationCap, Hotel, Send, ShoppingBag, Sparkles, Users } from "lucide-react";
import Seo from "@/components/Seo";

const areas = [
  { name: "Manufacturing", text: "Production, engineering, quality and supply chain.", icon: Factory },
  { name: "Retail & Distribution", text: "Sales, customer experience, logistics and commerce.", icon: ShoppingBag },
  { name: "Hospitality", text: "Guest services, operations, food and beverage.", icon: Hotel },
  { name: "Group Services", text: "Finance, people, marketing and technology.", icon: Building2 },
];

const Careers = () => {
  const [selected, setSelected] = useState("All areas");

  const submitInterest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "Candidate");
    const subject = `Career interest — ${String(data.get("area") || "General")} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Career area: ${data.get("area") || ""}`,
      `Profile: ${data.get("profile") || ""}`,
      "",
      String(data.get("message") || ""),
      "",
      "Please attach your CV before sending.",
    ].join("\n");
    window.location.href = `mailto:info@supungroup.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="career-page min-h-screen text-[#10233f]">
      <Seo title="Careers | Supun Group of Companies" description="Explore careers across Supun Group companies in manufacturing, retail, distribution and hospitality." keywords="Supun Group careers, jobs Sri Lanka, manufacturing jobs, retail jobs, hospitality jobs" />
      <style>{`
        .career-page{background:#f5f6f4}.career-shell{width:min(1540px,calc(100% - 40px));margin:auto}
        .career-hero{position:relative;overflow:hidden;min-height:580px;background:#0d2340;color:#fff}.career-hero:before{content:"";position:absolute;width:680px;height:680px;right:-230px;top:-250px;border:110px solid rgba(120,190,67,.08);border-radius:50%}
        .career-hero-grid{display:grid;grid-template-columns:1.15fr .85fr;align-items:end;min-height:580px}.career-stats{display:grid;grid-template-columns:1fr 1fr;gap:1px;overflow:hidden;border:1px solid rgba(255,255,255,.13);border-radius:28px 28px 0 0;background:rgba(255,255,255,.13)}.career-stat{min-height:180px;padding:30px;background:rgba(255,255,255,.07)}
        .area-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.area-card{display:flex;min-height:300px;flex-direction:column;border:1px solid rgba(16,35,63,.1);border-radius:24px;background:#fff;padding:28px;transition:.25s}.area-card:hover{transform:translateY(-6px);border-color:#8fc966;box-shadow:0 20px 45px rgba(16,35,63,.09)}
        .jobs-layout{display:grid;grid-template-columns:300px 1fr;gap:22px}.filter-button{display:flex;width:100%;align-items:center;justify-content:space-between;padding:15px 17px;border:1px solid rgba(16,35,63,.1);border-radius:13px;background:#fff;font-size:13px;font-weight:700}.filter-button:hover,.filter-button.active{border-color:#78be43;background:#edf5e7;color:#315f9f}
        .talent-grid{display:grid;grid-template-columns:.72fr 1.28fr;overflow:hidden;border-radius:32px;background:#fff;box-shadow:0 25px 65px rgba(16,35,63,.09)}.talent-copy{padding:50px;background:#315f9f;color:#fff}.talent-form{padding:50px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.career-field{border:1px solid #dce2e9;border-radius:14px;background:#f8fafb;padding:10px 14px}.career-field:focus-within{border-color:#315f9f;box-shadow:0 0 0 4px rgba(49,95,159,.09)}.career-field label{display:block;font-size:10px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#68778c}.career-field input,.career-field select,.career-field textarea{width:100%;border:0;background:transparent;padding-top:9px;outline:0;color:#10233f}
        @media(max-width:1050px){.career-hero-grid,.talent-grid{grid-template-columns:1fr}.career-hero-grid{padding-top:90px}.area-grid{grid-template-columns:1fr 1fr}.jobs-layout{grid-template-columns:1fr}}
        @media(max-width:680px){.career-shell{width:calc(100% - 24px)}.career-hero,.career-hero-grid{min-height:auto}.career-stats,.area-grid,.form-grid{grid-template-columns:1fr}.talent-copy,.talent-form{padding:28px 22px}}
      `}</style>

      <section className="career-hero px-5 pt-0 md:px-8">
        <div className="career-shell career-hero-grid relative z-10">
          <div className="pb-16 pr-6 md:pb-24 lg:pr-16">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#a5db78]"><span className="h-px w-11 bg-[#78be43]" /> Careers at Supun</p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[.94] tracking-[-.055em] md:text-7xl lg:text-[5.7rem]">Do work that moves Sri Lanka forward.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Grow across manufacturing, retail, distribution and hospitality in a Sri Lankan Group that keeps moving forward.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#opportunities" className="inline-flex items-center gap-3 rounded-full bg-[#78be43] px-7 py-4 text-sm font-bold text-[#10233f]">Explore opportunities <ArrowRight size={17} /></a><a href="#talent" className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold">Join our talent network</a></div>
          </div>
          <div className="career-stats">
            <div className="career-stat"><Users className="text-[#9bd36d]" /><strong className="mt-8 block text-4xl">300+</strong><span className="mt-2 block text-sm text-white/55">People across the Group</span></div>
            <div className="career-stat"><Building2 className="text-[#9bd36d]" /><strong className="mt-8 block text-4xl">11</strong><span className="mt-2 block text-sm text-white/55">Connected companies</span></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#5c9c30]">Find your place</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-end"><h2 className="text-4xl font-bold leading-none tracking-[-.04em] md:text-6xl">Many businesses. One place to grow.</h2><p className="max-w-xl leading-7 text-[#69798d] md:justify-self-end">Explore paths that match your strengths and discover where your next chapter could begin.</p></div>
          <div className="area-grid mt-12">
            {areas.map(({ name, text, icon: Icon }) => <a key={name} href="#opportunities" onClick={() => setSelected(name)} className="area-card group"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#edf4e8] text-[#5c9c30]"><Icon /></span><span className="mt-auto"><small className="font-bold uppercase tracking-[.15em] text-[#315f9f]">Career area</small><h3 className="mt-3 text-2xl font-bold">{name}</h3><p className="mt-3 text-sm leading-6 text-[#708095]">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Explore <ArrowRight size={15} /></span></span></a>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#5c9c30]">Why Supun</p><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.04em] md:text-5xl">Bring your ideas. Build real experience.</h2></div>
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-[#10233f]/10 bg-[#10233f]/10 md:grid-cols-3">
            {[{ title:"Learn by doing", text:"Work close to experienced teams and real operations.", icon:GraduationCap }, { title:"Move together", text:"Collaborate across a diverse family of businesses.", icon:Users }, { title:"Improve boldly", text:"Turn useful ideas into meaningful progress.", icon:Sparkles }].map(({ title, text, icon: Icon }) => <div key={title} className="bg-white p-8"><Icon className="text-[#5c9c30]" /><h3 className="mt-10 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#708095]">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="opportunities" className="px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#5c9c30]">Open opportunities</p><h2 className="mt-4 text-4xl font-bold tracking-[-.04em] md:text-5xl">Find your next role.</h2>
          <div className="jobs-layout mt-10">
            <div className="space-y-2">{["All areas", ...areas.map(a => a.name)].map(item => <button key={item} onClick={() => setSelected(item)} className={`filter-button ${selected === item ? "active" : ""}`}><span>{item}</span><ArrowRight size={15} /></button>)}</div>
            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[1.75rem] border border-[#10233f]/10 bg-white p-8 text-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-[#edf4e8] text-[#5c9c30]"><Sparkles /></span><p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-[#315f9f]">{selected}</p><h3 className="mt-3 text-3xl font-bold">New opportunities are on the way.</h3><p className="mt528 mt-4 max-w-xl leading-7 text-[#708095]">There are no approved vacancies published in this area right now. Register your interest for future consideration.</p><a href="#talent" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#10233f] px-6 py-3.5 text-sm font-bold text-white">Register interest <ArrowRight size={16} /></a></div>
          </div>
        </div>
      </section>

      <section id="talent" className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="career-shell talent-grid">
          <div className="talent-copy"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#b0df89]">Talent network</p><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.04em]">Start a conversation about your future.</h2><p className="mt-5 leading-7 text-white/70">Tell us where you would like to contribute. Your email application will open with your information prepared.</p><div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5"><strong className="text-sm">Before sending</strong><p className="mt-2 text-sm leading-6 text-white/65">Attach your current CV to the prepared email so the team can review your experience.</p></div></div>
          <div className="talent-form"><form onSubmit={submitInterest} className="form-grid">
            <div className="career-field"><label htmlFor="name">Full name</label><input id="name" name="name" required placeholder="Your name" /></div>
            <div className="career-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" required placeholder="you@email.com" /></div>
            <div className="career-field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" placeholder="+94" /></div>
            <div className="career-field"><label htmlFor="area">Career area</label><select id="area" name="area" value={selected} onChange={e => setSelected(e.target.value)}>{["All areas", ...areas.map(a => a.name)].map(a => <option key={a}>{a}</option>)}</select></div>
            <div className="career-field md:col-span-2"><label htmlFor="profile">LinkedIn or portfolio</label><input id="profile" name="profile" placeholder="Optional link" /></div>
            <div className="career-field md:col-span-2"><label htmlFor="message">Brief introduction</label><textarea id="message" name="message" rows={4} required placeholder="Tell us about your experience and interests" /></div>
            <div className="flex flex-col gap-4 pt-2 md:col-span-2 md:flex-row md:items-center md:justify-between"><p className="text-xs text-[#708095]">Your details are used only for this career enquiry.</p><button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#10233f] px-7 py-4 text-sm font-bold text-white">Prepare application <Send size={16} /></button></div>
          </form></div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
