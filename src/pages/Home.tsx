import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Factory, Hotel, ShieldCheck, ShoppingBag } from "lucide-react";
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from "@/components/Seo";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CompanyLogo } from "@/components/CompanyLogo";
import { companies } from "@/data/companies";
import { getCompanyLogo } from "@/data/companyLogos";
import { sectorHighlights, siteStats } from "@/data/siteContent";
import heroVideo from "@/assets/supun-group-hero-optimized.mp4";
import groupLogo from "@/assets/supun-group-of-companies-logo.png";

const sectorMeta = [
  { icon: Factory },
  { icon: ShoppingBag },
  { icon: Hotel },
  { icon: ShieldCheck },
];

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
  const companyCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCompanies = (direction: -1 | 1) => {
    const carousel = companyCarouselRef.current;
    if (carousel) {
      const firstCard = carousel.firstElementChild as HTMLElement | null;
      const distance = (firstCard?.offsetWidth ?? carousel.clientWidth * 0.85) + 20;
      carousel.scrollBy({ left: direction * distance, behavior: "smooth" });
    }
  };

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
            Built in Sri Lanka.<br /><span className="text-white/55">Built to Last.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-8 sm:text-lg md:text-xl">One Sri Lankan Group, built across four industries since 1978.</p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <Link to="/companies" className="premium-button group inline-flex min-h-14 items-center justify-center gap-3 px-7 font-semibold text-white">Explore our companies <ArrowRight className="transition-transform group-hover:translate-x-1" size={19} /></Link>
            <Link to="/contact" className="glass-button inline-flex min-h-14 items-center justify-center gap-3 px-7 font-semibold text-white">Get In Touch <ArrowRight size={18} /></Link>
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
        <AnimatedSection animation="slide-up" duration={850} triggerOnce={false}>
          <div className="mb-10 flex items-center justify-between gap-5 md:mb-14">
            <p className="section-kicker text-primary before:bg-[#78be43]">Our legacy</p>
            <div className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/45 sm:flex"><span>1978</span><span className="h-px w-14 bg-gradient-to-r from-[#78be43] to-primary/30" /><span>Today</span></div>
          </div>
        </AnimatedSection>
        <div className="grid items-stretch gap-6 lg:grid-cols-[.72fr_1.28fr]">
          <AnimatedSection animation="slide-right" duration={900} triggerOnce={false}>
            <div className="legacy-year-card group relative flex h-full min-h-[350px] flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:min-h-[430px] sm:p-10">
              <div className="legacy-year-ring" aria-hidden="true"><span /><span /><span /></div>
              <div className="relative flex items-center justify-between"><span className="rounded-full border border-primary/10 bg-white/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70 backdrop-blur-xl">Where it began</span><span className="legacy-pulse"><span /></span></div>
              <div className="relative"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5b9d2c]">Established</p><div className="legacy-year mt-2 text-[clamp(5rem,14vw,9rem)] font-semibold leading-none tracking-[-0.075em]">1978</div><p className="mt-4 max-w-xs border-l-2 border-[#78be43] pl-4 text-sm leading-relaxed text-[#526278]">One vision in Colombo became a group built across generations.</p></div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-left" delay={140} duration={950} triggerOnce={false}>
            <div className="legacy-story-card relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-12">
              <div className="legacy-corner-mark" aria-hidden="true" />
              <div className="relative"><span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b9d2c]"><span className="h-2 w-2 rounded-full bg-[#78be43] shadow-[0_0_16px_#78be43]" /> Built across generations</span><h2 className="max-w-4xl text-4xl font-semibold normal-case leading-[1.04] tracking-[-0.04em] text-[#10233f] sm:text-5xl lg:text-6xl">A family business with the courage to <span className="legacy-gradient-text">keep building.</span></h2></div>
              <div className="relative mt-auto pt-10"><div className="grid gap-6 border-t border-primary/10 pt-7 md:grid-cols-2"><p className="leading-relaxed text-[#526278]">What began as a Colombo trading business has grown into a connected group spanning manufacturing, retail, distribution and hospitality.</p><p className="leading-relaxed text-[#526278]">Through every new chapter, one standard remains: create lasting value for our customers, our people and our country.</p></div><Link to="/about" className="legacy-link group mt-8 inline-flex items-center gap-4 font-semibold text-primary">Read our story <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#78be43]/40 bg-[#78be43]/10 text-[#5b9d2c] transition duration-300 group-hover:rotate-[-35deg] group-hover:bg-[#78be43] group-hover:text-white"><ArrowRight size={18} /></span></Link></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#f5f6f1] py-16 text-[#10233f] sm:py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
          <AnimatedSection animation="slide-right" duration={900} triggerOnce={false}>
            <div className="relative min-h-[430px] sm:min-h-[560px]">
              <div className="absolute left-0 top-0 z-10 w-44 rounded-2xl border border-[#10233f]/10 bg-white p-5 shadow-[0_20px_55px_rgba(16,35,63,.10)] sm:w-52 sm:p-6">
                <strong className="block text-4xl font-semibold tracking-[-0.05em] text-[#10233f]">46+</strong>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.16em] text-primary">Years of excellence</span>
                <p className="mt-3 text-xs leading-relaxed text-[#667388]">Building trusted businesses for Sri Lankan families since 1978.</p>
              </div>

              <div className="absolute inset-x-4 bottom-0 top-24 flex items-center justify-center rounded-[2rem] border border-white/80 bg-[radial-gradient(circle_at_center,rgba(120,190,67,.11),transparent_58%)] sm:inset-x-10">
                <span className="absolute h-72 w-72 rounded-full border border-[#78be43]/15 sm:h-96 sm:w-96" />
                <span className="absolute h-52 w-52 rounded-full border border-primary/10 sm:h-72 sm:w-72" />
                <img src={groupLogo} alt="Supun Group of Companies" className="relative w-64 drop-shadow-[0_22px_30px_rgba(16,35,63,.12)] sm:w-80" />
              </div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
              <p className="section-kicker text-primary before:bg-[#78be43]">What we do</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold normal-case leading-[1.05] tracking-[-0.04em] text-[#10233f] sm:text-5xl md:text-6xl">A Sri Lankan group built on making things well.</h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#526278]">From our Colombo trading roots to manufacturing, retail, hospitality and homegrown consumer products, every capability strengthens the next.</p>
            </AnimatedSection>

            <div className="mt-9 border-t border-[#10233f]/12">
              {sectorHighlights.map((sector, index) => {
                const Icon = sectorMeta[index].icon;
                return (
                  <AnimatedSection key={sector.title} animation="slide-left" delay={index * 90} duration={750} triggerOnce={false}>
                    <article className="group grid grid-cols-[2.5rem_1fr_auto] gap-4 border-b border-[#10233f]/12 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-center">
                      <span className="pt-1 text-xs font-semibold tracking-[0.18em] text-primary/55 sm:pt-0">0{index + 1}</span>
                      <div>
                        <h3 className="text-xl font-semibold normal-case text-[#10233f] sm:text-2xl">{sector.title}</h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#667388] sm:text-base">{sector.description}</p>
                      </div>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition duration-300 group-hover:border-[#78be43] group-hover:bg-[#78be43] group-hover:text-white"><Icon size={19} strokeWidth={1.6} /></span>
                    </article>
                  </AnimatedSection>
                );
              })}
            </div>

            <AnimatedSection animation="fade" delay={250} duration={700} triggerOnce={false}>
              <Link to="/companies" className="group mt-8 inline-flex items-center gap-4 font-semibold text-primary">Explore the group <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10233f] text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-[#78be43]"><ArrowRight size={18} /></span></Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-20 md:py-32"><div className="container mx-auto px-4">
      <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="section-kicker">Inside the group</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-0.035em] text-[#10233f] md:text-6xl">Businesses built for impact.</h2></div>
          <div className="flex items-center gap-3">
            <Link to="/companies" className="mr-2 hidden font-semibold text-primary transition hover:text-[#5b9d2c] sm:inline">Meet all 11</Link>
            <button type="button" onClick={() => scrollCompanies(-1)} aria-label="Previous companies" className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary transition hover:border-primary hover:bg-primary hover:text-white"><ArrowRight className="rotate-180" size={19} /></button>
            <button type="button" onClick={() => scrollCompanies(1)} aria-label="Next companies" className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-[#78be43]"><ArrowRight size={19} /></button>
          </div>
        </div>
      </AnimatedSection>
      <div ref={companyCarouselRef} className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {companies.map((company, index) => (
          <AnimatedSection key={company.id} animation="slide-up" delay={(index % 3) * 130} duration={850} triggerOnce={false} className="h-full w-[88%] flex-none snap-start sm:w-[calc(50%_-_0.625rem)] lg:w-[calc(33.333%_-_0.833rem)]">
          <Link to={`/companies/${company.id}`} className="company-glass group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[1.5rem] p-7 transition duration-500 hover:-translate-y-2 md:p-9">
            <span className="absolute right-5 top-3 text-8xl font-semibold tracking-[-0.08em] text-primary/[.045]">0{index + 1}</span>
            <div className="relative flex items-start justify-between gap-5">
              <CompanyLogo companyId={company.id} companyName={company.shortName} className="h-32 w-52 max-w-[65%] rounded-2xl border border-primary/10 p-2 shadow-[0_12px_35px_rgba(18,64,120,.10)] transition duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_16px_40px_rgba(18,64,120,.16)]" imageClassName="scale-[1.55] transition-transform duration-500 group-hover:scale-[1.68]" />
              <span className="inline-flex rounded-full border border-primary/10 bg-primary/[.07] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{company.industry}</span>
            </div>
            <div className="relative mt-auto pt-8">
              <h3 className="text-3xl font-semibold normal-case tracking-[-0.03em] text-[#10233f]">{company.shortName}</h3>
              <p className="mt-4 leading-relaxed text-[#667388]">{company.description}</p>
              <span className="company-link relative mt-7 inline-flex items-center gap-4 font-semibold text-primary">View company <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#78be43]/45 bg-[#78be43]/10 text-[#5b9d2c] transition duration-300 group-hover:rotate-[-35deg] group-hover:bg-[#78be43] group-hover:text-white"><ArrowRight size={18} /></span></span>
            </div>
          </Link>
          </AnimatedSection>
        ))}
      </div>
    </div></section>

  </div>
  );
};

export default Home;
