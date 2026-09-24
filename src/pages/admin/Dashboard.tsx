import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Eye, Image, Newspaper, Package, Tags } from 'lucide-react';
import { brandsAPI, categoriesAPI, companiesAPI, productsAPI } from '@/services/api';
import { newsAPI } from '@/services/newsApi';

const sections = [
  {
    key: 'companies',
    label: 'Companies',
    description: 'Profiles displayed in Our Companies',
    path: '/admin/companies',
    preview: '/companies',
    icon: Building2,
    tone: 'bg-[#eaf2e5] text-[#4f8d2c]',
  },
  {
    key: 'news',
    label: 'News & Media',
    description: 'Stories shown on the News page',
    path: '/admin/news',
    preview: '/news',
    icon: Newspaper,
    tone: 'bg-[#fff2d7] text-[#a66d0d]',
  },
  {
    key: 'categories',
    label: 'Product Categories',
    description: 'Groups used by the Camy catalogue',
    path: '/admin/categories',
    preview: '/camy-products',
    icon: Tags,
    tone: 'bg-[#e8f0fb] text-[#275a9f]',
  },
  {
    key: 'products',
    label: 'Products',
    description: 'Products and variations shown publicly',
    path: '/admin/products',
    preview: '/camy-products',
    icon: Package,
    tone: 'bg-[#efeafd] text-[#6845a8]',
  },
  {
    key: 'brands',
    label: 'Brand Logos',
    description: 'Partner and group brand presentation',
    path: '/admin/brands',
    preview: '/',
    icon: Image,
    tone: 'bg-[#f8e9e9] text-[#984747]',
  },
] as const;

type Counts = Record<(typeof sections)[number]['key'], number | null>;
const initialCounts: Counts = {
  companies: null,
  news: null,
  categories: null,
  products: null,
  brands: null,
};

export default function Dashboard() {
  const [counts, setCounts] = useState<Counts>(initialCounts);

  useEffect(() => {
    let active = true;
    Promise.allSettled([
      companiesAPI.getAll(),
      newsAPI.getAllAdmin(),
      categoriesAPI.getAllAdmin(),
      productsAPI.getAllAdmin(),
      brandsAPI.getAllAdmin(),
    ]).then((results) => {
      if (!active) return;
      const value = (index: number) =>
        results[index].status === 'fulfilled' ? results[index].value.length : 0;
      setCounts({
        companies: value(0),
        news: value(1),
        categories: value(2),
        products: value(3),
        brands: value(4),
      });
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#071b2d,#103d63)] px-7 py-8 text-white shadow-xl sm:px-10 sm:py-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#efbd55]">
          Website administration
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold normal-case sm:text-4xl">
              Keep every public section current.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/60">
              Choose a content category below to update the information stored in the website
              database.
            </p>
          </div>
          <Link
            to="/"
            target="_blank"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#071b2d]"
          >
            Preview website <Eye size={16} />
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a66d0d]">
            Frontend categories
          </p>
          <h2 className="mt-1 text-2xl font-semibold normal-case text-[#071b2d]">
            Manage website content
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.map(({ key, label, description, path, preview, icon: Icon, tone }) => (
            <article
              key={key}
              className="group rounded-2xl border border-[#10233f]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${tone}`}>
                  <Icon size={22} />
                </span>
                <strong className="text-3xl text-[#071b2d]">{counts[key] ?? '—'}</strong>
              </div>
              <h3 className="mt-5 text-lg font-semibold normal-case text-[#10233f]">{label}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[#66758a]">{description}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[#10233f]/10 pt-4">
                <Link
                  to={path}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#174e91]"
                >
                  Manage <ArrowRight size={15} />
                </Link>
                <Link
                  to={preview}
                  target="_blank"
                  className="text-xs font-semibold text-[#738196] hover:text-[#071b2d]"
                >
                  Preview
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
