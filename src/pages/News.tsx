import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Newspaper } from 'lucide-react';
import { AwardIssuerMark } from '@/components/AwardIssuerMark';
import Seo from '@/components/Seo';
import { getErrorMessage, getFileUrl } from '@/services/api';
import { newsAPI, type NewsArticle } from '@/services/newsApi';
import newsHeroEditorial from '@/assets/news-hero-editorial.png';
import { awards } from '@/data/siteContent';

const filters = ['All updates', 'Corporate', 'Manufacturing', 'Retail', 'Hospitality'];

const awardCompanyPaths: Record<string, string> = {
  'Camy Smart': '/companies/camy-smart',
  'Aero Star (Aerostar Home Appliances)': '/companies/aerostar-home-appliances',
  'Supun Group of Companies': '/about',
  'Fuji Industries': '/companies/fuji-industries',
  'Supun Arcade Residency': '/companies/supun-arcade-residency',
};

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
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const published = await newsAPI.getPublished();
        setArticles(published);
      } catch (error) {
        setLoadError(getErrorMessage(error));
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
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#a66d0d]">
                Awards &amp; recognition
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-.04em] md:text-5xl">
                Achievements across the Group.
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-[#68788d]">
              National certifications and industry recognition earned by companies across Supun
              Group.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {awards.map((item) => {
              const isCertification = item.award.toLowerCase().includes('made in sri lanka');

              return (
                <Link
                  key={`${item.award}-${item.awardedTo}`}
                  to={awardCompanyPaths[item.awardedTo] ?? '/companies'}
                  className={`group flex min-h-72 flex-col rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(16,35,63,.10)] ${isCertification ? 'border-[#d79a22]/30 bg-[#fff9ec]' : 'border-[#10233f]/10 bg-[#f7f9fb]'}`}
                >
                  <div className="flex h-20 items-center justify-center rounded-xl bg-white px-3 ring-1 ring-[#10233f]/8">
                    <AwardIssuerMark issuer={item.givenBy} certification={isCertification} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-6">{item.award}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#68788d]">{item.givenBy}</p>
                  <span className="mt-auto flex items-center justify-between gap-3 border-t border-[#10233f]/10 pt-4 text-sm font-bold text-[#315f9f]">
                    {item.awardedTo}
                    <ArrowRight
                      size={16}
                      className="shrink-0 transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-2 overflow-x-auto pb-3">
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

          {isLoading ? (
            <div className="py-20 text-center text-[#68788d]">Loading latest updates...</div>
          ) : visible.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-[#10233f]/10 bg-white p-12 text-center">
              <Newspaper className="mx-auto text-[#78be43]" size={34} />
              <h2 className="mt-5 text-2xl font-bold">No approved articles published yet.</h2>
              <p className="mt-3 text-[#68788d]">
                {loadError
                  ? 'News updates are temporarily unavailable. Please check again soon.'
                  : 'Approved Group news and media updates will appear here.'}
              </p>
            </div>
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
    </main>
  );
}
