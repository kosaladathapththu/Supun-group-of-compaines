import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Factory, Globe2, Hotel, Play, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from "@/components/Seo";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CompanyLogo } from "@/components/CompanyLogo";
import { companies } from "@/data/companies";
import { getCompanyLogo } from "@/data/companyLogos";
import { sectorHighlights, siteStats } from "@/data/siteContent";
import heroVideo from "@/assets/supun-group-hero-optimized.mp4";
import manufacturingImage from "@/assets/sector-manufacturing-v2.jpg";
import hospitalityImage from "@/assets/sector-hospitality-v2.jpg";
import retailImage from "@/assets/sector-retail-v2.jpg";
import camyImage from "@/assets/sector-camy-v2.jpg";

const sectorMeta = [
  { icon: Factory, image: manufacturingImage, eyebrow: "Made here" },
  { icon: ShoppingBag, image: retailImage, eyebrow: "Across the island" },
  { icon: Hotel, image: hospitalityImage, eyebrow: "Distinctly Colombo" },
  { icon: ShieldCheck, image: camyImage, eyebrow: "A Sri Lankan original" },
];

const featuredCompanies = [companies[6], companies[4], companies[2]];
const logoCompanies = companies.filter((company) => getCompanyLogo(company.id));

const CountUpStat = ({ value, label, index }: { value: string; label: string; index: number }) => {
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(String(target), "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(target);
        return;
      }
      const duration = 1400;
      const start = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.4 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="hero-stat group relative py-2 md:py-3" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-start gap-2">
        <span className="text-3xl font-semibold tracking-[-0.04em] text-white tabular-nums sm:text-4xl">{count}{suffix}</span>
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#78be43] shadow-[0_0_12px_#78be43]" />
      </div>
      <div className="mt-1.5 max-w-[9rem] text-[9px] font-semibold uppercase leading-snug tracking-[0.14em] text-white/50 sm:text-[10px]">{label}</div>
    </div>
  );
};

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

    <section className="premium-hero relative isolate min-h-screen bg-[#101311] text-white">
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,#344039_0%,#1b211d_34%,#0d100e_74%)] transition-opacity duration-1000 ${heroVideoReady ? "opacity-0" : "opacity-100"}`} aria-hidden="true" />
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,9,.96)_0%,rgba(19,24,21,.74)_48%,rgba(18,23,20,.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,11,.04)_25%,rgba(8,11,9,.94)_100%)]" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col justify-between px-4 pb-6 pt-28 sm:pb-8 sm:pt-32 md:pb-12 md:pt-36">
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
          <div className="ml-auto grid w-full max-w-2xl grid-cols-2 gap-x-7 gap-y-4 sm:grid-cols-4 sm:gap-6">
            {siteStats.map((stat, index) => <CountUpStat key={stat.label} value={stat.value} label={stat.label} index={index} />)}
          </div>
        </div>
      </div>
    </section>

    <section className="company-marquee relative z-20 overflow-hidden bg-white" aria-label="Supun Group companies">
      <div className="company-marquee-track py-5 sm:py-6">
        {[0, 1].map((group) => (
          <div className="company-marquee-group" key={group} aria-hidden={group === 1 ? "true" : undefined}>
            {logoCompanies.map((company) => (
              <Link
                to={`/companies/${company.id}`}
                className="company-marquee-item group"
                key={`${group}-${company.id}`}
                aria-label={group === 0 ? `View ${company.shortName}` : undefined}
                tabIndex={group === 1 ? -1 : undefined}
              >
                <CompanyLogo
                  companyId={company.id}
                  companyName={company.name}
                  className="h-24 w-52 shrink-0 overflow-hidden bg-transparent sm:h-28 sm:w-64"
                  imageClassName="h-full w-full scale-[1.75] transition duration-300 group-hover:scale-[1.85]"
                />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>

    <section id="legacy" className="legacy-premium relative isolate overflow-hidden py-16 sm:py-20 md:py-32">
      <div className="legacy-aurora legacy-aurora-blue" aria-hidden="true" />
      <div className="legacy-aurora legacy-aurora-green" aria-hidden="true" />
      <div className="legacy-lines absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={850}>
          <div className="mb-10 flex items-center justify-between gap-5 md:mb-14">
            <p className="section-kicker text-primary before:bg-[#78be43]">Our legacy</p>
            <div className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/45 sm:flex"><span>1978</span><span className="h-px w-14 bg-gradient-to-r from-[#78be43] to-primary/30" /><span>Today</span></div>
          </div>
        </AnimatedSection>
        <div className="grid items-stretch gap-6 lg:grid-cols-[.72fr_1.28fr]">
          <AnimatedSection animation="slide-right" duration={900}>
            <div className="legacy-year-card group relative flex h-full min-h-[350px] flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:min-h-[430px] sm:p-10">
              <div className="legacy-year-ring" aria-hidden="true"><span /><span /><span /></div>
              <div className="relative flex items-center justify-between"><span className="rounded-full border border-primary/10 bg-white/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70 backdrop-blur-xl">Where it began</span><span className="legacy-pulse"><span /></span></div>
              <div className="relative"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5b9d2c]">Established</p><div className="legacy-year mt-2 text-[clamp(5rem,14vw,9rem)] font-semibold leading-none tracking-[-0.075em]">1978</div><p className="mt-4 max-w-xs border-l-2 border-[#78be43] pl-4 text-sm leading-relaxed text-[#526278]">One vision in Colombo became a group built across generations.</p></div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-left" delay={140} duration={950}>
            <div className="legacy-story-card relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-12">
              <div className="legacy-corner-mark" aria-hidden="true" />
              <div className="relative"><span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b9d2c]"><span className="h-2 w-2 rounded-full bg-[#78be43] shadow-[0_0_16px_#78be43]" /> Built across generations</span><h2 className="max-w-4xl text-4xl font-semibold normal-case leading-[1.04] tracking-[-0.04em] text-[#10233f] sm:text-5xl lg:text-6xl">A family business with the courage to <span className="legacy-gradient-text">keep building.</span></h2></div>
              <div className="relative mt-auto pt-10"><div className="grid gap-6 border-t border-primary/10 pt-7 md:grid-cols-2"><p className="leading-relaxed text-[#526278]">What began as a Colombo trading business has grown into a connected group spanning manufacturing, retail, distribution and hospitality.</p><p className="leading-relaxed text-[#526278]">Through every new chapter, one standard remains: create lasting value for our customers, our people and our country.</p></div><Link to="/about" className="legacy-link group mt-8 inline-flex items-center gap-4 font-semibold text-primary">Read our story <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#78be43]/40 bg-[#78be43]/10 text-[#5b9d2c] transition duration-300 group-hover:rotate-[-35deg] group-hover:bg-[#78be43] group-hover:text-white"><ArrowRight size={18} /></span></Link></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="sector-section relative bg-white py-16 text-[#10233f] sm:py-20 md:py-32"><div className="container relative z-10 mx-auto px-4">
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="section-kicker text-primary before:bg-[#78be43]">What we do</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold normal-case leading-tight tracking-[-0.035em] text-[#10233f] md:text-6xl">Four strengths. One shared standard.</h2></div><p className="max-w-md text-base leading-relaxed text-[#526278]">An ecosystem built to design, manufacture, distribute and serve—with every capability strengthening the next.</p></div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {sectorHighlights.map((sector, index) => {
          const meta = sectorMeta[index];
          const Icon = meta.icon;
          return (
            <article key={sector.title} className="sector-glass group relative overflow-hidden rounded-[1.5rem]">
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img src={meta.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary shadow-sm">0{index + 1}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/95 shadow-lg"><Icon className="text-primary" size={23} strokeWidth={1.5} /></span>
                </div>
              </div>
              <div className="min-h-[255px] bg-white p-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5b9d2c]">{meta.eyebrow}</p>
                <h3 className="text-2xl font-semibold normal-case text-[#10233f]">{sector.title}</h3>
                <p className="mt-4 leading-relaxed text-[#526278]">{sector.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div></section>

    <section className="py-16 sm:py-20 md:py-32"><div className="container mx-auto px-4">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">Inside the group</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-0.035em] text-[#10233f] md:text-6xl">Businesses built for impact.</h2></div><Link to="/companies" className="group inline-flex items-center gap-3 font-semibold text-primary">Meet all 11 companies <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></Link></div>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {featuredCompanies.map((company, index) => (
          <Link key={company.id} to={`/companies/${company.id}`} className="company-glass group relative flex min-h-[430px] flex-col overflow-hidden rounded-[1.5rem] p-7 transition duration-500 hover:-translate-y-2 md:p-9">
            <span className="absolute right-5 top-3 text-8xl font-semibold tracking-[-0.08em] text-primary/[.045]">0{index + 1}</span>
            <div className="relative flex items-start justify-between gap-5">
              <CompanyLogo companyId={company.id} companyName={company.shortName} className="h-32 w-52 max-w-[65%] rounded-2xl border border-primary/10 p-2 shadow-[0_12px_35px_rgba(18,64,120,.10)] transition duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_16px_40px_rgba(18,64,120,.16)]" imageClassName="scale-[1.55] transition-transform duration-500 group-hover:scale-[1.68]" />
              <span className="inline-flex rounded-full border border-primary/10 bg-primary/[.07] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{company.industry}</span>
            </div>
            <div className="relative mt-auto pt-8">
              <p className="mb-3 text-sm font-medium text-primary/70">{company.tagline}</p>
              <h3 className="text-3xl font-semibold normal-case tracking-[-0.03em] text-[#10233f]">{company.shortName}</h3>
              <p className="mt-4 leading-relaxed text-[#667388]">{company.description}</p>
              <span className="company-link relative mt-7 inline-flex items-center gap-4 font-semibold text-primary">View company <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#78be43]/45 bg-[#78be43]/10 text-[#5b9d2c] transition duration-300 group-hover:rotate-[-35deg] group-hover:bg-[#78be43] group-hover:text-white"><ArrowRight size={18} /></span></span>
            </div>
          </Link>
        ))}
      </div>
    </div></section>

    <section className="relative overflow-hidden bg-[#f3f7fb] px-4 py-16 sm:py-20 md:py-28">
      <div className="container mx-auto">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#071b2d] px-7 py-12 text-white shadow-[0_30px_80px_rgba(7,27,45,.20)] sm:px-12 sm:py-16 md:rounded-[3rem] lg:px-20 lg:py-20">
          <div className="absolute inset-y-0 right-0 -z-10 w-full bg-[radial-gradient(circle_at_85%_35%,rgba(120,190,67,.22),transparent_30%),linear-gradient(115deg,transparent_45%,rgba(25,83,132,.38))] lg:w-2/3" />
          <Globe2 className="absolute -bottom-28 -right-24 -z-10 h-[28rem] w-[28rem] text-white/[.06]" strokeWidth={0.65} aria-hidden="true" />

          <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:items-end lg:gap-20">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#9bd46f]"><Sparkles size={15} /> The next chapter</p>
              <h2 className="max-w-4xl text-4xl font-semibold normal-case leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-7xl">Let’s build something <span className="text-[#9bd46f]">lasting.</span></h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">From ambitious ideas to trusted partnerships, we are ready to create what Sri Lanka needs next.</p>
            </div>

            <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="mb-6 text-sm leading-relaxed text-white/55">Have an opportunity, partnership or idea in mind?</p>
              <Link to="/contact" className="group inline-flex w-full items-center justify-between rounded-full bg-[#78be43] px-6 py-4 font-semibold text-[#071b2d] transition duration-300 hover:bg-white">
                Talk to our team
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071b2d] text-white transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={18} /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;
