import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from '@/components/Seo';
import { CompanyLogo } from '@/components/CompanyLogo';
import { companies } from '@/data/companies';
import { sectorHighlights, siteStats } from '@/data/siteContent';
import heroVideo from '@/assets/supun-hero-streaming-hq.mp4';
import heroPoster from '@/assets/optimized/hero-poster.jpg';
import manufacturingImage from '@/assets/optimized/camy-cookware-production-focus-v2.jpg';

const featuredCompanyIds = [
  'supun-traders',
  'supun-super-center',
  'supun-arcade-residency',
  'camy-global',
];
const homeCompanies = [
  ...featuredCompanyIds.flatMap((id) => companies.filter((company) => company.id === id)),
  ...companies.filter((company) => !featuredCompanyIds.includes(company.id)),
];

const pad = (n: number) => String(n).padStart(2, '0');

const Home = () => {
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [shouldPlayHeroVideo, setShouldPlayHeroVideo] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const updateVideoPreference = () => {
      const constrainedConnection =
        connection?.saveData ||
        connection?.effectiveType === 'slow-2g' ||
        connection?.effectiveType === '2g';
      setHeroVideoReady(false);
      setShouldPlayHeroVideo(!reducedMotion.matches && !constrainedConnection);
    };

    updateVideoPreference();
    reducedMotion.addEventListener('change', updateVideoPreference);
    return () => reducedMotion.removeEventListener('change', updateVideoPreference);
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    const handleVisibilityChange = () => {
      if (document.hidden) video.pause();
      else void video.play().catch(() => undefined);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [shouldPlayHeroVideo]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Supun Group of Companies | Built in Sri Lanka. Built to Last."
        description="Supun Group of Companies is a Sri Lankan family-run group with 13 companies across manufacturing, retail, distribution and hospitality, with roots going back to 1978."
        keywords="Supun Group of Companies, Sri Lanka manufacturing, Camy, Supun Traders, Supun Super Center, Sri Lankan conglomerate"
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              name: SITE_NAME,
              url: SITE_URL,
              inLanguage: 'en-LK',
            },
            {
              '@type': 'Organization',
              '@id': `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              logo: { '@type': 'ImageObject', url: DEFAULT_IMAGE },
              foundingDate: '1978',
              description:
                'A Sri Lankan family-run group operating across manufacturing, retail, distribution and hospitality.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Colombo',
                addressCountry: 'LK',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+94-112-055-026',
                contactType: 'general enquiries',
                email: 'info@supungroup.lk',
              },
            },
          ],
        }}
      />


      {/* Hero: headline on paper, the group's own video in a plain frame */}
      <section className="border-b border-border">
        <div className="container mx-auto grid max-w-[1240px] gap-10 px-5 pb-14 pt-10 lg:grid-cols-12 lg:gap-14 lg:pb-20 lg:pt-16">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" /> Colombo, since 1978
              </p>
              <h1 className="mt-7 font-heading text-[clamp(2.7rem,6vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.025em] text-foreground [text-wrap:balance]">
                Built in Sri Lanka.
                <br />
                <span className="italic text-primary">Built to last.</span>
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-foreground/75">
                One Sri Lankan family group, built across four industries since 1978.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  to="/companies"
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#14233f]"
                >
                  Our companies <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="border-b border-foreground/40 pb-0.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
                >
                  Read our story
                </Link>
              </div>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-y-6 border-t border-border pt-6 sm:grid-cols-4">
              {siteStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="order-2 mt-1 max-w-[10rem] text-[11px] font-medium uppercase leading-snug tracking-[0.12em] text-foreground/55">
                    {stat.label}
                  </dt>
                  <dd className="font-heading text-4xl font-medium tabular-nums text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#14233f] sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <img
                src={heroPoster}
                alt="Supun Group factory and retail operations"
                fetchPriority="high"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover object-[62%_center] transition-opacity duration-500 ${heroVideoReady ? 'opacity-0' : 'opacity-100'}`}
              />
              {shouldPlayHeroVideo && (
                <video
                  ref={heroVideoRef}
                  className={`absolute inset-0 h-full w-full object-cover object-[62%_center] transition-opacity duration-300 ${heroVideoReady ? 'opacity-100' : 'opacity-0'}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={heroPoster}
                  onLoadedData={() => setHeroVideoReady(true)}
                  aria-hidden="true"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section id="legacy" className="border-b border-border">
        <div className="container mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Where it began
            </p>
            <p className="mt-4 font-heading text-[clamp(6rem,17vw,12rem)] font-medium leading-[0.85] tracking-[-0.05em] text-primary">
              1978
            </p>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <h2 className="font-heading text-4xl font-medium leading-[1.08] tracking-[-0.02em] md:text-5xl">
              A family business with the courage to keep building.
            </h2>
            <div className="mt-8 grid gap-6 border-t border-border pt-7 text-base leading-relaxed text-foreground/75 md:grid-cols-2">
              <p>
                From Colombo trading roots to {siteStats[1].value} companies in manufacturing,
                retail, distribution and hospitality.
              </p>
              <p>Creating lasting value for our customers, people and country since 1978.</p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-foreground/40 pb-0.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Read our story <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
          <figure className="lg:col-span-5">
            <img
              src={manufacturingImage}
              alt="A Camy factory employee handling cookware on the production line"
              className="block aspect-[4/5] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-3 text-xs text-foreground/55">
              Camy cookware, on the production line in Sri Lanka.
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What we do
            </p>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl font-medium leading-[1.08] tracking-[-0.02em] md:text-5xl">
              Four industries, one standard.
            </h2>
            <ol className="mt-10 border-t border-foreground/80">
              {sectorHighlights.map((sector, index) => (
                <li
                  key={sector.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-border py-6 sm:grid-cols-[3rem_14rem_1fr]"
                >
                  <span className="font-heading text-lg text-primary">{pad(index + 1)}</span>
                  <h3 className="font-heading text-2xl font-medium">{sector.title}</h3>
                  <p className="col-start-2 mt-2 text-sm leading-relaxed text-foreground/70 sm:col-start-3 sm:mt-1">
                    {sector.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Companies index */}
      <section className="border-b border-border">
        <div className="container mx-auto max-w-[1240px] px-5 py-16 md:py-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Inside the group
              </p>
              <h2 className="mt-4 font-heading text-4xl font-medium leading-[1.08] tracking-[-0.02em] md:text-5xl">
                The businesses behind Supun Group
              </h2>
            </div>
            <Link
              to="/companies"
              className="inline-flex items-center gap-2 self-start border-b border-foreground/40 pb-0.5 text-sm font-semibold transition hover:border-primary hover:text-primary md:self-auto"
            >
              All companies <ArrowUpRight size={16} />
            </Link>
          </div>

          <ul className="mt-12 border-t border-foreground/80">
            {homeCompanies.map((company, index) => (
              <li key={company.id} className="border-b border-border">
                <Link
                  to={`/companies/${company.id}`}
                  className="group grid grid-cols-[2rem_1fr_auto] items-center gap-x-4 gap-y-1 py-5 transition-colors hover:bg-card md:grid-cols-[3rem_5rem_minmax(0,1.1fr)_minmax(0,1.4fr)_9rem_2rem] md:gap-x-6 md:px-2"
                >
                  <span className="font-heading text-base text-foreground/45">
                    {pad(index + 1)}
                  </span>
                  <span className="hidden h-12 w-20 items-center md:flex">
                    <CompanyLogo
                      companyId={company.id}
                      companyName={company.shortName}
                      placement="home"
                      className="h-12 w-full bg-transparent"
                    />
                  </span>
                  <span className="font-heading text-xl font-medium md:text-2xl">
                    {company.shortName}
                  </span>
                  <span className="col-start-2 col-end-4 line-clamp-2 text-sm leading-relaxed text-foreground/65 md:col-start-auto md:col-end-auto">
                    {company.description}
                  </span>
                  <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-foreground/55 md:block">
                    {company.industry}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="col-start-3 row-start-1 justify-self-end text-foreground/40 transition group-hover:text-primary md:col-start-auto md:row-start-auto"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primary text-white">
        <div className="container mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:py-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="font-heading text-[clamp(2.6rem,6vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.025em]">
              Have an opportunity, a partnership or an idea?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              We would like to hear it. Write to our team and we will get back to you.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#f7f3eb] px-7 py-4 text-sm font-semibold text-[#14233f] transition hover:bg-accent"
            >
              Talk to our team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
