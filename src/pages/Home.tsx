import { Link } from "react-router-dom";
import { ArrowRight, Factory, Hotel, ShieldCheck, ShoppingBag } from "lucide-react";
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from "@/components/Seo";
import { CompanyLogo } from "@/components/CompanyLogo";
import { companies } from "@/data/companies";
import { getCompanyLogo } from "@/data/companyLogos";
import { sectorHighlights, siteStats } from "@/data/siteContent";
import heroCorporate from "@/assets/hero-corporate.jpg";

const sectorIcons = [Factory, ShoppingBag, Hotel, ShieldCheck];
const logoCompanies = companies.filter((company) => getCompanyLogo(company.id));

const Home = () => (
  <div className="min-h-screen bg-white text-[#10233f]">
    <Seo
      title="Supun Group of Companies | Built in Sri Lanka. Built to Last."
      description="Supun Group of Companies is a Sri Lankan family-run group with 11 companies across manufacturing, retail, distribution and hospitality, with roots going back to 1978."
      keywords="Supun Group of Companies, Sri Lanka manufacturing, Camy, Supun Traders, Supun Super Center, Sri Lankan conglomerate"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: DEFAULT_IMAGE,
        foundingDate: "1978",
        description: "A Sri Lankan family-run group operating across manufacturing, retail, distribution and hospitality.",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
        contactPoint: { "@type": "ContactPoint", telephone: "+94-112-055-026", contactType: "general enquiries", email: "info@supungroup.lk" },
      }}
    />

    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#081a33] text-white md:min-h-[760px]">
      <img src={heroCorporate} alt="Supun Group of Companies" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,25,49,.97)_0%,rgba(10,35,67,.90)_48%,rgba(8,29,56,.64)_100%)]" />
      <div className="container mx-auto flex min-h-[720px] flex-col justify-center px-4 pb-12 pt-32 md:min-h-[760px] md:pt-36">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-white/72"><span className="h-px w-9 bg-[#78be43]" /> Since 1978 · Colombo, Sri Lanka</p>
          <h1 className="mt-6 text-5xl font-semibold normal-case leading-[.98] tracking-[-.045em] sm:text-6xl md:text-7xl">Built in Sri Lanka.<br /><span className="text-white/72">Built to Last.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">One Sri Lankan Group built across manufacturing, retail, distribution and hospitality.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/companies" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 font-semibold text-[#10233f] transition hover:bg-slate-100">Explore our companies <ArrowRight size={18} /></Link>
            <Link to="/about" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 font-semibold text-white transition hover:bg-white/10">Our story</Link>
          </div>
        </div>

        <div className="mt-14 grid max-w-4xl grid-cols-2 border-t border-white/18 pt-7 sm:grid-cols-4">
          {siteStats.map((stat) => <div key={stat.label} className="border-white/15 py-3 pr-5 sm:border-r sm:last:border-r-0 sm:pl-5 sm:first:pl-0"><strong className="text-3xl font-semibold tracking-[-.04em] md:text-4xl">{stat.value}</strong><p className="mt-1 text-xs leading-5 text-white/58">{stat.label}</p></div>)}
        </div>
      </div>
    </section>

    <section className="border-b border-[#10233f]/10 bg-white py-14 md:py-20">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Our story</p>
          <h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">A family business growing with Sri Lanka.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-[#5f6f84]">
          <p>What began as a Colombo trading business in 1978 has grown into a connected group of 11 companies serving homes, businesses and communities across Sri Lanka.</p>
          <p>Across every sector, the focus remains simple: build dependable products, provide useful services and create long-term value.</p>
          <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-[#10233f] hover:text-[#315f9f]">Read our story <ArrowRight size={17} /></Link>
        </div>
      </div>
    </section>

    <section className="bg-[#f6f8fb] py-16 md:py-22">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">What we do</p>
          <h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">Four areas. One shared standard.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-[#65758a]">A straightforward view of the businesses that make up Supun Group.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sectorHighlights.map((sector, index) => {
            const Icon = sectorIcons[index];
            return <article key={sector.title} className="flex min-h-[250px] flex-col border border-[#10233f]/10 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#10233f] text-white"><Icon size={21} /></div>
              <h3 className="mt-8 text-2xl font-semibold normal-case">{sector.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#65758a]">{sector.description}</p>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 md:py-22">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-5 border-b border-[#10233f]/10 pb-7 md:flex-row md:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Inside the Group</p><h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">Our companies.</h2></div>
          <Link to="/companies" className="inline-flex items-center gap-2 font-semibold text-[#10233f]">View all 11 <ArrowRight size={17} /></Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {logoCompanies.slice(0, 10).map((company) => <Link key={company.id} to={`/companies/${company.id}`} className="flex min-h-[120px] items-center justify-center border border-[#10233f]/10 bg-[#fafbfd] p-3 transition hover:border-[#315f9f]/40">
            <CompanyLogo companyId={company.id} companyName={company.shortName} className="h-20 w-full bg-transparent" imageClassName="h-full w-full object-contain" />
          </Link>)}
        </div>
      </div>
    </section>

    <section className="bg-[#10233f] py-16 text-white md:py-20">
      <div className="container mx-auto flex flex-col justify-between gap-8 px-4 lg:flex-row lg:items-center">
        <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-white/55">Supun Group</p><h2 className="mt-3 max-w-3xl text-3xl font-semibold normal-case tracking-[-.03em] md:text-5xl">Building useful businesses for the next generation.</h2></div>
        <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 font-semibold text-[#10233f]">Contact us <ArrowRight size={18} /></Link>
      </div>
    </section>
  </div>
);

export default Home;
