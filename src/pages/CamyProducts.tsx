import { ExternalLink, ShieldCheck, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Seo from "@/components/Seo";
import { camyProducts } from "@/data/siteContent";
import helmetImage from "@/assets/helmet-manufacturing.jpg";
import cookwareImage from "@/assets/cookware-manufacturing.jpg";
import chromeImage from "@/assets/chrome-manufacturing.jpg";
import manufacturingImage from "@/assets/hero-manufacturing.jpg";

const productImages: Record<string, string> = { "Motorcycle Helmets": helmetImage, "Non-Stick Cookware": cookwareImage, "Water Filters": chromeImage, "Mixer Grinders": chromeImage, "Wall Clocks": chromeImage };

const CamyProducts = () => <div className="min-h-screen">
  <Seo title="Camy Products | Made in Sri Lanka | Supun Group" description="Explore the Camy product range made in Sri Lanka, including SLS-certified helmets, cookware, air conditioners, fans, water filters, mixer grinders and more." keywords="Camy products Sri Lanka, Camy helmets, Camy air conditioners, Camy fans, Camy cookware, Made in Sri Lanka" />
  <section className="gradient-hero py-24 text-white"><div className="container mx-auto px-4 text-center"><p className="text-accent font-semibold uppercase tracking-[0.2em] mb-4">The Camy Brand</p><h1 className="text-5xl md:text-6xl normal-case mb-6">Made in Sri Lanka</h1><p className="text-xl max-w-3xl mx-auto text-white/85">Camy brings together products manufactured across the Supun Group, from motorcycle helmets and cookware to home appliances and cooling solutions.</p><a href="https://www.anythingatsupun.lk/" target="_blank" rel="noopener noreferrer" className="inline-block mt-8"><Button size="lg" variant="secondary">Shop Camy Products <ExternalLink className="ml-2" size={18} /></Button></a></div></section>
  <section className="py-20"><div className="container mx-auto px-4"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">{camyProducts.map((product) => <Card key={product.name} className="overflow-hidden group hover:shadow-xl transition-all duration-300"><div className="h-44 overflow-hidden bg-muted"><img src={productImages[product.name] || manufacturingImage} alt={`${product.name} manufactured by ${product.madeBy}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div><CardContent className="p-6"><div className="flex items-start justify-between gap-3"><div><h2 className="text-2xl normal-case">{product.name}</h2><p className="text-muted-foreground mt-2">Made by {product.madeBy}</p></div><ShieldCheck className="text-accent shrink-0" /></div><div className="mt-5 flex items-center justify-between border-t pt-4"><span className="text-sm font-semibold text-primary">{product.note}</span><a href="https://www.anythingatsupun.lk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent" aria-label={`Shop ${product.name}`}><ShoppingBag size={20} /></a></div></CardContent></Card>)}</div></div></section>
</div>;

export default CamyProducts;
