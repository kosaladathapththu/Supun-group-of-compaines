import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, Factory, GraduationCap, HeartHandshake, Mail, Sparkles, Users } from "lucide-react";
import Seo from "@/components/Seo";
import heroImage from "@/assets/careers-hero-ai-placeholder.png";
import workplaceImage from "@/assets/hero-manufacturing.jpg";

const pathways = [
  { icon: Factory, title: "Operations & Manufacturing", copy: "Build practical expertise across production, quality, engineering, supply chain and distribution." },
  { icon: BriefcaseBusiness, title: "Corporate Careers", copy: "Shape the Group through finance, people, technology, commercial operations and brand leadership." },
  { icon: HeartHandshake, title: "Retail & Hospitality", copy: "Create customer experiences across our retail businesses, serviced residences and dining operations." },
  { icon: GraduationCap, title: "Early Careers", copy: "Begin your journey through internships, trainee opportunities and hands-on learning across the Group." },
];

const Careers = () => (
  <div className="bg-white text-[#0b2340]">
    <Seo title="Careers | Supun Group of Companies" description="Explore career opportunities across manufacturing, retail, distribution and hospitality at Supun Group of Companies." keywords="Supun Group careers, Sri Lanka jobs, manufacturing careers, retail jobs, hospitality careers" />

    <section className="relative min-h-[650px] overflow-hidden bg-[#071b34] text-white">
      <img src={heroImage} alt="Supun Group professionals collaborating" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,38,.97)_0%,rgba(4,19,38,.82)_35%,rgba(4,19,38,.15)_78%)]" />
      <div className="relative mx-auto flex min-h-[650px] max-w-[1440px] items-center px-6 py-24 md:px-12 lg:px-20">
        <div className="max-w-2xl"><p className="mb-6 text-[10px] font-extrabold uppercase tracking-[.24em] text-[#ffab16]">Careers at Supun Group</p><h1 className="text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[.94] tracking-[-.04em] normal-case">Do work that<br /><span className="text-[#ffab16]">builds Sri Lanka.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/70">Join a family-led Group where practical ideas become products, experiences and opportunities that reach people across the island.</p><a href="#opportunities" className="mt-9 inline-flex h-14 items-center gap-3 bg-[#ffab16] px-7 text-sm font-bold text-[#071b34] transition hover:bg-white">View opportunities <ArrowRight size={18} /></a></div>
      </div>
      <span className="absolute bottom-5 right-6 text-[9px] uppercase tracking-[.15em] text-white/35 md:right-12">Temporary concept image · Photography to follow</span>
    </section>

    <section className="bg-[#f4f5f4] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.24em] text-[#d87f00]">Grow with the Group</p><h2 className="text-5xl font-medium leading-[.98] tracking-[-.035em] normal-case md:text-7xl">Many paths.<br />One purpose.</h2></div><div className="lg:pt-5"><p className="text-2xl font-medium leading-[1.45] text-[#183b60] md:text-3xl">We believe the strongest businesses are built by people who are trusted to learn, improve and lead.</p><p className="mt-7 max-w-2xl text-base leading-8 text-[#647180]">With companies across four sectors, Supun Group offers room to build a career without standing still. Our teams work close to the product, the customer and the communities we serve.</p></div></div>
        <div className="mt-20 grid gap-px overflow-hidden border border-[#d9dee3] bg-[#d9dee3] md:grid-cols-2">{pathways.map(({icon:Icon,title,copy})=><article key={title} className="bg-white p-8 md:p-10"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#ffab16] text-[#071b34]"><Icon size={20} /></span><h3 className="mt-7 text-2xl font-semibold normal-case">{title}</h3><p className="mt-4 max-w-lg text-sm leading-7 text-[#687483]">{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="bg-white px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative min-h-[520px] overflow-hidden"><img src={workplaceImage} alt="Modern manufacturing workplace" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute bottom-0 right-0 bg-[#ffab16] p-7 text-[#071b34]"><strong className="block font-heading text-4xl">300+</strong><span className="text-[9px] font-extrabold uppercase tracking-[.16em]">People across the Group</span></div></div>
        <div><p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.24em] text-[#d87f00]">Life at Supun</p><h2 className="text-5xl font-medium leading-[.98] tracking-[-.035em] normal-case md:text-7xl">Learn. Contribute.<br /><span className="text-[#1d5795]">Move forward.</span></h2><div className="mt-9 space-y-6">{[{icon:Users,title:"People first",copy:"Work with grounded teams and leaders who value contribution at every level."},{icon:Sparkles,title:"Ideas into action",copy:"Be close to the work and see improvements move from a conversation into reality."},{icon:Factory,title:"Real industry exposure",copy:"Build experience across a connected portfolio of products, customers and operations."}].map(({icon:Icon,title,copy})=><div key={title} className="flex gap-4 border-t border-[#0b2340]/12 pt-5"><Icon size={20} className="mt-1 shrink-0 text-[#d87f00]" /><div><h3 className="text-lg font-semibold normal-case">{title}</h3><p className="mt-1 text-sm leading-6 text-[#687483]">{copy}</p></div></div>)}</div></div>
      </div>
    </section>

    <section id="opportunities" className="bg-[#071b34] px-6 py-24 text-white md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-[1120px] text-center"><p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.24em] text-[#ffab16]">Current opportunities</p><h2 className="text-5xl font-medium leading-none tracking-[-.035em] normal-case md:text-7xl">Your next chapter<br />could start here.</h2><div className="mx-auto mt-12 max-w-3xl border border-white/15 bg-white/[.04] p-8 md:p-12"><BriefcaseBusiness size={32} className="mx-auto text-[#ffab16]" /><h3 className="mt-5 text-2xl font-semibold normal-case">No vacancies are published right now</h3><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">We are always interested in meeting people who share our drive to build quality Sri Lankan businesses. Send your CV and tell us where you could make an impact.</p><a href="mailto:info@supungroup.lk?subject=Career%20Application%20-%20Supun%20Group" className="mt-7 inline-flex h-14 items-center gap-3 bg-[#ffab16] px-7 text-sm font-bold text-[#071b34] transition hover:bg-white"><Mail size={17} />Send your CV</a></div><p className="mt-6 text-xs text-white/35">Future vacancies can be connected to the existing admin system when the required fields are confirmed.</p></div>
    </section>
  </div>
);

export default Careers;
