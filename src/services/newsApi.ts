import api from '@/services/api';

export type NewsStatus = 'draft' | 'published';

export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  featuredImage?: string | null;
  author?: string | null;
  publishedDate?: string | null;
  status: NewsStatus;
  seoTitle?: string | null;
  seoDescription?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

// Static hosting may rewrite a missing /api route to index.html with HTTP 200.
// Validate public responses before they reach the article components.
const isNewsArticle = (value: unknown): value is NewsArticle => {
  if (!value || typeof value !== 'object') return false;
  const article = value as Record<string, unknown>;
  return (
    typeof article.id === 'number' &&
    ['title', 'slug', 'summary', 'content', 'category'].every(
      (field) => typeof article[field] === 'string',
    ) &&
    (article.status === 'draft' || article.status === 'published') &&
    [
      'featuredImage',
      'author',
      'publishedDate',
      'seoTitle',
      'seoDescription',
      'createdAt',
      'updatedAt',
    ].every((field) => article[field] == null || typeof article[field] === 'string')
  );
};

export const newsAPI = {
  getPublished: async (category?: string): Promise<NewsArticle[]> => {
    const { data } = await api.get<unknown>('/news', {
      params: category ? { category } : undefined,
      timeout: 10000,
    });
    if (!Array.isArray(data)) throw new Error('News API returned an invalid article list');
    return data.filter(isNewsArticle);
  },
  getBySlug: async (slug: string): Promise<NewsArticle> => {
    const { data } = await api.get<unknown>(`/news/${encodeURIComponent(slug)}`, {
      timeout: 10000,
    });
    if (!isNewsArticle(data)) throw new Error('News API returned an invalid article');
    return data;
  },
  getAllAdmin: async (): Promise<NewsArticle[]> => {
    const { data } = await api.get('/news/all');
    return data;
  },
  getById: async (id: number): Promise<NewsArticle> => {
    const { data } = await api.get(`/news/admin/${id}`);
    return data;
  },
  create: async (formData: FormData): Promise<NewsArticle> => {
    const { data } = await api.post('/news', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
  update: async (id: number, formData: FormData): Promise<NewsArticle> => {
    const { data } = await api.put(`/news/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
  delete: async (id: number): Promise<{ message: string }> => {
    const { data } = await api.delete(`/news/${id}`);
    return data;
  },
};
