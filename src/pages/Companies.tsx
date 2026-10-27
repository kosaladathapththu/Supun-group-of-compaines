import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness, CalendarDays, Globe2, MapPin, Phone } from 'lucide-react';
import { CompanyLogo } from '@/components/CompanyLogo';
import Seo, { SITE_URL } from '@/components/Seo';
import { companies, type CompanySector } from '@/data/companies';
import heroImage from '@/assets/optimized/about-hero-sri-lanka-v3.jpg';
import retailImage from '@/assets/optimized/retail-store.jpg';
import supunTradersImage from '@/assets/optimized/supun-traders-real-storefront.jpg';
import distributorsImage from '@/assets/optimized/supun-traders-storefront-v4.jpg';
import hospitalityImage from '@/assets/optimized/sector-hospitality-v2.jpg';
import hotelImage from '@/assets/optimized/hotel-interior.jpg';
import manufacturingImage from '@/assets/optimized/sector-manufacturing-v2.jpg';
import footwearImage from '@/assets/optimized/automotive-design.jpg';
import chromeImage from '@/assets/optimized/chrome-manufacturing.jpg';
import helmetImage from '@/assets/optimized/helmet-manufacturing.jpg';
import cookwareImage from '@/assets/optimized/cookware-manufacturing.jpg';
import coolingImage from '@/assets/products/camy-air-conditioners.webp';
import ecotempImage from '@/assets/optimized/camy-factory-technician.jpg';

const filters: Array<'All' | CompanySector> = [
  'All',
  'Manufacturing',
  'Retail & Distribution',
  'Hospitality',
  'Engineering Services',
];
const companyImages: Record<string, string> = {
  'supun-traders': supunTradersImage,
  'supun-traders-distributors': distributorsImage,
  'supun-super-center': retailImage,
  'supun-arcade-residency': hotelImage,
  'area-56': hospitalityImage,
  'supun-aerosoft': footwearImage,
  'aerostar-home-appliances': chromeImage,
  'camy-smart': helmetImage,
  rodsons: manufacturingImage,
  'new-camy-smart': cookwareImage,
  'fuji-industries': coolingImage,
  ecotemp: ecotempImage,
  'camy-global': retailImage,
};

const Companies = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const visibleCompanies = useMemo(
    () =>
      activeFilter === 'All'
        ? companies
        : companies.filter((company) => company.industry === activeFilter),
    [activeFilter],
  );

  return (
    <div className="min-h-screen bg-[#f3f6f8]">
      <Seo
        title="Our Companies | Supun Group of Companies"
        description="Explore 13 Supun Group companies across manufacturing, retail, distribution and hospitality in Sri Lanka."
        keywords="Supun Group companies, Camy Smart, Supun Traders, Supun Super Center, Air Condition and Fans manufacturing, Sri Lanka manufacturing"
        path="/companies"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              name: 'Supun Group Companies',
              url: `${SITE_URL}/companies`,
              description:
                'Supun Group companies across manufacturing, retail, distribution and hospitality in Sri Lanka.',
              mainEntity: {
                '@type': 'ItemList',
                numberOfItems: companies.length,
                itemListElement: companies.map((company, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  name: company.name,
                  url: `${SITE_URL}/companies/${company.id}`,
                })),
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Our Companies',
                  item: `${SITE_URL}/companies`,
                },
              ],
            },
          ],
        }}
      />

      <section className="relative isolate overflow-hidden bg-[#0b2747] pb-14 pt-36 text-white md:pb-20 md:pt-40">
        <img
          src={heroImage}
          alt="Colombo skyline representing Supun Group businesses"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071d37]/95 via-[#0b2747]/72 to-[#071d37]/35" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#efbd55]">
              Our businesses
            </p>
            <h1 className="mt-4 text-5xl font-semibold normal-case leading-none tracking-[-.045em] sm:text-6xl md:text-7xl">
              Group Companies
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              The businesses that power Supun Group across wholesale, retail, manufacturing,
              distribution and hospitality.
            </p>
            <div className="mt-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.2em] text-white/80">
              <span className="h-px w-12 bg-[#efbd55]" />
              Strong businesses for a brighter Sri Lanka
            </div>
          </div>
        </div>
      </section>

      <section id="company-directory" className="scroll-mt-28 py-10 md:py-14">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div
            className="mb-8 flex flex-wrap items-center gap-3"
            role="tablist"
            aria-label="Filter companies by sector"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${activeFilter === filter ? 'border-[#0b2747] bg-[#0b2747] text-white' : 'border-[#0b2747]/15 bg-white text-[#667388] hover:border-[#d79a22] hover:text-[#0b2747]'}`}
              >
                {filter}
                <span
                  className={`ml-2 text-xs ${activeFilter === filter ? 'text-[#efbd55]' : 'text-[#0b2747]/35'}`}
                >
                  {String(
                    filter === 'All'
                      ? companies.length
                      : companies.filter((company) => company.industry === filter).length,
                  ).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {visibleCompanies.map((company, index) => {
              return (
                <article
                  key={company.id}
                  role="link"
                  tabIndex={0}
                  aria-label={`View ${company.shortName}`}
                  onClick={(event) => {
                    if ((event.target as HTMLElement).closest('a, button')) return;
                    navigate(`/companies/${company.id}`);
                  }}
                  onKeyDown={(event) => {
                    if (event.target !== event.currentTarget) return;
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      navigate(`/companies/${company.id}`);
                    }
                  }}
                  className="group flex h-full flex-col cursor-pointer overflow-hidden rounded-2xl border border-[#0b2747]/10 bg-white shadow-[0_10px_32px_rgba(11,39,71,.07)] transition duration-300 hover:-translate-y-0.5 hover:border-[#315f9f]/25 hover:shadow-[0_18px_45px_rgba(11,39,71,.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f9f] focus-visible:ring-offset-4"
                >
                  <div className="flex h-full flex-col">
                    <div className="company-directory-photo relative aspect-[16/9] overflow-hidden">
                      <img
                        src={companyImages[company.id] || manufacturingImage}
                        alt={`${company.shortName} operations`}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071d37]/70 via-transparent to-transparent" />
                      <CompanyLogo
                        companyId={company.id}
                        companyName={company.shortName}
                        placement="listing"
                        className="company-list-logo absolute bottom-3 right-3 h-14 w-[88px] rounded-lg border border-white/70 bg-white p-1.5 shadow-lg md:bottom-auto md:left-5 md:right-auto md:top-5 md:h-20 md:w-40 md:max-w-[calc(100%-2.5rem)] md:rounded-xl md:p-3"
                        imageClassName="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
                      <div className="flex flex-col justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-semibold normal-case leading-tight tracking-[-.025em] text-[#123b70] lg:text-3xl">
                            {company.name}
                          </h2>
                        </div>
                        <div className="flex shrink-0 flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[.08em] text-[#526278]">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef3f7] px-3 py-2">
                            <BriefcaseBusiness size={14} className="text-[#c58a1b]" />
                            {company.industry}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef3f7] px-3 py-2">
                            <CalendarDays size={14} className="text-[#c58a1b]" />
                            {company.established ? `Est. ${company.established}` : 'Group company'}
                          </span>
                        </div>
                      </div>
                      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#0b2747]/15 pt-4 text-xs font-semibold text-[#244f83]">
                        {company.phone && (
                          <a
                            href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}
                            className="inline-flex items-center gap-2 hover:underline"
                          >
                            <Phone size={14} className="text-[#d79a22]" />
                            {company.phone}
                          </a>
                        )}
                        {company.location && (
                          <span className="inline-flex items-center gap-2">
                            <MapPin size={14} className="text-[#d79a22]" />
                            {company.location}
                          </span>
                        )}
                        {company.website && (
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 hover:text-[#78be43]"
                          >
                            <Globe2 size={14} className="text-[#d79a22]" />
                            Website
                          </a>
                        )}
                        <Link
                          to={`/companies/${company.id}`}
                          className="ml-auto inline-flex items-center gap-2 font-bold text-[#0b2747] transition hover:text-[#78be43]"
                        >
                          View company <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
