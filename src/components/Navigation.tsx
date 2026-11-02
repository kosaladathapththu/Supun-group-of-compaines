import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { companies } from '@/data/companies';
import logo from '@/assets/supun-group-logo-transparent.png';

const aboutLinks = [
  ['Our Story', '/about#story'],
  ["Chairman's Message", '/about#chairman'],
  ['Vision & Mission', '/about#direction'],
  ['Our Journey', '/about#journey'],
  ['Leadership Team', '/about#leadership'],
  ['Awards & Recognition', '/about#awards'],
] as const;

const plainLinks = [
  { name: 'Camy Products', path: '/camy-products' },
  { name: 'Careers', path: '/careers' },
  { name: 'News & Media', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Inner pages still open with a full-bleed hero, so the bar floats above them.
  const overlaysHero =
    location.pathname === '/about' ||
    location.pathname.startsWith('/companies') ||
    location.pathname === '/careers' ||
    location.pathname === '/contact' ||
    location.pathname === '/news';
  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  const link = (path: string) =>
    `relative px-3 py-2 text-[0.8rem] font-medium tracking-wide transition-colors after:absolute after:inset-x-3 after:-bottom-px after:h-[2px] after:origin-left after:bg-accent after:transition-transform ${
      isActive(path)
        ? 'text-primary after:scale-x-100'
        : 'text-foreground/75 hover:text-primary after:scale-x-0 hover:after:scale-x-100'
    }`;

  const menuPanel = 'rounded-sm border-border bg-card p-1 shadow-[0_12px_30px_rgba(15,25,50,.12)]';
  const menuItem =
    'cursor-pointer rounded-sm py-2.5 text-sm focus:bg-muted focus:text-primary';

  return (
    <nav
      className={`${overlaysHero ? 'fixed' : 'sticky'} left-0 right-0 top-0 z-50 border-b bg-background transition-colors ${
        isScrolled || isOpen ? 'border-border' : 'border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-[4.5rem] max-w-[1240px] items-center justify-between gap-6 px-5">
        <Link to="/" aria-label="Supun Group of Companies home" className="shrink-0">
          <img src={logo} alt="Supun Group of Companies" className="h-14 w-auto md:h-[4.4rem]" />
        </Link>

        <div className="hidden items-center xl:flex">
          <Link to="/" className={link('/')}>
            Home
          </Link>

          <div className="flex items-center">
            <Link to="/about" className={`${link('/about')} pr-1`}>
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="Open About Us menu"
                className="-ml-2 mr-1 p-1.5 text-foreground/60 transition hover:text-primary"
              >
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className={`w-60 ${menuPanel}`} align="start">
                {aboutLinks.map(([label, to]) => (
                  <Link key={to} to={to}>
                    <DropdownMenuItem className={menuItem}>{label}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center">
            <Link to="/companies" className={`${link('/companies')} pr-1`}>
              Our Companies
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="Open Our Companies menu"
                className="-ml-2 mr-1 p-1.5 text-foreground/60 transition hover:text-primary"
              >
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`max-h-[70vh] w-80 overflow-y-auto ${menuPanel}`}
                align="start"
              >
                <Link to="/companies">
                  <DropdownMenuItem className={`${menuItem} font-semibold text-primary`}>
                    All companies
                  </DropdownMenuItem>
                </Link>
                {companies.map((company) => (
                  <Link key={company.id} to={`/companies/${company.id}`}>
                    <DropdownMenuItem className={menuItem}>
                      <div>
                        <div className="font-medium">{company.shortName}</div>
                        <div className="text-xs text-muted-foreground">{company.industry}</div>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {plainLinks.map((item) => (
            <Link key={item.path} to={item.path} className={link(item.path)}>
              {item.name}
            </Link>
          ))}
        </div>

        <button
          className="border border-border p-2 text-foreground transition hover:bg-muted xl:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background xl:hidden">
          <div className="container mx-auto max-w-[1240px] px-5 py-4">
            <ul className="divide-y divide-border">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Companies', path: '/companies' },
                ...plainLinks,
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-3.5 font-heading text-xl ${
                      isActive(item.path) ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
