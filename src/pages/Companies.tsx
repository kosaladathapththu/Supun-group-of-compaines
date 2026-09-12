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

      <section className="gradient-hero py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold uppercase tracking-[0.2em] mb-4">Our Companies</p>
          <h1 className="text-5xl md:text-6xl normal-case mb-6">11 companies. Built across Sri Lanka.</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/85">
            Explore the Group by sector: manufacturing, retail and distribution, and hospitality.
          </p>
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
