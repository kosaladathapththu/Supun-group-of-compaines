import { FormEvent, useState } from "react";
import { ArrowRight, Building2, Factory, GraduationCap, Hotel, Send, ShoppingBag, Sparkles, Users } from "lucide-react";
import Seo from "@/components/Seo";
import careersHero from "@/assets/careers-hero-team.png";
import learningImage from "@/assets/careers-learn-through-work.png";
import growthImage from "@/assets/careers-grow-across-group.png";
import changeImage from "@/assets/careers-make-change.png";

const reasons = [
  { title: "Learn through real work", text: "Develop practical skills alongside experienced teams and active operations.", reveal: "Build practical, career-ready experience.", icon: GraduationCap, image: learningImage },
  { title: "Grow across a Group", text: "Discover opportunities to collaborate across companies, functions and industries.", reveal: "Connect your potential to eleven businesses.", icon: Users, image: growthImage },
  { title: "Make useful change", text: "Share ideas, solve everyday challenges and help our businesses serve people better.", reveal: "Turn good ideas into visible improvements.", icon: Sparkles, image: changeImage },
];

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
        .career-hero{position:relative;isolation:isolate;overflow:hidden;min-height:690px;background:#0b1713;color:#fff}.career-hero-image{position:absolute;inset:0;z-index:-3;width:100%;height:100%;object-fit:cover;object-position:center}.career-hero:after{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(3,12,9,.90) 0%,rgba(5,16,12,.76) 36%,rgba(6,17,13,.34) 62%,rgba(5,14,11,.08) 100%)}
        .career-hero-grid{display:grid;grid-template-columns:1.15fr .85fr;align-items:end;min-height:690px}.career-stats{display:grid;grid-template-columns:1fr 1fr;gap:1px;overflow:hidden;border:1px solid rgba(255,255,255,.22);border-radius:28px 28px 0 0;background:rgba(7,20,16,.60);backdrop-filter:blur(16px)}.career-stat{min-height:180px;padding:30px;background:rgba(255,255,255,.07)}
        .area-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.area-card{display:flex;min-height:300px;flex-direction:column;border:1px solid rgba(16,35,63,.1);border-radius:24px;background:#fff;padding:28px;transition:.25s}.area-card:hover{transform:translateY(-6px);border-color:#78be43;box-shadow:0 20px 45px rgba(16,35,63,.09)}
        .why-card{position:relative;isolation:isolate;min-height:360px;overflow:hidden;border:1px solid rgba(255,255,255,.6);border-radius:24px;background:#10233f;box-shadow:0 14px 34px rgba(16,35,63,.14);transition:transform .55s cubic-bezier(.22,1,.36,1),box-shadow .45s ease}.why-card:hover{transform:translateY(-8px);box-shadow:0 28px 58px rgba(16,35,63,.24)}.why-photo{position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover;transition:transform .9s cubic-bezier(.22,1,.36,1),filter .55s ease}.why-card:hover .why-photo{transform:scale(1.08) translateY(-1%);filter:saturate(.9) contrast(1.03)}.why-shade{position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,transparent 48%,rgba(5,20,34,.16) 62%,rgba(5,20,34,.94) 100%);transition:background .5s ease}.why-card:hover .why-shade{background:linear-gradient(180deg,rgba(5,20,34,.03) 20%,rgba(5,20,34,.48) 62%,rgba(5,20,34,.98))}.why-content{position:absolute;inset-inline:0;bottom:0;padding:24px;color:#fff;transition:padding .5s cubic-bezier(.22,1,.36,1)}.why-card:hover .why-content{padding-bottom:27px}.why-icon{display:grid;width:44px;height:44px;place-items:center;border:1px solid rgba(255,255,255,.4);border-radius:13px;background:rgba(7,27,45,.55);color:#efc66f;backdrop-filter:blur(10px);transition:transform .55s cubic-bezier(.22,1,.36,1),background .35s ease,color .35s ease}.why-card:hover .why-icon{transform:translateY(-4px) rotate(-5deg);background:#78be43;color:#10233f}.why-reveal{max-height:0;overflow:hidden;opacity:0;transform:translateY(12px);transition:max-height .5s cubic-bezier(.22,1,.36,1),opacity .3s ease .08s,transform .45s cubic-bezier(.22,1,.36,1)}.why-card:hover .why-reveal,.why-card:focus-within .why-reveal{max-height:82px;opacity:1;transform:translateY(0)}.why-card:hover .why-reveal-label{color:#a5db78}.why-reveal-label{display:block;margin-top:15px;color:#efc66f;font-size:9px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;transition:color .35s ease}
        .jobs-layout{display:grid;gap:20px}.job-filters{display:flex;flex-wrap:wrap;gap:9px}.filter-button{display:inline-flex;align-items:center;gap:12px;padding:11px 16px;border:1px solid rgba(16,35,63,.13);border-radius:999px;background:rgba(255,255,255,.72);font-size:12px;font-weight:800;transition:transform .25s ease,border-color .25s ease,background .25s ease,color .25s ease}.filter-button svg{width:14px;transition:transform .25s ease}.filter-button:hover{transform:translateY(-2px);border-color:#78be43;background:#eef7e8}.filter-button:hover svg{transform:translateX(2px)}.filter-button.active{border-color:#dca43a;background:#dca43a;color:#071b2d;box-shadow:0 8px 22px rgba(220,164,58,.2)}.vacancy-panel{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:28px;border:1px solid rgba(16,35,63,.12);border-left:5px solid #dca43a;border-radius:20px;background:rgba(255,255,255,.78);padding:28px 32px;box-shadow:0 12px 32px rgba(16,35,63,.06)}.vacancy-panel-icon{display:grid;width:58px;height:58px;place-items:center;border-radius:18px;background:#f8f0df;color:#9a6b16}.vacancy-status{display:inline-flex;align-items:center;gap:9px;color:#8b621b;font-size:10px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}.vacancy-status:before{content:"";width:7px;height:7px;border-radius:50%;background:#dca43a;box-shadow:0 0 0 5px rgba(220,164,58,.13)}
        .talent-grid{display:grid;grid-template-columns:.72fr 1.28fr;overflow:hidden;border:1px solid #cdbd9e;border-radius:32px;background:#fffaf0;box-shadow:0 26px 70px rgba(76,55,25,.14);outline:1px solid rgba(255,255,255,.9)}.talent-copy{padding:50px;background:#0b2747;color:#fff}.talent-form{padding:50px;background:#fffaf0}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.career-field{border:1px solid #d8c9ad;border-radius:14px;background:#fffdf8;padding:10px 14px}.career-field:focus-within{border-color:#b9944e;background:#fff;box-shadow:0 0 0 4px rgba(185,148,78,.12)}.career-field label{display:block;font-size:10px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#6e6557}.career-field input,.career-field select,.career-field textarea{width:100%;border:0;background:transparent;padding-top:9px;outline:0;color:#10233f}
        @media(max-width:1050px){.career-hero-grid,.talent-grid{grid-template-columns:1fr}.career-hero-grid{padding-top:100px}.career-hero-image{object-position:64% center}.career-hero:after{background:linear-gradient(90deg,rgba(3,12,9,.90),rgba(5,16,12,.58))}.area-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:680px){.career-shell{width:calc(100% - 24px)}.career-hero,.career-hero-grid{min-height:auto}.career-stats,.area-grid,.form-grid{grid-template-columns:1fr}.talent-copy,.talent-form{padding:28px 22px}.job-filters{display:grid;grid-template-columns:1fr 1fr}.filter-button{justify-content:space-between}.vacancy-panel{grid-template-columns:1fr;padding:24px}.vacancy-panel h3{font-size:1.45rem}}
      `}</style>

      <section className="career-hero px-5 pt-0 md:px-8">
        <img className="career-hero-image" src={careersHero} alt="A diverse team of Sri Lankan professionals in a modern workplace" />
        <div className="career-shell career-hero-grid relative z-10">
          <div className="pb-16 pr-6 md:pb-24 lg:pr-16">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#efc66f]"><span className="h-px w-11 bg-[#dca43a]" /> Careers at Supun</p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[.94] tracking-[-.055em] md:text-7xl lg:text-[5.4rem]">Build your future with Supun Group.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">Join teams that manufacture, serve, distribute and create experiences across Sri Lanka. Bring your skills, learn from real work and grow with a diverse group of businesses.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#opportunities" className="inline-flex items-center gap-3 rounded-full bg-[#dca43a] px-7 py-4 text-sm font-bold text-[#10233f] transition hover:bg-[#78be43]">View opportunities <ArrowRight size={17} /></a><a href="#talent" className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold backdrop-blur transition hover:bg-white/10">Send your profile</a></div>
          </div>
          <div className="career-stats">
            <div className="career-stat"><Users className="text-[#efc66f]" /><strong className="mt-8 block text-4xl">300+</strong><span className="mt-2 block text-sm text-white/55">People across the Group</span></div>
            <div className="career-stat"><Building2 className="text-[#efc66f]" /><strong className="mt-8 block text-4xl">11</strong><span className="mt-2 block text-sm text-white/55">Connected companies</span></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6b16]">Find your place</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-end"><h2 className="text-4xl font-bold leading-none tracking-[-.04em] md:text-6xl">One Group. Many ways to contribute.</h2><p className="max-w-xl leading-7 text-[#526277] md:justify-self-end">Choose an area that matches your experience or interests. Roles may be available across different Supun Group companies and locations.</p></div>
          <div className="area-grid mt-12">
            {areas.map(({ name, text, icon: Icon }) => <a key={name} href="#opportunities" onClick={() => setSelected(name)} className="area-card group"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f8f0df] text-[#9a6b16]"><Icon /></span><span className="mt-auto"><small className="font-bold uppercase tracking-[.15em] text-[#315f9f]">Career area</small><h3 className="mt-3 text-2xl font-bold">{name}</h3><p className="mt-3 text-sm leading-6 text-[#56677c]">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Explore <ArrowRight size={15} /></span></span></a>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#cdbd9e]/50 bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6b16]">Why Supun</p><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.04em] md:text-5xl">A place to learn, contribute and progress.</h2><p className="mt-5 max-w-md leading-7 text-[#56677c]">We value practical thinking, teamwork and people who take pride in improving how work gets done.</p></div>
          <div className="grid gap-4 md:grid-cols-3">
            {reasons.map(({ title, reveal, icon: Icon, image }) => <article key={title} className="why-card" tabIndex={0}><img className="why-photo" src={image} alt="" loading="lazy" /><span className="why-shade" aria-hidden="true" /><div className="why-content"><span className="why-icon"><Icon size={21} /></span><h3 className="mt-5 text-xl font-bold leading-snug text-white">{title}</h3><div className="why-reveal"><span className="why-reveal-label">What you&rsquo;ll gain</span><p className="mt-2 text-sm font-semibold leading-6 text-white">{reveal}</p></div></div></article>)}
          </div>
        </div>
      </section>

      <section id="opportunities" className="px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6b16]">Current vacancies</p><h2 className="mt-4 text-4xl font-bold tracking-[-.04em] md:text-5xl">Explore available roles.</h2><p className="mt-4 max-w-2xl leading-7 text-[#56677c]">Select a career area to check current openings. If no suitable role is listed, you can still send us your profile for future consideration.</p>
          <div className="jobs-layout mt-10">
            <div className="job-filters" aria-label="Filter vacancies by career area">{["All areas", ...areas.map(a => a.name)].map(item => <button key={item} onClick={() => setSelected(item)} className={`filter-button ${selected === item ? "active" : ""}`} aria-pressed={selected === item}><span>{item}</span><ArrowRight size={15} /></button>)}</div>
            <div className="vacancy-panel" role="status">
              <span className="vacancy-panel-icon"><Sparkles size={22} /></span>
              <div>
                <span className="vacancy-status">{selected}</span>
                <h3 className="mt-2 text-2xl font-bold normal-case tracking-[-.025em] text-[#071b2d]">No vacancies are listed in this area right now.</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#56677c]">Please check again later. You can also register your interest using the form in the next section.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="talent" className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="career-shell talent-grid">
          <div className="talent-copy"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#efc66f]">Register your interest</p><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.04em]">Tell us where you could make a difference.</h2><p className="mt-5 leading-7 text-white/70">Complete the form and we will prepare an email containing your details. You can review it before sending it to our team.</p><div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5"><strong className="text-sm">Remember your CV</strong><p className="mt-2 text-sm leading-6 text-white/65">The form cannot attach files automatically. Add your latest CV to the prepared email before you press send.</p></div></div>
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
