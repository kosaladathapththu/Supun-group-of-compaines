import {
  ArrowRight,
  ExternalLink,
  Factory,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import Seo from "@/components/Seo";
import { camyProducts } from "@/data/siteContent";
import camyLogo from "@/assets/camy-brand-logo.png";
import anythingAtSupunLogo from "@/assets/anything-at-supun-logo.png";
import helmetImage from "@/assets/helmet-manufacturing.jpg";
import cookwareImage from "@/assets/cookware-manufacturing.jpg";
import chromeImage from "@/assets/chrome-manufacturing.jpg";
import manufacturingImage from "@/assets/hero-manufacturing.jpg";

const shopUrl = "https://www.anythingatsupun.lk/";

const productImages: Record<string, string> = {
  "Motorcycle Helmets": helmetImage,
  "Non-Stick Cookware": cookwareImage,
  "Water Filters": chromeImage,
  "Mixer Grinders": manufacturingImage,
  "Wall Clocks": chromeImage,
};

const CamyProducts = () => (
  <main className="min-h-screen bg-[#f7f6f3] text-[#111111]">
    <Seo
      title="Camy Products | Made in Sri Lanka | Supun Group"
      description="Explore Camy products made in Sri Lanka, from SLS-certified motorcycle helmets and cookware to dependable home appliances."
      keywords="Camy products Sri Lanka, Camy helmets, Camy cookware, Camy appliances, Made in Sri Lanka"
    />

    <style>{`
      .camy-hero-grid { display: grid; grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr); align-items: center; gap: 3rem; }
      .camy-hero-actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 2.25rem; position: relative; z-index: 3; }
      .camy-hero-button { display: inline-flex; min-height: 54px; align-items: center; justify-content: center; gap: .75rem; border-radius: 999px; padding: .9rem 1.75rem; color: #fff !important; font-size: .875rem; font-weight: 700; text-decoration: none; }
      .camy-hero-button--dark { background: #111; }
      .camy-hero-button--red { background: #ed1c24; box-shadow: 0 10px 28px rgba(237,28,36,.26); }
      .camy-hero-visual { position: relative; min-height: 570px; overflow: hidden; border-radius: 2rem; background: #111; }
      .camy-hero-visual > img { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: cover; filter: grayscale(35%); }
      @media (max-width: 1023px) { .camy-hero-grid { grid-template-columns: 1fr; } .camy-hero-visual { min-height: 480px; } }
      @media (max-width: 640px) { .camy-hero-actions { flex-direction: column; } .camy-hero-button { width: 100%; } }
    `}</style>

    <section className="overflow-hidden border-b border-black/10 bg-white pb-12 pt-32 md:pb-20 md:pt-40">
      <div className="camy-hero-grid container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <div className="mb-9 flex items-center gap-5">
            <img
              src={camyLogo}
              alt="Camy"
              className="h-20 w-20 rounded-full bg-white object-contain shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:h-24 md:w-24"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ed1c24]">
                A Supun Group brand
              </p>
              <p className="mt-1 text-sm font-medium text-black/55">Sri Lankan made consumer products</p>
            </div>
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Made here.
            <span className="block" style={{ color: "#ed1c24" }}>Made for every day.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/60 md:text-xl">
            From protective helmets and cookware to practical home appliances, Camy creates dependable products for Sri Lankan homes—designed and manufactured within the Supun Group.
          </p>

          <div className="camy-hero-actions">
            <a
              href="#camy-range"
              className="camy-hero-button camy-hero-button--dark"
            >
              Explore the range <ArrowRight size={18} />
            </a>
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="camy-hero-button camy-hero-button--red"
            >
              Shop online <ExternalLink size={17} />
            </a>
          </div>
        </div>

        <div className="camy-hero-visual">
          <img
            src={helmetImage}
            alt="Camy helmet manufacturing in Sri Lanka"
            className="absolute inset-0 h-full w-full object-cover grayscale-[35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-white/20 bg-black/65 text-white backdrop-blur-md">
            <div className="p-6 md:p-8">
              <ShieldCheck className="mb-4 text-[#ed1c24]" size={25} />
              <p className="text-lg font-bold">Built with confidence</p>
              <p className="mt-1 text-sm leading-6 text-white/60">Quality-led manufacturing for everyday life.</p>
            </div>
            <div className="border-l border-white/20 p-6 md:p-8">
              <Factory className="mb-4 text-[#ed1c24]" size={25} />
              <p className="text-lg font-bold">Made in Sri Lanka</p>
              <p className="mt-1 text-sm leading-6 text-white/60">Produced by specialist Supun Group companies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="camy-range" className="py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-black/15 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ed1c24]">The Camy range</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] md:text-6xl">Made for real life.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-black/55">
            A growing collection of locally manufactured products, brought together by one trusted Sri Lankan brand.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {camyProducts.map((product, index) => (
            <article
              key={product.name}
              className={`group overflow-hidden rounded-[1.6rem] border border-black/10 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)] ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden bg-[#e9e7e2] ${index === 0 ? "h-72 md:h-[410px]" : "h-72"}`}>
                <img
                  src={productImages[product.name] || manufacturingImage}
                  alt={`${product.name} by Camy`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-7 md:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                    {product.note}
                  </span>
                  <ShieldCheck size={20} className="text-black/30" />
                </div>
                <h3 className="text-2xl font-bold tracking-[-0.025em] md:text-3xl">{product.name}</h3>
                <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">
                  <p className="text-sm text-black/50">Made by <span className="font-semibold text-black/75">{product.madeBy}</span></p>
                  <a
                    href={shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Shop ${product.name}`}
                    className="grid h-11 w-11 place-items-center rounded-full bg-black text-white transition group-hover:bg-[#ed1c24]"
                  >
                    <ShoppingBag size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 pb-20 md:pb-28 lg:px-12">
      <a
        href={shopUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="container mx-auto flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] bg-[#111] p-8 text-white transition hover:bg-[#1b1b1b] md:flex-row md:items-center md:p-12"
      >
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="rounded-2xl bg-white p-4">
            <img src={anythingAtSupunLogo} alt="Anything at Supun" className="h-16 w-auto object-contain" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ed1c24]">Official online store</p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] md:text-4xl">Find Camy at Anything at Supun.</h2>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#ed1c24] px-6 py-4 text-sm font-bold">
          Shop the collection <ExternalLink size={17} />
        </span>
      </a>
    </section>
  </main>
);

export default CamyProducts;
