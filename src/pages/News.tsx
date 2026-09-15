import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Newspaper } from 'lucide-react';
import Seo from '@/components/Seo';
import { getErrorMessage, getFileUrl } from '@/services/api';
import { newsAPI, type NewsArticle } from '@/services/newsApi';
import newsHeroEditorial from '@/assets/news-hero-editorial.png';
import { DUMMY_NEWS_NOTICE, dummyNewsArticles } from '@/data/dummyNews';

const filters = ['All updates', 'Corporate', 'Manufacturing', 'Retail', 'Hospitality'];

const formatDate = (value?: string | null) => {
  if (!value) return '';
  const date = new Date(value.replace(' ', 'T'));
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const getArticleImage = (article: NewsArticle) => article.isDummy ? article.featuredImage || '' : getFileUrl(article.featuredImage || undefined) || '';

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [activeFilter, setActiveFilter] = useState('All updates');
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const published = await newsAPI.getPublished();
        setArticles([...published, ...dummyNewsArticles]);
      } catch (error) {
        setLoadError(getErrorMessage(error));
        setArticles(dummyNewsArticles);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const visible = useMemo(() => activeFilter === 'All updates' ? articles : articles.filter((article) => article.category === activeFilter), [activeFilter, articles]);
  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <main className="min-h-screen bg-[#f5f6f4] text-[#10233f]">
      <Seo title="News & Media | Supun Group of Companies" description="Official news, announcements and media updates from Supun Group of Companies in Sri Lanka." keywords="Supun Group news, Supun Group media, Camy news, Sri Lanka manufacturing news" />

      <section className="relative isolate flex min-h-[620px] items-end overflow-hidden border-b border-black/20 px-5 pb-16 pt-32 text-white md:px-8 md:pb-24 md:pt-40">
        <img src={newsHeroEditorial} alt="Corporate editorial workspace overlooking Colombo" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,12,10,.94)_0%,rgba(20,18,15,.82)_42%,rgba(24,21,17,.30)_72%,rgba(20,18,15,.18)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,9,8,.20)_0%,rgba(10,9,8,.12)_48%,rgba(10,9,8,.72)_100%)]" />
        <div className="mx-auto w-full max-w-7xl"><p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#e7a72c]"><span className="h-px w-10 bg-[#e7a72c]" /> News & Media</p><div className="mt-7 max-w-4xl"><h1 className="text-5xl font-bold leading-[.95] tracking-[-.05em] md:text-7xl">Stories from a Group that keeps moving.</h1><p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">Official announcements, company achievements and approved updates from across Supun Group.</p></div></div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-2 overflow-x-auto pb-3">{filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`flex-none rounded-full border px-5 py-3 text-xs font-bold transition ${activeFilter === filter ? 'border-[#10233f] bg-[#10233f] text-white' : 'border-[#10233f]/15 bg-white hover:border-[#78be43]'}`}>{filter}</button>)}</div>

          {isLoading ? <div className="py-20 text-center text-[#68788d]">Loading latest updates...</div> : visible.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-[#10233f]/10 bg-white p-12 text-center"><Newspaper className="mx-auto text-[#78be43]" size={34} /><h2 className="mt-5 text-2xl font-bold">No approved articles published yet.</h2><p className="mt-3 text-[#68788d]">Create an article in Admin → News and publish it when approved.</p></div>
          ) : (
            <div className="mt-8 space-y-6">
              <div className="flex flex-col gap-2 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-950 sm:flex-row sm:items-center sm:justify-between"><span className="font-bold uppercase tracking-[.16em]">Dummy preview stories</span><span>{DUMMY_NEWS_NOTICE}{loadError ? ' Live news could not be loaded.' : ''}</span></div>
              {featured && <Link to={`/news/${featured.slug}`} className="group grid overflow-hidden rounded-[2rem] border border-[#10233f]/10 bg-white shadow-sm lg:grid-cols-[1.15fr_.85fr]">
                <div className="relative min-h-[300px] bg-[#dfe6ed] lg:min-h-[430px]">{featured.featuredImage ? <img src={getArticleImage(featured)} alt={featured.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" /> : <div className="flex h-full items-center justify-center"><Newspaper size={52} className="text-[#315f9f]/35" /></div>}{featured.isDummy && <span className="absolute left-5 top-5 rounded-full border-2 border-white bg-amber-500 px-4 py-2 text-xs font-black uppercase tracking-[.2em] text-[#10233f] shadow-lg">Dummy</span>}</div>
                <div className="flex flex-col p-8 md:p-12"><div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-[#315f9f]"><span>{featured.category}</span>{featured.publishedDate && <span className="inline-flex items-center gap-1.5 text-[#68788d]"><CalendarDays size={14} />{formatDate(featured.publishedDate)}</span>}</div><h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-.035em] md:text-5xl">{featured.title}</h2><p className="mt-5 text-base leading-7 text-[#68788d]">{featured.summary}</p><span className="mt-auto pt-9 inline-flex items-center gap-2 font-bold">Read full story <ArrowRight className="transition group-hover:translate-x-1" size={18} /></span></div>
              </Link>}

              {rest.length > 0 && <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{rest.map((article) => <Link key={article.id} to={`/news/${article.slug}`} className="group overflow-hidden rounded-3xl border border-[#10233f]/10 bg-white transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-52 bg-[#dfe6ed]">{article.featuredImage ? <img src={getArticleImage(article)} alt={article.title} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center"><Newspaper className="text-[#315f9f]/35" size={38} /></div>}{article.isDummy && <span className="absolute left-4 top-4 rounded-full border-2 border-white bg-amber-500 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.18em] text-[#10233f] shadow-lg">Dummy</span>}</div><div className="p-6"><div className="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[.14em] text-[#315f9f]"><span>{article.category}</span><span className="text-[#68788d]">{formatDate(article.publishedDate)}</span></div><h2 className="mt-4 text-2xl font-bold leading-tight">{article.title}</h2><p className="mt-3 line-clamp-3 text-sm leading-6 text-[#68788d]">{article.summary}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Read more <ArrowRight size={15} /></span></div></Link>)}</div>}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
