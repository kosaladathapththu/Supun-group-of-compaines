import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { companies } from "@/data/companies";
import logo from "@/assets/supun-group-of-companies-logo.png";

const primaryLinks = [
  { name: "Camy Products", path: "/camy-products" },
  { name: "Careers", path: "/careers" },
  { name: "News & Media", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const aboutLinks = [
  { name: "Our Story", path: "/about#story" },
  { name: "Chairman’s Message", path: "/about#chairman" },
  { name: "Vision & Mission", path: "/about#direction" },
  { name: "Our Journey", path: "/about#journey" },
  { name: "Leadership Team", path: "/about#leadership" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const overlaysHero = location.pathname === "/" || location.pathname === "/about" || location.pathname === "/news";
  const isActive = (path: string) => path === "/" ? location.pathname === "/" : location.pathname === path || location.pathname.startsWith(`${path}/`);

  useEffect(() => {
    const updateNavigation = () => setIsScrolled(window.scrollY > 40);
    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  const navLinkClass = "text-white/82 hover:bg-white/10 hover:text-white";
  const activeLinkClass = "bg-white/10 text-white ring-1 ring-white/15";

  return (
    <nav className={`${overlaysHero ? "fixed" : "sticky"} left-0 right-0 top-0 z-50 px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3`}>
      <div className={`${isScrolled || !overlaysHero || isOpen ? "bg-[#10233f]/95 shadow-lg backdrop-blur-xl" : "bg-[#10233f]/78 backdrop-blur-md"} mx-auto max-w-[1180px] rounded-2xl border border-white/10 px-3 transition-all duration-300 sm:px-5`}>
        <div className="flex min-h-[3.75rem] items-center justify-between gap-3 md:min-h-[4.25rem]">
          <Link to="/" className="flex items-center py-2" aria-label="Supun Group of Companies home" onClick={() => setIsOpen(false)}>
            <div className="rounded-lg bg-white px-2 py-1 shadow-sm"><img src={logo} alt="Supun Group of Companies" className="h-10 w-auto md:h-12" /></div>
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            <Link to="/"><Button variant="ghost" className={isActive("/") ? activeLinkClass : navLinkClass}>Home</Button></Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild><Button variant="ghost" className={isActive("/about") ? activeLinkClass : navLinkClass}>About Us <ChevronDown className="ml-1" size={16} /></Button></DropdownMenuTrigger>
              <DropdownMenuContent className="w-60" align="center">{aboutLinks.map((item) => <Link key={item.path} to={item.path}><DropdownMenuItem className="cursor-pointer py-2.5">{item.name}</DropdownMenuItem></Link>)}</DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild><Button variant="ghost" className={isActive("/companies") ? activeLinkClass : navLinkClass}>Our Companies <ChevronDown className="ml-1" size={16} /></Button></DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-[70vh] w-80 overflow-y-auto" align="center">
                <Link to="/companies"><DropdownMenuItem className="cursor-pointer font-semibold text-[#10233f]">View All Companies →</DropdownMenuItem></Link>
                {companies.map((company) => <Link key={company.id} to={`/companies/${company.id}`}><DropdownMenuItem className="cursor-pointer py-2.5"><div><div className="text-sm font-semibold">{company.shortName}</div><div className="text-xs text-muted-foreground">{company.industry}</div></div></DropdownMenuItem></Link>)}
              </DropdownMenuContent>
            </DropdownMenu>
            {primaryLinks.map((link) => <Link key={link.path} to={link.path}><Button variant="ghost" className={isActive(link.path) ? activeLinkClass : navLinkClass}>{link.name}</Button></Link>)}
          </div>

          <button className="rounded-lg border border-white/15 bg-white/8 p-2 text-white transition hover:bg-white/14 xl:hidden" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isOpen}>{isOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>

        {isOpen && <div className="mb-3 border-t border-white/10 py-3 xl:hidden">
          <div className="grid gap-1">
            <Link to="/" onClick={() => setIsOpen(false)}><Button variant="ghost" className={`w-full justify-start ${isActive("/") ? activeLinkClass : navLinkClass}`}>Home</Button></Link>
            <Link to="/about" onClick={() => setIsOpen(false)}><Button variant="ghost" className={`w-full justify-start ${isActive("/about") ? activeLinkClass : navLinkClass}`}>About Us</Button></Link>
            <div className="grid gap-1 border-l border-white/15 pl-4">{aboutLinks.map((item) => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="py-2 text-sm text-white/68 hover:text-white">{item.name}</Link>)}</div>
            <Link to="/companies" onClick={() => setIsOpen(false)}><Button variant="ghost" className={`w-full justify-start ${isActive("/companies") ? activeLinkClass : navLinkClass}`}>Our Companies</Button></Link>
            {primaryLinks.map((link) => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}><Button variant="ghost" className={`w-full justify-start ${isActive(link.path) ? activeLinkClass : navLinkClass}`}>{link.name}</Button></Link>)}
          </div>
        </div>}
      </div>
    </nav>
  );
};

export default Navigation;
