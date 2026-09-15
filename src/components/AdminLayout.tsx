import { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { authAPI, type User } from '@/services/api';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Building2, Image, KeyRound, LogOut, Menu, Newspaper, Package, Tags, User as UserIcon, X } from 'lucide-react';
const logo = '/supun-group-of-companies-logo.png';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userString = localStorage.getItem('admin_user');
  const user: User | null = userString ? JSON.parse(userString) : null;

  const handleLogout = () => { authAPI.logout(); navigate('/admin/login'); };
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');
  const navItems = [
    { path: '/admin/companies', label: 'Companies', icon: Building2 },
    { path: '/admin/brands', label: 'Brand Logos', icon: Image },
    { path: '/admin/categories', label: 'Categories', icon: Tags },
    { path: '/admin/products', label: 'Products', icon: Package },
    { path: '/admin/news', label: 'News', icon: Newspaper },
  ];

  return <div className="min-h-screen bg-gray-50">
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>{isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button>
          <Link to="/admin/companies" className="flex items-center space-x-2"><img src={logo} alt="Supun Group" className="h-8" /><span className="hidden text-lg font-semibold sm:inline">Admin Panel</span></Link>
        </div>
        <nav className="hidden items-center space-x-1 md:flex">{navItems.map((item) => { const Icon = item.icon; return <Link key={item.path} to={item.path}><Button variant={isActive(item.path) ? 'default' : 'ghost'} className="flex items-center space-x-2"><Icon className="h-4 w-4" /><span>{item.label}</span></Button></Link>; })}</nav>
        <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="rounded-full"><UserIcon className="h-5 w-5" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="w-56"><DropdownMenuLabel><div className="flex flex-col space-y-1"><p className="text-sm font-medium">{user?.username || 'Admin'}</p><p className="text-xs text-muted-foreground">{user?.email || 'admin@supun.com'}</p></div></DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem asChild><Link to="/admin/password-reset" className="flex cursor-pointer items-center"><KeyRound className="mr-2 h-4 w-4" /><span>Change Password</span></Link></DropdownMenuItem><DropdownMenuItem onClick={handleLogout}><LogOut className="mr-2 h-4 w-4" /><span>Log out</span></DropdownMenuItem></DropdownMenuContent></DropdownMenu>
      </div>
      {isSidebarOpen && <div className="border-t border-gray-200 bg-white md:hidden"><nav className="space-y-1 px-4 py-2">{navItems.map((item) => { const Icon = item.icon; return <Link key={item.path} to={item.path} onClick={() => setIsSidebarOpen(false)}><Button variant={isActive(item.path) ? 'default' : 'ghost'} className="w-full justify-start"><Icon className="mr-2 h-4 w-4" /><span>{item.label}</span></Button></Link>; })}</nav></div>}
    </header>
    <main className="container mx-auto px-4 py-8"><Outlet /></main>
  </div>;
}
