import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Factory, Globe2, Hotel, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from "@/components/Seo";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CompanyLogo } from "@/components/CompanyLogo";
import { companies } from "@/data/companies";
import { sectorHighlights, siteStats } from "@/data/siteContent";
import heroVideo from "@/assets/supun-group-hero-optimized.mp4";
import manufacturingImage from "@/assets/sector-manufacturing-v2.jpg";

const sectorMeta = [
  { icon: Factory },
  { icon: ShoppingBag },
  { icon: Hotel },
  { icon: ShieldCheck },
];

const keepOriginalLogoSize = (companyId: string) => companyId === "fuji-industries" || companyId === "area-56";
const featuredCompanyIds = ["supun-traders", "supun-super-center", "supun-arcade-residency", "camy-global"];
const homeCompanies = [
  ...featuredCompanyIds.flatMap((id) => companies.filter((company) => company.id === id)),
  ...companies.filter((company) => !featuredCompanyIds.includes(company.id)),
];

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
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d99a24] shadow-[0_0_12px_rgba(217,154,36,.65)]" />
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

  const skipOutdatedShoeDisplay = (video: HTMLVideoElement) => {
    if (video.currentTime >= 16.5 && video.currentTime < 22) video.currentTime = 22;
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

    <section className="premium-hero relative isolate min-h-[760px] overflow-hidden bg-[#07110d] text-white lg:min-h-screen">
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,#252927_0%,#171a18_34%,#0d100e_74%)] transition-opacity duration-1000 ${heroVideoReady ? "opacity-0" : "opacity-100"}`} aria-hidden="true" />
      <video
        className={`absolute inset-0 h-full w-full object-cover object-[62%_center] transition-opacity duration-1000 ${heroVideoReady ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setHeroVideoReady(true)}
        onTimeUpdate={(event) => skipOutdatedShoeDisplay(event.currentTarget)}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,8,.55)_0%,rgba(5,18,12,.32)_38%,rgba(5,17,12,.1)_72%,rgba(3,12,8,.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,7,.08)_0%,transparent_36%,rgba(3,10,7,.42)_100%)]" />

      <div className="container relative z-10 mx-auto flex min-h-[760px] flex-col px-5 pb-7 pt-28 sm:px-6 sm:pt-32 lg:min-h-screen lg:px-8 lg:pb-9 lg:pt-36">
        <div className="hero-topline flex items-center justify-between gap-5 pb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/58 sm:text-[11px]">
          <span className="flex items-center gap-3"><span className="h-px w-8 bg-[#e8aa3a]" /> Independent. Sri Lankan. Since 1978.</span>
          <span className="hidden items-center gap-2 sm:flex"><span className="hero-live-dot" /> Colombo, Sri Lanka</span>
        </div>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 lg:py-14 xl:grid-cols-[minmax(0,1fr)_21rem]">
          <div className="hero-copy max-w-5xl">
            <h1 className="hero-title max-w-5xl text-[clamp(3rem,8vw,6.6rem)] font-semibold normal-case leading-[0.92] tracking-[-0.055em] text-white">
              <span className="hero-title-blue">Built in</span> <span className="hero-title-accent">Sri Lanka.</span><br /><span className="hero-title-blue">Built to </span><span className="hero-title-accent">last.</span>
            </h1>
            <p className="mt-6 max-w-xl border-l border-[#e8aa3a]/70 pl-5 text-sm leading-relaxed text-white/80 sm:mt-8 sm:text-base">One Sri Lankan Group, built across four industries since 1978.</p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Link to="/companies" className="hero-primary-button group inline-flex min-h-14 items-center justify-center gap-4 rounded-full px-7 text-sm font-semibold text-[#0b1b13]">Explore our companies <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b1b13] text-white transition duration-300 group-hover:translate-x-1"><ArrowRight size={16} /></span></Link>
              <Link to="/about" className="hero-ghost-button group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-white">Discover our story <ArrowRight className="transition duration-300 group-hover:translate-x-1 group-hover:text-[#f4bd59]" size={18} /></Link>
            </div>
          </div>

          <div className="hero-legacy-feature hidden self-end lg:block">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f4bd59]"><span className="h-px w-10 bg-[#f4bd59]" /> Established 1978</div>
            <div className="mt-5 flex items-end gap-3">
              <strong className="hero-stat-blue text-[5.75rem] font-semibold leading-[.8] tracking-[-0.09em]">46</strong>
              <span className="mb-1 text-xl font-light text-[#f4bd59]">+</span>
            </div>
            <p className="mt-5 max-w-[13rem] text-sm leading-relaxed text-white/60"><span className="font-semibold text-white">Years of enterprise.</span><br />One vision, built across generations.</p>
            <Link to="/about#journey" className="group mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#efbd55] px-5 text-xs font-bold uppercase tracking-[0.15em] text-[#071b2d] shadow-[0_10px_28px_rgba(239,189,85,.28)] transition hover:-translate-y-0.5 hover:bg-white">Explore our journey <ArrowRight className="transition group-hover:translate-x-1" size={16} /></Link>
          </div>
        </div>

        <div className="hero-bottom-rail flex items-end justify-between gap-6 pt-5">
          <a href="#legacy" className="group hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 transition hover:text-white md:flex"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:border-[#e8aa3a] group-hover:bg-[#e8aa3a] group-hover:text-[#102016]"><ArrowDown size={16} /></span>Scroll to discover</a>
          <div className="ml-auto grid w-full max-w-2xl grid-cols-2 gap-x-7 gap-y-3 sm:grid-cols-4 sm:gap-6">
            {siteStats.map((stat, index) => <CountUpStat key={stat.label} value={stat.value} label={stat.label} index={index} />)}
          </div>
        </div>
      </div>
    </section>

    <section id="legacy" className="legacy-premium relative isolate overflow-hidden py-12 sm:py-14 md:py-20">
      <div className="legacy-aurora legacy-aurora-blue" aria-hidden="true" />
      <div className="legacy-lines absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={850} triggerOnce={false}>
          <div className="mb-8 flex items-center justify-between gap-5 md:mb-10">
            <p className="section-kicker text-primary before:bg-[#d99a24]">Our legacy</p>
            <div className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/45 sm:flex"><span>1978</span><span className="h-px w-14 bg-gradient-to-r from-[#d99a24] to-primary/30" /><span>Today</span></div>
          </div>
        </AnimatedSection>
        <div className="grid items-stretch gap-6 lg:grid-cols-[.72fr_1.28fr]">
          <AnimatedSection animation="slide-right" duration={900} triggerOnce={false}>
            <div className="legacy-year-card group relative flex h-full min-h-[350px] flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:min-h-[430px] sm:p-10">
              <div className="legacy-year-ring" aria-hidden="true"><span /><span /><span /></div>
              <div className="relative flex items-center justify-between"><span className="rounded-full border border-primary/10 bg-white/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70 backdrop-blur-xl">Where it began</span><span className="legacy-pulse"><span /></span></div>
              <div className="relative"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66d0d]">Established</p><div className="legacy-year mt-2 text-[clamp(5rem,14vw,9rem)] font-semibold leading-none tracking-[-0.075em]">1978</div><p className="mt-4 max-w-xs border-l-2 border-[#d99a24] pl-4 text-sm leading-relaxed text-[#526278]">A legacy built over generations.</p></div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-left" delay={140} duration={950} triggerOnce={false}>
            <div className="legacy-story-card relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-12">
              <div className="legacy-corner-mark" aria-hidden="true" />
              <div className="relative"><span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a66d0d]"><span className="h-2 w-2 rounded-full bg-[#d99a24]" /> Built across generations</span><h2 className="max-w-4xl text-4xl font-semibold normal-case leading-[1.04] tracking-[-0.04em] text-[#071b2d] sm:text-5xl lg:text-6xl">A family-run business with the courage to <span className="text-[#071b2d]">keep building.</span></h2></div>
              <div className="relative mt-auto pt-10"><div className="grid gap-6 border-t border-primary/10 pt-7 md:grid-cols-2"><p className="leading-relaxed text-[#526278]">What began as a Colombo trading business has grown into a connected group spanning manufacturing, retail, distribution and hospitality.</p><p className="leading-relaxed text-[#526278]">Through every new chapter, one standard remains: create lasting value for our customers, our people and our country.</p></div><Link to="/about" className="legacy-link group mt-8 inline-flex items-center gap-4 font-semibold text-primary">Read our story <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition duration-300 group-hover:translate-x-1 group-hover:border-[#78be43] group-hover:bg-[#78be43] group-hover:text-white"><ArrowRight size={18} /></span></Link></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-white py-12 text-[#10233f] sm:py-14 md:py-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          <AnimatedSection animation="slide-right" duration={900} triggerOnce={false}>
            <div className="relative min-h-[480px] overflow-hidden rounded-[1.5rem] bg-[#10233f] shadow-[0_24px_60px_rgba(16,35,63,.18)] sm:min-h-[570px]">
              <img src={manufacturingImage} alt="Supun Group manufacturing operations in Sri Lanka" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081a32] via-[#10233f]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#efbd55]">Built in Sri Lanka</p>
                <h3 className="mt-3 max-w-md text-3xl font-semibold normal-case leading-tight tracking-[-0.03em] sm:text-4xl">Local capability. Lasting value.</h3>
                <div className="mt-6 flex items-center gap-5 border-t border-white/25 pt-5">
                  <strong className="text-4xl font-semibold tracking-[-0.05em]">46+</strong>
                  <span className="max-w-[9rem] text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-white/70">Years of trusted enterprise</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
              <p className="section-kicker text-primary before:bg-[#d99a24]">What we do</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold normal-case leading-[1.05] tracking-[-0.04em] text-[#071b2d] sm:text-5xl md:text-6xl">A Sri Lankan group built across industries.</h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#526278]">From a single trading company to four industries today: manufacturing, retail, distribution, and hospitality, each one held to the same standard.</p>
            </AnimatedSection>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {sectorHighlights.map((sector, index) => {
                const Icon = sectorMeta[index].icon;
                return (
                  <AnimatedSection key={sector.title} animation="slide-left" delay={index * 90} duration={750} triggerOnce={false}>
                    <article className="group h-full rounded-xl border border-[#10233f]/10 bg-[#f7f9fc] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#315f9f]/35 hover:shadow-[0_14px_32px_rgba(16,35,63,.08)]">
                      <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#e8eef6] text-[#315f9f]"><Icon size={20} strokeWidth={1.7} /></span>
                      <div>
                        <h3 className="text-xl font-semibold normal-case text-[#071b2d]">{sector.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#667388]">{sector.description}</p>
                      </div>
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

    <section className="py-12 sm:py-14 md:py-20"><div className="container mx-auto px-4">
      <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="section-kicker">Inside the group</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-0.035em] text-[#071b2d] md:text-6xl">The businesses behind Supun Group</h2></div>
          <div className="flex items-center gap-3">
            <Link to="/companies" className="mr-2 hidden font-semibold text-primary transition hover:text-[#315f9f] sm:inline">Explore our companies</Link>
            <button type="button" onClick={() => scrollCompanies(-1)} aria-label="Previous companies" className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary transition hover:border-[#78be43] hover:bg-[#78be43] hover:text-white"><ArrowRight className="rotate-180" size={19} /></button>
            <button type="button" onClick={() => scrollCompanies(1)} aria-label="Next companies" className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-[#78be43]"><ArrowRight size={19} /></button>
          </div>
        </div>
      </AnimatedSection>
      <div ref={companyCarouselRef} className="mt-9 flex items-stretch snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {homeCompanies.map((company, index) => (
          <AnimatedSection key={company.id} animation="slide-up" delay={(index % 4) * 130} duration={850} triggerOnce={false} className="flex w-[88%] flex-none snap-start self-stretch sm:w-[calc(50%_-_0.625rem)] lg:w-[calc(33.333%_-_0.833rem)] xl:w-[calc(25%_-_0.9375rem)]">
          <Link to={`/companies/${company.id}`} className="company-glass group relative flex min-h-[450px] w-full flex-col overflow-hidden rounded-[1.5rem] p-5 transition duration-500 hover:-translate-y-2 md:p-6">
            <div className="company-card-visual relative flex min-h-[178px] items-center justify-center overflow-hidden rounded-[1.15rem] border border-primary/10 bg-white/80 px-7 py-6">
              <CompanyLogo companyId={company.id} companyName={company.shortName} className="h-36 w-full max-w-[310px] bg-transparent transition duration-500" imageClassName={`h-full w-full transition-transform duration-500 ${keepOriginalLogoSize(company.id) ? "group-hover:scale-[1.05]" : "scale-[1.2] group-hover:scale-[1.25]"}`} />
              <span className="absolute bottom-4 right-4 inline-flex rounded-full border border-white bg-[#eef4fb]/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-primary shadow-sm">{company.industry}</span>
            </div>
            <div className="relative flex flex-1 flex-col px-2 pb-1 pt-7">
              <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#738197]"><span className="h-2 w-2 rounded-full bg-[#d99a24]" />{company.established ? `Established ${company.established}` : 'Supun Group company'}</div>
              <h3 className="text-3xl font-semibold normal-case tracking-[-0.03em] text-[#071b2d]">{company.shortName}</h3>
              <p className="mt-3 line-clamp-2 leading-relaxed text-[#667388]">{company.description}</p>
              <div className="mt-auto flex items-center justify-between border-t border-primary/10 pt-5">
                <span className="font-semibold text-primary">View company</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10233f] text-white shadow-[0_8px_20px_rgba(16,35,63,.18)] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#78be43]"><ArrowRight size={18} /></span>
              </div>
            </div>
          </Link>
          </AnimatedSection>
        ))}
      </div>
    </div></section>

    <section className="relative overflow-hidden bg-[#f3f7fb] px-4 pb-12 sm:pb-14 md:pb-20">
      <AnimatedSection animation="scale" duration={900} triggerOnce={false} className="container mx-auto">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#071b2d] px-7 py-12 text-white shadow-[0_30px_80px_rgba(7,27,45,.20)] sm:px-12 sm:py-16 md:rounded-[3rem] lg:px-20 lg:py-20">
          <div className="absolute inset-y-0 right-0 -z-10 w-full bg-[radial-gradient(circle_at_85%_35%,rgba(217,154,36,.16),transparent_30%),linear-gradient(115deg,transparent_45%,rgba(25,83,132,.38))] lg:w-2/3" />
          <Globe2 className="absolute -bottom-28 -right-24 -z-10 h-[28rem] w-[28rem] text-white/[.06]" strokeWidth={0.65} aria-hidden="true" />

          <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:items-end lg:gap-20">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#efbd55]"><Sparkles size={15} /> The next chapter</p>
              <h2 className="max-w-4xl text-4xl font-semibold normal-case leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-7xl">Let’s build something <span className="text-[#efbd55]">lasting.</span></h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">From ambitious ideas to trusted partnerships, we are ready to create what Sri Lanka needs next.</p>
            </div>

            <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="mb-6 text-sm leading-relaxed text-white/55">Have an opportunity, partnership or idea in mind?</p>
              <Link to="/contact" className="group inline-flex w-full items-center justify-between rounded-full bg-[#efbd55] px-6 py-4 font-semibold text-[#071b2d] transition duration-300 hover:bg-white">
                Talk to our team
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071b2d] text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-[#78be43]"><ArrowRight size={18} /></span>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>

  </div>
  );
};

export default Home;
