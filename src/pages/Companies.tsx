import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CompanyLogo } from "@/components/CompanyLogo";
import Seo, { SITE_URL } from "@/components/Seo";
import { companies, type CompanySector } from "@/data/companies";

const filters: Array<"All" | CompanySector> = ["All", "Manufacturing", "Retail & Distribution", "Hospitality"];

const Companies = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visibleCompanies = useMemo(
    () => (activeFilter === "All" ? companies : companies.filter((company) => company.industry === activeFilter)),
    [activeFilter]
  );

  return (
    <div className="min-h-screen">
      <Seo
        title="Our Companies | Supun Group of Companies"
        description="Explore 11 Supun Group companies across manufacturing, retail, distribution and hospitality in Sri Lanka."
        keywords="Supun Group companies, Camy Smart, Supun Traders, Supun Super Center, Fuji Industries, Sri Lanka manufacturing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: companies.map((company, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: company.name,
            url: `${SITE_URL}/companies/${company.id}`,
          })),
        }}
      />

      <section className="border-b border-[#10233f]/10 py-16 text-[#10233f] md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-[#315f9f]"><span className="h-px w-10 bg-[#78be43]" /> Our companies</p>
              <h1 className="mt-7 max-w-4xl text-5xl font-semibold normal-case leading-[1.01] tracking-[-.05em] sm:text-6xl md:text-7xl">Built to make.<br />Ready to move forward.</h1>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-end gap-7 border-t border-[#10233f]/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <strong className="text-7xl font-semibold leading-none tracking-[-.07em] text-[#315f9f] md:text-8xl">11</strong>
              <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#5b9d2c]">Connected companies</p><p className="mt-3 max-w-sm leading-relaxed text-[#5d6a79]">Manufacturing, retail, distribution and hospitality—built in Sri Lanka since 1978.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="company-directory" className="scroll-mt-28 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 md:hidden"><label htmlFor="company-sector" className="mb-2 block text-xs font-semibold uppercase tracking-[.16em] text-[#667388]">Browse by sector</label><select id="company-sector" value={activeFilter} onChange={(event) => setActiveFilter(event.target.value as (typeof filters)[number])} className="w-full border-b border-[#10233f]/25 bg-transparent px-0 py-3 font-semibold text-[#10233f] outline-none focus:border-[#78be43]">{filters.map((filter) => <option key={filter} value={filter}>{filter} ({filter === "All" ? companies.length : companies.filter((company) => company.industry === filter).length})</option>)}</select></div>
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[220px_1fr] lg:gap-14">
            <aside className="hidden md:block"><div className="sticky top-28"><p className="mb-5 text-xs font-semibold uppercase tracking-[.18em] text-[#667388]">Browse by sector</p><div className="border-t border-[#10233f]/15" role="tablist" aria-label="Filter companies by sector">{filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`group flex w-full items-center justify-between border-b border-[#10233f]/10 py-5 text-left text-sm font-semibold transition ${activeFilter === filter ? "text-[#315f9f]" : "text-[#667388] hover:text-[#10233f]"}`}><span>{filter}</span><span className="flex items-center gap-2"><small className={activeFilter === filter ? "text-[#5b9d2c]" : "text-[#10233f]/30"}>{String(filter === "All" ? companies.length : companies.filter((company) => company.industry === filter).length).padStart(2, "0")}</small><ArrowRight size={15} className={`transition-transform ${activeFilter === filter ? "translate-x-0 text-[#78be43]" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} /></span></button>)}</div></div></aside>
          <div className="grid gap-6 lg:grid-cols-2">
            {visibleCompanies.map((company) => (
              <Card key={company.id} className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-7 h-full flex flex-col">
                  <CompanyLogo
                    companyId={company.id}
                    companyName={company.shortName}
                    className="mb-6 h-36 w-full rounded-2xl border border-primary/10 p-2 shadow-sm sm:h-40"
                    imageClassName="!h-full !w-full !max-h-none !max-w-none scale-110 transition-transform duration-300 group-hover:scale-[1.18]"
                  />
                  <div className="flex justify-end mb-4">
                    <span className="text-xs font-semibold rounded-full bg-accent/10 text-accent px-3 py-1">{company.industry}</span>
                  </div>
                  <p className="text-sm text-accent font-semibold mb-2">{company.tagline}</p>
                  <h2 className="text-2xl normal-case mb-3">{company.shortName}</h2>
                  <p className="text-muted-foreground leading-relaxed flex-1">{company.description}</p>
                  <div className="flex items-center justify-between mt-6 pt-5 border-t">
                    <span className="text-sm text-muted-foreground">{company.established ? `Established ${company.established}` : "Distribution"}</span>
                    <Link to={`/companies/${company.id}`} className="text-primary font-semibold text-sm inline-flex items-center">
                      View details <ArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
