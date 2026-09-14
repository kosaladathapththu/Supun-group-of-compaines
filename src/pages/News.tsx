import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import Seo from "@/components/Seo";
import { getErrorMessage, getFileUrl } from "@/services/api";
import { newsAPI, type NewsArticle } from "@/services/newsApi";
import newsHeroEditorial from "@/assets/news-hero-editorial.png";

const filters = ["All updates", "Corporate", "Manufacturing", "Retail", "Hospitality"];

const formatDate = (value?: string | null) => {
  if (!value) return "";
  const date = new Date(value.replace(" ", "T"));
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
};

const News = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [activeFilter, setActiveFilter] = useState("All updates");
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    (async () => {
      try { setArticles(await newsAPI.getPublished()); }
      catch (error) { setLoadError(getErrorMessage(error)); }
      finally { setIsLoading(false); }
    })();
  }, []);

  const visible = useMemo(() => activeFilter === "All updates" ? articles : articles.filter((article) => article.category === activeFilter), [activeFilter, articles]);
  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <main className="min-h-screen bg-white text-[#10233f]">
      <Seo title="News & Media | Supun Group of Companies" description="Official news, announcements and media updates from Supun Group of Companies in Sri Lanka." keywords="Supun Group news, Supun Group media, Camy news, Sri Lanka manufacturing news" />

      <section className="relative isolate min-h-[520px] overflow-hidden bg-[#10233f] text-white">
        <img src={newsHeroEditorial} alt="Supun Group news and media" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,27,52,.97)_0%,rgba(12,39,74,.88)_50%,rgba(8,27,52,.58)_100%)]" />
        <div className="container mx-auto flex min-h-[520px] items-end px-4 pb-14 pt-36">
          <div className="max-w-4xl"><p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-white/65"><span className="h-px w-9 bg-[#78be43]" /> News & Media</p><h1 className="mt-5 text-5xl font-semibold normal-case leading-[1.01] tracking-[-.045em] md:text-6xl">News from across Supun Group.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">Official announcements, company achievements and approved updates.</p></div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto border-b border-[#10233f]/10 pb-5">{filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`flex-none rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${activeFilter === filter ? "border-[#10233f] bg-[#10233f] text-white" : "border-[#10233f]/12 bg-white text-[#65758a] hover:border-[#315f9f]/45"}`}>{filter}</button>)}</div>

          {isLoading ? <div className="py-20 text-center text-[#65758a]">Loading latest updates...</div> : loadError ? <div className="mt-8 border border-[#10233f]/10 bg-[#f7f9fc] p-8 text-center"><Newspaper className="mx-auto text-[#315f9f]" size={30} /><h2 className="mt-4 text-2xl font-semibold normal-case">News service is not available in this preview.</h2><p className="mx-auto mt-3 max-w-2xl text-[#65758a]">Once the backend is running, published Admin articles will appear here automatically.</p></div> : visible.length === 0 ? <div className="mt-8 border border-[#10233f]/10 bg-[#f7f9fc] p-8 text-center"><Newspaper className="mx-auto text-[#315f9f]" size={30} /><h2 className="mt-4 text-2xl font-semibold normal-case">No approved articles published yet.</h2><p className="mt-3 text-[#65758a]">Create an article in Admin → News and publish it when approved.</p></div> : <div className="mt-8 space-y-6">
            {featured && <Link to={`/news/${featured.slug}`} className="grid overflow-hidden border border-[#10233f]/10 bg-white lg:grid-cols-[1fr_1fr]"><div className="min-h-[280px] bg-[#eef2f6] lg:min-h-[360px]">{featured.featuredImage ? <img src={getFileUrl(featured.featuredImage) || ""} alt={featured.title} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center"><Newspaper size={46} className="text-[#315f9f]/30" /></div>}</div><div className="flex flex-col p-7 md:p-9"><div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[.14em] text-[#315f9f]"><span>{featured.category}</span>{featured.publishedDate && <span className="inline-flex items-center gap-1.5 text-[#748195]"><CalendarDays size={14} />{formatDate(featured.publishedDate)}</span>}</div><h2 className="mt-5 text-3xl font-semibold normal-case leading-tight tracking-[-.03em] md:text-4xl">{featured.title}</h2><p className="mt-4 leading-7 text-[#65758a]">{featured.summary}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold">Read full story <ArrowRight size={16} /></span></div></Link>}
            {rest.length > 0 && <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{rest.map((article) => <Link key={article.id} to={`/news/${article.slug}`} className="overflow-hidden border border-[#10233f]/10 bg-white"><div className="h-48 bg-[#eef2f6]">{article.featuredImage ? <img src={getFileUrl(article.featuredImage) || ""} alt={article.title} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center"><Newspaper className="text-[#315f9f]/30" size={36} /></div>}</div><div className="p-5"><div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[.12em] text-[#315f9f]"><span>{article.category}</span><span className="text-[#748195]">{formatDate(article.publishedDate)}</span></div><h2 className="mt-3 text-xl font-semibold normal-case leading-tight">{article.title}</h2><p className="mt-3 line-clamp-3 text-sm leading-6 text-[#65758a]">{article.summary}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Read more <ArrowRight size={15} /></span></div></Link>)}</div>}
          </div>}
        </div>
      </section>
    </main>
  );
};

export default News;
