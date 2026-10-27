import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CompanyLogo } from '@/components/CompanyLogo';
import Seo, { SITE_URL } from '@/components/Seo';
import { companies, type CompanySector } from '@/data/companies';
import heroImage from '@/assets/optimized/about-hero-sri-lanka-v3.jpg';

const filters: Array<'All' | CompanySector> = [
  'All',
  'Manufacturing',
  'Retail & Distribution',
  'Hospitality',
  'Engineering Services',
];

const Companies = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const visibleCompanies = useMemo(
    () =>
      activeFilter === 'All'
        ? companies
        : companies.filter((company) => company.industry === activeFilter),
    [activeFilter],
  );

  return (
    <div className="min-h-screen bg-[#eee5d5]">
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
            className="mb-6 flex flex-wrap items-center gap-2 border-b border-[#102746]/10 pb-5 sm:gap-3"
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

          <div className="company-logo-directory grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {visibleCompanies.map((company) => (
              <Link
                key={company.id}
                to={`/companies/${company.id}`}
                aria-label={`View ${company.shortName}`}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#c8b99d] bg-[#fffaf0] shadow-[0_12px_30px_rgba(76,55,25,.11)] ring-1 ring-white/80 transition duration-300 hover:-translate-y-1 hover:border-[#ad956d] hover:shadow-[0_20px_44px_rgba(76,55,25,.17)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="flex h-32 items-center justify-center bg-white p-3 sm:h-48 sm:p-4">
                  <CompanyLogo
                    companyId={company.id}
                    companyName={company.shortName}
                    placement="listing"
                    className="h-full w-full"
                    imageClassName="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-[#d9c9ad]/70 bg-[#fffaf0] p-4 sm:p-5">
                  <h2 className="min-h-[2.6em] text-base font-semibold normal-case leading-tight text-[#10233f] sm:text-xl">
                    {company.name}
                  </h2>
                  <p className="mt-2 self-start rounded-full border border-[#d6bf98] bg-[#f4ead7] px-3 py-1 text-[10px] font-semibold text-[#315f9f]">
                    {company.industry}
                  </p>
                  <span className="mt-auto flex items-center justify-between gap-2 pt-4 text-xs font-semibold text-[#10233f] sm:text-sm">
                    View company
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#10233f] bg-[#10233f] text-white transition group-hover:border-[#ad956d] group-hover:bg-[#ad956d]">
                      <ArrowRight size={15} />
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
