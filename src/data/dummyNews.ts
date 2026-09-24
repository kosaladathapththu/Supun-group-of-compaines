import type { NewsArticle } from '@/services/newsApi';
import manufacturingImage from '@/assets/news-dummy-manufacturing.png';
import retailImage from '@/assets/news-dummy-retail.png';
import hospitalityImage from '@/assets/news-dummy-hospitality.png';

export const DUMMY_NEWS_NOTICE = 'Dummy preview content — for layout demonstration only.';

export const dummyNewsArticles: NewsArticle[] = [
  {
    id: -1,
    title: 'New quality line strengthens local appliance production',
    slug: 'dummy-quality-line-local-appliance-production',
    summary:
      'A preview story showing how a modern inspection line could support consistent quality, safer workflows and future production growth.',
    content: `${DUMMY_NEWS_NOTICE}\n\nThis sample article imagines the opening of a new quality inspection line for locally assembled home appliances. The facility brings testing, final inspection and packing into one coordinated workflow, helping teams spot issues earlier and keep every stage visible.\n\nIn this fictional announcement, team members also complete updated safety and technical training before the line begins operating. The programme focuses on practical checks, careful handling and shared responsibility for quality.\n\nThis story and its accompanying image were created only to demonstrate the News & Media page. Names, events and operational details are not real company announcements.`,
    category: 'Manufacturing',
    featuredImage: manufacturingImage,
    author: 'Supun Group Editorial — Dummy',
    publishedDate: '2026-09-08',
    status: 'published',
    isDummy: true,
  },
  {
    id: -2,
    title: 'Fresh neighbourhood retail concept welcomes families',
    slug: 'dummy-neighbourhood-retail-concept',
    summary:
      'This sample update introduces a bright community store concept centred on fresh produce, easier navigation and a warmer shopping experience.',
    content: `${DUMMY_NEWS_NOTICE}\n\nThis fictional retail update presents a refreshed neighbourhood supermarket designed around convenience and fresh everyday essentials. Wider sightlines, clearly arranged produce and comfortable lighting create a simple, welcoming journey through the store.\n\nThe imagined concept also gives more space to seasonal local produce and family shopping. Team members would be positioned throughout the floor to help customers find products and move through checkout efficiently.\n\nThis is dummy editorial content for website preview purposes. The store, launch and statements described here do not represent an actual announcement.`,
    category: 'Retail',
    featuredImage: retailImage,
    author: 'Supun Group Editorial — Dummy',
    publishedDate: '2026-08-26',
    status: 'published',
    isDummy: true,
  },
  {
    id: -3,
    title: 'Tropical hospitality concept celebrates Sri Lankan warmth',
    slug: 'dummy-tropical-hospitality-concept',
    summary:
      'A fictional hospitality feature exploring calm tropical design, local character and thoughtful spaces made for memorable stays.',
    content: `${DUMMY_NEWS_NOTICE}\n\nThis sample feature imagines a boutique hospitality concept shaped by shaded courtyards, tropical planting and the relaxed rhythm of Sri Lankan living. Natural materials and open-air gathering spaces connect indoor comfort with the surrounding landscape.\n\nIn the fictional concept, guest experiences would place equal emphasis on attentive service, regional flavours and quiet spaces to unwind. The design is intended to feel refined without losing its sense of place.\n\nThis article is clearly labelled dummy content and exists only to preview the editorial design. No property opening or development is being announced.`,
    category: 'Hospitality',
    featuredImage: hospitalityImage,
    author: 'Supun Group Editorial — Dummy',
    publishedDate: '2026-08-12',
    status: 'published',
    isDummy: true,
  },
];

export const getDummyNewsBySlug = (slug?: string) =>
  dummyNewsArticles.find((article) => article.slug === slug);
