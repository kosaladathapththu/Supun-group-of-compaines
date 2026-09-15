import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, CalendarDays, Check, Globe2, MapPin, Phone } from "lucide-react";
import { CompanyLogo } from "@/components/CompanyLogo";
import Seo, { SITE_URL } from "@/components/Seo";
import { companies, type CompanySector } from "@/data/companies";
import heroImage from "@/assets/about-hero-sri-lanka-v3.png";
import retailImage from "@/assets/retail-store.jpg";
import hospitalityImage from "@/assets/sector-hospitality-v2.jpg";
import hotelImage from "@/assets/hotel-interior.jpg";
import manufacturingImage from "@/assets/sector-manufacturing-v2.jpg";
import footwearImage from "@/assets/automotive-design.jpg";
import chromeImage from "@/assets/chrome-manufacturing.jpg";
import helmetImage from "@/assets/helmet-manufacturing.jpg";
import cookwareImage from "@/assets/cookware-manufacturing.jpg";
import coolingImage from "@/assets/products/camy-air-conditioners.png";

const filters: Array<"All" | CompanySector> = ["All", "Manufacturing", "Retail & Distribution", "Hospitality"];
const companyImages: Record<string, string> = {
  "supun-traders": retailImage, "supun-super-center": retailImage,
  "supun-arcade-residency": hotelImage, "area-56": hospitalityImage,
  "supun-aerosoft": footwearImage, "aerostar-home-appliances": chromeImage,
  "camy-smart": helmetImage, rodsons: manufacturingImage,
  "new-camy-smart": cookwareImage, "fuji-industries": coolingImage,
  "camy-global": retailImage,
};

const Companies = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visibleCompanies = useMemo(() => activeFilter === "All" ? companies : companies.filter((company) => company.industry === activeFilter), [activeFilter]);

  return <div className="min-h-screen bg-[#f3f6f8]">
    <Seo title="Our Companies | Supun Group of Companies" description="Explore 11 Supun Group companies across manufacturing, retail, distribution and hospitality in Sri Lanka." keywords="Supun Group companies, Camy Smart, Supun Traders, Supun Super Center, Fuji Industries, Sri Lanka manufacturing" jsonLd={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: companies.map((company, index) => ({ "@type": "ListItem", position: index + 1, name: company.name, url: `${SITE_URL}/companies/${company.id}` })) }} />

    <section className="relative isolate overflow-hidden bg-[#0b2747] pb-14 pt-36 text-white md:pb-20 md:pt-40">
      <img src={heroImage} alt="Colombo skyline representing Supun Group businesses" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071d37]/95 via-[#0b2747]/72 to-[#071d37]/35" />
      <div className="container mx-auto px-4"><div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-[#efbd55]">Our businesses</p>
        <h1 className="mt-4 text-5xl font-semibold normal-case leading-none tracking-[-.045em] sm:text-6xl md:text-7xl">Group Companies</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">The businesses that power Supun Group across wholesale, retail, manufacturing, distribution and hospitality.</p>
        <div className="mt-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.2em] text-white/80"><span className="h-px w-12 bg-[#efbd55]" />Strong businesses for a brighter Sri Lanka</div>
      </div></div>
    </section>

    <section id="company-directory" className="scroll-mt-28 py-10 md:py-14"><div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center gap-3" role="tablist" aria-label="Filter companies by sector">{filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${activeFilter === filter ? "border-[#0b2747] bg-[#0b2747] text-white" : "border-[#0b2747]/15 bg-white text-[#667388] hover:border-[#d79a22] hover:text-[#0b2747]"}`}>{filter}<span className={`ml-2 text-xs ${activeFilter === filter ? "text-[#efbd55]" : "text-[#0b2747]/35"}`}>{String(filter === "All" ? companies.length : companies.filter((company) => company.industry === filter).length).padStart(2, "0")}</span></button>)}</div>

      <div className="space-y-5">{visibleCompanies.map((company, index) => {
        const imageOnRight = index % 2 === 1;
        return <article key={company.id} className="group overflow-hidden rounded-2xl border border-[#0b2747]/10 bg-white shadow-[0_10px_32px_rgba(11,39,71,.07)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(11,39,71,.12)]"><div className="grid lg:grid-cols-3">
          <div className={`relative min-h-[240px] overflow-hidden lg:col-span-1 lg:min-h-[320px] lg:row-start-1 ${imageOnRight ? "lg:col-start-3" : "lg:col-start-1"}`}>
            <img src={companyImages[company.id] || manufacturingImage} alt={`${company.shortName} operations`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071d37]/70 via-transparent to-transparent" />
            <CompanyLogo companyId={company.id} companyName={company.shortName} className="absolute left-5 top-5 h-20 w-44 rounded-xl border border-white/70 p-3 shadow-lg" imageClassName="h-full w-full object-contain" />
            <p className="absolute bottom-5 left-5 right-5 text-xs font-bold uppercase tracking-[.16em] text-white">{company.tagline}</p>
          </div>
          <div className={`flex flex-col p-6 sm:p-8 lg:col-span-2 lg:row-start-1 ${imageOnRight ? "lg:col-start-1" : "lg:col-start-2"}`}>
            <div className="flex flex-col justify-between gap-4 border-b border-[#0b2747]/10 pb-5 sm:flex-row sm:items-start">
              <div><h2 className="text-2xl font-semibold normal-case leading-tight tracking-[-.025em] text-[#123b70] md:text-3xl">{company.name}</h2><p className="mt-2 font-medium italic text-[#b37814]">{company.tagline}</p></div>
              <div className="flex shrink-0 flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[.08em] text-[#526278]"><span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef3f7] px-3 py-2"><BriefcaseBusiness size={14} className="text-[#c58a1b]" />{company.industry}</span><span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef3f7] px-3 py-2"><CalendarDays size={14} className="text-[#c58a1b]" />{company.established ? `Est. ${company.established}` : "Group company"}</span></div>
            </div>
            <div className="grid flex-1 gap-6 py-5 md:grid-cols-[1.25fr_.75fr]"><p className="text-sm leading-6 text-[#5d6a79]">{company.fullDescription}</p><div><p className="mb-3 text-xs font-bold text-[#315f9f]">Key Features</p><ul className="space-y-2">{company.features.slice(0, 4).map((feature) => <li key={feature} className="flex gap-2 text-xs leading-5 text-[#5d6a79]"><Check size={15} className="mt-0.5 shrink-0 text-[#d79a22]" strokeWidth={2.5} />{feature}</li>)}</ul></div></div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#0b2747]/10 pt-4 text-xs font-medium text-[#315f9f]">
              {company.phone && <span className="inline-flex items-center gap-2"><Phone size={14} className="text-[#d79a22]" />{company.phone}</span>}
              {company.location && <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-[#d79a22]" />{company.location}</span>}
              {company.website && <a href={company.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#78be43]"><Globe2 size={14} className="text-[#d79a22]" />Website</a>}
              <Link to={`/companies/${company.id}`} className="ml-auto inline-flex items-center gap-2 font-bold text-[#0b2747] transition hover:text-[#78be43]">View company <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div></article>;
      })}</div>
    </div></section>
  </div>;
};

export default Companies;
