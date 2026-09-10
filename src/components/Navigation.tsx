import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { companies } from "@/data/companies";
import logo from "@/assets/supun-group-of-companies-logo.png";

const primaryLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Camy Products", path: "/camy-products" },
  { name: "Careers", path: "/careers" },
  { name: "News & Media", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => path === "/"
    ? location.pathname === "/"
    : location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/10 bg-white/95 text-primary shadow-sm backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4 md:min-h-20">
          <Link to="/" className="flex items-center py-2" aria-label="Supun Group of Companies home" onClick={() => setIsOpen(false)}>
            <div className="rounded-lg border border-primary/10 bg-white px-2.5 py-1.5 md:px-3 md:py-2">
              <img src={logo} alt="Supun Group of Companies" className="h-12 w-auto md:h-16" />
            </div>
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {primaryLinks.slice(0, 2).map((link) => <Link key={link.path} to={link.path}><Button variant={isActive(link.path) ? "default" : "ghost"}>{link.name}</Button></Link>)}
            <DropdownMenu>
              <DropdownMenuTrigger asChild><Button variant={isActive("/companies") ? "default" : "ghost"}>Our Companies <ChevronDown className="ml-1" size={16} /></Button></DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-[70vh] w-80 overflow-y-auto" align="center">
                <Link to="/companies"><DropdownMenuItem className="cursor-pointer font-semibold text-primary">View All Companies →</DropdownMenuItem></Link>
                {companies.map((company) => <Link key={company.id} to={`/companies/${company.id}`}><DropdownMenuItem className="cursor-pointer py-2.5"><div><div className="text-sm font-semibold">{company.shortName}</div><div className="text-xs text-muted-foreground">{company.industry}</div></div></DropdownMenuItem></Link>)}
              </DropdownMenuContent>
            </DropdownMenu>
            {primaryLinks.slice(2).map((link) => <Link key={link.path} to={link.path}><Button variant={isActive(link.path) ? "default" : "ghost"}>{link.name}</Button></Link>)}
          </div>

          <button className="rounded-xl border border-primary/10 p-2.5 transition hover:bg-primary/5 xl:hidden" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isOpen}>
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-primary/10 bg-white/98 py-3 xl:hidden">
            <div className="grid gap-1">
              {primaryLinks.slice(0, 2).map((link) => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}><Button variant={isActive(link.path) ? "default" : "ghost"} className="w-full justify-start">{link.name}</Button></Link>)}
              <Link to="/companies" onClick={() => setIsOpen(false)}><Button variant={isActive("/companies") ? "default" : "ghost"} className="w-full justify-start">Our Companies</Button></Link>
              {primaryLinks.slice(2).map((link) => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}><Button variant={isActive(link.path) ? "default" : "ghost"} className="w-full justify-start">{link.name}</Button></Link>)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
