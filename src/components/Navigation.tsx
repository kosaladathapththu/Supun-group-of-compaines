import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { companies } from "@/data/companies";
import logo from "@/assets/supun-group-of-companies-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => path === "/" ? location.pathname === "/" : location.pathname === path || location.pathname.startsWith(`${path}/`);
  const primaryLinks = [{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }, { name: "Camy Products", path: "/camy-products" }, { name: "Careers", path: "/careers" }, { name: "News & Media", path: "/news" }, { name: "Contact", path: "/contact" }];

  return <nav className="bg-white/95 backdrop-blur text-primary border-b border-gray-200 sticky top-0 z-50 shadow-sm"><div className="container mx-auto px-4"><div className="flex items-center justify-between min-h-20 gap-4">
    <Link to="/" className="flex items-center py-2" aria-label="Supun Group of Companies home"><div className="bg-white px-3 py-2 rounded-lg border border-primary/10"><img src={logo} alt="Supun Group of Companies" className="h-14 md:h-16 w-auto" /></div></Link>
    <div className="hidden xl:flex items-center gap-1">{primaryLinks.slice(0,2).map((link) => <Link key={link.path} to={link.path}><Button variant={isActive(link.path) ? "default" : "ghost"}>{link.name}</Button></Link>)}
      <DropdownMenu><DropdownMenuTrigger asChild><Button variant={isActive("/companies") ? "default" : "ghost"}>Our Companies <ChevronDown className="ml-1" size={16} /></Button></DropdownMenuTrigger><DropdownMenuContent className="w-80 max-h-[70vh] overflow-y-auto" align="center"><Link to="/companies"><DropdownMenuItem className="font-semibold text-primary cursor-pointer">View All Companies →</DropdownMenuItem></Link>{companies.map((company) => <Link key={company.id} to={`/companies/${company.id}`}><DropdownMenuItem className="cursor-pointer py-2.5"><div><div className="font-semibold text-sm">{company.shortName}</div><div className="text-xs text-muted-foreground">{company.industry}</div></div></DropdownMenuItem></Link>)}</DropdownMenuContent></DropdownMenu>
      {primaryLinks.slice(2).map((link) => <Link key={link.path} to={link.path}><Button variant={isActive(link.path) ? "default" : "ghost"}>{link.name}</Button></Link>)}
    </div>
    <button className="xl:hidden p-2" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isOpen}>{isOpen ? <X size={25} /> : <Menu size={25} />}</button>
  </div>{isOpen && <div className="xl:hidden border-t py-4 max-h-[75vh] overflow-y-auto"><div className="flex flex-col gap-1">{primaryLinks.slice(0,2).map((link) => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}><Button variant={isActive(link.path) ? "default" : "ghost"} className="w-full justify-start">{link.name}</Button></Link>)}<div className="px-3 pt-3 pb-1 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Our Companies</div><Link to="/companies" onClick={() => setIsOpen(false)}><Button variant="ghost" className="w-full justify-start font-semibold">View All Companies →</Button></Link>{companies.map((company) => <Link key={company.id} to={`/companies/${company.id}`} onClick={() => setIsOpen(false)}><Button variant="ghost" className="w-full justify-start h-auto py-2 text-sm">{company.shortName}</Button></Link>)}<div className="border-t my-2" />{primaryLinks.slice(2).map((link) => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}><Button variant={isActive(link.path) ? "default" : "ghost"} className="w-full justify-start">{link.name}</Button></Link>)}</div></div>}</div></nav>;
};

export default Navigation;
