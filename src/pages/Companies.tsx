import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CompanyLogo } from "@/components/CompanyLogo";
import Seo, { SITE_URL } from "@/components/Seo";
import { companies, type CompanySector } from "@/data/companies";

const filters: Array<"All" | CompanySector> = ["All", "Manufacturing", "Retail & Distribution", "Hospitality"];

const Companies = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visibleCompanies = useMemo(() => activeFilter === "All" ? companies : companies.filter((company) => company.industry === activeFilter), [activeFilter]);

  return (
    <div className="min-h-screen bg-white text-[#10233f]">
      <Seo
        title="Our Companies | Supun Group of Companies"
        description="Explore 11 Supun Group companies across manufacturing, retail, distribution and hospitality in Sri Lanka."
        keywords="Supun Group companies, Camy Smart, Supun Traders, Supun Super Center, Fuji Industries, Sri Lanka manufacturing"
        jsonLd={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: companies.map((company, index) => ({ "@type": "ListItem", position: index + 1, name: company.name, url: `${SITE_URL}/companies/${company.id}` })) }}
      />

      <section className="bg-[#10233f] py-20 text-white md:py-24">
        <div className="container mx-auto px-4">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-white/65"><span className="h-px w-9 bg-[#78be43]" /> Our companies</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold normal-case leading-[1.01] tracking-[-.045em] md:text-6xl">11 companies across three sectors.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">Manufacturing, retail and distribution, and hospitality—connected by one Group and one long-term standard.</p>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto border-b border-[#10233f]/10 pb-5">{filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`flex-none rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${activeFilter === filter ? "border-[#10233f] bg-[#10233f] text-white" : "border-[#10233f]/12 bg-white text-[#5f6f84] hover:border-[#315f9f]/45 hover:text-[#10233f]"}`}>{filter}</button>)}</div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleCompanies.map((company) => <article key={company.id} className="flex h-full flex-col border border-[#10233f]/10 bg-white shadow-sm">
              <CompanyLogo companyId={company.id} companyName={company.shortName} className="h-44 w-full border-b border-[#10233f]/10 bg-[#f8fafc] p-4" imageClassName="h-full w-full object-contain" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-[.12em] text-[#315f9f]">{company.industry}</span>{company.established && <span className="text-xs text-[#7a8797]">Since {company.established}</span>}</div>
                <h2 className="mt-4 text-2xl font-semibold normal-case">{company.shortName}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#65758a]">{company.description}</p>
                <Link to={`/companies/${company.id}`} className="mt-6 inline-flex items-center gap-2 border-t border-[#10233f]/10 pt-5 text-sm font-semibold text-[#10233f] hover:text-[#315f9f]">View company <ArrowRight size={15} /></Link>
              </div>
            </article>)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
