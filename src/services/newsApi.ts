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
  isDummy?: boolean;
}

export const newsAPI = {
  getPublished: async (category?: string): Promise<NewsArticle[]> => {
    const { data } = await api.get('/news', { params: category ? { category } : undefined });
    return data;
  },
  getBySlug: async (slug: string): Promise<NewsArticle> => {
    const { data } = await api.get(`/news/${slug}`);
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
