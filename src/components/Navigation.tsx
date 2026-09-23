import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { companies } from "@/data/companies";
import logo from "@/assets/supun-group-logo-transparent.png";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const overlaysHero = isHome || location.pathname === "/about" || location.pathname.startsWith("/companies") || location.pathname === "/careers" || location.pathname === "/contact" || location.pathname === "/news";
  const isActive = (path: string) => path === "/"
    ? location.pathname === "/"
    : location.pathname === path || location.pathname.startsWith(`${path}/`);

  useEffect(() => {
    const updateNavigation = () => setIsScrolled(window.scrollY > 40);
    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  const transparentHome = isHome && !isScrolled && !isOpen;
  const navLinkClass = "text-white/85 hover:bg-[#efbd55]/15 hover:text-[#ffd77d]";
  const activeLinkClass = "bg-[#efbd55] text-[#071b2d] ring-1 ring-[#ffd77d]/70 shadow-[0_6px_18px_rgba(239,189,85,.2)]";
  const activeSplitLinkClass = "text-[#071b2d] hover:bg-[#efbd55] hover:text-[#071b2d]";
  const dropdownContentClass = "border-[#efbd55]/25 bg-[#071b2d]/[.98] p-1.5 text-white shadow-[0_18px_45px_rgba(2,11,19,.4)] backdrop-blur-xl";
  const dropdownItemClass = "cursor-pointer rounded-md py-2.5 text-white/80 focus:bg-[#efbd55] focus:text-[#071b2d]";

  return (
    <nav className={`${overlaysHero ? "fixed" : "sticky"} left-0 right-0 top-0 z-50 bg-transparent px-3 py-2.5 transition-all duration-500 sm:px-4 sm:py-3`}>
      <div className={`${transparentHome ? "nav-soft-glass" : "nav-dark-glass"} mx-auto max-w-[1180px] rounded-[1.35rem] px-3 transition-all duration-500 sm:px-5`}>
        <div className="flex min-h-[3.75rem] items-center justify-between gap-3 md:min-h-[4.25rem]">
          <Link to="/" className="flex items-center py-2" aria-label="Supun Group of Companies home" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Supun Group of Companies" className="h-12 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,.25)] md:h-14" />
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            <Link to="/"><Button variant="ghost" className={isActive("/") ? activeLinkClass : navLinkClass}>Home</Button></Link>
            <div className={`flex items-center overflow-hidden rounded-md ${isActive("/about") ? activeLinkClass : ""}`}>
              <Link to="/about"><Button variant="ghost" className={`${isActive("/about") ? activeSplitLinkClass : navLinkClass} rounded-r-none pr-2`}>About Us</Button></Link>
              <DropdownMenu>
              <DropdownMenuTrigger asChild><Button variant="ghost" aria-label="Open About Us menu" className={`${isActive("/about") ? activeSplitLinkClass : navLinkClass} rounded-l-none px-2`}><ChevronDown size={16} /></Button></DropdownMenuTrigger>
              <DropdownMenuContent className={`w-60 ${dropdownContentClass}`} align="center">
                <Link to="/about#story"><DropdownMenuItem className={dropdownItemClass}>Our Story</DropdownMenuItem></Link>
                <Link to="/about#chairman"><DropdownMenuItem className={dropdownItemClass}>Chairman&rsquo;s Message</DropdownMenuItem></Link>
                <Link to="/about#direction"><DropdownMenuItem className={dropdownItemClass}>Vision &amp; Mission</DropdownMenuItem></Link>
                <Link to="/about#journey"><DropdownMenuItem className={dropdownItemClass}>Our Journey</DropdownMenuItem></Link>
                <Link to="/about#leadership"><DropdownMenuItem className={dropdownItemClass}>Leadership Team</DropdownMenuItem></Link>
                <Link to="/about#awards"><DropdownMenuItem className={dropdownItemClass}>Awards &amp; Recognition</DropdownMenuItem></Link>
              </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className={`flex items-center overflow-hidden rounded-md ${isActive("/companies") ? activeLinkClass : ""}`}>
              <Link to="/companies"><Button variant="ghost" className={`${isActive("/companies") ? activeSplitLinkClass : navLinkClass} rounded-r-none pr-2`}>Our Companies</Button></Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="ghost" aria-label="Open Our Companies menu" className={`${isActive("/companies") ? activeSplitLinkClass : navLinkClass} rounded-l-none px-2`}><ChevronDown size={16} /></Button></DropdownMenuTrigger>
                <DropdownMenuContent className={`max-h-[70vh] w-80 overflow-y-auto ${dropdownContentClass}`} align="center">
                  <Link to="/companies"><DropdownMenuItem className={`${dropdownItemClass} font-semibold text-[#efbd55]`}>View All Companies →</DropdownMenuItem></Link>
                  {companies.map((company) => <Link key={company.id} to={`/companies/${company.id}`}><DropdownMenuItem className={dropdownItemClass}><div><div className="text-sm font-semibold">{company.shortName}</div><div className="text-xs text-white/45">{company.industry}</div></div></DropdownMenuItem></Link>)}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {primaryLinks.slice(2).map((link) => <Link key={link.path} to={link.path}><Button variant="ghost" className={isActive(link.path) ? activeLinkClass : navLinkClass}>{link.name}</Button></Link>)}
          </div>

          <button className="rounded-xl border border-white/15 bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/20 xl:hidden" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isOpen}>
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {isOpen && (
          <div className="mb-3 border-t border-white/10 py-3 xl:hidden">
            <div className="grid gap-1">
              <Link to="/" onClick={() => setIsOpen(false)}><Button variant="ghost" className={`w-full justify-start ${isActive("/") ? activeLinkClass : navLinkClass}`}>Home</Button></Link>
              <Link to="/about" onClick={() => setIsOpen(false)}><Button variant="ghost" className={`w-full justify-start ${isActive("/about") ? activeLinkClass : navLinkClass}`}>About Us</Button></Link>
              <div className="grid grid-cols-2 gap-1 border-l border-white/15 pl-3 text-xs text-white/60"><Link to="/about#story" onClick={() => setIsOpen(false)} className="py-2">Our Story</Link><Link to="/about#chairman" onClick={() => setIsOpen(false)} className="py-2">Chairman</Link><Link to="/about#journey" onClick={() => setIsOpen(false)} className="py-2">Our Journey</Link><Link to="/about#leadership" onClick={() => setIsOpen(false)} className="py-2">Leadership</Link><Link to="/about#awards" onClick={() => setIsOpen(false)} className="py-2">Awards &amp; Recognition</Link></div>
              <Link to="/companies" onClick={() => setIsOpen(false)}><Button variant="ghost" className={`w-full justify-start ${isActive("/companies") ? activeLinkClass : navLinkClass}`}>Our Companies</Button></Link>
              {primaryLinks.slice(2).map((link) => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}><Button variant="ghost" className={`w-full justify-start ${isActive(link.path) ? activeLinkClass : navLinkClass}`}>{link.name}</Button></Link>)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
