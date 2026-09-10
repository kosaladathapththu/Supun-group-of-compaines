import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Factory, Globe2, Hotel, Play, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from "@/components/Seo";
import { companies } from "@/data/companies";
import { sectorHighlights, siteStats } from "@/data/siteContent";
import heroVideo from "@/assets/supun-group-hero-optimized.mp4";
import heroPoster from "@/assets/hero-corporate.jpg";
import manufacturingImage from "@/assets/hero-manufacturing.jpg";
import hospitalityImage from "@/assets/hotel-interior.jpg";
import retailImage from "@/assets/retail-store.jpg";

const sectorMeta = [
  { icon: Factory, image: manufacturingImage, eyebrow: "Made here" },
  { icon: ShoppingBag, image: retailImage, eyebrow: "Across the island" },
  { icon: Hotel, image: hospitalityImage, eyebrow: "Distinctly Colombo" },
  { icon: ShieldCheck, image: heroPoster, eyebrow: "A Sri Lankan original" },
];

const featuredCompanies = [companies[6], companies[4], companies[2]];

const Home = () => {
  const [heroVideoReady, setHeroVideoReady] = useState(false);

  return (
  <div className="min-h-screen overflow-hidden bg-[#edf3fb]">
    <Seo
      title="Supun Group of Companies | Built in Sri Lanka. Built to Last."
      description="Supun Group of Companies is a Sri Lankan family-run group with 11 companies across manufacturing, retail, distribution and hospitality, with roots going back to 1978."
      keywords="Supun Group of Companies, Sri Lanka manufacturing, Camy, Supun Traders, Supun Super Center, Sri Lankan conglomerate"
      jsonLd={{
        "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: SITE_URL,
        logo: DEFAULT_IMAGE, foundingDate: "1978",
        description: "A Sri Lankan family-run group operating across manufacturing, retail, distribution and hospitality.",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
        contactPoint: { "@type": "ContactPoint", telephone: "+94-112-055-026", contactType: "general enquiries", email: "info@supungroup.lk" },
      }}
    />

    <section className="premium-hero relative isolate min-h-[calc(100svh-5rem)] bg-[#04142d] text-white">
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,#174c96_0%,#082b61_32%,#04142d_72%)] transition-opacity duration-1000 ${heroVideoReady ? "opacity-0" : "opacity-100"}`} aria-hidden="true" />
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${heroVideoReady ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setHeroVideoReady(true)}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,12,30,.96)_0%,rgba(8,35,80,.78)_48%,rgba(7,32,73,.24)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,34,.04)_25%,rgba(3,18,42,.94)_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] flex-col justify-between px-4 py-6 sm:py-8 md:py-12">
        <div className="flex items-center justify-between gap-5 border-b border-white/20 pb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
          <span>Independent. Sri Lankan. Since 1978.</span>
          <span className="hidden items-center gap-2 sm:flex"><span className="h-2 w-2 rounded-full bg-[#f5a623]" /> Colombo, Sri Lanka</span>
        </div>

        <div className="hero-copy max-w-5xl py-12 sm:py-16 md:py-24">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f5a623] sm:mb-6 sm:text-sm sm:tracking-[0.28em]"><span className="h-px w-8 bg-current sm:w-10" /> One group. Many possibilities.</p>
          <h1 className="max-w-5xl text-[clamp(3rem,14vw,8.4rem)] font-semibold normal-case leading-[0.88] tracking-[-0.045em] text-white md:leading-[0.84]">
            Built in Sri Lanka.<br /><span className="text-white/55">Built to last.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-8 sm:text-lg md:text-xl">From factory floors to family homes, we build products, places and partnerships that move Sri Lanka forward.</p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <Link to="/companies" className="premium-button group inline-flex min-h-14 items-center justify-center gap-3 px-7 font-semibold text-white">Explore our companies <ArrowRight className="transition-transform group-hover:translate-x-1" size={19} /></Link>
            <Link to="/about" className="glass-button inline-flex min-h-14 items-center justify-center gap-3 px-7 font-semibold text-white"><Play size={17} fill="currentColor" /> Discover our story</Link>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <a href="#legacy" className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:text-white md:flex"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25"><ArrowDown size={16} /></span>Scroll to discover</a>
          <div className="glass-panel ml-auto grid w-full max-w-2xl grid-cols-2 overflow-hidden rounded-2xl md:grid-cols-4 md:rounded-none">
            {siteStats.map((stat) => <div key={stat.label} className="border-white/15 p-3.5 odd:border-r md:border-r md:p-5 md:last:border-r-0"><div className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">{stat.value}</div><div className="mt-1 text-[9px] uppercase leading-snug tracking-[0.12em] text-white/55 sm:text-[10px] sm:tracking-[0.16em]">{stat.label}</div></div>)}
          </div>
        </div>
      </div>
    </section>

    <section id="legacy" className="blueprint-bg relative py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div><p className="section-kicker">Our legacy</p><div className="mt-12 flex items-end gap-4"><span className="text-7xl font-semibold tracking-[-0.06em] text-primary md:text-8xl">1978</span><span className="mb-3 h-px flex-1 bg-primary/20" /></div></div>
        <div>
          <h2 className="text-4xl font-semibold normal-case leading-[1.05] tracking-[-0.035em] text-[#10233f] md:text-6xl">A family business with the courage to keep building.</h2>
          <div className="mt-8 grid gap-6 border-t border-[#10233f]/15 pt-8 md:grid-cols-2"><p className="text-lg leading-relaxed text-[#415168]">What began as a Colombo trading business has grown into a connected group spanning manufacturing, retail, distribution and hospitality.</p><p className="text-lg leading-relaxed text-[#415168]">Through every new chapter, one standard remains: create lasting value for our customers, our people and our country.</p></div>
          <Link to="/about" className="group mt-9 inline-flex items-center gap-3 font-semibold text-primary">Read our story <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 transition group-hover:bg-primary group-hover:text-white"><ArrowRight size={16} /></span></Link>
        </div>
      </div></div>
    </section>

    <section className="relative bg-[radial-gradient(circle_at_top_right,#174c96_0%,#092654_32%,#04142d_75%)] py-16 text-white sm:py-20 md:py-32"><div className="container mx-auto px-4">
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="section-kicker text-[#f5a623] before:bg-[#f5a623]">What we do</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold normal-case leading-tight tracking-[-0.035em] md:text-6xl">Four strengths. One shared standard.</h2></div><p className="max-w-md text-base leading-relaxed text-white/60">An ecosystem built to design, manufacture, distribute and serve—with every capability strengthening the next.</p></div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {sectorHighlights.map((sector, index) => { const meta = sectorMeta[index]; const Icon = meta.icon; return <article key={sector.title} className="sector-glass group relative min-h-[430px] overflow-hidden rounded-[1.5rem] p-7 md:p-8"><img src={meta.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10 transition duration-700 group-hover:scale-105 group-hover:opacity-40" /><div className="absolute inset-0 bg-gradient-to-t from-[#04142d] via-[#071c3f]/80 to-[#174c96]/10 transition" /><div className="relative flex h-full flex-col"><div className="flex items-center justify-between"><span className="text-xs font-semibold tracking-[0.18em] text-white/40">0{index + 1}</span><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl"><Icon className="text-[#69a8ff]" size={23} strokeWidth={1.5} /></span></div><div className="mt-auto"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#80b8ff]">{meta.eyebrow}</p><h3 className="text-2xl font-semibold normal-case text-white">{sector.title}</h3><p className="mt-4 leading-relaxed text-white/65">{sector.description}</p></div></div></article>; })}
      </div>
    </div></section>

    <section className="py-16 sm:py-20 md:py-32"><div className="container mx-auto px-4">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">Inside the group</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-0.035em] text-[#10233f] md:text-6xl">Businesses built for impact.</h2></div><Link to="/companies" className="group inline-flex items-center gap-3 font-semibold text-primary">Meet all 11 companies <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></Link></div>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {featuredCompanies.map((company, index) => <Link key={company.id} to={`/companies/${company.id}`} className="company-glass group relative flex min-h-[380px] flex-col overflow-hidden rounded-[1.5rem] p-7 transition duration-500 hover:-translate-y-2 md:p-9"><span className="absolute right-5 top-3 text-8xl font-semibold tracking-[-0.08em] text-primary/[.045]">0{index + 1}</span><div className="relative"><span className="inline-flex rounded-full border border-primary/10 bg-primary/[.07] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{company.industry}</span></div><div className="relative mt-auto"><p className="mb-3 text-sm font-medium text-primary/70">{company.tagline}</p><h3 className="text-3xl font-semibold normal-case tracking-[-0.03em] text-[#10233f]">{company.shortName}</h3><p className="mt-4 leading-relaxed text-[#667388]">{company.description}</p><span className="mt-7 inline-flex items-center gap-2 font-semibold text-primary">View company <ArrowRight className="transition-transform group-hover:translate-x-1" size={17} /></span></div></Link>)}
      </div>
    </div></section>

    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#0b3d82,#1763bd_55%,#0a2b5e)] py-20 text-white md:py-24"><Globe2 className="absolute -right-20 -top-24 h-96 w-96 opacity-10" strokeWidth={0.7} aria-hidden="true" /><div className="absolute left-1/3 top-0 h-full w-px bg-white/10" /><div className="container relative mx-auto px-4"><div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-200"><Sparkles size={15} /> The next chapter</p><h2 className="max-w-4xl text-4xl font-semibold normal-case leading-[1.03] tracking-[-0.035em] md:text-6xl">Building what Sri Lanka needs next.</h2></div><Link to="/contact" className="glass-button group inline-flex min-h-16 items-center justify-center gap-4 px-8 font-semibold text-white">Start a conversation <ArrowRight className="transition-transform group-hover:translate-x-1" size={19} /></Link></div></div></section>
  </div>
  );
};

export default Home;
