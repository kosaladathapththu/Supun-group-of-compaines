import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Building2, Factory, Hotel, ShoppingBag, Cpu, Target, Lightbulb, TrendingUp } from "lucide-react";
import { companiesAPI, brandsAPI, type Company, type Brand } from "@/services/api";
import { CompanyImage } from "@/components/ImagePlaceholder";
import { BrandShowcase } from "@/components/BrandShowcase";
import Seo, { SITE_NAME, SITE_URL, DEFAULT_IMAGE } from "@/components/Seo";
import heroManufacturing from "@/assets/hero-manufacturing.jpg";
import illustrator1 from "@/assets/illustrator-1.png";
import illustrator2 from "@/assets/illustrator-2.png";
import companyVideo from "@/assets/SUPUN GROUP OF COMPANY.mp4";

const Home = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [companiesData, brandsData] = await Promise.all([
        companiesAPI.getAll(),
        brandsAPI.getAll(),
      ]);
      setCompanies(companiesData);
      setBrands(brandsData);
      setError(null);
    } catch (err) {
      console.error('Failed to load data:', err);
      setError('Failed to load data. Please try again later.');
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
        title="Supun Group of Companies | Leading Conglomerate in Sri Lanka"
        description="Supun Group of Companies - A diversified Sri Lankan conglomerate with expertise in manufacturing, retail, hospitality, and technology. Established in 1999, serving local and international markets with excellence and innovation."
        keywords="Supun Group, Sri Lanka, conglomerate, manufacturing, retail, hospitality, technology, cookware, helmets, chrome plating, automotive design, hotels, business group, Sri Lankan companies"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          description: "A diversified Sri Lankan conglomerate with expertise in manufacturing, retail, hospitality, and technology.",
          url: SITE_URL,
          logo: DEFAULT_IMAGE,
          foundingDate: "1999",
          address: {
            "@type": "PostalAddress",
            addressCountry: "LK",
            addressLocality: "Sri Lanka",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+94-112-055-026",
            contactType: "Customer Service",
            email: "info@supungroup.lk",
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroManufacturing})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        {/* Illustrator Overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ 
          backgroundImage: `url(${illustrator1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Supun Group of Companies
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A Proud Sri Lankan Conglomerate Driving Innovation Since 1999
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/companies">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore Our Companies <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Parallax Illustrator Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
          backgroundImage: `url(${illustrator1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent">25+</div>
              <div className="text-sm md:text-base uppercase tracking-wide">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent">
                {isLoading ? <Skeleton className="h-16 w-20 mx-auto bg-accent/20" /> : companies.length}
              </div>
              <div className="text-sm md:text-base uppercase tracking-wide">Subsidiary Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent">
                {isLoading ? <Skeleton className="h-16 w-12 mx-auto bg-accent/20" /> : new Set(companies.map(c => c.industry)).size}
              </div>
              <div className="text-sm md:text-base uppercase tracking-wide">Industry Sectors</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent">250+</div>
              <div className="text-sm md:text-base uppercase tracking-wide">Distribution Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        {/* Parallax Illustrator Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
          backgroundImage: `url(${illustrator1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">A Proud Sri Lankan Origin</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Supun, a diversified conglomerate with its footprint into manufacturing, retailing, trading, 
              distribution, hospitality and real estate has a proud corporate philosophy to inherit the local 
              value system within the member companies and strive to serve its customers with quality and efficiency. 
              The group is dedicated to use its unique and innovative approach to contribute to the benefit of the 
              local culture and the society it deals with, by providing goods and services meeting to international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Discover Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the innovation and excellence that defines Supun Group of Companies
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-2 border-primary/10">
              <div className="relative aspect-video bg-black group">
                {/* Video Player */}
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={heroManufacturing}
                  preload="auto"
                >
                  <source src={companyVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Video Caption/Info Bar */}
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-1">Supun Group of Companies</h3>
                    <p className="text-sm opacity-90">Building Excellence Since 1999</p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/about">
                      <Button variant="secondary" size="sm">
                        Learn More
                      </Button>
                    </Link>
                    <Link to="/companies">
                      <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        Explore Companies
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Info Cards Below Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            <Card className="shadow-elegant hover:shadow-xl transition-smooth border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Factory className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Manufacturing Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      State-of-the-art facilities producing world-class products
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-xl transition-smooth border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <ShoppingBag className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Retail Network</h4>
                    <p className="text-sm text-muted-foreground">
                      Extensive distribution across Sri Lanka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-xl transition-smooth border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Hotel className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Hospitality & More</h4>
                    <p className="text-sm text-muted-foreground">
                      Diverse portfolio serving multiple industries
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-elegant hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Target className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground italic mb-4">"Innovate. Unleash and Excel"</p>
                <p className="text-sm">
                  To unleash the potential within us to transform the markets through innovation and exceed 
                  people's expectations for a better tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Lightbulb className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-sm">
                  To harness superior thinking in the creation of products and services, which functionally 
                  enhances the livelihood of people, whilst being cautious in reducing the carbon footprint.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <TrendingUp className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Growth</h3>
                <p className="text-sm">
                  From humble beginnings in 1999 to a diversified group of 10 companies spanning manufacturing, 
                  retail, hospitality, and technology sectors across Sri Lanka.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Companies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse portfolio of companies across multiple industries
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="h-full shadow-elegant overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-6">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-4" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-6 w-24" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center py-12">
              <p className="text-destructive mb-4">{error}</p>
              <Button onClick={loadData}>Try Again</Button>
            </div>
          )}

          {/* Companies List */}
          {!isLoading && !error && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companies.map((company) => {
                  const Icon = industryIcons[company.industry as keyof typeof industryIcons] || Building2;
                  
                  return (
                    <Link key={company.id} to={`/companies/${company.id}`}>
                      <Card className="h-full shadow-elegant hover:shadow-xl transition-smooth hover:-translate-y-2 group overflow-hidden">
                        {/* Feature Image */}
                        <CompanyImage 
                          imageUrl={company.imageUrl}
                          companyName={company.shortName}
                          industry={company.industry}
                          className="h-48 group-hover:scale-110 transition-transform duration-300"
                          alt={company.shortName}
                        />
                    
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/20 transition-smooth">
                          <Icon className="text-primary group-hover:text-accent transition-smooth" size={32} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">{company.shortName}</h3>
                          <span className="text-xs text-accent font-semibold uppercase tracking-wide">{company.industry}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {company.description}
                      </p>
                      <Button variant="link" className="p-0 h-auto group-hover:text-accent">
                        Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/companies">
              <Button size="lg">
                View All Companies <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
            </>
          )}
        </div>
      </section>

      {/* Brand Showcase Section */}
      {!isLoading && brands.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Brand Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the diverse range of brands under the Supun Group umbrella, each committed to excellence and innovation
              </p>
            </div>
            <BrandShowcase brands={brands} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground relative overflow-hidden">
        {/* Parallax Illustrator Overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ 
          backgroundImage: `url(${illustrator1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hands with Sri Lanka's leading conglomerate and explore opportunities across multiple industries
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
