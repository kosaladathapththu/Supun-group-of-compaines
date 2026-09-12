import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Award, Calendar, CheckCircle2, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CompanyLogo } from "@/components/CompanyLogo";
import Seo, { SITE_URL } from "@/components/Seo";
import { companyById } from "@/data/companies";
import heroCorporate from "@/assets/hero-corporate.jpg";

const CompanyDetail = () => {
  const { id } = useParams();
  const company = companyById(id);

  if (!company) {
    return <section className="min-h-[60vh] flex items-center"><div className="container mx-auto px-4 text-center"><h1 className="text-4xl normal-case mb-4">Company not found</h1><p className="text-muted-foreground mb-7">The company page you requested is not available.</p><Link to="/companies"><Button>Back to Our Companies</Button></Link></div></section>;
  }

  const canonicalPath = `/companies/${company.id}`;
  const hasContact = company.phone || company.email || company.location;

  return <div className="min-h-screen">
    <Seo title={`${company.shortName} | Supun Group of Companies`} description={company.description} keywords={`${company.shortName}, ${company.industry}, Supun Group of Companies, Sri Lanka`} path={canonicalPath} jsonLd={{"@context":"https://schema.org","@graph":[{"@type":"Organization",name:company.name,url:`${SITE_URL}${canonicalPath}`,description:company.description,foundingDate:company.established,parentOrganization:{"@type":"Organization",name:"Supun Group of Companies",url:SITE_URL},...(company.website ? { sameAs: [company.website] } : {})},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:SITE_URL},{"@type":"ListItem",position:2,name:"Our Companies",item:`${SITE_URL}/companies`},{"@type":"ListItem",position:3,name:company.shortName,item:`${SITE_URL}${canonicalPath}`}]}]}} />

    <section className="relative py-20 md:py-28 overflow-hidden"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroCorporate})` }} /><div className="absolute inset-0 bg-primary-dark/90" /><div className="container mx-auto px-4 relative z-10 text-white"><Link to="/companies" className="inline-flex items-center text-white/80 hover:text-white mb-8"><ArrowLeft size={17} className="mr-2" /> Our Companies</Link><div className="grid items-center gap-8 lg:grid-cols-[1fr_280px]"><div className="max-w-4xl"><div className="flex flex-wrap items-center gap-3 mb-5"><span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">{company.industry}</span>{company.established && <span className="text-white/75 inline-flex items-center text-sm"><Calendar size={15} className="mr-1.5" /> Established {company.established}</span>}</div><p className="text-accent font-semibold mb-3 text-lg">{company.tagline}</p><h1 className="text-4xl md:text-6xl normal-case mb-6">{company.name}</h1><p className="text-xl text-white/85 max-w-3xl">{company.description}</p></div><CompanyLogo companyId={company.id} companyName={company.shortName} className="h-40 w-full rounded-2xl border border-white/20 p-5 shadow-2xl lg:h-48" imageClassName="max-h-32 lg:max-h-40" /></div></div></section>

    <section className="py-20"><div className="container mx-auto px-4 grid lg:grid-cols-[1fr_360px] gap-10 max-w-7xl"><div><p className="text-accent font-semibold uppercase tracking-wider mb-3">About the Company</p><h2 className="text-3xl md:text-4xl normal-case mb-6">{company.tagline}</h2><p className="text-lg leading-relaxed text-muted-foreground">{company.fullDescription}</p>
      <div className="mt-12"><h2 className="text-3xl normal-case mb-6">Key Features</h2><div className="grid sm:grid-cols-2 gap-4">{company.features.map((feature) => <div key={feature} className="flex gap-3 p-4 rounded-lg border bg-card"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} /><span>{feature}</span></div>)}</div></div>
      {company.awards && company.awards.length > 0 && <div className="mt-12"><h2 className="text-3xl normal-case mb-6">Awards & Recognition</h2><div className="space-y-3">{company.awards.map((award) => <div key={award} className="flex items-start gap-3 p-5 rounded-lg bg-accent/5 border border-accent/20"><Award className="text-accent shrink-0 mt-0.5" size={21} /><span>{award}</span></div>)}</div></div>}
    </div><aside><Card className="shadow-elegant sticky top-28"><CardContent className="p-6"><h2 className="text-2xl normal-case mb-5">Company Information</h2><div className="space-y-5">{company.established && <div><div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Established</div><div className="font-semibold">{company.established}</div></div>}<div><div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Industry</div><div className="font-semibold">{company.industry}</div></div>{company.phone && <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="flex items-start gap-3 text-primary hover:underline"><Phone size={18} className="mt-0.5 shrink-0" /><span>{company.phone}</span></a>}{company.email && <a href={`mailto:${company.email}`} className="flex items-start gap-3 text-primary hover:underline break-all"><Mail size={18} className="mt-0.5 shrink-0" /><span>{company.email}</span></a>}{company.location && <div className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-primary" /><span>{company.location}</span></div>}{company.website && <a href={company.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-semibold hover:underline">Visit website <ExternalLink size={15} className="ml-1.5" /></a>}{!hasContact && <p className="text-sm text-muted-foreground">Additional contact details will be published when confirmed.</p>}</div></CardContent></Card></aside></div></section>
  </div>;
};

export default CompanyDetail;
