import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Building2, Factory, Hotel, ShoppingBag, Cpu } from "lucide-react";
import { companiesAPI, type Company } from "@/services/api";
import { CompanyImage } from "@/components/ImagePlaceholder";
import illustrator1 from "@/assets/illustrator-1.png";
import illustrator2 from "@/assets/illustrator-2.png";
import Seo from "@/components/Seo";

const Companies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const data = await companiesAPI.getAll();
      setCompanies(data);
      setError(null);
    } catch (err) {
      console.error('Failed to load companies:', err);
      setError('Failed to load companies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const industryIcons = {
    "Retail & Distribution": ShoppingBag,
    "Manufacturing": Factory,
    "Hospitality": Hotel,
    "Retail": ShoppingBag,
    "Technology & Design": Cpu,
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Our Companies | Supun Group of Companies"
        description="Explore the portfolio of 10 companies under Supun Group of Companies spanning manufacturing, retail, hospitality, and technology sectors across Sri Lanka."
        keywords="Supun Group companies, Sri Lanka subsidiaries, manufacturing companies Sri Lanka, retail, hospitality, technology conglomerate"
      />
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-primary-foreground relative overflow-hidden">
        {/* Parallax Illustrator Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
          backgroundImage: `url(${illustrator1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Companies</h1>
            <p className="text-xl">
              Discover our diverse portfolio of 10 companies spanning manufacturing, retail, 
              hospitality, and technology sectors across Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Companies List */}
      <section className="py-20 relative overflow-hidden">
        {/* Parallax Illustrator Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
          backgroundImage: `url(${illustrator1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="shadow-elegant overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <Skeleton className="h-16 w-16 rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-6 w-24 rounded-full" />
                      </div>
                    </div>
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-6" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center py-12">
              <p className="text-destructive mb-4">{error}</p>
              <Button onClick={loadCompanies}>Try Again</Button>
            </div>
          )}

          {/* Companies List */}
          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {companies.map((company, index) => {
              const Icon = industryIcons[company.industry as keyof typeof industryIcons] || Building2;
              
              return (
                <Card
                  key={company.id}
                  className="shadow-elegant hover:shadow-xl transition-smooth hover:-translate-y-1 overflow-hidden group"
                >
                  {/* Feature Image */}
                  <CompanyImage 
                    imageUrl={company.imageUrl}
                    companyName={company.name}
                    industry={company.industry}
                    className="h-48 group-hover:scale-110 transition-transform duration-300"
                    alt={company.name}
                  />
                  
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={40} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-accent mb-2">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                          {company.industry}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {company.description}
                    </p>

                    {company.established && (
                      <p className="text-sm text-muted-foreground mb-4">
                        <strong>Established:</strong> {company.established}
                      </p>
                    )}

                    <Link to={`/companies/${company.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
            </div>
          )}
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Industries We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center shadow-elegant">
              <CardContent className="p-6">
                <Factory className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
                <p className="text-sm text-muted-foreground">6 Companies</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardContent className="p-6">
                <ShoppingBag className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-bold mb-2">Retail</h3>
                <p className="text-sm text-muted-foreground">3 Companies</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardContent className="p-6">
                <Hotel className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-bold mb-2">Hospitality</h3>
                <p className="text-sm text-muted-foreground">1 Company</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardContent className="p-6">
                <Cpu className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-bold mb-2">Technology</h3>
                <p className="text-sm text-muted-foreground">1 Company</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
