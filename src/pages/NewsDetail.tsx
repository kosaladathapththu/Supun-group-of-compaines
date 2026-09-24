import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Newspaper, UserRound } from 'lucide-react';
import Seo, { SITE_NAME, SITE_URL } from '@/components/Seo';
import { getFileUrl } from '@/services/api';
import { newsAPI, type NewsArticle } from '@/services/newsApi';
import { getAwardNewsBySlug } from '@/data/awardNews';

type DisplayArticle = NewsArticle & {
  localImage?: string;
  companyPath?: string;
};

const formatDate = (value?: string | null) => {
  if (!value) return '';
  const date = new Date(value.replace(' ', 'T'));
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
};

export default function NewsDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState<DisplayArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      const awardStory = getAwardNewsBySlug(slug);

      if (awardStory) {
        setArticle({
          id: -1,
          slug: awardStory.slug,
          title: awardStory.title,
          summary: awardStory.summary,
          content: awardStory.content,
          category: 'Recognition',
          author: 'Supun Group of Companies',
          status: 'published',
          localImage: awardStory.image,
          companyPath: awardStory.companyPath,
        });
        setIsLoading(false);
        return;
      }

      try {
        setArticle(await newsAPI.getBySlug(slug));
      } catch {
        setArticle(null);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [slug]);

  if (isLoading)
    return (
      <div className="min-h-[60vh] bg-[#f5f6f4] py-32 text-center text-muted-foreground">
        Loading article...
      </div>
    );
  if (!article)
    return (
      <section className="min-h-[60vh] bg-[#f5f6f4] px-5 py-32 text-center">
        <Newspaper className="mx-auto text-[#78be43]" size={42} />
        <h1 className="mt-5 text-4xl font-bold">Article not found</h1>
        <p className="mt-3 text-[#68788d]">
          This article may still be a draft or may have been removed.
        </p>
        <Link to="/news" className="mt-7 inline-flex items-center gap-2 font-bold text-[#315f9f]">
          <ArrowLeft size={17} /> Back to News
        </Link>
      </section>
    );

  const image = article.localImage || getFileUrl(article.featuredImage || undefined) || undefined;
  const canonicalPath = `/news/${article.slug}`;
  const paragraphs = article.content
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#10233f]">
      <Seo
        title={article.seoTitle || `${article.title} | ${SITE_NAME}`}
        description={article.seoDescription || article.summary}
        path={canonicalPath}
        image={image}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: article.title,
          description: article.seoDescription || article.summary,
          datePublished: article.publishedDate || article.createdAt,
          dateModified: article.updatedAt || article.createdAt,
          author: { '@type': 'Organization', name: article.author || SITE_NAME },
          publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
          mainEntityOfPage: `${SITE_URL}${canonicalPath}`,
          ...(image ? { image: [image] } : {}),
        }}
      />

      <section className="border-b border-[#10233f]/10 bg-white px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#315f9f]"
          >
            <ArrowLeft size={16} /> News & Media
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[.15em] text-[#315f9f]">
            <span>{article.category}</span>
            {article.publishedDate && (
              <span className="inline-flex items-center gap-1.5 text-[#68788d]">
                <CalendarDays size={14} />
                {formatDate(article.publishedDate)}
              </span>
            )}
            {article.author && (
              <span className="inline-flex items-center gap-1.5 text-[#68788d]">
                <UserRound size={14} />
                {article.author}
              </span>
            )}
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.03] tracking-[-.045em] md:text-6xl lg:text-7xl">
            {article.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#68788d] md:text-xl">
            {article.summary}
          </p>
        </div>
      </section>

      {image && (
        <section className="px-5 pt-10 md:px-8 md:pt-14">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#dfe6ed]">
            <img src={image} alt={article.title} className="max-h-[680px] w-full object-cover" />
          </div>
        </section>
      )}

      <article className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-[1.05rem] leading-8 text-[#34465d]">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
          {article.companyPath && (
            <Link
              to={article.companyPath}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#10233f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#315f9f]"
            >
              View company <ArrowLeft className="rotate-180" size={16} />
            </Link>
          )}
        </div>
      </article>
    </main>
  );
}
