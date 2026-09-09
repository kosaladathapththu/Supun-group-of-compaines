import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/supun-group-of-companies-logo.png";

const links = [
  { name: "About", path: "/about" },
  { name: "Companies", path: "/companies", chevron: true },
  { name: "Camy", path: "/shop" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [location.pathname]);
  const active = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className={`sticky top-0 z-50 border-b border-[#0b2340]/10 bg-white transition-shadow ${scrolled ? "shadow-[0_10px_35px_rgba(5,25,49,.1)]" : ""}`}>
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center px-6 md:px-12 lg:px-20">
        <Link to="/" aria-label="Supun Group home" className="flex w-[155px] shrink-0 items-center"><img src={logo} alt="Supun Group of Companies" className="h-[60px] w-auto" /></Link>
        <nav className="mx-auto hidden h-full items-center gap-1 lg:flex" aria-label="Main navigation">
          {links.map(link => <Link key={link.path} to={link.path} className={`group relative flex h-full items-center gap-1.5 px-4 text-[13px] font-semibold transition-colors ${active(link.path) ? "text-[#174f8d]" : "text-[#42536a] hover:text-[#174f8d]"}`}>{link.name}{link.chevron && <ChevronDown size={14} />}<span className={`absolute bottom-0 left-4 right-4 h-[3px] bg-[#f3a20e] transition-transform ${active(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} /></Link>)}
        </nav>
        <a href="https://anythingatsupun.lk" target="_blank" rel="noreferrer" className="ml-auto hidden h-12 items-center gap-3 bg-[#174f8d] px-5 text-[10px] font-extrabold uppercase tracking-[.12em] text-white transition hover:bg-[#071b34] lg:inline-flex">Shop online <ArrowUpRight size={15} /></a>
        <button onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} className="ml-auto grid h-11 w-11 place-items-center border border-[#0b2340]/15 text-[#174f8d] lg:hidden">{open?<X size={23}/>:<Menu size={23}/>}</button>
      </div>
      {open && <nav className="border-t border-[#0b2340]/10 bg-white px-6 pb-7 pt-2 lg:hidden" aria-label="Mobile navigation"><Link to="/" className={`flex border-b border-[#0b2340]/10 py-4 text-sm font-semibold ${location.pathname==="/"?"text-[#174f8d]":"text-[#42536a]"}`}>Home</Link>{links.map(link=><Link key={link.path} to={link.path} className={`flex items-center justify-between border-b border-[#0b2340]/10 py-4 text-sm font-semibold ${active(link.path)?"text-[#174f8d]":"text-[#42536a]"}`}>{link.name}{link.chevron&&<ChevronDown size={14}/>}</Link>)}<a href="https://anythingatsupun.lk" target="_blank" rel="noreferrer" className="mt-5 flex h-12 items-center justify-center gap-2 bg-[#174f8d] text-[10px] font-extrabold uppercase tracking-[.12em] text-white">Shop online <ArrowUpRight size={15}/></a></nav>}
    </header>
  );
};

export default Navigation;
