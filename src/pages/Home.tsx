import { Link } from "react-router-dom";
import { ArrowRight, Factory, Hotel, ShoppingBag, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Seo, { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from "@/components/Seo";
import { companies } from "@/data/companies";
import { sectorHighlights, siteStats } from "@/data/siteContent";
import heroManufacturing from "@/assets/hero-manufacturing.jpg";

const iconForSector = (title: string) => {
  if (title.startsWith("Manufacturing")) return Factory;
  if (title.startsWith("Retail")) return ShoppingBag;
  if (title.startsWith("Hospitality")) return Hotel;
  return ShieldCheck;
};

const Home = () => (
  <div className="min-h-screen">
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
        description:
          "A Sri Lankan family-run group operating across manufacturing, retail, distribution and hospitality.",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+94-112-055-026",
          contactType: "general enquiries",
          email: "info@supungroup.lk",
        },
      }}
    />

    <section className="relative min-h-[650px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroManufacturing})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/90 to-primary/60" />
      <div className="container mx-auto px-4 relative z-10 py-24 text-primary-foreground">
        <div className="max-w-4xl">
          <p className="text-accent font-semibold uppercase tracking-[0.22em] mb-5">Since 1978</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-7 normal-case">
            Built in Sri Lanka.<br />Built to Last.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-primary-foreground/90 mb-9">
            One Sri Lankan Group, built across four industries since 1978.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/companies">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore Our Companies <ArrowRight className="ml-2" size={19} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/5 border-white text-white hover:bg-white hover:text-primary"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary text-primary-foreground border-y border-white/10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteStats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</div>
              <div className="mt-2 text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 normal-case">Built across four connected industries</h2>
          <p className="text-lg text-muted-foreground">
            From local manufacturing to island-wide retail, distribution and hospitality, each part of the Group supports the same focus on quality and Sri Lankan craftsmanship.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {sectorHighlights.map((sector) => {
            const Icon = iconForSector(sector.title);
            return (
              <Card key={sector.title} className="h-full shadow-elegant border-t-4 border-t-accent">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="text-primary" size={25} />
                  </div>
                  <h3 className="text-xl mb-3 normal-case">{sector.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{sector.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold uppercase tracking-wider mb-3">Our Group</p>
            <h2 className="text-4xl md:text-5xl font-bold normal-case">11 companies. One shared standard.</h2>
          </div>
          <Link to="/companies" className="text-primary font-semibold inline-flex items-center hover:underline">
            View all companies <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((company, index) => (
            <Link key={company.id} to={`/companies/${company.id}`} className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-xs font-bold text-accent tracking-wider">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">{company.industry}</span>
                  </div>
                  <h3 className="text-xl group-hover:text-primary transition-colors normal-case">{company.shortName}</h3>
                  <p className="text-muted-foreground mt-3">{company.description}</p>
                  <div className="mt-5 text-primary font-semibold text-sm inline-flex items-center">
                    View company <ArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
