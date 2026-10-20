import { ArrowRight, Eye, Flag, Gem, Lightbulb, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from '@/components/Seo';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AwardIssuerMark } from '@/components/AwardIssuerMark';
import chairmanImage from '@/assets/Chairman.png';
import heroCorporate from '@/assets/hero-corporate.jpg';
import aboutHeroSriLanka from '@/assets/about-hero-sri-lanka-v3.png';
import supunTradersHeritage from '@/assets/supun-traders-heritage.png';
import manufacturingImage from '@/assets/camy-factory-technician.jpeg';
import industryBanner from '@/assets/sri-lanka-industry-banner.png';
import sriLankaMap from '@/assets/sri-lanka-watercolor-map.png';
import coreValuesTeam from '@/assets/camy-factory-team-supervisor.png';
import { awards, coreValues, journey, leadership } from '@/data/siteContent';
import { CompanyLogo } from '@/components/CompanyLogo';

const stats = [
  ['12', 'Group companies'],
  ['300+', 'Employees'],
  ['250+', 'Distributors'],
];
const valueIcons = [Gem, Users, Lightbulb, Flag];
const awardCompanyPaths: Record<string, string> = {
  'Camy Smart': '/companies/camy-smart',
  'Aero Star (Aerostar Home Appliances)': '/companies/aerostar-home-appliances',
  'Supun Group of Companies': '/about',
  'Fuji Industries': '/companies/fuji-industries',
  'Supun Arcade Residency': '/companies/supun-arcade-residency',
};
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#315f9f]">{children}</p>
);
const Rule = () => <div className="mt-4 h-0.5 w-12 bg-[#d79a22]" />;

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
  '2023': [{ id: 'fuji-industries', name: 'Fuji Industries' }],
};

const JourneyLogo = ({ id, name }: { id: string; name: string }) =>
  id === 'group' ? (
    <img
      src="/supun-group-of-companies-logo.png"
      alt={name}
      className="h-16 w-20 object-contain"
      loading="lazy"
    />
  ) : (
    <CompanyLogo companyId={id} companyName={name} placement="timeline" className="h-20 w-24" />
  );

const About = () => (
  <div className="min-h-screen overflow-hidden bg-[#fbfaf7] text-[#102746]">
    <Seo
      title="About Supun Group of Companies | Sri Lanka Since 1978"
      description="Learn about Supun Group of Companies, a Sri Lankan family business operating 12 companies across manufacturing, retail, distribution and hospitality since 1978."
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
        alt="Colombo skyline and a modern Sri Lankan business campus at sunrise"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071426]/90 via-[#071426]/45 to-transparent" />
      <div className="container mx-auto flex min-h-[620px] items-center px-4 pb-16 pt-36 md:min-h-[690px] md:pt-40">
        <AnimatedSection animation="fade" duration={550} triggerOnce={false}>
          <div className="max-w-2xl text-white">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#efbd55]">
              Our story continues
            </p>
            <h1 className="mt-5 text-5xl font-semibold normal-case leading-[1.03] tracking-[-.045em] sm:text-6xl md:text-7xl">
              Built in Sri Lanka.
              <br />
              For a brighter tomorrow.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/75 md:text-lg">
              Two generations. Multiple industries. One unwavering commitment to quality, innovation
              and Sri Lankan pride.
            </p>
            <div className="mt-7 h-0.5 w-16 bg-[#e2a630]" />
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

    <section id="story" className="scroll-mt-24 bg-white py-14 md:py-20">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <AnimatedSection animation="fade" duration={500} triggerOnce={false}>
          <Label>Our story</Label>
          <h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em] text-[#28271f] md:text-5xl">
            From trading goods to making them.
          </h2>
          <Rule />
          <div className="mt-6 space-y-4 text-sm leading-7 text-[#53647a] md:text-base">
            <p>
              A family-run business since 1978, Supun Group of Companies began when Mr. Mohamed
              Fareed founded Supun Traders in Colombo, trading household appliances and electronics
              for Sri Lankan homes. In 1999, his son, current Chairman Mr. M.F.M. Kaleel, took over
              the business and formalized it as the Supun Group of Companies, setting the Group on a
              new course: from trading goods to manufacturing them.
            </p>
            <p>
              Through structured growth, the Group is now involved in manufacturing, retail,
              distribution, and hospitality, each held to the same standard of quality and Sri
              Lankan craftsmanship. Under the Camy name, Supun manufactures SLS-certified motorcycle
              helmets, non-stick cookware, air conditioners, and fans entirely in its own factories,
              reaching homes across the island through Supun Super Center and a network of 250+
              distributors.
            </p>
            <p>
              Supun Arcade Residency extends the Group into hospitality with luxury serviced
              apartments in central Colombo, alongside Area 56, its rooftop dining venue.
            </p>
            <p>
              With an eye on the future and a continued focus on Sri Lankan manufacturing, the Group
              credits its growth to two generations of family leadership and a shared commitment to
              quality, innovation, and Sri Lankan pride, in everything it builds.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {stats.map(([value, label]) => (
              <div key={label} className="border-l-2 border-[#d79a22] pl-3">
                <strong className="text-2xl font-semibold md:text-3xl">{value}</strong>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-[#6a788a]">{label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection animation="fade" duration={550} triggerOnce={false}>
          <div className="relative mx-auto min-h-[500px] max-w-2xl">
            <img
              src={sriLankaMap}
              alt=""
              aria-hidden="true"
              className="absolute -right-[3%] -top-[3%] h-[106%] w-[48%] object-contain opacity-45 mix-blend-multiply"
            />
            <img
              src={supunTradersHeritage}
              alt="Historic Supun Traders storefront in Colombo"
              className="absolute left-0 top-5 z-10 h-[285px] w-[67%] -rotate-2 border-[8px] border-white object-cover shadow-xl"
            />
            <img
              src={heroCorporate}
              alt="Supun Group today"
              className="absolute bottom-4 left-[27%] z-20 h-[235px] w-[62%] rotate-3 border-[8px] border-white object-cover shadow-xl"
            />
            <div className="absolute right-[2%] top-[25%] z-30 w-[34%] text-center text-[10px] font-bold uppercase leading-5 tracking-[.14em] text-[#75561f]">
              Local Roots.
              <br />
              Lasting Impact.
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section id="chairman" className="scroll-mt-24 bg-white">
      <div className="container mx-auto grid lg:grid-cols-[.72fr_1.28fr] lg:items-stretch">
        <AnimatedSection animation="fade" duration={500} triggerOnce={false}>
          <div className="flex h-full flex-col items-center justify-center bg-white px-6 py-12 text-center lg:px-10">
            <img
              src={chairmanImage}
              alt="M.F.M. Kaleel, Chairman"
              className="max-h-[500px] w-full max-w-[430px] object-contain object-center"
            />
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
              <p>
                Since the company was established in 1999, Supun Group of Companies has cultivated
                its status as a pioneer in the manufacturing and the trading business. Guided by our
                corporate creed of “Innovation &amp; Creativity”, we have continued to challenge
                ourselves to provide a wide range of products and services locally and
                internationally through technology transfers, human commitment and professionalism.
              </p>
              <p>
                The business environment has experienced radical changes due to the rapid
                advancement of technology and natural environmental distresses. This has helped
                businesses to identify new opportunities and also challenged them with greater
                pressures for change in their approach. As a result, businesses continually change
                their conventional approach to a more agile, lean and forward-thinking structure in
                the perpetually changing environment.
              </p>
              <p>
                We too are constantly challenged by these competitive forces, be it natural or
                man-made, facing them positively and proactively with our dedicated team is what we
                always strive for.
              </p>
              <p>
                At Supun, I am proud to be a part of an excellent team, that has dedicated
                themselves to the success story of a proud Sri Lankan entity. We continue to
                challenge ourselves to seize every opportunity within our reach enabling us to
                enrich the lives of our stakeholders in our efforts to exceed their expectations.
                This has been the core of our success story and we strive to continue our journey in
                nurturing business goals through various new products and services in the future.
              </p>
            </div>
            <p className="mt-7 border-t border-[#102746]/10 pt-5 font-semibold">
              M.F.M. Kaleel{' '}
              <span className="ml-2 text-sm font-normal text-[#6b7889]">Chairman</span>
            </p>
          </article>
        </AnimatedSection>
      </div>
    </section>

    <section id="leadership" className="scroll-mt-24 overflow-hidden bg-[#faf8f2] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#214a36] text-white shadow-[0_10px_25px_rgba(33,74,54,.16)]">
            <Users size={22} strokeWidth={1.7} />
          </div>
          <p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-[#9a6a16]">
            Leadership structure
          </p>
          <h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em] md:text-5xl">
            One vision. Clear leadership.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#69665e] md:text-base">
            A connected leadership structure guiding Group strategy, operational excellence and the
            growth of every Supun business.
          </p>
        </div>

        <div className="relative mx-auto mt-9 max-w-6xl md:mt-11">
          <div className="mx-auto mb-3 w-fit rounded-full border border-[#d79a22]/25 bg-[#fff3d7] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#8b5d10]">
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
                <article className="h-full rounded-xl border border-[#d79a22]/25 bg-white p-4 text-center shadow-[0_8px_24px_rgba(74,55,20,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d79a22]/50">
                  <span className="mx-auto block h-1 w-10 rounded-full bg-[#d79a22]" />
                  <h3 className="mt-3 text-lg font-semibold normal-case text-[#28271f]">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-[11px] font-bold uppercase leading-5 tracking-[.12em] text-[#947027]">
                    {person.title}
                  </p>
                  {person.description && person.description !== '—' && (
                    <p className="mt-2 text-xs leading-5 text-[#777267]">{person.description}</p>
                  )}
                </article>
              </AnimatedSection>
            ))}
          </div>

          <div className="mx-auto mb-3 mt-8 w-fit rounded-full border border-[#4e7c47]/20 bg-[#edf5e8] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#3f6c39]">
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
                <article className="h-full rounded-xl border border-[#4e7c47]/20 bg-white p-5 text-center shadow-[0_8px_24px_rgba(45,82,54,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#4e7c47]/45">
                  <span className="mx-auto block h-1 w-10 rounded-full bg-[#4e7c47]" />
                  <h3 className="mt-2.5 text-xl font-semibold normal-case text-[#28271f]">
                    {person.name}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase leading-5 tracking-[.08em] text-[#4f852c]">
                    {person.title}
                  </p>
                  <p className="mt-3 border-t border-[#4e7c47]/10 pt-3 text-xs leading-5 text-[#777267]">
                    {person.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <div className="mx-auto mb-3 mt-8 w-fit rounded-full border border-[#78be43]/25 bg-[#eff8e9] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#4f852c]">
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
                <article className="h-full rounded-xl border border-[#4e7c47]/15 bg-white p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(45,82,54,.08)]">
                  <div className="text-center">
                    <span className="mx-auto mb-3 block h-1 w-10 rounded-full bg-[#4e7c47]" />
                    <div>
                      <h3 className="text-lg font-semibold normal-case text-[#28271f]">
                        {person.name}
                      </h3>
                      <p className="mt-1.5 text-[11px] font-bold uppercase leading-5 tracking-[.08em] text-[#4f852c]">
                        {person.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-[#4e7c47]/10 pt-3 text-xs leading-5 text-[#777267]">
                    {person.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="direction" className="scroll-mt-24 bg-white py-12 md:py-16">
      <div className="container mx-auto grid items-stretch gap-8 px-4 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <article className="border-t border-border py-7">
            <Eye className="text-[#d79a22]" size={34} strokeWidth={1.6} />
            <Label>Vision</Label>
            <h2 className="mt-3 text-2xl font-semibold normal-case">
              Innovate. Unleash and Excel.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#637186]">
              To unleash the potential within us to transform the markets through innovation and
              exceed people’s expectations for a better tomorrow, through the goods and services
              which empower and enrich the lives of Sri Lankans.
            </p>
          </article>
          <article className="border-t border-border py-7">
            <Target className="text-[#d79a22]" size={34} strokeWidth={1.6} />
            <Label>Mission</Label>
            <h2 className="mt-3 text-2xl font-semibold normal-case">
              Superior thinking. Sustainable value.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#637186]">
              To harness superior thinking in the creation of products and services that
              functionally enhance the livelihood of people, while remaining cautious in reducing
              our carbon footprint. We integrate sustainable practices across our operations while
              delivering exceptional value to our stakeholders.
            </p>
          </article>
        </div>
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl sm:min-h-[440px]">
          <img
            src={manufacturingImage}
            alt="A Camy technician brazing copper tubing on an air-conditioning unit"
            className="absolute inset-0 h-full w-full origin-[left_25%] scale-[1.15] object-cover object-[0%_25%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,24,40,.92)_0%,rgba(6,24,40,.45)_20%,transparent_48%)]" />
          <p className="absolute bottom-6 left-6 right-6 text-2xl font-semibold normal-case leading-[1.2] tracking-[-.02em] text-white sm:bottom-7 sm:left-7 sm:right-7">
            Sustainable solutions.
            <br />
            For generations.
          </p>
        </div>
      </div>
    </section>

    <section id="journey" className="scroll-mt-24 bg-white py-14 md:py-16">
      <div className="container mx-auto px-4">
        <Label>Our journey</Label>
        <h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em]">
          Progress through the years.
        </h2>
        <Rule />
        <p className="mt-3 hidden text-xs text-[#788496] lg:block">
          Scroll through the years to read our story.
        </p>
        <div className="relative mt-9 flex gap-6 overflow-x-auto pb-8 snap-x snap-proximity">
          {journey.map(([year, description]) => {
            const logos = journeyCompanyLogos[year] ?? [];

            return (
              <article
                key={year}
                tabIndex={0}
                aria-label={`${year}: ${description}`}
                className="group relative w-[230px] shrink-0 snap-start pr-3 outline-none focus-visible:ring-2 focus-visible:ring-[#315f9f]"
              >
                <div className="flex h-28 items-center gap-2 pb-3">
                  {logos.map(({ id, name }) => (
                    <span
                      key={id}
                      className="flex h-24 w-[104px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#102746]/10 bg-white p-1 shadow-sm transition-transform group-hover:-translate-y-1 group-focus:-translate-y-1"
                    >
                      <JourneyLogo id={id} name={name} />
                    </span>
                  ))}
                </div>
                <span className="relative z-10 block h-[15px] w-[15px] rounded-full border-[4px] border-white bg-[#d79a22] shadow-[0_0_0_1px_rgba(215,154,34,.25)] transition group-hover:scale-125 group-focus:scale-125" />
                <strong className="mt-3 block text-base font-semibold tracking-[-.02em] text-[#102746]">
                  {year}
                </strong>
                <p className="mt-1.5 text-xs leading-5 text-[#637186]">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-14">
        <div className="relative min-h-[520px] overflow-hidden rounded-[1.75rem] bg-[#102746] shadow-[0_24px_60px_rgba(16,39,70,.16)] sm:min-h-[620px]">
          <img
            src={coreValuesTeam}
            alt="Supun Group factory team assembling Camy air-conditioning units"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b2d] via-[#071b2d]/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#efbd55]">
              Values in action
            </p>
            <h2 className="mt-3 text-3xl font-semibold normal-case leading-tight tracking-[-.03em] sm:text-4xl">
              Built with purpose.
              <br />
              Led by people.
            </h2>
            <div className="mt-6 flex items-center gap-5 border-t border-white/25 pt-5">
              <p className="max-w-[10rem] text-[10px] font-semibold uppercase leading-5 tracking-[.16em] text-white/65">
                Principles that guide our Group
              </p>
            </div>
          </div>
        </div>
        <div>
          <Label>Core values</Label>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold normal-case leading-[1.05] tracking-[-.04em] md:text-5xl">
            What guides us.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#637186]">
            The principles behind how we build, serve and grow across every company in the Group.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {coreValues.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <article
                  key={value.title}
                  className="group rounded-xl border border-[#102746]/10 bg-[#f7f9fc] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#315f9f]/35 hover:shadow-[0_14px_30px_rgba(16,39,70,.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#e8eef6] text-[#315f9f]">
                    <Icon size={21} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold normal-case">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#657286]">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
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
                className={`group flex min-h-[310px] flex-col rounded-[1.5rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,39,70,.10)] ${isCertification ? 'border-[#d79a22]/30 bg-[#fff8e9]' : 'border-[#102746]/10 bg-white'}`}
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
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,16,28,0.9)_0%,rgba(4,16,28,0.76)_52%,rgba(4,16,28,0.25)_100%)]" />
        <div className="flex flex-col items-start justify-between gap-7 px-7 sm:px-10 md:flex-row md:items-center lg:px-14">
          <h2 className="max-w-2xl text-4xl font-semibold normal-case leading-tight tracking-[-.04em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] md:text-5xl">
            Building a stronger Sri Lanka, together.
          </h2>
          <Link
            to="/companies"
            className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#efbd55] px-7 py-3 font-semibold text-[#071b2d] transition duration-300 hover:bg-white"
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

export default About;
