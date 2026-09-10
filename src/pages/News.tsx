import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const News = () => <div className="min-h-screen">
  <Seo title="News & Media | Supun Group of Companies" description="News, announcements and media updates from Supun Group of Companies in Sri Lanka." keywords="Supun Group news, Supun Group media, Sri Lanka manufacturing news, Camy news" />
  <section className="gradient-hero py-24 text-white text-center"><div className="container mx-auto px-4"><p className="text-accent font-semibold uppercase tracking-[0.2em] mb-4">News & Media</p><h1 className="text-5xl md:text-6xl normal-case mb-6">Updates from across the Group</h1><p className="text-xl max-w-3xl mx-auto text-white/85">Company announcements, achievements and media updates will be published here.</p></div></section>
  <section className="py-24"><div className="container mx-auto px-4 max-w-4xl text-center"><div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center"><Newspaper size={30} /></div><h2 className="text-3xl normal-case mt-6">News content is ready to be added</h2><p className="text-muted-foreground mt-4">The supplied website content defines this section, but no approved news articles were included. We have kept the page clean instead of publishing unconfirmed stories.</p><Link to="/contact" className="inline-block mt-7"><Button variant="outline">Media Enquiries</Button></Link></div></section>
</div>;

export default News;
