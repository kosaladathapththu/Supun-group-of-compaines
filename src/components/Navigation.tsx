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
    <nav className="sticky top-0 z-50 bg-transparent px-3 py-2.5 text-primary sm:px-4 sm:py-3">
      <div className="nav-glass mx-auto max-w-[1380px] rounded-[1.35rem] px-3 sm:px-5">
        <div className="flex min-h-[3.75rem] items-center justify-between gap-3 md:min-h-[4.25rem]">
          <Link to="/" className="flex items-center py-2" aria-label="Supun Group of Companies home" onClick={() => setIsOpen(false)}>
            <div className="rounded-xl bg-white/55 px-2 py-1 ring-1 ring-primary/10">
              <img src={logo} alt="Supun Group of Companies" className="h-10 w-auto md:h-12" />
            </div>
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
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

          <button className="rounded-xl border border-primary/10 bg-white/45 p-2 transition hover:bg-white/80 xl:hidden" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isOpen}>
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {isOpen && (
          <div className="mb-3 border-t border-primary/10 py-3 xl:hidden">
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
