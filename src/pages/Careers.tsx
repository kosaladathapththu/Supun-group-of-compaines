import { FormEvent, useState } from "react";
import { ArrowRight, Building2, Factory, GraduationCap, Hotel, Send, ShoppingBag, Sparkles, Users } from "lucide-react";
import Seo from "@/components/Seo";
import careersHero from "@/assets/careers-hero-team.png";

const areas = [
  { name: "Manufacturing", text: "Build practical experience in production, engineering, quality, maintenance and supply chain.", icon: Factory },
  { name: "Retail & Distribution", text: "Help serve customers through sales, store operations, logistics, merchandising and e-commerce.", icon: ShoppingBag },
  { name: "Hospitality", text: "Create memorable guest experiences across front office, operations, food and beverage and service.", icon: Hotel },
  { name: "Group Services", text: "Support every business through finance, people, marketing, administration and technology.", icon: Building2 },
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
        .career-page{background:#f4efe5}.career-shell{width:min(1540px,calc(100% - 40px));margin:auto}
        .career-hero{position:relative;isolation:isolate;overflow:hidden;min-height:690px;background:#0d2340;color:#fff}.career-hero-image{position:absolute;inset:0;z-index:-3;width:100%;height:100%;object-fit:cover;object-position:center}.career-hero:after{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(7,25,47,.98) 0%,rgba(9,31,56,.94) 36%,rgba(10,33,58,.55) 62%,rgba(10,31,54,.15) 100%)}
        .career-hero-grid{display:grid;grid-template-columns:1.15fr .85fr;align-items:end;min-height:690px}.career-stats{display:grid;grid-template-columns:1fr 1fr;gap:1px;overflow:hidden;border:1px solid rgba(255,255,255,.22);border-radius:28px 28px 0 0;background:rgba(10,31,54,.62);backdrop-filter:blur(16px)}.career-stat{min-height:180px;padding:30px;background:rgba(255,255,255,.07)}
        .area-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.area-card{display:flex;min-height:300px;flex-direction:column;border:1px solid rgba(16,35,63,.1);border-radius:24px;background:#fff;padding:28px;transition:.25s}.area-card:hover{transform:translateY(-6px);border-color:#8fc966;box-shadow:0 20px 45px rgba(16,35,63,.09)}
        .why-card{min-height:265px;border:1px solid #d8c9ad;border-radius:22px;padding:30px;box-shadow:0 12px 30px rgba(76,55,25,.09);transition:transform .25s,box-shadow .25s,border-color .25s}.why-card:nth-child(1){border-color:#c9dcb9;background:#f1f7ec}.why-card:nth-child(2){border-color:#c7d7e8;background:#eef4fa}.why-card:nth-child(3){border-color:#e3cfaa;background:#fbf3e4}.why-card:hover{transform:translateY(-5px);border-color:#b9944e;box-shadow:0 20px 42px rgba(76,55,25,.14)}.why-icon{display:grid;width:52px;height:52px;place-items:center;border:1px solid #dfcca3;border-radius:15px;background:#f5e7c8;color:#5c9c30}
        .jobs-layout{display:grid;grid-template-columns:300px 1fr;gap:22px}.filter-button{display:flex;width:100%;align-items:center;justify-content:space-between;padding:15px 17px;border:1px solid rgba(16,35,63,.1);border-radius:13px;background:#fff;font-size:13px;font-weight:700}.filter-button:hover,.filter-button.active{border-color:#78be43;background:#edf5e7;color:#315f9f}
        .talent-grid{display:grid;grid-template-columns:.72fr 1.28fr;overflow:hidden;border:1px solid #cdbd9e;border-radius:32px;background:#fffaf0;box-shadow:0 26px 70px rgba(76,55,25,.14);outline:1px solid rgba(255,255,255,.9)}.talent-copy{padding:50px;background:#0b2747;color:#fff}.talent-form{padding:50px;background:#fffaf0}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.career-field{border:1px solid #d8c9ad;border-radius:14px;background:#fffdf8;padding:10px 14px}.career-field:focus-within{border-color:#b9944e;background:#fff;box-shadow:0 0 0 4px rgba(185,148,78,.12)}.career-field label{display:block;font-size:10px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#6e6557}.career-field input,.career-field select,.career-field textarea{width:100%;border:0;background:transparent;padding-top:9px;outline:0;color:#10233f}
        @media(max-width:1050px){.career-hero-grid,.talent-grid{grid-template-columns:1fr}.career-hero-grid{padding-top:100px}.career-hero-image{object-position:64% center}.career-hero:after{background:linear-gradient(90deg,rgba(7,25,47,.97),rgba(9,31,56,.78))}.area-grid{grid-template-columns:1fr 1fr}.jobs-layout{grid-template-columns:1fr}}
        @media(max-width:680px){.career-shell{width:calc(100% - 24px)}.career-hero,.career-hero-grid{min-height:auto}.career-stats,.area-grid,.form-grid{grid-template-columns:1fr}.talent-copy,.talent-form{padding:28px 22px}}
      `}</style>

      <section className="career-hero px-5 pt-0 md:px-8">
        <img className="career-hero-image" src={careersHero} alt="A diverse team of Sri Lankan professionals in a modern workplace" />
        <div className="career-shell career-hero-grid relative z-10">
          <div className="pb-16 pr-6 md:pb-24 lg:pr-16">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#a5db78]"><span className="h-px w-11 bg-[#78be43]" /> Careers at Supun</p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[.94] tracking-[-.055em] md:text-7xl lg:text-[5.4rem]">Build your future with Supun Group.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">Join teams that manufacture, serve, distribute and create experiences across Sri Lanka. Bring your skills, learn from real work and grow with a diverse group of businesses.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#opportunities" className="inline-flex items-center gap-3 rounded-full bg-[#78be43] px-7 py-4 text-sm font-bold text-[#10233f] transition hover:bg-[#8bd34f]">View opportunities <ArrowRight size={17} /></a><a href="#talent" className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold backdrop-blur transition hover:bg-white/10">Send your profile</a></div>
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
          <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-end"><h2 className="text-4xl font-bold leading-none tracking-[-.04em] md:text-6xl">One Group. Many ways to contribute.</h2><p className="max-w-xl leading-7 text-[#69798d] md:justify-self-end">Choose an area that matches your experience or interests. Roles may be available across different Supun Group companies and locations.</p></div>
          <div className="area-grid mt-12">
            {areas.map(({ name, text, icon: Icon }) => <a key={name} href="#opportunities" onClick={() => setSelected(name)} className="area-card group"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#edf4e8] text-[#5c9c30]"><Icon /></span><span className="mt-auto"><small className="font-bold uppercase tracking-[.15em] text-[#315f9f]">Career area</small><h3 className="mt-3 text-2xl font-bold">{name}</h3><p className="mt-3 text-sm leading-6 text-[#708095]">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Explore <ArrowRight size={15} /></span></span></a>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#cdbd9e]/50 bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#5c9c30]">Why Supun</p><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.04em] md:text-5xl">A place to learn, contribute and progress.</h2><p className="mt-5 max-w-md leading-7 text-[#708095]">We value practical thinking, teamwork and people who take pride in improving how work gets done.</p></div>
          <div className="grid gap-4 md:grid-cols-3">
            {[{ title:"Learn through real work", text:"Develop practical skills alongside experienced teams and active operations.", icon:GraduationCap }, { title:"Grow across a Group", text:"Discover opportunities to collaborate across companies, functions and industries.", icon:Users }, { title:"Make useful change", text:"Share ideas, solve everyday challenges and help our businesses serve people better.", icon:Sparkles }].map(({ title, text, icon: Icon }) => <div key={title} className="why-card"><span className="why-icon"><Icon size={24} /></span><h3 className="mt-8 text-xl font-bold leading-snug text-[#10233f]">{title}</h3><p className="mt-4 text-[15px] leading-7 text-[#5e6d80]">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="opportunities" className="px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#5c9c30]">Current vacancies</p><h2 className="mt-4 text-4xl font-bold tracking-[-.04em] md:text-5xl">Explore available roles.</h2><p className="mt-4 max-w-2xl leading-7 text-[#708095]">Select a career area to check current openings. If no suitable role is listed, you can still send us your profile for future consideration.</p>
          <div className="jobs-layout mt-10">
            <div className="space-y-2">{["All areas", ...areas.map(a => a.name)].map(item => <button key={item} onClick={() => setSelected(item)} className={`filter-button ${selected === item ? "active" : ""}`}><span>{item}</span><ArrowRight size={15} /></button>)}</div>
            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[1.75rem] border border-[#10233f]/10 bg-white p-8 text-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-[#edf4e8] text-[#5c9c30]"><Sparkles /></span><p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-[#315f9f]">{selected}</p><h3 className="mt-3 text-3xl font-bold">No vacancies are listed right now.</h3><p className="mt-4 max-w-xl leading-7 text-[#708095]">We do not currently have an approved vacancy in this area. Send your profile and CV if you would like to be considered when a suitable role becomes available.</p><a href="#talent" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#10233f] px-6 py-3.5 text-sm font-bold text-white">Send your profile <ArrowRight size={16} /></a></div>
          </div>
        </div>
      </section>

      <section id="talent" className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="career-shell talent-grid">
          <div className="talent-copy"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#b0df89]">Register your interest</p><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.04em]">Tell us where you could make a difference.</h2><p className="mt-5 leading-7 text-white/70">Complete the form and we will prepare an email containing your details. You can review it before sending it to our team.</p><div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5"><strong className="text-sm">Remember your CV</strong><p className="mt-2 text-sm leading-6 text-white/65">The form cannot attach files automatically. Add your latest CV to the prepared email before you press send.</p></div></div>
          <div className="talent-form"><form onSubmit={submitInterest} className="form-grid">
            <div className="career-field"><label htmlFor="name">Full name</label><input id="name" name="name" required placeholder="Your name" /></div>
            <div className="career-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" required placeholder="you@email.com" /></div>
            <div className="career-field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" placeholder="+94" /></div>
            <div className="career-field"><label htmlFor="area">Career area</label><select id="area" name="area" value={selected} onChange={e => setSelected(e.target.value)}>{["All areas", ...areas.map(a => a.name)].map(a => <option key={a}>{a}</option>)}</select></div>
            <div className="career-field md:col-span-2"><label htmlFor="profile">LinkedIn or portfolio</label><input id="profile" name="profile" placeholder="Optional link" /></div>
            <div className="career-field md:col-span-2"><label htmlFor="message">Brief introduction</label><textarea id="message" name="message" rows={4} required placeholder="Tell us about your experience and interests" /></div>
            <div className="flex flex-col gap-4 pt-2 md:col-span-2 md:flex-row md:items-center md:justify-between"><p className="text-xs text-[#708095]">Submitting opens your email app. Nothing is sent until you review and send the email.</p><button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#10233f] px-7 py-4 text-sm font-bold text-white">Prepare email <Send size={16} /></button></div>
          </form></div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
