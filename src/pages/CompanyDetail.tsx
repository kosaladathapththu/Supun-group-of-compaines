import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Award, BriefcaseBusiness, CalendarDays, Check, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { CompanyLogo } from "@/components/CompanyLogo";
import Seo, { SITE_URL } from "@/components/Seo";
import { companyById } from "@/data/companies";
import retailImage from "@/assets/retail-store.jpg";
import hospitalityImage from "@/assets/sector-hospitality-v2.jpg";
import hotelImage from "@/assets/hotel-interior.jpg";
import manufacturingImage from "@/assets/sector-manufacturing-v2.jpg";
import footwearImage from "@/assets/automotive-design.jpg";
import chromeImage from "@/assets/chrome-manufacturing.jpg";
import helmetImage from "@/assets/helmet-manufacturing.jpg";
import cookwareImage from "@/assets/cookware-manufacturing.jpg";
import coolingImage from "@/assets/products/camy-air-conditioners.png";

const companyImages: Record<string, string> = {
  "supun-traders": retailImage, "supun-super-center": retailImage,
  "supun-arcade-residency": hotelImage, "area-56": hospitalityImage,
  "supun-aerosoft": footwearImage, "aerostar-home-appliances": chromeImage,
  "camy-smart": helmetImage, rodsons: manufacturingImage,
  "new-camy-smart": cookwareImage, "fuji-industries": coolingImage,
  "camy-global": retailImage,
};

const CompanyDetail = () => {
  const { id } = useParams();
  const company = companyById(id);

  if (!company) return <section className="flex min-h-[70vh] items-center bg-[#f3f6f8]"><div className="container mx-auto px-4 text-center"><h1 className="text-4xl font-semibold normal-case text-[#102746]">Company not found</h1><p className="mt-4 text-[#637186]">The company page you requested is unavailable.</p><Link to="/companies" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#102746] px-6 py-3 font-semibold text-white"><ArrowLeft size={17} />Our Companies</Link></div></section>;

  const canonicalPath = `/companies/${company.id}`;
  const heroImage = companyImages[company.id] || manufacturingImage;
  const hasContact = company.phone || company.email || company.location || company.website;

  return <div className="min-h-screen bg-[#f3f6f8] text-[#102746]">
    <Seo title={`${company.shortName} | Supun Group of Companies`} description={company.description} keywords={`${company.shortName}, ${company.industry}, Supun Group of Companies, Sri Lanka`} path={canonicalPath} jsonLd={{ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", name: company.name, url: `${SITE_URL}${canonicalPath}`, description: company.description, foundingDate: company.established, parentOrganization: { "@type": "Organization", name: "Supun Group of Companies", url: SITE_URL }, ...(company.website ? { sameAs: [company.website] } : {}) }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Our Companies", item: `${SITE_URL}/companies` }, { "@type": "ListItem", position: 3, name: company.shortName, item: `${SITE_URL}${canonicalPath}` }] }] }} />

    <section className="relative isolate min-h-[520px] overflow-hidden pb-14 pt-32 text-white md:flex md:items-end md:pb-16 md:pt-40">
      <img src={heroImage} alt={`${company.shortName} business`} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041426]/95 via-[#071d37]/84 to-[#071d37]/62" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#041426]/55 via-transparent to-[#041426]/15" />
      <div className="container mx-auto px-4"><Link to="/companies" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-[#efbd55]"><ArrowLeft size={16} />All Group Companies</Link><div className="company-detail-hero-grid grid items-end gap-7">
        <div className="company-detail-hero-copy max-w-4xl"><div className="mb-5 flex flex-wrap gap-3"><span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#071d37]/45 px-4 py-2 text-xs font-semibold backdrop-blur"><BriefcaseBusiness size={15} className="text-[#efbd55]" />{company.industry}</span>{company.established && <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#071d37]/45 px-4 py-2 text-xs font-semibold backdrop-blur"><CalendarDays size={15} className="text-[#efbd55]" />Established {company.established}</span>}</div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#efbd55]">{company.tagline}</p><h1 className="mt-4 text-4xl font-semibold normal-case leading-[1.04] tracking-[-.04em] sm:text-5xl">{company.name}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{company.description}</p></div>
        <CompanyLogo companyId={company.id} companyName={company.shortName} className="company-detail-hero-logo h-28 w-full max-w-[250px] justify-self-start rounded-xl border border-white/40 p-4 shadow-2xl" imageClassName="h-full w-full object-contain" />
      </div></div>
    </section>

    <section className="py-12 md:py-16"><div className="company-detail-content-grid container mx-auto grid max-w-7xl gap-8 px-4">
      <div className="company-detail-primary min-w-0 space-y-8">
        <article className="rounded-2xl border border-[#102746]/10 bg-white p-7 shadow-[0_10px_30px_rgba(16,39,70,.06)] sm:p-9"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#315f9f]">About the company</p><h2 className="mt-3 text-3xl font-semibold normal-case tracking-[-.03em] md:text-4xl">Our story</h2><div className="mt-5 h-0.5 w-14 bg-[#d79a22]" /><p className="mt-6 text-base font-medium leading-8 text-[#405268]">{company.fullDescription}</p></article>

        <article className="rounded-2xl border border-[#102746]/10 bg-white p-7 shadow-[0_10px_30px_rgba(16,39,70,.06)] sm:p-9"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#315f9f]">Capabilities</p><h2 className="mt-2 text-3xl font-semibold normal-case">Key Features</h2></div><span className="text-5xl font-semibold text-[#102746]/10">{String(company.features.length).padStart(2, "0")}</span></div><div className="mt-7 grid gap-3 sm:grid-cols-2">{company.features.map((feature) => <div key={feature} className="flex gap-3 rounded-xl border border-[#102746]/10 bg-[#f7f9fb] p-4 text-sm font-medium leading-6 text-[#405268]"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff3d4] text-[#b9780b]"><Check size={16} strokeWidth={2.5} /></span>{feature}</div>)}</div></article>

        {company.awards && company.awards.length > 0 && <article className="rounded-2xl border border-[#d79a22]/25 bg-[#fffaf0] p-7 sm:p-9"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#a66d0d]">Awards &amp; recognition</p><h2 className="mt-1 text-2xl font-semibold normal-case">Recognised for excellence</h2></div><div className="mt-7 space-y-5">{company.awards.map((award) => { const isSilver = award.toLowerCase().includes("silver"); const isCertification = award.toLowerCase().includes("made in sri lanka"); return <div key={award} className="flex items-center gap-5 rounded-xl border border-[#102746]/10 bg-white p-5 shadow-sm"><div className="relative h-20 w-14 shrink-0" aria-hidden="true"><span className="absolute left-2 top-0 h-11 w-5 -skew-x-6 bg-[#173b68] [clip-path:polygon(0_0,100%_0,82%_100%,18%_100%)]" /><span className="absolute right-2 top-0 h-11 w-5 skew-x-6 bg-[#c93636] [clip-path:polygon(0_0,100%_0,82%_100%,18%_100%)]" /><span className={`absolute bottom-0 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-[3px] shadow-[0_4px_10px_rgba(0,0,0,.22)] ${isSilver ? "border-slate-500 bg-gradient-to-br from-white via-slate-200 to-slate-500 text-slate-700" : "border-amber-600 bg-gradient-to-br from-yellow-100 via-amber-300 to-amber-600 text-amber-900"}`}><Award size={23} strokeWidth={2} /></span></div><div><span className={`inline-flex rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.16em] ${isSilver ? "bg-slate-200 text-slate-700" : "bg-amber-200 text-amber-900"}`}>{isCertification ? "Certification" : isSilver ? "Silver Medal" : "Award"}</span><p className="mt-2 font-semibold leading-7 text-[#34465b]">{award}</p></div></div>; })}</div></article>}
      </div>

      <aside className="company-detail-aside min-w-0"><div className="sticky top-28 overflow-hidden rounded-2xl bg-[#0b2747] text-white shadow-[0_18px_45px_rgba(11,39,71,.18)]"><div className="border-b border-white/10 p-7"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#efbd55]">Company information</p><h2 className="mt-2 text-2xl font-semibold normal-case">Connect with us</h2></div><div className="space-y-5 p-7 text-sm">
        {company.established && <div className="flex gap-3"><CalendarDays size={19} className="shrink-0 text-[#efbd55]" /><div><p className="text-xs uppercase tracking-wider text-white/45">Established</p><p className="mt-1 font-semibold">{company.established}</p></div></div>}
        <div className="flex gap-3"><BriefcaseBusiness size={19} className="shrink-0 text-[#efbd55]" /><div><p className="text-xs uppercase tracking-wider text-white/45">Industry</p><p className="mt-1 font-semibold">{company.industry}</p></div></div>
        {company.phone && <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="flex gap-3 transition hover:text-[#efbd55]"><Phone size={19} className="shrink-0 text-[#efbd55]" /><span>{company.phone}</span></a>}
        {company.email && <a href={`mailto:${company.email}`} className="flex gap-3 break-all transition hover:text-[#efbd55]"><Mail size={19} className="shrink-0 text-[#efbd55]" /><span>{company.email}</span></a>}
        {company.location && <div className="flex gap-3"><MapPin size={19} className="shrink-0 text-[#efbd55]" /><span className="leading-6">{company.location}</span></div>}
        {company.website && <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl bg-[#efbd55] px-5 py-4 font-bold text-[#071d37] transition hover:bg-white">Visit website <ExternalLink size={17} /></a>}
        {!hasContact && <p className="leading-6 text-white/60">Additional contact details will be published when confirmed.</p>}
      </div></div></aside>
    </div></section>

    <section className="bg-white px-4 pb-14"><div className="container relative mx-auto isolate flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#102f55] via-[#184f75] to-[#4d7c42] px-7 py-9 text-white shadow-[0_16px_40px_rgba(16,47,85,.16)] sm:flex-row sm:items-center"><span className="absolute -right-10 -top-20 -z-10 h-52 w-52 rounded-full bg-[#efbd55]/25 blur-2xl" /><span className="absolute -bottom-20 left-1/3 -z-10 h-40 w-40 rounded-full bg-[#78be43]/20 blur-2xl" /><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#efbd55]">Explore the Group</p><h2 className="mt-2 text-2xl font-semibold normal-case text-white">Explore the group</h2></div><Link to="/companies" className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white px-6 py-3 font-semibold text-[#0b2747] shadow-md transition hover:border-[#efbd55] hover:bg-[#efbd55]">All companies <ArrowRight size={17} /></Link></div></section>
  </div>;
};

export default CompanyDetail;
