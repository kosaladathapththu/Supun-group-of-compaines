import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/supun-group-of-companies-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="bg-white px-5 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-block">
                <img 
                  src={logo} 
                  alt="Supun Group of Companies" 
                  className="h-14 w-auto"
                />
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-4">
              A diversified Sri Lankan conglomerate with expertise in manufacturing,
              retail, hospitality, and technology. Established in 1999.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:info@supungroup.lk"
                className="flex items-center space-x-2 hover:text-accent transition-smooth"
              >
                <Mail size={16} />
                <span>info@supungroup.lk</span>
              </a>
              <a
                href="tel:+94112055026"
                className="flex items-center space-x-2 hover:text-accent transition-smooth"
              >
                <Phone size={16} />
                <span>+94 112 055 026</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/companies" className="hover:text-accent transition-smooth">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Vision */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Vision</h4>
            <p className="text-primary-foreground/80 text-sm italic">
              "Innovate. Unleash and Excel"
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Supun Group of Companies. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            Developed by{" "}
            <a
              href="https://zenax.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium underline decoration-accent/50 hover:decoration-accent"
            >
              ZENAX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
