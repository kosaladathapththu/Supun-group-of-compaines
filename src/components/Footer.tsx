import { Link } from 'react-router-dom';
import logo from '@/assets/supun-group-logo-transparent.png';

const links = [
  ['About Us', '/about'],
  ['Our Companies', '/companies'],
  ['Camy Products', '/camy-products'],
  ['Careers', '/careers'],
  ['News & Media', '/news'],
  ['Contact', '/contact'],
] as const;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const openCookieSettings = () => window.dispatchEvent(new Event('supun:open-cookie-settings'));

  return (
    <footer className="border-t border-border bg-[#14233f] text-[#e9e4d8]">
      <div className="container mx-auto max-w-[1240px] px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-heading text-3xl leading-tight text-white md:text-4xl">
              Built in Sri Lanka.
              <br />
              Built to last.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#e9e4d8]/65">
              A family-run group of companies in manufacturing, retail, distribution and
              hospitality, since 1978.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Explore
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {links.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-[#e9e4d8]/80 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Head office
            </h2>
            <address className="mt-5 space-y-2.5 text-sm not-italic text-[#e9e4d8]/80">
              <p>Colombo, Sri Lanka</p>
              <p>
                <a href="tel:+94112055026" className="transition hover:text-white">
                  +94 112 055 026
                </a>
              </p>
              <p>
                <a href="mailto:info@supungroup.lk" className="transition hover:text-white">
                  info@supungroup.lk
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-6 text-xs text-[#e9e4d8]/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex bg-[#f7f3eb] p-1.5">
              <img src={logo} alt="Supun Group of Companies" className="h-9 w-auto" />
            </span>
            <p>© {currentYear} Supun Group of Companies. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/cookie-policy" className="transition hover:text-white">
              Cookie Policy
            </Link>
            <button type="button" onClick={openCookieSettings} className="transition hover:text-white">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
