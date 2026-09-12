import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

      <section className="relative overflow-hidden bg-[#f1efe8] py-20 text-[#10233f] md:py-28">
        <div className="absolute -right-24 -top-32 h-[32rem] w-[32rem] rounded-full border border-[#78be43]/20" />
        <div className="absolute -right-4 -top-12 h-72 w-72 rounded-full border border-[#10233f]/[.06]" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-[#315f9f]"><span className="h-px w-10 bg-[#78be43]" /> Our companies</p>
              <h1 className="mt-7 max-w-5xl text-5xl font-semibold normal-case leading-[.98] tracking-[-.055em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">Built differently.<br /><span className="text-[#315f9f]">Connected by one standard.</span></h1>
            </div>
            <div className="relative border-t border-[#10233f]/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="flex items-end gap-5"><strong className="text-[7rem] font-semibold leading-[.72] tracking-[-.09em] text-[#10233f] md:text-[9rem]">11</strong><span className="mb-1 h-3 w-3 rounded-full bg-[#78be43] shadow-[0_0_18px_rgba(120,190,67,.65)]" /></div>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[#5d6a79]">Sri Lankan companies working across manufacturing, retail and distribution, and hospitality.</p>
              <div className="mt-7 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[#10233f]/65"><span className="rounded-full border border-[#10233f]/10 bg-white/60 px-3 py-2">Manufacturing</span><span className="rounded-full border border-[#10233f]/10 bg-white/60 px-3 py-2">Retail</span><span className="rounded-full border border-[#10233f]/10 bg-white/60 px-3 py-2">Hospitality</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Filter companies by sector">
            {filters.map((filter) => (
              <Button
                key={filter}
                type="button"
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      </section>
    </div>
  );
};

export default Companies;
