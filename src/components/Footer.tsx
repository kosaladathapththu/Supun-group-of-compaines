import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/supun-group-of-companies-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const openCookieSettings = () => window.dispatchEvent(new Event("supun:open-cookie-settings"));

  return (
    <footer className="bg-[linear-gradient(135deg,#071b2d_0%,#051524_55%,#020b13_100%)] text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-5 inline-block rounded-lg bg-white p-3">
              <img src={logo} alt="Supun Group of Companies" className="h-14 w-auto" />
            </Link>
            <p className="max-w-xl leading-relaxed text-white/75">
              A family-run Sri Lankan group with roots dating to 1978, operating across manufacturing,
              retail, distribution and hospitality.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href="mailto:info@supungroup.lk" className="flex items-center gap-2 hover:text-accent">
                <Mail size={16} /> info@supungroup.lk
              </a>
              <a href="tel:+94112055026" className="flex items-center gap-2 hover:text-accent">
                <Phone size={16} /> +94 112 055 026
              </a>
              <div className="flex items-center gap-2 text-white/75">
                <MapPin size={16} /> Colombo, Sri Lanka
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg normal-case text-white">Quick Links</h2>
            <ul className="space-y-2 text-white/75">
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/companies" className="hover:text-accent">Our Companies</Link></li>
              <li><Link to="/camy-products" className="hover:text-accent">Camy Products</Link></li>
              <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
              <li><Link to="/news" className="hover:text-accent">News &amp; Media</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg normal-case text-white">Our Vision</h2>
            <p className="text-lg font-semibold text-accent">“Innovate. Unleash and Excel.”</p>
            <p className="mt-4 text-sm text-white/65">Built in Sri Lanka. Built to Last.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-7 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Supun Group of Companies. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            <button type="button" onClick={openCookieSettings} className="hover:text-white">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
