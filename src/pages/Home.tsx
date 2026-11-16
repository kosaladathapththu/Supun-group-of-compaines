import { usePublicCompanies } from '@/hooks/use-public-companies';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Layers3,
  Users,
  MapPin,
  Pause,
  Play,
  ShoppingCart,
  ShoppingBag,
  Building2,
  Package,
  Factory,
} from 'lucide-react';
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from '@/components/Seo';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CompanyLogo } from '@/components/CompanyLogo';
import { BrandShowcase } from '@/components/BrandShowcase';
import { brandsAPI } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { sectorHighlights, siteStats } from '@/data/siteContent';
import './HomeHero.css';
import heroVideo from '@/assets/supun-hero-streaming-hq.mp4';
import heroPoster from '@/assets/optimized/hero-poster.jpg';
import manufacturingImage from '@/assets/optimized/camy-cookware-production-focus-v2.jpg';
import camyRedLogo from '@/assets/camy-logo-red-transparent.png';

const featuredCompanyIds = [
  'supun-traders',
  'supun-super-center',
  'supun-arcade-residency',
  'camy-global',
];

const CountUpStat = ({ value, label, index }: { value: string; label: string; index: number }) => {
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(String(target), '');
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  const Icon = [CalendarDays, Layers3, Users, MapPin][index] || Layers3;
  return (
    <div ref={ref} className="home-reference-stat">
      <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
      <div>
        <strong>
          {count}
          {suffix}
        </strong>
        <span>{label}</span>
      </div>
    </div>
  );
};

const Home = () => {
  const { data: brands = [] } = useQuery({
    queryKey: ['public-brands'],
    queryFn: brandsAPI.getAll,
    retry: false,
    staleTime: 30_000,
  });
  const { companies } = usePublicCompanies();
  const homeCompanies = [
    ...featuredCompanyIds.flatMap((id) => companies.filter((company) => company.id === id)),
    ...companies.filter((company) => !featuredCompanyIds.includes(company.id)),
  ];

  const companyCarouselRef = useRef<HTMLDivElement>(null);
  const carouselInteractionUntil = useRef(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [playHeroVideo, setPlayHeroVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const updatePreference = () =>
      setPlayHeroVideo(
        !reducedMotion.matches &&
          !connection?.saveData &&
          !['slow-2g', '2g'].includes(connection?.effectiveType || ''),
      );
    updatePreference();
    reducedMotion.addEventListener('change', updatePreference);
    return () => reducedMotion.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!playHeroVideo) return;
    const updateVisibility = () => {
      const video = heroVideoRef.current;
      if (!video) return;
      if (document.hidden) video.pause();
      else void video.play().catch(() => undefined);
    };
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, [playHeroVideo]);

  const scrollCompanies = useCallback((direction: -1 | 1) => {
    const carousel = companyCarouselRef.current;
    if (!carousel) return;
    const firstCard = carousel.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 20;
    const distance = (firstCard?.offsetWidth ?? carousel.clientWidth * 0.85) + gap;
    const loopStart = carousel.querySelector<HTMLElement>('[data-marquee-copy="true"]');
    const loopWidth = loopStart && firstCard ? loopStart.offsetLeft - firstCard.offsetLeft : 0;
    const current = loopWidth ? carousel.scrollLeft % loopWidth : carousel.scrollLeft;
    const target = current + direction * distance;
    const wrapping = loopWidth > 0 && (target < 0 || target >= loopWidth);
    const left = loopWidth ? (target + loopWidth) % loopWidth : target;

    carousel.scrollTo({
      left,
      behavior:
        wrapping || window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
    });
  }, []);

  useEffect(() => {
    const carousel = companyCarouselRef.current;
    if (!carousel || !autoScrollEnabled || companies.length < 2) return;
    let hovered = carousel.matches(':hover') && window.matchMedia('(hover: hover)').matches;
    let touching = false;
    let visible = false;
    const delayResume = () => {
      carouselInteractionUntil.current = Date.now() + 500;
    };
    const stopMotion = () => carousel.scrollTo({ left: carousel.scrollLeft, behavior: 'instant' });
    const onEnter = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      hovered = true;
      stopMotion();
    };
    const onLeave = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      hovered = false;
      delayResume();
    };
    const onTouchStart = () => {
      touching = true;
      stopMotion();
    };
    const onTouchEnd = (event: TouchEvent) => {
      touching = event.touches.length > 0;
      delayResume();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.2 },
    );
    observer.observe(carousel);
    carousel.addEventListener('pointerenter', onEnter);
    carousel.addEventListener('pointerleave', onLeave);
    carousel.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });
    carousel.addEventListener('wheel', delayResume, { passive: true });
    carousel.addEventListener('focusout', delayResume);
    let frame = 0;
    let previousTime = 0;
    let position = carousel.scrollLeft;
    let lastWritten = position;
    let loopWidth = 0;
    const measure = () => {
      const first = carousel.firstElementChild as HTMLElement | null;
      const copy = carousel.querySelector<HTMLElement>('[data-marquee-copy="true"]');
      loopWidth = first && copy ? copy.offsetLeft - first.offsetLeft : 0;
    };
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(carousel);
    measure();
    const animate = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0;
      previousTime = time;
      if (
        !visible ||
        document.hidden ||
        hovered ||
        touching ||
        carousel.contains(document.activeElement) ||
        Date.now() < carouselInteractionUntil.current ||
        !loopWidth
      ) {
        position = carousel.scrollLeft;
        lastWritten = position;
      } else {
        if (Math.abs(carousel.scrollLeft - lastWritten) > 1) position = carousel.scrollLeft;
        position = (position + elapsed * 0.04) % loopWidth;
        carousel.scrollTo({ left: position, behavior: 'instant' });
        lastWritten = carousel.scrollLeft;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      stopMotion();
      observer.disconnect();
      carousel.removeEventListener('pointerenter', onEnter);
      carousel.removeEventListener('pointerleave', onLeave);
      carousel.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
      carousel.removeEventListener('wheel', delayResume);
      carousel.removeEventListener('focusout', delayResume);
    };
  }, [autoScrollEnabled, companies.length]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setAutoScrollEnabled(!preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  const manuallyScrollCompanies = (direction: -1 | 1) => {
    carouselInteractionUntil.current = Date.now() + 5000;
    scrollCompanies(direction);
  };

  return (
    <div className="home-page min-h-screen overflow-hidden bg-[#edf3fb]">
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

      <section className="home-reference-hero" aria-labelledby="home-hero-heading">
        <img
          className="home-reference-backdrop"
          src={heroPoster}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        {playHeroVideo && (
          <video
            ref={heroVideoRef}
            className="home-reference-backdrop"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
        <div className="home-reference-content">
          <div className="home-reference-copy">
            <p className="home-reference-kicker">
              <span />
              Independent. Sri Lankan. Since 1978.
            </p>
            <h1 id="home-hero-heading">
              Built in Sri Lanka.
              <br />
              Built to <span>Last.</span>
            </h1>
            <p className="home-reference-description">
              A diversified Sri Lankan group, delivering trusted products, services and solutions
              across multiple industries for over four decades.
            </p>
            <div className="home-reference-actions">
              <Link to="/companies" className="home-reference-primary">
                Explore Our Companies <ArrowRight size={20} />
              </Link>
              <Link to="/about#journey" className="home-reference-secondary">
                Our Journey <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="home-reference-stats" aria-label="Supun Group at a glance">
            {siteStats.map((stat, index) => (
              <CountUpStat
                key={stat.label}
                value={
                  index === 1
                    ? `${companies.length}+`
                    : stat.value.includes('+')
                      ? stat.value
                      : `${stat.value}+`
                }
                label={stat.label}
                index={index}
              />
            ))}
          </div>
          <a href="#legacy" className="home-reference-scroll" aria-label="Discover our story">
            <ArrowDown size={17} />
          </a>
        </div>
      </section>

      <section id="legacy" className="home-legacy" aria-labelledby="home-legacy-heading">
        <div className="home-legacy-layout">
          <figure className="home-legacy-visual">
            <img
              src="/images/companies/supun-building-hero.webp"
              alt="Supun Group of Companies building with the Supun sign on its facade"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="home-legacy-since">
              <span>Since</span>
              <strong>1978</strong>
              <span>Rooted in Sri Lanka.</span>
            </figcaption>
          </figure>
          <div className="home-legacy-editorial">
            <p className="home-legacy-eyebrow">Our story. Still unfolding.</p>
            <h2 id="home-legacy-heading">
              A family legacy.
              <br />
              <span>
                A future we build
                <br />
                together.
              </span>
            </h2>
            <p className="home-legacy-intro">
              From one trading company in Colombo to a group that touches everyday life across Sri
              Lanka.
            </p>
            <p className="home-legacy-body">
              Since 1978, we have grown across manufacturing, retail, distribution and hospitality,
              carrying the same commitment to our customers, our people and our country.
            </p>
            <Link to="/about" className="home-legacy-story-link">
              Discover our story{' '}
              <span>
                <ArrowRight size={21} aria-hidden="true" />
              </span>
            </Link>
            <div className="home-legacy-footnote">
              <span className="home-legacy-footnote-line" aria-hidden="true" />
              <p>
                Built across generations.
                <br />
                <strong>Built for what comes next.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-presence" aria-labelledby="home-presence-heading">
        <div className="home-presence-inner">
          <div className="home-presence-photo-card">
            <img
              src={manufacturingImage}
              alt="A Camy factory employee handling cookware on the production line"
              loading="lazy"
              decoding="async"
            />
            <div className="home-presence-stats" aria-label="Our group at a glance">
              <svg
                className="home-presence-photo-wave"
                viewBox="0 0 500 60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0 25Q230 85 500 0V60H0Z" fill="#85c442" />
                <path d="M0 35Q230 95 500 13V60H0Z" fill="#102944" />
              </svg>
              <div>
                <CalendarDays aria-hidden="true" />
                <p>
                  <strong>4</strong>
                  <span>Sectors</span>
                </p>
              </div>
              <div>
                <Layers3 aria-hidden="true" />
                <p>
                  <strong>{companies.length}+</strong>
                  <span>Companies</span>
                </p>
              </div>
              <div>
                <Users aria-hidden="true" />
                <p>
                  <strong>300+</strong>
                  <span>Employees</span>
                </p>
              </div>
            </div>
          </div>
          <div className="home-presence-copy">
            <p className="home-presence-kicker">Our presence</p>
            <h2 id="home-presence-heading">
              A Sri Lankan group built
              <br className="home-presence-heading-break" /> across industries.
            </h2>
            <p className="home-presence-description">
              From a single trading company to a diversified group across manufacturing, retail,
              distribution and hospitality, we create lasting value for our customers, people and
              the country.
            </p>
            <div className="home-presence-sectors">
              {sectorHighlights.map((sector, index) => {
                const title = [
                  'Manufacturing',
                  'Retail & Distribution',
                  'Hospitality',
                  'Consumer Brands',
                ][index];
                return (
                  <article key={sector.title} className="home-presence-sector">
                    <div>
                      <h3>{title}</h3>
                      <p>{sector.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <Link to="/companies" className="home-legacy-cta home-presence-cta">
              Explore our companies <ArrowRight size={21} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-companies" aria-labelledby="home-companies-heading">
        <div className="home-companies-inner">
          <header className="home-companies-header">
            <div>
              <p className="home-companies-eyebrow">Our group companies</p>
              <h2 id="home-companies-heading">The businesses behind Supun Group</h2>
              <p className="home-companies-description">
                A diversified group serving Sri Lanka across retail, trading, hospitality and
                consumer businesses.
              </p>
            </div>
            <div className="home-companies-controls">
              <Link to="/companies" className="home-companies-explore">
                Explore our companies <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => setAutoScrollEnabled((enabled) => !enabled)}
                aria-label={
                  autoScrollEnabled
                    ? 'Pause automatic company scrolling'
                    : 'Start automatic company scrolling'
                }
                aria-controls="home-company-carousel"
                className="home-companies-control"
              >
                {autoScrollEnabled ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                type="button"
                onClick={() => manuallyScrollCompanies(-1)}
                aria-label="Previous companies"
                className="home-companies-control"
              >
                <ArrowRight className="rotate-180" size={19} />
              </button>
              <button
                type="button"
                onClick={() => manuallyScrollCompanies(1)}
                aria-label="Next companies"
                className="home-companies-control home-companies-next"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </header>
          <div
            ref={companyCarouselRef}
            id="home-company-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="Supun Group companies"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
              event.preventDefault();
              manuallyScrollCompanies(event.key === 'ArrowRight' ? 1 : -1);
            }}
            className="home-company-carousel home-companies-track"
          >
            {[...homeCompanies, ...homeCompanies].map((company, index) => {
              const SectorIcon =
                company.id === 'supun-traders'
                  ? ShoppingCart
                  : company.id === 'supun-super-center'
                    ? ShoppingBag
                    : company.industry === 'Hospitality'
                      ? Building2
                      : company.industry === 'Manufacturing'
                        ? Factory
                        : Package;
              return (
                <div
                  key={company.id + '-' + index}
                  data-marquee-copy={index === homeCompanies.length ? 'true' : undefined}
                  aria-hidden={index >= homeCompanies.length ? true : undefined}
                  className="home-company-slide home-company-tile"
                >
                  <Link
                    to={`/companies/${company.id}`}
                    tabIndex={index >= homeCompanies.length ? -1 : undefined}
                    className="home-company-card"
                  >
                    <div className="home-company-art">
                      <SectorIcon
                        className="home-company-sector-mark"
                        size={29}
                        strokeWidth={1.3}
                        aria-hidden="true"
                      />
                      <CompanyLogo
                        companyId={company.id}
                        companyName={company.shortName}
                        logoUrl={company.logoUrl}
                        placement="home"
                        className="home-company-logo"
                      />
                    </div>
                    <div className="home-company-details">
                      <p className="home-company-established">
                        <span aria-hidden="true" />
                        {company.established
                          ? `Established ${company.established}`
                          : 'Group company'}
                      </p>
                      <h3>{company.shortName}</h3>
                      <p className="home-company-summary">{company.description}</p>
                      <div className="home-company-view">
                        <span>View company</span>
                        <ArrowRight size={20} aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="home-companies-bottom">
            <Link to="/companies">
              Explore Our Companies <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {brands.length > 0 && (
        <section className="border-t border-slate-200 bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#10233f]">Our brands</h2>
            <BrandShowcase brands={brands} />
          </div>
        </section>
      )}

      <section className="home-contact" aria-labelledby="home-contact-heading">
        <div className="home-contact-panel">
          <div className="home-contact-copy">
            <p className="home-contact-eyebrow">The next chapter</p>
            <h2 id="home-contact-heading">
              Let's build something <span>lasting.</span>
            </h2>
            <p className="home-contact-description">
              From ambitious ideas to trusted partnerships, we are ready to create what Sri Lanka
              needs next.
            </p>
          </div>
          <div className="home-contact-action">
            <Link to="/contact">
              Talk to our team <ArrowRight size={21} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
