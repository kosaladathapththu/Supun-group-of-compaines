import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Newspaper } from 'lucide-react';
import { AwardIssuerMark } from '@/components/AwardIssuerMark';
import Seo from '@/components/Seo';
import { getFileUrl } from '@/services/api';
import { newsAPI, type NewsArticle } from '@/services/newsApi';
import newsHeroEditorial from '@/assets/news-hero-editorial.png';
import helmetManufacturing from '@/assets/helmet-manufacturing.jpg';
import chromeManufacturing from '@/assets/chrome-manufacturing.jpg';
import heroCorporate from '@/assets/hero-corporate.jpg';
import coolingProducts from '@/assets/products/camy-air-conditioners.png';
import hotelInterior from '@/assets/hotel-interior.jpg';
import { awards } from '@/data/siteContent';

const filters = ['All updates', 'Corporate', 'Manufacturing', 'Retail', 'Hospitality'];

const awardCompanyPaths: Record<string, string> = {
  'Camy Smart': '/companies/camy-smart',
  'Aero Star (Aerostar Home Appliances)': '/companies/aerostar-home-appliances',
  'Supun Group of Companies': '/about',
  'Fuji Industries': '/companies/fuji-industries',
  'Supun Arcade Residency': '/companies/supun-arcade-residency',
};

const awardStoryImages = [
  helmetManufacturing,
  chromeManufacturing,
  heroCorporate,
  coolingProducts,
  hotelInterior,
];

const formatDate = (value?: string | null) => {
  if (!value) return '';
  const date = new Date(value.replace(' ', 'T'));
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const getArticleImage = (article: NewsArticle) =>
  getFileUrl(article.featuredImage || undefined) || '';

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [activeFilter, setActiveFilter] = useState('All updates');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const published = await newsAPI.getPublished();
        setArticles(published);
      } catch {
        setArticles([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const visible = useMemo(
    () =>
      activeFilter === 'All updates'
        ? articles
        : articles.filter((article) => article.category === activeFilter),
    [activeFilter, articles],
  );
  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <main className="min-h-screen bg-[#f5f6f4] text-[#10233f]">
      <Seo
        title="News & Media | Supun Group of Companies"
        description="Official news, announcements and media updates from Supun Group of Companies in Sri Lanka."
        keywords="Supun Group news, Supun Group media, Camy news, Sri Lanka manufacturing news"
      />

      <section className="relative isolate flex min-h-[620px] items-end overflow-hidden border-b border-black/20 px-5 pb-16 pt-32 text-white md:px-8 md:pb-24 md:pt-40">
        <img
          src={newsHeroEditorial}
          alt="Corporate editorial workspace overlooking Colombo"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,12,10,.94)_0%,rgba(20,18,15,.82)_42%,rgba(24,21,17,.30)_72%,rgba(20,18,15,.18)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,9,8,.20)_0%,rgba(10,9,8,.12)_48%,rgba(10,9,8,.72)_100%)]" />
        <div className="mx-auto w-full max-w-7xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#e7a72c]">
            <span className="h-px w-10 bg-[#e7a72c]" /> News & Media
          </p>
          <div className="mt-7 max-w-4xl">
            <h1 className="text-5xl font-bold leading-[.95] tracking-[-.05em] md:text-7xl">
              Stories from a Group that keeps moving.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              Official announcements, company achievements and approved updates from across Supun
              Group.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#10233f]/10 bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-5">
            <h2 className="text-4xl font-semibold tracking-[-.04em] md:text-5xl">
              News &amp; Media
            </h2>
            <span className="mt-2 h-1 w-16 rounded-full bg-[#e74c69]" />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[.7fr_1.45fr_.85fr]">
            <div className="space-y-0">
              <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#e53d63]">
                Recent stories
              </p>
              {awards.slice(1, 3).map((item, offset) => {
                const index = offset + 1;

                return (
                  <Link
                    key={`${item.award}-${item.awardedTo}`}
                    to={awardCompanyPaths[item.awardedTo] ?? '/companies'}
                    className="group grid grid-cols-[1fr_6.5rem] gap-4 border-b border-[#10233f]/12 py-6 first:pt-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[.15em] text-[#e53d63]">
                        Company news
                      </span>
                      <h3 className="mt-3 line-clamp-3 text-xl font-semibold leading-7">
                        {item.awardedTo} recognised with {item.award}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#68788d]">
                        Read story <ArrowRight size={14} />
                      </span>
                    </div>
                    <img
                      src={awardStoryImages[index]}
                      alt={`${item.awardedTo} news`}
                      className="mt-7 h-28 w-full rounded-lg object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                );
              })}
            </div>

            <Link
              to={awardCompanyPaths[awards[0].awardedTo] ?? '/companies'}
              className="group overflow-hidden rounded-2xl bg-[#f5f6f4]"
            >
              <div className="relative h-[26rem] overflow-hidden md:h-[34rem]">
                <img
                  src={awardStoryImages[0]}
                  alt={`${awards[0].awardedTo} featured news`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur">
                  <AwardIssuerMark issuer={awards[0].givenBy} certification />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <span className="text-xs font-bold uppercase tracking-[.16em] text-[#e53d63]">
                  Featured story
                </span>
                <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-.03em]">
                  {awards[0].awardedTo} receives {awards[0].award}
                </h3>
                <p className="mt-4 leading-7 text-[#68788d]">
                  Recognition presented by {awards[0].givenBy}, marking an important achievement for{' '}
                  {awards[0].awardedTo}.
                </p>
              </div>
            </Link>

            <div className="space-y-5">
              {awards.slice(3).map((item, offset) => {
                const index = offset + 3;

                return (
                  <Link
                    key={`${item.award}-${item.awardedTo}`}
                    to={awardCompanyPaths[item.awardedTo] ?? '/companies'}
                    className="group block overflow-hidden rounded-2xl bg-[#10233f] text-white shadow-[0_14px_32px_rgba(16,35,63,.16)]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={awardStoryImages[index]}
                        alt={`${item.awardedTo} news`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/80 to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full bg-[#e53d63] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em]">
                        Latest update
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold leading-7">
                        {item.awardedTo} recognised with {item.award}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f5c34f]">
                        Read story <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {(isLoading || articles.length > 0) && (
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#315f9f]">
                  More News &amp; Media
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-[-.035em] md:text-4xl">
                  Latest published stories
                </h2>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`flex-none rounded-full border px-5 py-3 text-xs font-bold transition ${activeFilter === filter ? 'border-[#10233f] bg-[#10233f] text-white' : 'border-[#10233f]/15 bg-white hover:border-[#78be43]'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {isLoading ? (
              <div className="py-20 text-center text-[#68788d]">Loading latest updates...</div>
            ) : visible.length === 0 ? (
              <p className="mt-8 rounded-2xl border border-[#10233f]/10 bg-white px-6 py-8 text-center text-[#68788d]">
                No stories are available in this category.
              </p>
            ) : (
              <div className="mt-8 space-y-6">
                {featured && (
                  <Link
                    to={`/news/${featured.slug}`}
                    className="group grid overflow-hidden rounded-[2rem] border border-[#10233f]/10 bg-white shadow-sm lg:grid-cols-[1.15fr_.85fr]"
                  >
                    <div className="relative min-h-[300px] bg-[#dfe6ed] lg:min-h-[430px]">
                      {featured.featuredImage ? (
                        <img
                          src={getArticleImage(featured)}
                          alt={featured.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Newspaper size={52} className="text-[#315f9f]/35" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col p-8 md:p-12">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-[#315f9f]">
                        <span>{featured.category}</span>
                        {featured.publishedDate && (
                          <span className="inline-flex items-center gap-1.5 text-[#68788d]">
                            <CalendarDays size={14} />
                            {formatDate(featured.publishedDate)}
                          </span>
                        )}
                      </div>
                      <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-.035em] md:text-5xl">
                        {featured.title}
                      </h2>
                      <p className="mt-5 text-base leading-7 text-[#68788d]">{featured.summary}</p>
                      <span className="mt-auto pt-9 inline-flex items-center gap-2 font-bold">
                        Read full story{' '}
                        <ArrowRight className="transition group-hover:translate-x-1" size={18} />
                      </span>
                    </div>
                  </Link>
                )}

                {rest.length > 0 && (
                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((article) => (
                      <Link
                        key={article.id}
                        to={`/news/${article.slug}`}
                        className="group overflow-hidden rounded-3xl border border-[#10233f]/10 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative h-52 bg-[#dfe6ed]">
                          {article.featuredImage ? (
                            <img
                              src={getArticleImage(article)}
                              alt={article.title}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <Newspaper className="text-[#315f9f]/35" size={38} />
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[.14em] text-[#315f9f]">
                            <span>{article.category}</span>
                            <span className="text-[#68788d]">
                              {formatDate(article.publishedDate)}
                            </span>
                          </div>
                          <h2 className="mt-4 text-2xl font-bold leading-tight">{article.title}</h2>
                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#68788d]">
                            {article.summary}
                          </p>
                          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                            Read more <ArrowRight size={15} />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
