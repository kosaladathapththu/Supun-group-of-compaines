import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { companiesAPI, type Company } from "@/services/api";
import logo from "@/assets/supun-group-of-companies-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoadingCompanies, setIsLoadingCompanies] = useState(true);
  const location = useLocation();

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const data = await companiesAPI.getAll();
      setCompanies(data);
    } catch (error) {
      console.error('Failed to load companies for navigation:', error);
      // Silently fail - navigation will just show "View All Companies" without dropdown items
    } finally {
      setIsLoadingCompanies(false);
    }
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white text-primary border-b border-gray-200 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="relative z-10">
            <div className="absolute top-2 left-0 bg-white px-6 py-4 rounded-xl  transition-all duration-300 transform  border border-primary/10">
              <img
                src={logo}
                alt="Supun Group of Companies"
                className="h-16 md:h-20 w-auto"
              />
            </div>
            {/* Spacer to prevent layout shift */}
            <div className="h-16 md:h-20 w-32 md:w-40"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={isActive(link.path)
                    ? "text-white bg-primary hover:bg-primary/90"
                    : "text-primary hover:text-white hover:bg-primary/90 transition-smooth"
                  }
                >
                  {link.name}
                </Button>
              </Link>
            ))}

            {/* Companies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={location.pathname.includes("/companies") ? "default" : "ghost"}
                  className={location.pathname.includes("/companies")
                    ? "text-white bg-primary hover:bg-primary/90"
                    : "text-primary hover:text-white hover:bg-primary/90 transition-smooth"
                  }
                >
                  Companies <ChevronDown className="ml-1" size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-80 max-h-96 overflow-y-auto bg-card z-50"
                align="end"
              >
                <div className="p-2">
                  <Link to="/companies">
                    <DropdownMenuItem className="cursor-pointer font-semibold text-primary mb-2">
                      View All Companies →
                    </DropdownMenuItem>
                  </Link>
                  <div className="border-t pt-2">
                    {isLoadingCompanies ? (
                      <div className="py-4 text-center text-sm text-muted-foreground">
                        Loading companies...
                      </div>
                    ) : companies.length === 0 ? (
                      <div className="py-4 text-center text-sm text-muted-foreground">
                        No companies available
                      </div>
                    ) : (
                      companies.map((company) => (
                        <Link key={company.id} to={`/companies/${company.id}`}>
                          <DropdownMenuItem className="cursor-pointer py-3">
                            <div>
                              <div className="font-semibold text-sm">{company.shortName}</div>
                              <div className="text-xs text-muted-foreground">{company.industry}</div>
                            </div>
                          </DropdownMenuItem>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-primary hover:text-primary/70"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(link.path) ? "default" : "ghost"}
                    className={isActive(link.path)
                      ? "w-full justify-start text-white bg-primary hover:bg-primary/90"
                      : "w-full justify-start text-primary hover:text-white hover:bg-primary/90"
                    }
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}

              {/* Mobile Companies Dropdown */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="text-xs text-primary/60 px-3 py-2 font-semibold uppercase">
                  OUR COMPANIES
                </div>
                <Link to="/companies" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-primary hover:text-white hover:bg-primary/90 font-semibold"
                  >
                    View All Companies →
                  </Button>
                </Link>
                {isLoadingCompanies ? (
                  <div className="py-4 text-center text-sm text-muted-foreground">
                    Loading companies...
                  </div>
                ) : companies.length === 0 ? (
                  <div className="py-4 text-center text-sm text-muted-foreground">
                    No companies available
                  </div>
                ) : (
                  companies.map((company) => (
                    <Link
                      key={company.id}
                      to={`/companies/${company.id}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-primary hover:text-white hover:bg-primary/90 text-xs h-auto py-2"
                      >
                        <div className="text-left">
                          <div className="font-semibold">{company.shortName}</div>
                          <div className="text-xs text-primary/60">{company.industry}</div>
                        </div>
                      </Button>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
