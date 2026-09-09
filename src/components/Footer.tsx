import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/supun-group-of-companies-logo.png";

const Footer = () => (
  <footer className="bg-[#071b34] text-white">
    <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-20 lg:py-24">
      <div className="grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:gap-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#f5a20a]">Start a conversation</p>
          <h2 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-0.035em] normal-case md:text-7xl">Let's build what<br />comes next.</h2>
          <Link to="/contact" className="group mt-9 inline-flex items-center gap-4 text-base font-semibold text-white">Contact Supun Group<span className="grid h-11 w-11 place-items-center rounded-full bg-[#f5a20a] text-[#071b34] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowUpRight size={18} /></span></Link>
        </div>
        <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-2">
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.18em] text-white/45">Group office</p>
          <div className="space-y-5 text-sm text-white/75">
            <a href="mailto:info@supungroup.lk" className="flex items-center gap-3 transition hover:text-[#f5a20a]"><Mail size={17} />info@supungroup.lk</a>
            <a href="tel:+94112055026" className="flex items-center gap-3 transition hover:text-[#f5a20a]"><Phone size={17} />+94 112 055 026</a>
            <p className="flex items-center gap-3"><MapPin size={17} />Colombo, Sri Lanka</p>
          </div>
          <p className="mt-9 text-xs leading-6 text-white/45">Mon–Fri 9:00 AM–6:00 PM<br />Sat 9:00 AM–1:00 PM</p>
        </div>
      </div>

      <div className="mt-20 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div><div className="inline-block bg-white p-3"><img src={logo} alt="Supun Group of Companies" className="h-12 w-auto" /></div><p className="mt-5 max-w-sm text-sm leading-7 text-white/50">A family-run Sri Lankan group creating lasting value across manufacturing, retail, distribution and hospitality since 1978.</p></div>
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/40">Explore</p><div className="grid gap-3 text-sm text-white/70"><Link to="/about" className="hover:text-white">About us</Link><Link to="/companies" className="hover:text-white">Our companies</Link><Link to="/shop" className="hover:text-white">Camy products</Link><Link to="/careers" className="hover:text-white">Careers</Link><Link to="/contact" className="hover:text-white">Contact</Link></div></div>
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/40">Our vision</p><p className="font-heading text-2xl font-medium text-white/85">“Innovate. Unleash and Excel.”</p></div>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-[11px] text-white/35 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Supun Group of Companies. All rights reserved.</p><p>Designed for a new chapter.</p></div>
    </div>
  </footer>
);

export default Footer;
