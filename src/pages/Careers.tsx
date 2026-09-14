import { FormEvent, useState } from "react";
import { ArrowRight, Building2, Factory, Hotel, Send, ShoppingBag, Users } from "lucide-react";
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
    <main className="min-h-screen bg-white text-[#10233f]">
      <Seo title="Careers | Supun Group of Companies" description="Explore careers across Supun Group companies in manufacturing, retail, distribution and hospitality." keywords="Supun Group careers, jobs Sri Lanka, manufacturing jobs, retail jobs, hospitality jobs" />

      <section className="bg-[#10233f] py-20 text-white md:py-24">
        <div className="container mx-auto px-4">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-white/65"><span className="h-px w-9 bg-[#78be43]" /> Careers at Supun</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold normal-case leading-[1.01] tracking-[-.045em] md:text-6xl">Build your career across a growing Sri Lankan Group.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">Explore opportunities across manufacturing, retail, distribution, hospitality and Group services.</p>
          <div className="mt-9 flex gap-8 border-t border-white/15 pt-6"><div><strong className="text-3xl font-semibold">300+</strong><p className="mt-1 text-sm text-white/55">People across the Group</p></div><div><strong className="text-3xl font-semibold">11</strong><p className="mt-1 text-sm text-white/55">Connected companies</p></div></div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Career areas</p><h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">Find where you can contribute.</h2></div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{areas.map(({ name, text, icon: Icon }) => <button key={name} type="button" onClick={() => { setSelected(name); document.getElementById("opportunities")?.scrollIntoView({ behavior: "smooth" }); }} className="min-h-[220px] border border-[#10233f]/10 bg-[#fafbfd] p-6 text-left transition hover:border-[#315f9f]/40"><Icon className="text-[#315f9f]" size={23} /><h3 className="mt-8 text-xl font-semibold">{name}</h3><p className="mt-3 text-sm leading-6 text-[#65758a]">{text}</p></button>)}</div>
        </div>
      </section>

      <section id="opportunities" className="scroll-mt-28 border-y border-[#10233f]/10 bg-[#f7f9fc] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            <div><p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-[#315f9f]">Browse by area</p><div className="border-t border-[#10233f]/10">{["All areas", ...areas.map((area) => area.name)].map((item) => <button key={item} type="button" onClick={() => setSelected(item)} className={`flex w-full items-center justify-between border-b border-[#10233f]/10 py-4 text-left text-sm font-semibold ${selected === item ? "text-[#10233f]" : "text-[#6d7a8d] hover:text-[#10233f]"}`}><span>{item}</span>{selected === item && <ArrowRight size={15} />}</button>)}</div></div>
            <div className="flex min-h-[300px] flex-col justify-center border border-[#10233f]/10 bg-white p-7 md:p-10"><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#315f9f]">{selected}</p><h2 className="mt-3 text-3xl font-semibold normal-case">No approved vacancies published right now.</h2><p className="mt-4 max-w-2xl leading-7 text-[#65758a]">When a vacancy is approved, it can be published here. Until then, candidates can register their interest for future consideration.</p><a href="#talent" className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-[#10233f] px-5 py-3 text-sm font-semibold text-white">Register interest <ArrowRight size={16} /></a></div>
          </div>
        </div>
      </section>

      <section id="talent" className="scroll-mt-28 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid overflow-hidden border border-[#10233f]/10 lg:grid-cols-[.75fr_1.25fr]">
            <div className="bg-[#10233f] p-7 text-white md:p-10"><Users size={26} className="text-white/70" /><p className="mt-8 text-xs font-semibold uppercase tracking-[.2em] text-white/55">Talent network</p><h2 className="mt-4 text-3xl font-semibold normal-case md:text-4xl">Start a conversation about your future.</h2><p className="mt-5 leading-7 text-white/65">Tell us where you would like to contribute. Your email application will open with the information you provide.</p><p className="mt-8 border-t border-white/15 pt-5 text-sm leading-6 text-white/55">Remember to attach your current CV before sending.</p></div>
            <form onSubmit={submitInterest} className="grid gap-5 bg-white p-7 md:grid-cols-2 md:p-10">
              <label className="text-sm font-semibold">Full name<input name="name" required className="mt-2 h-11 w-full rounded-md border border-[#10233f]/15 px-3 font-normal outline-none focus:border-[#315f9f]" placeholder="Your name" /></label>
              <label className="text-sm font-semibold">Email address<input name="email" type="email" required className="mt-2 h-11 w-full rounded-md border border-[#10233f]/15 px-3 font-normal outline-none focus:border-[#315f9f]" placeholder="you@email.com" /></label>
              <label className="text-sm font-semibold">Phone number<input name="phone" className="mt-2 h-11 w-full rounded-md border border-[#10233f]/15 px-3 font-normal outline-none focus:border-[#315f9f]" placeholder="+94" /></label>
              <label className="text-sm font-semibold">Career area<select name="area" value={selected} onChange={(event) => setSelected(event.target.value)} className="mt-2 h-11 w-full rounded-md border border-[#10233f]/15 bg-white px-3 font-normal outline-none focus:border-[#315f9f]">{["All areas", ...areas.map((area) => area.name)].map((area) => <option key={area}>{area}</option>)}</select></label>
              <label className="text-sm font-semibold md:col-span-2">LinkedIn or portfolio<input name="profile" className="mt-2 h-11 w-full rounded-md border border-[#10233f]/15 px-3 font-normal outline-none focus:border-[#315f9f]" placeholder="Optional link" /></label>
              <label className="text-sm font-semibold md:col-span-2">Brief introduction<textarea name="message" rows={4} required className="mt-2 w-full rounded-md border border-[#10233f]/15 p-3 font-normal outline-none focus:border-[#315f9f]" placeholder="Tell us about your experience and interests" /></label>
              <div className="md:col-span-2 flex flex-col gap-4 border-t border-[#10233f]/10 pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-[#748195]">Your details are used only for this career enquiry.</p><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#10233f] px-6 py-3 text-sm font-semibold text-white">Prepare application <Send size={16} /></button></div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
