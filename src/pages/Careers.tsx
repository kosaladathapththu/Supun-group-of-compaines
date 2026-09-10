import { Link } from "react-router-dom";
import { BriefcaseBusiness, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Seo from "@/components/Seo";

const Careers = () => <div className="min-h-screen">
  <Seo title="Careers | Supun Group of Companies" description="Careers and opportunities across Supun Group of Companies in manufacturing, retail, distribution and hospitality in Sri Lanka." keywords="Supun Group careers, jobs Sri Lanka, manufacturing jobs, retail jobs, hospitality jobs" />
  <section className="gradient-hero py-24 text-white text-center"><div className="container mx-auto px-4"><p className="text-accent font-semibold uppercase tracking-[0.2em] mb-4">Careers</p><h1 className="text-5xl md:text-6xl normal-case mb-6">Build your career with Supun Group</h1><p className="text-xl max-w-3xl mx-auto text-white/85">Career opportunities across the Group will be published here as they become available.</p></div></section>
  <section className="py-20"><div className="container mx-auto px-4 max-w-5xl"><div className="grid md:grid-cols-3 gap-5 mb-12">{[{ icon: Building2, title: "Multiple Industries", text: "Manufacturing, retail, distribution and hospitality." }, { icon: Users, title: "300+ People", text: "A growing team working across the Supun Group." }, { icon: BriefcaseBusiness, title: "Future Openings", text: "Vacancies and opportunities will be listed when confirmed." }].map(({ icon: Icon, title, text }) => <Card key={title} className="h-full"><CardContent className="p-6"><Icon className="text-primary mb-4" /><h2 className="text-xl normal-case">{title}</h2><p className="text-muted-foreground mt-3">{text}</p></CardContent></Card>)}</div><div className="rounded-xl bg-muted p-8 md:p-10 text-center"><h2 className="text-3xl normal-case">No confirmed vacancy list has been supplied yet</h2><p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Use the contact page for general career enquiries. This page is ready for the Group to add approved vacancies later.</p><Link to="/contact" className="inline-block mt-7"><Button>Contact Supun Group</Button></Link></div></div></section>
</div>;

export default Careers;
