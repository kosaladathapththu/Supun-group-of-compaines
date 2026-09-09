import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Factory, Hotel, ShoppingBag, Sparkles } from "lucide-react";
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from "@/components/Seo";
import companyVideo from "@/assets/SUPUN GROUP OF COMPANY.mp4";
import heroPoster from "@/assets/home-hero-ai-placeholder.png";
import manufacturingImage from "@/assets/hero-manufacturing.jpg";
import retailImage from "@/assets/retail-store.jpg";
import hospitalityImage from "@/assets/hotel-interior.jpg";
import camyImage from "@/assets/cookware-manufacturing.jpg";
import careersImage from "@/assets/careers-hero-ai-placeholder.png";
import supunTradersLogo from "@/assets/company-logos/supun-traders.png";
import supunArcadeLogo from "@/assets/company-logos/supun-arcade.png";
import ymacLogo from "@/assets/company-logos/ymac.png";
import supunSuperCenterLogo from "@/assets/company-logos/supun-super-center.png";
import camyGlobalLogo from "@/assets/company-logos/camy-global.png";
import camySmartLogo from "@/assets/company-logos/camy-smart.png";
import newCamySmartLogo from "@/assets/company-logos/new-camy-smart.png";
import aeroStarLogo from "@/assets/company-logos/aero-star.png";
import rodsonsLogo from "@/assets/company-logos/rodsons.png";

const sectors = [
  { number: "01", title: "Manufacturing", short: "Products made here, for life here.", copy: "Building Sri Lanka's own consumer durables—from SLS-certified motorcycle helmets and the country's first PU footwear to cookware, appliances and cooling solutions.", image: manufacturingImage, icon: Factory, link: "/companies" },
  { number: "02", title: "Retail & Distribution", short: "From trusted shelves to every corner.", copy: "Connecting Sri Lankan households to dependable products through our original wholesale roots, modern retail and an island-wide distributor network.", image: retailImage, icon: ShoppingBag, link: "/companies" },
  { number: "03", title: "Hospitality & Dining", short: "Colombo stays. Elevated dining.", copy: "Creating considered experiences at Supun Arcade Residency and Area 56—from fully serviced city living to rooftop dining above Colombo.", image: hospitalityImage, icon: Hotel, link: "/companies" },
  { number: "04", title: "The Camy Brand", short: "Sri Lankan durables, built in-house.", copy: "A growing family of locally manufactured helmets, cookware, appliances, air conditioners and fans designed around everyday Sri Lankan life.", image: camyImage, icon: Sparkles, link: "/shop" },
];

const companies = [
  { name: "Supun Traders", sector: "Retail & Distribution", logo: supunTradersLogo, path: "/companies/supun-traders" },
  { name: "Supun Super Center", sector: "Retail", logo: supunSuperCenterLogo, path: "/companies/supun-super-centre" },
  { name: "Supun Arcade Residency", sector: "Hospitality", logo: supunArcadeLogo, path: "/companies/supun-arcade" },
  { name: "Area 56", sector: "Hospitality & Dining", wordmark: "AREA 56", path: "/companies/area-56" },
  { name: "Supun Aerosoft", sector: "Manufacturing", logo: ymacLogo, path: "/companies/supun-aerosoft" },
  { name: "Aero Star", sector: "Manufacturing", logo: aeroStarLogo, path: "/companies/aero-star" },
  { name: "Camy Smart", sector: "Manufacturing", logo: camySmartLogo, path: "/companies/camy-smart" },
  { name: "Rodsons", sector: "Manufacturing", logo: rodsonsLogo, path: "/companies/rodsons" },
  { name: "New Camy Smart", sector: "Manufacturing", logo: newCamySmartLogo, path: "/companies/new-camy-smart" },
  { name: "Fuji Industries", sector: "Manufacturing", wordmark: "FUJI INDUSTRIES", path: "/companies/fuji" },
  { name: "Camy Global", sector: "Distribution", logo: camyGlobalLogo, path: "/companies/camy-global" },
];

const Home = () => {
  const [activeSector, setActiveSector] = useState(0);
  const sector = sectors[activeSector];
  const SectorIcon = sector.icon;

  return (
    <div className="overflow-hidden bg-[#f7f7f5] text-[#0b2340]">
      <Seo title="Supun Group of Companies | Built in Sri Lanka. Built to Last." description="One Sri Lankan group, built across manufacturing, retail, distribution and hospitality since 1978." keywords="Supun Group, Sri Lanka, manufacturing, retail, distribution, hospitality, Camy" jsonLd={{ "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: DEFAULT_IMAGE, foundingDate: "1978" }} />

      <section className="relative min-h-[720px] h-[calc(100svh-88px)] bg-[#06172e] text-white">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={heroPoster} aria-label="Supun Group company film"><source src={companyVideo} type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,38,.94)_0%,rgba(4,19,38,.62)_44%,rgba(4,19,38,.12)_78%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06172e]/75 via-transparent to-[#06172e]/15" />
        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 pb-28 pt-16 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.27em] text-[#ffab16]"><span className="h-px w-12 bg-[#ffab16]" />A Sri Lankan legacy · 1978—Today</div>
            <h1 className="text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[.91] tracking-[-.045em] normal-case">Built in Sri Lanka.<span className="block text-[#ffab16]">Built to last.</span></h1>
            <p className="mt-7 max-w-xl border-l border-white/35 pl-5 text-lg leading-8 text-white/78">One family-led Group creating products, experiences and opportunity across four industries.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link to="/companies" className="group inline-flex h-14 items-center justify-center gap-4 bg-[#ffab16] px-7 text-sm font-bold text-[#071b34] transition hover:bg-white">Explore our companies <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></Link><Link to="/about" className="inline-flex h-14 items-center justify-center border border-white/45 bg-white/5 px-7 text-sm font-bold backdrop-blur-sm transition hover:bg-white hover:text-[#071b34]">Our story</Link></div>
          </div>
        </div>
        <a href="#legacy" className="absolute bottom-6 left-6 hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[.2em] text-white/50 md:left-12 md:flex lg:left-20"><span className="grid h-10 w-10 place-items-center rounded-full border border-white/25"><ArrowDown size={14} /></span>Scroll to explore</a>
        <div className="absolute bottom-0 right-0 hidden h-24 items-center bg-[#ffab16] px-12 text-[#071b34] lg:flex"><strong className="font-heading text-5xl">46+</strong><span className="ml-4 max-w-[90px] text-[9px] font-extrabold uppercase leading-4 tracking-[.15em]">Years of excellence</span></div>
      </section>

      <section id="legacy" className="bg-white px-6 py-24 md:px-12 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div><p className="mb-6 text-[10px] font-extrabold uppercase tracking-[.24em] text-[#d87f00]">Who we are</p><h2 className="max-w-4xl text-[clamp(2.8rem,5.4vw,5.6rem)] font-medium leading-[1.03] tracking-[-.04em] normal-case">We turned a trading legacy into the power to <span className="text-[#1d5795]">make locally.</span></h2></div>
            <div className="border-t border-[#0b2340]/15 pt-7"><p className="text-base leading-8 text-[#5f6d7c]">Since Mohamed Fareed founded Supun Traders in Colombo in 1978, the Group has grown through two generations—moving from importing everyday goods to manufacturing them in Sri Lanka.</p><Link to="/about" className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#174f8d]">Explore our journey <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div>
          </div>
          <div className="mt-20 grid grid-cols-2 border-y border-[#0b2340]/12 md:grid-cols-4">{[["11", "Group companies"], ["4", "Industry sectors"], ["300+", "People"], ["250+", "Island-wide distributors"]].map(([value,label],i)=><div key={label} className={`py-8 md:px-7 ${i>0?"md:border-l md:border-[#0b2340]/12":""}`}><strong className="block font-heading text-5xl font-medium text-[#174f8d]">{value}</strong><span className="mt-2 block text-[10px] font-bold uppercase tracking-[.15em] text-[#6d7886]">{label}</span></div>)}</div>
        </div>
      </section>

      <section className="bg-[#071b34] text-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-[560px] overflow-hidden lg:min-h-[780px]"><img key={sector.image} src={sector.image} alt="" className="absolute inset-0 h-full w-full object-cover animate-fade-in" /><div className="absolute inset-0 bg-gradient-to-t from-[#06172e]/80 via-[#06172e]/10 to-transparent" /><div className="absolute bottom-9 left-8 right-8 md:bottom-12 md:left-12"><div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#ffab16] text-[#071b34]"><SectorIcon size={20} /></div><p className="max-w-2xl text-2xl font-medium leading-snug md:text-4xl">{sector.short}</p></div></div>
          <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16">
            <p className="mb-8 text-[10px] font-extrabold uppercase tracking-[.24em] text-[#ffab16]">Our sectors</p>
            <div className="border-t border-white/15">{sectors.map((item,index)=><button key={item.title} onClick={()=>setActiveSector(index)} onMouseEnter={()=>setActiveSector(index)} className={`w-full border-b border-white/15 py-6 text-left transition ${activeSector===index?"text-white":"text-white/45 hover:text-white/80"}`}><span className="flex items-center justify-between"><span className="flex items-center gap-5"><span className="font-heading text-xs text-[#ffab16]">{item.number}</span><span className="font-heading text-2xl font-semibold md:text-3xl">{item.title}</span></span><ArrowRight size={18} className={`transition-transform ${activeSector===index?"translate-x-0 opacity-100":"-translate-x-2 opacity-0"}`} /></span>{activeSector===index&&<span className="mt-4 block max-w-lg pl-9 text-sm leading-7 text-white/60">{item.copy}</span>}</button>)}</div>
            <Link to={sector.link} className="mt-9 inline-flex items-center gap-3 self-start text-xs font-bold uppercase tracking-[.15em] text-[#ffab16]">Discover this sector <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f3f3] px-6 py-24 md:px-12 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 grid gap-7 md:grid-cols-[1fr_.55fr] md:items-end"><div><p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.24em] text-[#d87f00]">The Supun family</p><h2 className="text-[clamp(2.8rem,5.2vw,5.4rem)] font-medium leading-none tracking-[-.04em] normal-case">Our companies.<br /><span className="text-[#1d5795]">One shared standard.</span></h2></div><p className="max-w-md text-sm leading-7 text-[#65717f]">A connected portfolio spanning manufacturing, retail, distribution and hospitality.</p></div>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#d9dee3] bg-[#d9dee3] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {companies.map((company,index)=><Link key={company.name} to={company.path} className={`group relative flex min-h-[235px] flex-col justify-between bg-white p-6 transition hover:z-10 hover:bg-[#0d3767] hover:text-white ${index===10?"xl:col-span-2":""}`}><div className="flex items-start justify-between"><span className="text-[9px] font-bold uppercase tracking-[.15em] text-[#d87f00]">{company.sector}</span><ArrowUpRight size={16} className="text-[#8e99a5] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ffab16]" /></div><div className="grid min-h-[105px] place-items-center py-4">{company.logo?<img src={company.logo} alt={`${company.name} logo`} className="max-h-20 max-w-[76%] object-contain transition duration-300 group-hover:rounded-sm group-hover:bg-white group-hover:p-2" />:<span className="font-heading text-2xl font-bold tracking-[.1em] text-[#174f8d] group-hover:text-white">{company.wordmark}</span>}</div><h3 className="border-t border-[#0b2340]/10 pt-4 text-lg font-semibold normal-case group-hover:border-white/20">{company.name}</h3></Link>)}
          </div>
          <div className="mt-9 flex justify-end"><Link to="/companies" className="group inline-flex items-center gap-3 text-sm font-bold text-[#174f8d]">Meet all our companies <span className="grid h-10 w-10 place-items-center rounded-full bg-[#174f8d] text-white transition group-hover:bg-[#ffab16] group-hover:text-[#071b34]"><ArrowRight size={16} /></span></Link></div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] overflow-hidden bg-[#0d3767] text-white lg:grid-cols-2">
          <div className="relative min-h-[430px]"><img src={careersImage} alt="Sri Lankan professionals collaborating" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d3767]/25" /></div>
          <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16"><p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.24em] text-[#ffab16]">Careers at Supun</p><h2 className="text-4xl font-medium leading-tight tracking-[-.03em] normal-case md:text-6xl">Build your future with ours.</h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/65">Across factory floors, retail operations and hospitality, our people turn ideas into products and service into lasting relationships.</p><Link to="/careers" className="group mt-9 inline-flex h-13 items-center gap-4 self-start bg-[#ffab16] px-6 py-4 text-sm font-bold text-[#071b34] transition hover:bg-white">Explore careers <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
