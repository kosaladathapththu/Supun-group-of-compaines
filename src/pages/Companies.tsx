import area56Rooftop from '@/assets/optimized/area-56-rooftop-night.jpg';
import { usePublicCompanies } from '@/hooks/use-public-companies';
import Seo, { SITE_URL } from '@/components/Seo';
import { CompanyJourney } from '@/components/CompanyJourney';

const Companies = () => {
  const { companies } = usePublicCompanies();
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Our Companies | Supun Group of Companies"
        description={`Explore ${companies.length} Supun Group companies across manufacturing, retail, distribution, hospitality and engineering services in Sri Lanka.`}
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
                'Supun Group companies across manufacturing, retail, distribution, hospitality and engineering services in Sri Lanka.',
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
        {/* Scenic photographic background, no baked-in heading text.
            The existing heading, description and tagline remain accessible HTML. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <img
            src={area56Rooftop}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_52%]"
            decoding="async"
          />
          <div
            className="absolute inset-y-0 right-0 w-[48%] max-md:w-[58%]"
            style={{ clipPath: 'polygon(23% 0, 100% 0, 100% 100%, 0 100%)' }}
          >
            <img
              src="/images/supun-arcade-exterior.png"
              alt=""
              className="h-full w-full object-cover object-[center_60%]"
              decoding="async"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#061f37]/95 via-[#061f37]/75 via-[39%] to-transparent to-[78%]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#061f37]/30 via-transparent to-[#061f37]/15" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#a8d17c]">
              Our businesses
            </p>
            <h1 className="mt-4 text-5xl font-semibold normal-case leading-none tracking-[-.045em] sm:text-6xl md:text-7xl">
              Group Companies
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              The businesses that power Supun Group across wholesale, retail, manufacturing,
              distribution, hospitality and engineering services.
            </p>
            <div className="mt-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.2em] text-white/80">
              <span className="h-px w-12 bg-[#a8d17c]" />
              Strong businesses for a brighter Sri Lanka
            </div>
          </div>
        </div>
      </section>

      <CompanyJourney companies={companies} />
    </div>
  );
};

export default Companies;
