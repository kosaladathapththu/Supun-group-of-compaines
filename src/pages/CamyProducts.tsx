import { ArrowRight, ExternalLink, Factory, ShieldCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Seo from "@/components/Seo";
import { camyProducts } from "@/data/siteContent";
import { getFileUrl, productsAPI, type Product } from "@/services/api";
import camyBlackLogo from "@/assets/camy-brand-logo.png";
import camyRedLogo from "@/assets/camy-logo-red-transparent.png";
import anythingAtSupunLogo from "@/assets/anything-at-supun-logo.png";
import helmetImage from "@/assets/helmet-manufacturing.jpg";
import manufacturingImage from "@/assets/hero-manufacturing.jpg";
import airConditionerImage from "@/assets/products/camy-air-conditioners.png";
import doubleDoorRefrigeratorImage from "@/assets/products/camy-double-door-refrigerator.jpeg";
import electricKettlesImage from "@/assets/products/camy-electric-kettles.png";
import fanImage from "@/assets/products/camy-fan.png";
import gasCookerImage from "@/assets/products/camy-gas-cooker.png";
import miniRefrigeratorImage from "@/assets/products/camy-mini-refrigerator.jpeg";
import mixerGrinderImage from "@/assets/products/camy-mixer-grinder.png";
import motorcycleHelmetImage from "@/assets/products/camy-motorcycle-helmet.png";
import nonStickCookwareImage from "@/assets/products/camy-non-stick-cookware.png";
import pressureCookerImage from "@/assets/products/camy-pressure-cooker.png";
import televisionImage from "@/assets/products/camy-tv.png";
import wallClockImage from "@/assets/products/camy-wall-clock.png";
import waterFilterImage from "@/assets/products/camy-water-filter.png";

const shopUrl = "https://www.anythingatsupun.lk/";

const productImages: Record<string, string> = {
  "Motorcycle Helmets": motorcycleHelmetImage,
  "Non-Stick Cookware": nonStickCookwareImage,
  "Water Filters": waterFilterImage,
  "Mixer Grinders": mixerGrinderImage,
  "Air Conditioners": airConditionerImage,
  "Fans": fanImage,
  "TVs": televisionImage,
  "Wall Clocks": wallClockImage,
  "Electric Kettles": electricKettlesImage,
  "Gas Cookers": gasCookerImage,
  "Refrigerators": doubleDoorRefrigeratorImage,
  "Mini Refrigerators": miniRefrigeratorImage,
  "Pressure Cookers": pressureCookerImage,
};

const categoryLinks: Record<string, string> = {
  "Motorcycle Helmets": "https://www.anythingatsupun.lk/brand/camy/",
  "Water Filters": "https://www.anythingatsupun.lk/product-category/household/water-filters/",
  "Mixer Grinders": "https://www.anythingatsupun.lk/product-category/electronics/mixer-grinder/",
  "Non-Stick Cookware": "https://www.anythingatsupun.lk/product-category/kitchenware/cookware/",
  "Air Conditioners": "https://www.anythingatsupun.lk/product-category/air-conditioners/",
  "Fans": "https://www.anythingatsupun.lk/product-category/electronics/stand-fans/",
  "TVs": "https://www.anythingatsupun.lk/product-category/electronics/tvs/",
  "Wall Clocks": "https://www.anythingatsupun.lk/product-category/wall-clocks/",
  "Electric Kettles": "https://www.anythingatsupun.lk/product-category/electronics/electric-kettles/",
  "Gas Cookers": "https://www.anythingatsupun.lk/product-category/kitchenware/gas-cookers/",
};

const CamyProducts = () => {
  const { data: databaseProducts = [] } = useQuery({
    queryKey: ["public-products"],
    queryFn: () => productsAPI.getAll(),
    staleTime: 30_000,
  });

  const displayProducts = databaseProducts.length > 0
    ? databaseProducts.map((product: Product) => {
        const original = camyProducts.find((item) => item.name === product.title);
        return {
          id: product.id,
          name: product.title,
          madeBy: original?.madeBy || "Supun Group",
          note: original?.note || product.categoryName || "Camy Product",
          image: product.title === "Mixer Grinders"
            ? mixerGrinderImage
            : getFileUrl(product.imageUrl) || productImages[product.title] || manufacturingImage,
        };
      })
    : camyProducts.map((product) => ({
        ...product,
        id: product.name,
        image: productImages[product.name] || manufacturingImage,
      }));

  return (
  <main className="min-h-screen bg-[#f7f6f3] text-[#111]">
    <Seo
      title="Camy Products | Made in Sri Lanka | Supun Group"
      description="Explore Camy products made in Sri Lanka, from SLS-certified motorcycle helmets and cookware to dependable home appliances."
      keywords="Camy products Sri Lanka, Camy helmets, Camy cookware, Camy appliances, Made in Sri Lanka"
    />

    <style>{`
      .camy-hero { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); align-items:center; gap:3rem; }
      .camy-actions { display:flex; flex-wrap:wrap; gap:.75rem; margin-top:2rem; }
      .camy-button { display:inline-flex; min-height:54px; align-items:center; justify-content:center; gap:.7rem; border-radius:999px; padding:.9rem 1.65rem; color:#fff!important; font-size:.875rem; font-weight:800; transition:.3s ease; }
      .camy-button:hover { transform:translateY(-2px); }
      .camy-button-dark { background:#111; }
      .camy-button-red { background:#ed1c24; box-shadow:0 10px 28px rgba(237,28,36,.24); }
      .camy-visual { position:relative; min-height:600px; overflow:hidden; border-radius:2rem; background:#111; }
      .camy-visual>img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:grayscale(25%); }
      .camy-proof { position:absolute; inset-inline:0; bottom:0; display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); border-top:1px solid rgba(255,255,255,.2); background:linear-gradient(110deg,rgba(15,15,15,.98),rgba(38,38,38,.96)); color:#fff; }
      .camy-proof-item { padding:1.65rem; }
      .camy-proof-item+.camy-proof-item { border-left:1px solid rgba(255,255,255,.18); }
      .camy-proof-icon { margin-bottom:.75rem; color:#ed1c24; }
      .camy-proof-title { display:block; color:#fff; font-size:1.05rem; font-weight:800; }
      .camy-proof-text { margin-top:.35rem; color:rgba(255,255,255,.72); font-size:.86rem; line-height:1.5; }
      .camy-catalog { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1.35rem; }
      .camy-card { display:grid; grid-template-columns:46% 54%; min-height:310px; overflow:hidden; border:1px solid rgba(17,17,17,.18); border-radius:1.65rem; background:#fff; box-shadow:0 10px 30px rgba(17,17,17,.07); transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s ease,border-color .35s ease; }
      .camy-card:hover { transform:translateY(-5px); border-color:rgba(237,28,36,.45); box-shadow:0 25px 60px rgba(17,17,17,.14); }
      .camy-card:nth-child(4n+2),.camy-card:nth-child(4n+3) { grid-template-columns:54% 46%; }
      .camy-card:nth-child(4n+2) .camy-media,.camy-card:nth-child(4n+3) .camy-media { order:2; }
      .camy-media { position:relative; min-width:0; overflow:hidden; background:#f0efeb; clip-path:inset(0 round 0); transition:clip-path .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
      .camy-media::after { content:""; position:absolute; inset:0; z-index:1; opacity:0; background:rgba(0,0,0,.48); transition:opacity .4s ease; pointer-events:none; }
      .camy-media>img { display:block; width:100%; height:100%; object-fit:contain; background:#fff; padding:1rem; transition:transform .75s cubic-bezier(.22,1,.36,1),filter .45s ease; }
      .camy-card:hover .camy-media { clip-path:inset(18px round 999px); transform:scale(.96); }
      .camy-card:hover .camy-media>img { transform:scale(1.11); filter:saturate(.82) contrast(1.04); }
      .camy-card:hover .camy-media::after { opacity:1; }
      .camy-hover-brand { position:absolute; inset:0; z-index:2; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; pointer-events:none; }
      .camy-hover-brand img { width:66px; height:66px; object-fit:contain; border-radius:50%; background:#fff; padding:.35rem; opacity:0; transform:scale(.55) rotate(-12deg); transition:opacity .35s ease .08s,transform .55s cubic-bezier(.22,1,.36,1) .08s; }
      .camy-hover-brand strong { margin-top:.7rem; font-size:.8rem; letter-spacing:.3em; opacity:0; transform:translateY(12px); transition:opacity .35s ease .32s,transform .45s ease .32s; }
      .camy-card:hover .camy-hover-brand img { opacity:1; transform:scale(1) rotate(0); }
      .camy-card:hover .camy-hover-brand strong { opacity:1; transform:translateY(0); }
      .camy-copy { display:flex; min-width:0; flex-direction:column; justify-content:space-between; padding:2rem; }
      .camy-tag { display:inline-flex; align-items:center; gap:.4rem; color:#ed1c24; font-size:.68rem; font-weight:800; letter-spacing:.14em; text-transform:uppercase; }
      .camy-link { display:flex; align-items:center; justify-content:space-between; border-top:1px solid rgba(17,17,17,.1); padding-top:1rem; color:#111!important; font-size:.78rem; font-weight:800; }
      .camy-link-icon { display:grid; width:2.25rem; height:2.25rem; place-items:center; border-radius:50%; background:#111; color:#fff; transition:.3s ease; }
      .camy-card:hover .camy-link-icon { transform:translateX(3px); background:#ed1c24; }
      .camy-categories { display:flex; gap:.7rem; overflow-x:auto; padding:0 0 1rem; scrollbar-width:thin; }
      .camy-category { display:inline-flex; flex:0 0 auto; align-items:center; gap:.7rem; border:1px solid rgba(17,17,17,.12); border-radius:999px; background:#fff; padding:.8rem 1.05rem; color:#111!important; font-size:.76rem; font-weight:800; transition:.3s ease; }
      .camy-category::before { content:""; width:.45rem; height:.45rem; border-radius:50%; background:#ed1c24; }
      .camy-category:hover { transform:translateY(-2px); border-color:#ed1c24; color:#ed1c24!important; box-shadow:0 8px 22px rgba(0,0,0,.07); }
      @media(max-width:1023px) { .camy-hero { grid-template-columns:1fr; } .camy-visual { min-height:470px; } .camy-catalog { grid-template-columns:1fr; } }
      @media(max-width:640px) { .camy-actions { flex-direction:column; } .camy-button { width:100%; } .camy-proof { grid-template-columns:1fr; } .camy-proof-item { padding:1rem 1.35rem; } .camy-proof-item+.camy-proof-item { border-left:0; border-top:1px solid rgba(255,255,255,.16); } .camy-proof-icon { margin-bottom:.35rem; } .camy-proof-text { margin-top:.2rem; font-size:.78rem; } .camy-card,.camy-card:nth-child(n) { grid-template-columns:1fr; } .camy-card:nth-child(n) .camy-media,.camy-card:hover .camy-media { order:0; height:235px; clip-path:inset(0 round 0); transform:none; } .camy-copy { min-height:245px; padding:1.5rem; } }
    `}</style>

    <section className="border-b border-black/10 bg-white pb-14 pt-6 md:pb-20 md:pt-8">
      <div className="camy-hero container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <img src={camyRedLogo} alt="Camy" className="mb-7 h-32 w-64 object-contain object-left md:h-40 md:w-80" />
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ed1c24]">A Supun Group brand</p>
          <h1
            className="mt-5 max-w-xl font-bold uppercase"
            style={{ fontSize: "clamp(3rem,5.2vw,5.1rem)", lineHeight: ".94", letterSpacing: "-.045em" }}
          >
            Products for <span style={{ color: "#ed1c24" }}>everyday life.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/60 md:text-xl">
            Camy brings together a growing range of products for the home, the road and everything in between. Designed with purpose and shaped by an understanding of everyday needs, each product is backed by the manufacturing experience of the Supun Group.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="border-l-2 border-[#ed1c24] pl-4"><h2 className="text-xs font-extrabold uppercase tracking-[.16em] text-[#111]">Designed with purpose</h2><p className="mt-2 text-sm leading-6 text-black/55">We focus on the details that make a product useful, how it fits into your routine, how it performs and how it feels to live with.</p></article>
            <article className="border-l-2 border-[#ed1c24] pl-4"><h2 className="text-xs font-extrabold uppercase tracking-[.16em] text-[#111]">Backed by experience</h2><p className="mt-2 text-sm leading-6 text-black/55">CAMY is backed by the manufacturing experience of the Supun Group, bringing local knowledge and hands-on expertise to everything we make.</p></article>
          </div>
          <div className="camy-actions">
            <a href="#camy-range" className="camy-button camy-button-dark">Explore the range <ArrowRight size={18} /></a>
            <a href={shopUrl} className="camy-button camy-button-red" target="_blank" rel="noopener noreferrer"><ExternalLink size={17} /> Shop online</a>
          </div>
        </div>
        <div className="camy-visual">
          <img src={helmetImage} alt="Camy helmet manufacturing in Sri Lanka" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="camy-proof">
            <div className="camy-proof-item">
              <ShieldCheck className="camy-proof-icon" size={24} />
              <strong className="camy-proof-title">Designed with purpose</strong>
              <p className="camy-proof-text">Made around the details of everyday life.</p>
            </div>
            <div className="camy-proof-item">
              <Factory className="camy-proof-icon" size={24} />
              <strong className="camy-proof-title">Backed by experience</strong>
              <p className="camy-proof-text">Built on the Group's hands-on manufacturing expertise.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="camy-range" className="py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-black/15 pb-8 md:flex-row md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[.24em] text-[#ed1c24]">The Camy range</p><h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase tracking-[-.035em] md:text-6xl">Everything you need, in one place.</h2></div>
          <p className="max-w-md text-base leading-7 text-black/55">From the road to the kitchen and from cooling to home entertainment, explore the CAMY range.</p>
        </div>

        <div className="camy-catalog">
          {displayProducts.map((product) => (
            <article key={product.id} className="camy-card">
              <a
                href={categoryLinks[product.name] || shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="camy-media"
                aria-label={`Shop ${product.name} at Anything at Supun`}
              >
                <img src={product.image} alt={`${product.name} by Camy`} loading="lazy" />
                <span className="camy-hover-brand" aria-hidden="true">
                  <img src={camyBlackLogo} alt="" />
                  <strong>CAMY</strong>
                </span>
              </a>
              <div className="camy-copy">
                <div><span className="camy-tag"><ShieldCheck size={15} />{product.note}</span></div>
                <div className="py-7"><h3 className="text-2xl font-bold tracking-[-.025em] md:text-3xl">{product.name}</h3><p className="mt-3 text-sm leading-6 text-black/50">Manufactured in Sri Lanka by <strong className="font-semibold text-black/75">{product.madeBy}</strong>.</p></div>
                <a href={categoryLinks[product.name] || shopUrl} target="_blank" rel="noopener noreferrer" className="camy-link" aria-label={`View ${product.name}`}><span>Shop category</span><span className="camy-link-icon"><ArrowRight size={16} /></span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 lg:px-12">
        <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#111] p-8 text-white md:flex-row md:items-center md:p-12">
          <div className="flex items-center gap-6"><span className="rounded-2xl bg-white p-4"><img src={anythingAtSupunLogo} alt="Anything at Supun" className="h-14 w-auto object-contain" /></span><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#ed1c24]">Official online store</p><h2 className="mt-2 text-2xl font-bold md:text-4xl">Find Camy at Anything at Supun.</h2></div></div>
          <span className="camy-button camy-button-red shrink-0">Shop collection <ExternalLink size={17} /></span>
        </a>
      </div>
    </section>
  </main>
  );
};

export default CamyProducts;
