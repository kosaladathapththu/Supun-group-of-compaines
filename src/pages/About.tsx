import { ArrowRight, Users, Building2, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from '@/components/Seo';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AwardIssuerMark } from '@/components/AwardIssuerMark';
import chairmanImage from '@/assets/Chairman.png';
import supunTradersToday from '@/assets/optimized/supun-traders-neighbour-signs-blurred.png';
import aboutHeroSriLanka from '@/assets/optimized/about-colombo-sunset.png';
import supunTradersHeritage from '@/assets/optimized/supun-traders-heritage.jpg';
import industryBanner from '@/assets/optimized/sri-lanka-industry-banner.jpg';
import sriLankaMap from '@/assets/optimized/sri-lanka-watercolor-map.webp';
import camyLogo from '@/assets/camy-logo-red-transparent.png';
import { awards, journey, leadership } from '@/data/siteContent';
import { CompanyLogo } from '@/components/CompanyLogo';
import { usePublicCompanies } from '@/hooks/use-public-companies';
import { ResponsiveCopy } from '@/components/ResponsiveCopy';
import { RoundStatementBook } from '@/components/RoundStatementBook';
import './AboutStory.css';
import './AboutJourney.css';
import './AboutJourneyCards.css';

const awardCompanyPaths: Record<string, string> = {
  'Camy Smart': '/companies/camy-smart',
  'Aero Star (Aerostar Home Appliances)': '/companies/aerostar-home-appliances',
  'Supun Group of Companies': '/about',
  'Air Condition and Fans manufacturing': '/companies/fuji-industries',
  'Supun Arcade Residency': '/companies/supun-arcade-residency',
};
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="section-eyebrow text-xs font-bold uppercase tracking-[.18em] text-[#315f9f]">
    {children}
  </p>
);
const Rule = () => <div className="mt-4 h-0.5 w-12 bg-[#78be43]" />;

// Keep the timeline tied to the same logo assets used across the company pages.
const journeyCompanyLogos: Record<string, { id: string; name: string }[]> = {
  '1978': [{ id: 'supun-traders', name: 'Supun Traders' }],
  '1999': [{ id: 'group', name: 'Supun Group of Companies' }],
  '2003': [{ id: 'supun-super-center', name: 'Supun Super Center' }],
  '2010': [
    { id: 'supun-arcade-residency', name: 'Supun Arcade Residency' },
    { id: 'area-56', name: 'Area 56' },
  ],
  '2011': [{ id: 'supun-aerosoft', name: 'Supun Aerosoft' }],
  '2016': [{ id: 'aerostar-home-appliances', name: 'Aero Star' }],
  '2017': [
    { id: 'camy-smart', name: 'Camy Smart' },
    { id: 'rodsons', name: 'Rodsons' },
  ],
  '2018': [{ id: 'new-camy-smart', name: 'New Camy Smart' }],
  '2023': [{ id: 'camy-brand', name: 'Camy' }],
  Today: [
    { id: 'united-electricals-engineering', name: 'United Electricals Engineering' },
    { id: 'ecotemp', name: 'Ecotemp' },
  ],
};

const JourneyLogo = ({ id, name }: { id: string; name: string }) =>
  id === 'group' ? (
    <img
      src="/supun-group-of-companies-logo.png"
      alt={name}
      className="h-16 w-20 object-contain"
      loading="lazy"
      decoding="async"
    />
  ) : id === 'camy-brand' ? (
    <img
      src={camyLogo}
      alt={name}
      className="h-full w-full object-contain p-2"
      loading="lazy"
      decoding="async"
    />
  ) : (
    <CompanyLogo companyId={id} companyName={name} placement="home" className="h-full w-full" />
  );

const journeyTitles: Record<string, string> = {
  '1978': 'Where our story began',
  '1999': 'A new generation of leadership',
  '2003': 'A new retail destination',
  '2010': 'Welcoming Sri Lanka and the world',
  '2011': 'Stepping into manufacturing',
  '2016': 'Building more in-house',
  '2017': 'Safety, made in Sri Lanka',
  '2018': 'Everyday essentials, locally made',
  '2023': 'More comfort for Sri Lankan homes',
  Today: 'Our next chapter',
};

const About = () => {
  const { companies } = usePublicCompanies();
  const sectorCount = new Set(companies.map((company) => company.industry)).size;
  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f8fc] text-[#102746]">
      <Seo
        title="About Supun Group of Companies | Sri Lanka Since 1978"
        description="Learn about Supun Group of Companies, a Sri Lankan family business operating 13 companies across manufacturing, retail, distribution and hospitality since 1978."
        keywords="Supun Group of Companies, Sri Lankan companies, Sri Lanka manufacturing, retail and distribution Sri Lanka, hospitality Colombo, Supun Group history"
        path="/about"
        image={DEFAULT_IMAGE}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AboutPage',
              '@id': `${SITE_URL}/about#about-page`,
              url: `${SITE_URL}/about`,
              name: 'About Supun Group of Companies',
              description:
                'The story, leadership, values, companies and achievements of Supun Group of Companies in Sri Lanka since 1978.',
              isPartOf: {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                name: SITE_NAME,
                url: SITE_URL,
              },
              about: {
                '@id': `${SITE_URL}/#organization`,
              },
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: DEFAULT_IMAGE,
              },
            },
            {
              '@type': 'Organization',
              '@id': `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              logo: {
                '@type': 'ImageObject',
                url: DEFAULT_IMAGE,
              },
              foundingDate: '1978',
              foundingLocation: {
                '@type': 'Place',
                name: 'Colombo, Sri Lanka',
              },
              numberOfEmployees: {
                '@type': 'QuantitativeValue',
                minValue: 300,
              },
              description:
                'A Sri Lankan family-run group operating across manufacturing, retail, distribution and hospitality.',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: SITE_URL,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'About Us',
                  item: `${SITE_URL}/about`,
                },
              ],
            },
          ],
        }}
      />

      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#102746] md:min-h-[690px]">
        <img
          src={aboutHeroSriLanka}
          alt="Colombo skyline, Beira Lake and Lotus Tower at sunset"
          className="about-hero-photo absolute inset-0 -z-20 h-full w-full object-cover object-center"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071426]/90 via-[#071426]/45 to-transparent" />
        <div className="container mx-auto flex min-h-[620px] items-center px-4 pb-16 pt-36 md:min-h-[690px] md:pt-40">
          <AnimatedSection animation="fade" duration={550} triggerOnce={false}>
            <div className="max-w-2xl text-white">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a8d17c]">
                Our story continues
              </p>
              <h1 className="mt-5 text-5xl font-semibold normal-case leading-[1.03] tracking-[-.045em] sm:text-6xl md:text-7xl">
                Built in Sri Lanka.
                <br />
                For a brighter tomorrow.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/75 md:text-lg">
                Two generations. Multiple industries. One unwavering commitment to quality,
                innovation and Sri Lankan pride.
              </p>
              <div className="mt-7 h-0.5 w-16 bg-[#78be43]" />
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 right-6 hidden border-l border-white/50 pl-5 text-[10px] font-bold uppercase leading-6 tracking-[.2em] text-white md:block">
          People
          <br />
          Products
          <br />
          Possibilities
        </div>
      </section>

      <section id="story" className="about-brand-story" aria-labelledby="about-story-heading">
        <div className="about-brand-story-inner">
          <div className="about-brand-story-copy">
            <p className="about-brand-story-eyebrow">
              Our story <span aria-hidden="true" />
            </p>
            <h2 id="about-story-heading">
              From trading goods
              <br />
              to <span>making them.</span>
            </h2>
            <div className="about-brand-story-rule" aria-hidden="true" />
            <div className="about-brand-story-text">
              <p>
                A family-run business since 1978, Supun Group of Companies began when Mr. Mohamed
                Fareed founded Supun Traders in Colombo, trading household appliances and
                electronics for Sri Lankan homes.
              </p>
              <p>
                In 1999, his son, current Chairman Mr. M.F.M. Kaleel, took over the business and
                formalized it as the Supun Group of Companies, setting the Group on a new course:
                from trading goods to manufacturing them. Through structured growth, the Group is
                now involved in manufacturing, retail, distribution and hospitality, each held to
                the same standard of quality and Sri Lankan craftsmanship.
              </p>
            </div>
          </div>
          <div className="about-brand-story-visual">
            <div className="about-brand-story-photos">
              <img
                className="about-brand-story-map"
                src={sriLankaMap}
                alt=""
                aria-hidden="true"
                decoding="async"
              />
              <span className="about-brand-story-map-caption">
                Local roots.
                <br />
                Lasting impact.
              </span>
              <figure className="about-brand-story-heritage">
                <img
                  src={supunTradersHeritage}
                  alt="The historic Supun Traders storefront in Colombo"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="about-brand-story-today">
                <img
                  src={supunTradersToday}
                  alt="Supun Traders storefront at 114, 2nd Cross Street, Colombo"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
          <div className="about-story-facts" aria-label="Supun Group at a glance">
            <div>
              <strong>1978</strong>
              <span>Founded in Colombo</span>
            </div>
            <div>
              <strong>
                48<span>+</span>
              </strong>
              <span>Years of experience</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Industries, one vision</span>
            </div>
            <div>
              <strong>
                250<span>+</span>
              </strong>
              <span>Distributors nationwide</span>
            </div>
          </div>
        </div>
      </section>

      <section id="chairman" className="scroll-mt-24 bg-white">
        <div className="container mx-auto grid lg:grid-cols-[.72fr_1.28fr] lg:items-stretch">
          <AnimatedSection animation="fade" duration={500} triggerOnce={false}>
            <div className="flex h-full flex-col items-center justify-center bg-white px-6 py-5 text-center sm:py-12 lg:px-10">
              <div className="chairman-portrait w-full max-w-[430px] overflow-hidden">
                <img
                  src={chairmanImage}
                  alt="M.F.M. Kaleel, Chairman"
                  className="max-h-[500px] w-full max-w-[430px] object-contain object-center"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 w-full max-w-[430px] border-t border-[#102746]/10 pt-5">
                <p className="text-xl font-medium leading-snug text-[#102746]">
                  “Innovation and creativity for a better tomorrow.”
                </p>
                <p className="mt-4 text-sm font-semibold">M.F.M. Kaleel</p>
                <p className="text-xs text-[#6b7889]">Chairman</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade" duration={550} triggerOnce={false}>
            <article className="flex h-full flex-col justify-center bg-white p-7 sm:p-10 lg:p-14">
              <Label>Chairman’s message</Label>
              <h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em]">
                The personality behind our success story.
              </h2>
              <Rule />
              <div className="mt-7 space-y-4 text-sm leading-7 text-[#53647a]">
                <ResponsiveCopy summary="Our growth is guided by innovation, creativity and a dedicated team. We continue to invest in Sri Lankan manufacturing and create lasting value for our customers, people and partners.">
                  <p>
                    Since the company was established in 1999, Supun Group of Companies has
                    cultivated its status as a pioneer in the manufacturing and the trading
                    business. Guided by our corporate creed of “Innovation &amp; Creativity”, we
                    have continued to challenge ourselves to provide a wide range of products and
                    services locally and internationally through technology transfers, human
                    commitment and professionalism.
                  </p>
                  <p>
                    The business environment has experienced radical changes due to the rapid
                    advancement of technology and natural environmental distresses. This has helped
                    businesses to identify new opportunities and also challenged them with greater
                    pressures for change in their approach. As a result, businesses continually
                    change their conventional approach to a more agile, lean and forward-thinking
                    structure in the perpetually changing environment.
                  </p>
                  <p>
                    We too are constantly challenged by these competitive forces, be it natural or
                    man-made, facing them positively and proactively with our dedicated team is what
                    we always strive for.
                  </p>
                  <p>
                    At Supun, I am proud to be a part of an excellent team, that has dedicated
                    themselves to the success story of a proud Sri Lankan entity. We continue to
                    challenge ourselves to seize every opportunity within our reach enabling us to
                    enrich the lives of our stakeholders in our efforts to exceed their
                    expectations. This has been the core of our success story and we strive to
                    continue our journey in nurturing business goals through various new products
                    and services in the future.
                  </p>
                </ResponsiveCopy>
              </div>
              <p className="mt-7 border-t border-[#102746]/10 pt-5 font-semibold">
                M.F.M. Kaleel{' '}
                <span className="ml-2 text-sm font-normal text-[#6b7889]">Chairman</span>
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-24 overflow-hidden bg-[#f0f7fc] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#0b365a] text-white shadow-[0_10px_25px_rgba(18,64,120,.16)]">
              <Users size={22} strokeWidth={1.7} />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-[#315f9f]">
              Leadership structure
            </p>
            <h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em] md:text-5xl">
              One vision. Clear leadership.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#61758a] md:text-base">
              A connected leadership structure guiding Group strategy, operational excellence and
              the growth of every Supun business.
            </p>
          </div>

          <div className="relative mx-auto mt-9 max-w-6xl md:mt-11">
            <div className="mx-auto mb-3 w-fit rounded-full border border-[#78be43]/25 bg-[#eaf3fd] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#315f9f]">
              Board leadership
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {leadership.slice(0, 3).map((person, index) => (
                <AnimatedSection
                  key={person.name}
                  animation="fade"
                  delay={index * 60}
                  duration={450}
                  triggerOnce={false}
                >
                  <article className="h-full rounded-xl border border-[#78be43]/25 bg-white p-4 text-center shadow-[0_8px_24px_rgba(18,64,120,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#78be43]/50">
                    <span className="mx-auto block h-1 w-10 rounded-full bg-[#78be43]" />
                    <h3 className="mt-3 text-lg font-semibold normal-case text-[#0b2942]">
                      {person.name}
                    </h3>
                    <p className="mt-2 text-[11px] font-bold uppercase leading-5 tracking-[.12em] text-[#315f9f]">
                      {person.title}
                    </p>
                    {person.description && person.description !== '—' && (
                      <p className="mt-2 text-xs leading-5 text-[#61758a]">{person.description}</p>
                    )}
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <div className="mx-auto mb-3 mt-8 w-fit rounded-full border border-[#78be43]/20 bg-[#edf5e8] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#397d29]">
              Group executive leadership
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
              {leadership.slice(3, 5).map((person, index) => (
                <AnimatedSection
                  key={person.name}
                  animation="fade"
                  delay={index * 60}
                  duration={450}
                  triggerOnce={false}
                >
                  <article className="h-full rounded-xl border border-[#78be43]/20 bg-white p-5 text-center shadow-[0_8px_24px_rgba(45,82,54,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#78be43]/45">
                    <span className="mx-auto block h-1 w-10 rounded-full bg-[#78be43]" />
                    <h3 className="mt-2.5 text-xl font-semibold normal-case text-[#0b2942]">
                      {person.name}
                    </h3>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase leading-5 tracking-[.08em] text-[#397d29]">
                      {person.title}
                    </p>
                    <p className="mt-3 border-t border-[#78be43]/10 pt-3 text-xs leading-5 text-[#61758a]">
                      {person.description}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <div className="mx-auto mb-3 mt-8 w-fit rounded-full border border-[#78be43]/25 bg-[#eff8e9] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#397d29]">
              Business leadership
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
              {leadership.slice(5).map((person, index) => (
                <AnimatedSection
                  key={person.name}
                  animation="fade"
                  delay={index * 60}
                  duration={450}
                  triggerOnce={false}
                >
                  <article className="h-full rounded-xl border border-[#78be43]/15 bg-white p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(45,82,54,.08)]">
                    <div className="text-center">
                      <span className="mx-auto mb-3 block h-1 w-10 rounded-full bg-[#78be43]" />
                      <div>
                        <h3 className="text-lg font-semibold normal-case text-[#0b2942]">
                          {person.name}
                        </h3>
                        <p className="mt-1.5 text-[11px] font-bold uppercase leading-5 tracking-[.08em] text-[#397d29]">
                          {person.title}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 border-t border-[#78be43]/10 pt-3 text-xs leading-5 text-[#61758a]">
                      {person.description}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="about-journey about-journey-cards"
        aria-labelledby="about-journey-heading"
      >
        <div className="about-journey-card-inner">
          <header className="about-journey-card-header">
            <div>
              <p className="about-journey-card-eyebrow">Our journey</p>
              <h2 id="about-journey-heading">Progress through the years.</h2>
              <p className="about-journey-card-intro">
                Key milestones that shaped Supun Group of Companies from a single trading business
                to a diversified group across Sri Lanka.
              </p>
            </div>
            <div className="about-journey-overview" aria-label="Our group today">
              <div>
                <Building2 aria-hidden="true" />
                <p>
                  <strong>{companies.length}+</strong>
                  <span>Companies</span>
                </p>
              </div>
              <div>
                <Users aria-hidden="true" />
                <p>
                  <strong>300+</strong>
                  <span>People</span>
                </p>
              </div>
              <div>
                <Layers3 aria-hidden="true" />
                <p>
                  <strong>{sectorCount}</strong>
                  <span>Business sectors</span>
                </p>
              </div>
            </div>
          </header>
          <ol className="about-journey-card-grid">
            {journey.map(([year, description]) => {
              const logos = journeyCompanyLogos[year] ?? [];
              const destination =
                year === 'Today'
                  ? '/companies'
                  : year === '1999'
                    ? '/about#story'
                    : '/companies/' + (year === '2023' ? 'fuji-industries' : logos[0]?.id || '');
              const text =
                year === 'Today'
                  ? `United Electricals Engineering and Ecotemp are part of our next chapter. Today, ${companies.length} companies and 300+ people carry our story forward.`
                  : description;
              return (
                <li key={year}>
                  <Link
                    to={destination}
                    className="about-journey-card"
                    aria-label={`${year === 'Today' ? 'Today (2026)' : year}: ${text}`}
                  >
                    <span className="about-journey-card-year">
                      {year === 'Today' ? 'Today (2026)' : year}
                    </span>
                    <div className="about-journey-card-content">
                      <h3>{journeyTitles[year]}</h3>
                      <p>{text}</p>
                      <div className="about-journey-card-logos">
                        {logos.map(({ id, name }) => (
                          <span key={id}>
                            <JourneyLogo id={id} name={name} />
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="about-journey-card-arrow" aria-hidden="true">
                      <ArrowRight size={19} />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="direction" className="about-direction" aria-label="Our vision and mission">
        <div className="about-direction-inner">
          <RoundStatementBook
            kind="vision"
            title="Vision"
            tagline="Innovate. Unleash and Excel."
            statement="To unleash the potential within us to transform the markets through innovation and exceed people’s expectations for a better tomorrow, through the goods and services which empower and enrich the lives of Sri Lankans."
          />
          <RoundStatementBook
            kind="mission"
            title="Mission"
            tagline="Superior thinking. Sustainable value."
            statement="To harness superior thinking in the creation of products and services that functionally enhance the livelihood of people, while remaining cautious in reducing our carbon footprint. We integrate sustainable practices across our operations while delivering exceptional value to our stakeholders."
          />
        </div>
      </section>

      <section id="awards" className="scroll-mt-24 bg-[#f5f7fa] py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-14">
            <div>
              <Label>Awards &amp; recognition</Label>
              <h2 className="mt-3 max-w-xl text-4xl font-semibold normal-case leading-tight tracking-[-.04em] md:text-5xl">
                Recognition earned across the Group.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#637186]">
              Independent recognition of our local manufacturing, trusted partnerships and industry
              standards.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {awards.map((item) => {
              const isCertification = item.award.toLowerCase().includes('made in sri lanka');
              return (
                <Link
                  to={awardCompanyPaths[item.awardedTo] ?? '/companies'}
                  key={`${item.award}-${item.awardedTo}`}
                  className={`group flex min-h-[310px] flex-col rounded-[1.5rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,39,70,.10)] ${isCertification ? 'border-[#78be43]/30 bg-[#edf5ff]' : 'border-[#102746]/10 bg-white'}`}
                  aria-label={`View ${item.awardedTo}`}
                >
                  <div className="flex h-24 items-center justify-center">
                    <AwardIssuerMark issuer={item.givenBy} certification={isCertification} />
                  </div>
                  <h3 className="mt-6 text-base font-semibold normal-case leading-snug text-[#102746]">
                    {item.award}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#728093]">{item.givenBy}</p>
                  <p className="mt-auto flex items-center justify-between gap-3 border-t border-[#102746]/10 pt-4 text-sm font-semibold leading-5 text-[#315f9f]">
                    {item.awardedTo}
                    <ArrowRight
                      className="shrink-0 transition-transform group-hover:translate-x-1"
                      size={16}
                    />
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-14 pt-4 md:pb-20 md:pt-8">
        <div className="container relative isolate mx-auto overflow-hidden rounded-[2rem] py-20 text-white shadow-[0_24px_60px_rgba(16,39,70,.16)] md:py-24">
          <img
            src={industryBanner}
            alt="Illustration of a Sri Lankan manufacturing and distribution facility"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,16,28,0.9)_0%,rgba(4,16,28,0.76)_52%,rgba(4,16,28,0.25)_100%)]" />
          <div className="flex flex-col items-start justify-between gap-7 px-7 sm:px-10 md:flex-row md:items-center lg:px-14">
            <h2 className="max-w-2xl text-4xl font-semibold normal-case leading-tight tracking-[-.04em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] md:text-5xl">
              Building a stronger Sri Lanka, together.
            </h2>
            <Link
              to="/companies"
              className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#033475] to-[#075d00] px-7 py-3 font-semibold text-white transition duration-300 hover:brightness-110"
            >
              Explore our businesses{' '}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071b2d] text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-[#78be43]">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
