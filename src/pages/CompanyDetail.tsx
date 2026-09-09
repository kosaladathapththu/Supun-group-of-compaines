import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Building2, Factory, Hotel, ShoppingBag, Cpu, CheckCircle2, Globe, Calendar, FileText, Download, Eye, X, Phone, PhoneCall, Mail, Printer, Image as ImageIcon, Facebook, Linkedin, Twitter, Instagram, Youtube, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { companiesAPI, type Company, getFileUrl } from "@/services/api";
import { CompanyImage, ImagePlaceholder } from "@/components/ImagePlaceholder";
import Seo, { SITE_NAME, SITE_URL, DEFAULT_IMAGE } from "@/components/Seo";

const CompanyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showImageViewer, setShowImageViewer] = useState(false);

  useEffect(() => {
    if (id) {
      loadCompany(id);
    }
  }, [id]);

  const loadCompany = async (companyId: string) => {
    try {
      const data = await companiesAPI.getById(companyId);
      setCompany(data);
      setError(null);
    } catch (err) {
      console.error('Failed to load company:', err);
      setError('Company not found or failed to load.');
    } finally {
      setIsLoading(false);
    }
  };

  const openImageViewer = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageViewer(true);
  };

  const closeImageViewer = () => {
    setShowImageViewer(false);
    setSelectedImageIndex(null);
  };

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!company?.gallery || selectedImageIndex === null) return;
    
    if (direction === 'prev') {
      setSelectedImageIndex((prev) => 
        prev === 0 ? company.gallery!.length - 1 : prev! - 1
      );
    } else {
      setSelectedImageIndex((prev) => 
        prev === company.gallery!.length - 1 ? 0 : prev! + 1
      );
    }
  }, [company?.gallery, selectedImageIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!showImageViewer) return;
      
      if (e.key === 'Escape') {
        closeImageViewer();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showImageViewer, selectedImageIndex, navigateImage]);

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <section className="relative h-[400px] bg-gray-200 animate-pulse" />
        <div className="container mx-auto px-4 py-12">
          <Skeleton className="h-12 w-1/3 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-48 w-full" />
            </div>
            <div>
              <Skeleton className="h-96 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error or Not Found State
  if (error || !company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{error || 'Company Not Found'}</h1>
          <Link to="/companies">
            <Button>
              <ArrowLeft className="mr-2" /> Back to Companies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const industryIcons = {
    "Retail & Distribution": ShoppingBag,
    "Manufacturing": Factory,
    "Hospitality": Hotel,
    "Retail": ShoppingBag,
    "Technology & Design": Cpu,
  };

  const Icon = industryIcons[company.industry as keyof typeof industryIcons] || Building2;
  const companyImageUrl = getFileUrl(company.imageUrl);

  const companyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.description || company.fullDescription,
    url: `${SITE_URL}/companies/${company.id}`,
    logo: companyImageUrl || DEFAULT_IMAGE,
    parentOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(company.website ? { sameAs: [company.website] } : {}),
    ...(company.email ? { email: company.email } : {}),
    ...(company.phone ? { telephone: company.phone } : {}),
  };

  return (
    <div className="min-h-screen">
      <Seo
        title={`${company.name} | Supun Group of Companies`}
        description={company.description || `${company.shortName} - A ${company.industry} company of Supun Group of Companies, Sri Lanka.`}
        keywords={`${company.name}, ${company.shortName}, ${company.industry} Sri Lanka, Supun Group companies`}
        path={`/companies/${company.id}`}
        image={companyImageUrl || DEFAULT_IMAGE}
        jsonLd={companyJsonLd}
      />
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {companyImageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${companyImageUrl})` }}
          >
            <div className="absolute inset-0 gradient-hero opacity-90"></div>
          </div>
        )}
        {!companyImageUrl && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="absolute inset-0 gradient-hero opacity-90"></div>
          </div>
        )}
        
        <div className="relative z-10 container mx-auto px-4">
          <Link to="/companies">
            <Button variant="outline" className="mb-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <ArrowLeft className="mr-2" size={16} /> Back to Companies
            </Button>
          </Link>
          <div className="flex items-start space-x-6">
            <div className="p-4 bg-primary-foreground rounded-lg">
              <Icon className="text-primary" size={48} />
            </div>
            <div className="text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{company.name}</h1>
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                {company.industry}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="mx-auto mb-3 text-primary" size={32} />
                  <div className="text-sm text-muted-foreground mb-1">Industry</div>
                  <div className="font-semibold">{company.industry}</div>
                </CardContent>
              </Card>

              {company.established && (
                <Card>
                  <CardContent className="p-6 text-center">
                    <Calendar className="mx-auto mb-3 text-primary" size={32} />
                    <div className="text-sm text-muted-foreground mb-1">Established</div>
                    <div className="font-semibold">{company.established}</div>
                  </CardContent>
                </Card>
              )}

              {company.website && (
                <Card>
                  <CardContent className="p-6 text-center">
                    <Globe className="mx-auto mb-3 text-primary" size={32} />
                    <div className="text-sm text-muted-foreground mb-1">Website</div>
                    <a
                      href={`${company.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:text-accent transition-smooth"
                    >
                      {company.website}
                    </a>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            {(company.phone || company.hotline || company.email || company.faxNumber) && (
              <Card className="shadow-elegant mb-12">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {company.phone && (
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Phone className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Phone</div>
                          <a 
                            href={`tel:${company.phone.replace(/\s/g, '')}`} 
                            className="font-semibold text-lg hover:text-primary transition-smooth"
                          >
                            {company.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {company.hotline && (
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <PhoneCall className="text-accent" size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Hotline</div>
                          <a 
                            href={`tel:${company.hotline.replace(/\s/g, '')}`} 
                            className="font-semibold text-lg hover:text-accent transition-smooth"
                          >
                            {company.hotline}
                          </a>
                        </div>
                      </div>
                    )}

                    {company.email && (
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Mail className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Email</div>
                          <a 
                            href={`mailto:${company.email}`} 
                            className="font-semibold text-lg hover:text-primary transition-smooth break-all"
                          >
                            {company.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {company.faxNumber && (
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-muted rounded-lg">
                          <Printer className="text-muted-foreground" size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Fax</div>
                          <div className="font-semibold text-lg">{company.faxNumber}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Google Maps Location */}
            {company.googleMapsLink && (
              <Card className="shadow-elegant mb-12">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Location</h2>
                  <div className="space-y-4">
                    <Button
                      asChild
                      className="w-full md:w-auto"
                      size="lg"
                    >
                      <a
                        href={company.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Globe size={20} />
                        View on Google Maps
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Click to open our location in Google Maps and get directions
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* About */}
            <Card className="shadow-elegant mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">About {company.shortName}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {company.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Gallery */}
            {company.gallery && company.gallery.length > 0 && (
              <Card className="shadow-elegant mb-12">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <ImageIcon className="text-primary" size={32} />
                    <h2 className="text-3xl font-bold">Gallery</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {company.gallery.map((imageUrl, index) => (
                      <div 
                        key={index} 
                        className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
                        onClick={() => openImageViewer(index)}
                      >
                        <img
                          src={getFileUrl(imageUrl)}
                          alt={`${company.shortName} gallery image ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-3 left-3 text-white font-semibold text-sm flex items-center gap-2">
                            <Eye size={16} />
                            View Image
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Key Features */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Key Features & Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            {company.socialLinks && company.socialLinks.length > 0 && (
              <Card className="shadow-elegant mt-12">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
                  <div className="flex flex-wrap gap-4">
                    {company.socialLinks.map((link, index) => {
                      // Determine icon based on platform name
                      const getSocialIcon = (name: string) => {
                        const lowerName = name.toLowerCase();
                        if (lowerName.includes('facebook')) return Facebook;
                        if (lowerName.includes('linkedin')) return Linkedin;
                        if (lowerName.includes('twitter') || lowerName.includes('x')) return Twitter;
                        if (lowerName.includes('instagram')) return Instagram;
                        if (lowerName.includes('youtube')) return Youtube;
                        return ExternalLink;
                      };

                      const Icon = getSocialIcon(link.name);

                      return (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all group"
                        >
                          <Icon className="group-hover:scale-110 transition-transform" size={24} />
                          <span className="font-semibold">{link.name}</span>
                          <ExternalLink className="ml-1 opacity-50" size={16} />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Catalog Viewer/Download */}
            {company.catalogPdf && (
              <Card className="shadow-elegant mt-12">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <FileText className="text-primary" size={32} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold mb-1">Product Catalog</h3>
                          <p className="text-muted-foreground text-sm md:text-base">
                            View or download our comprehensive product catalog
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="gap-2 w-full sm:w-auto"
                          onClick={() => setShowPdfViewer(!showPdfViewer)}
                        >
                          {showPdfViewer ? (
                            <>
                              <X size={20} />
                              <span>Close Viewer</span>
                            </>
                          ) : (
                            <>
                              <Eye size={20} />
                              <span>View Catalog</span>
                            </>
                          )}
                        </Button>
                        <a
                          href={getFileUrl(company.catalogPdf) || ''}
                          download
                          className="w-full sm:w-auto"
                        >
                          <Button size="lg" className="gap-2 w-full">
                            <Download size={20} />
                            <span>Download</span>
                          </Button>
                        </a>
                      </div>
                    </div>

                    {/* PDF Viewer */}
                    {showPdfViewer && (
                      <div className="mt-4 rounded-lg overflow-hidden shadow-lg border-2 border-primary/20">
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 flex items-center justify-between">
                          <span className="text-sm font-medium text-muted-foreground">
                            📄 Viewing: Product Catalog
                          </span>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => setShowPdfViewer(false)}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                        <iframe
                          src={getFileUrl(company.catalogPdf) || ''}
                          className="w-full h-[600px] md:h-[800px]"
                          title="Product Catalog"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Interested in {company.shortName}?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with us to learn more about our products and services
            </p>
            
            {/* Quick Contact Buttons */}
            {(company.phone || company.email || company.hotline) && (
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {company.phone && (
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`}>
                    <Button size="lg" variant="outline" className="gap-2">
                      <Phone size={20} />
                      Call Us
                    </Button>
                  </a>
                )}
                {company.hotline && (
                  <a href={`tel:${company.hotline.replace(/\s/g, '')}`}>
                    <Button size="lg" variant="outline" className="gap-2">
                      <PhoneCall size={20} />
                      Hotline
                    </Button>
                  </a>
                )}
                {company.email && (
                  <a href={`mailto:${company.email}`}>
                    <Button size="lg" variant="outline" className="gap-2">
                      <Mail size={20} />
                      Email Us
                    </Button>
                  </a>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link to="/companies">
                <Button size="lg" variant="outline">
                  <ArrowLeft className="mr-2" size={16} /> View All Companies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Viewer */}
      {showImageViewer && company?.gallery && selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeImageViewer}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            onClick={closeImageViewer}
            aria-label="Close viewer"
          >
            <X className="text-white" size={32} />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold">
            {selectedImageIndex + 1} / {company.gallery.length}
          </div>

          {/* Previous Button */}
          {company.gallery.length > 1 && (
            <button
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="text-white" size={32} />
            </button>
          )}

          {/* Image */}
          <div 
            className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getFileUrl(company.gallery[selectedImageIndex])}
              alt={`${company.shortName} gallery image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next Button */}
          {company.gallery.length > 1 && (
            <button
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              aria-label="Next image"
            >
              <ChevronRight className="text-white" size={32} />
            </button>
          )}

          {/* Keyboard Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            Press <kbd className="px-2 py-1 bg-white/20 rounded">←</kbd> <kbd className="px-2 py-1 bg-white/20 rounded">→</kbd> to navigate, <kbd className="px-2 py-1 bg-white/20 rounded">ESC</kbd> to close
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetail;
