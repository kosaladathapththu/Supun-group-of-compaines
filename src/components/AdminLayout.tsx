import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BriefcaseBusiness, Building2, ExternalLink, Home, Image, Info, KeyRound, LogOut, Mail, Menu, Newspaper, Package, Tags, User as UserIcon, X } from "lucide-react";
import { authAPI, type User } from "@/services/api";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const logo = "/supun-group-of-companies-logo.png";
const adminGroups = [
  {
    label: "Website content",
    items: [
      { path: "/admin/companies", label: "Companies", description: "Company directory", icon: Building2 },
      { path: "/admin/news", label: "News & Media", description: "Published stories", icon: Newspaper },
    ],
  },
  {
    label: "Product catalogue",
    items: [
      { path: "/admin/categories", label: "Categories", description: "Product groupings", icon: Tags },
      { path: "/admin/products", label: "Products", description: "Camy catalogue", icon: Package },
      { path: "/admin/brands", label: "Brand Logos", description: "Brand showcase", icon: Image },
    ],
  },
];

const publicPages = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: Info },
  { path: "/careers", label: "Careers", icon: BriefcaseBusiness },
  { path: "/contact", label: "Contact", icon: Mail },
];

const navItems = adminGroups.flatMap((group) => group.items);

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const storedUser = localStorage.getItem("admin_user");
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);
  const currentSection = navItems.find((item) => isActive(item.path));

  const handleLogout = () => {
    authAPI.logout();
    navigate("/admin/login");
  };

  const closeMobileSidebar = () => setIsSidebarOpen(false);
  const sidebarContent = (
    <>
      <div className="border-b border-white/10 px-5 py-5">
        <Link to="/admin" className="flex items-center gap-3" onClick={closeMobileSidebar}>
          <span className="rounded-xl bg-white p-2 shadow-lg"><img src={logo} alt="Supun Group" className="h-10 w-auto" /></span>
          <span><strong className="block text-sm text-white">Supun Group</strong><small className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#efbd55]">Content Manager</small></span>
        </Link>
      </div>
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5" aria-label="Admin navigation">
        {adminGroups.map((group) => (
          <div key={group.label}>
            <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">{group.label}</p>
            <div className="space-y-1.5">
              {group.items.map(({ path, label, description, icon: Icon }) => (
                <Link key={path} to={path} onClick={closeMobileSidebar} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition ${isActive(path) ? "bg-white text-[#071b2d] shadow-lg" : "text-white/65 hover:bg-white/10 hover:text-white"}`}>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${isActive(path) ? "bg-[#eef5e9] text-[#5c9c30]" : "bg-white/10"}`}><Icon size={18} /></span>
                  <span className="min-w-0"><strong className="block text-sm">{label}</strong><small className={`block truncate text-[11px] ${isActive(path) ? "text-[#617084]" : "text-white/35"}`}>{description}</small></span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Preview frontend</p>
          <div className="grid grid-cols-2 gap-1.5 px-1">
            {publicPages.map(({ path, label, icon: Icon }) => (
              <Link key={path} to={path} target="_blank" onClick={closeMobileSidebar} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs text-white/55 transition hover:bg-white/10 hover:text-white">
                <Icon size={14} />{label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="border-t border-white/10 p-4">
        <Link to="/" target="_blank" className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-xs font-semibold text-white/65 transition hover:text-white">View public website <ExternalLink size={15} /></Link>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f3f6f8] text-[#10233f]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col bg-[linear-gradient(180deg,#071b2d,#0b3153)] lg:flex">{sidebarContent}</aside>
      {isSidebarOpen && <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-black/45 backdrop-blur-sm" onClick={closeMobileSidebar} aria-label="Close navigation" /><aside className="relative flex h-full w-[min(18rem,88vw)] flex-col bg-[linear-gradient(180deg,#071b2d,#0b3153)] shadow-2xl"><button onClick={closeMobileSidebar} className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white" aria-label="Close navigation"><X size={19} /></button>{sidebarContent}</aside></div>}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-[#10233f]/10 bg-white/90 backdrop-blur-xl">
          <div className="flex min-h-[76px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3"><Button variant="outline" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}><Menu size={20} /></Button><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a66d0d]">Admin workspace</p><h1 className="text-xl font-semibold normal-case text-[#071b2d]">{currentSection?.label || "Account settings"}</h1></div></div>
            <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" className="h-11 gap-3 rounded-full bg-white px-3 sm:pr-5"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#071b2d] text-white"><UserIcon size={14} /></span><span className="hidden text-left sm:block"><strong className="block text-xs">{user?.username || "Admin"}</strong><small className="block text-[10px] text-muted-foreground">Administrator</small></span></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="w-60"><DropdownMenuLabel><p className="text-sm font-medium">{user?.username || "Admin"}</p><p className="text-xs font-normal text-muted-foreground">{user?.email || "admin@supungroup.lk"}</p></DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem asChild><Link to="/admin/password-reset" className="cursor-pointer"><KeyRound className="mr-2 h-4 w-4" />Change password</Link></DropdownMenuItem><DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 focus:text-red-600"><LogOut className="mr-2 h-4 w-4" />Log out</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
          </div>
        </header>
        <main className="mx-auto w-full max-w-[1600px] px-4 py-7 sm:px-6 lg:px-8 lg:py-9"><Outlet /></main>
      </div>
    </div>
  );
}
