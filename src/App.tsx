import { lazy, Suspense, type ReactNode } from 'react';
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/AdminLayout';
import { PageTransition } from './components/PageTransition';
import { RouteLoader } from './components/RouteLoader';
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Companies = lazy(() => import('./pages/Companies'));
const CompanyDetail = lazy(() => import('./pages/CompanyDetail'));
const CamyProducts = lazy(() => import('./pages/CamyProducts'));
const Careers = lazy(() => import('./pages/Careers'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Login = lazy(() => import('./pages/admin/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const CompanyList = lazy(() => import('./pages/admin/CompanyList'));
const CompanyForm = lazy(() => import('./pages/admin/CompanyForm'));
const PasswordReset = lazy(() => import('./pages/admin/PasswordReset'));
const BrandList = lazy(() => import('./pages/admin/BrandList'));
const BrandForm = lazy(() => import('./pages/admin/BrandForm'));
const CategoryList = lazy(() => import('./pages/admin/CategoryList'));
const CategoryForm = lazy(() => import('./pages/admin/CategoryForm'));
const ProductList = lazy(() => import('./pages/admin/ProductList'));
const ProductForm = lazy(() => import('./pages/admin/ProductForm'));
const NewsList = lazy(() => import('./pages/admin/NewsList'));
const NewsForm = lazy(() => import('./pages/admin/NewsForm'));

const queryClient = new QueryClient();
const PublicPage = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen">
    <Navigation />
    <PageTransition>
      <main className="public-content">{children}</main>
      <Footer />
    </PageTransition>
    <CookieConsent />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicPage>
                  <Home />
                </PublicPage>
              }
            />
            <Route
              path="/about"
              element={
                <PublicPage>
                  <About />
                </PublicPage>
              }
            />
            <Route
              path="/companies"
              element={
                <PublicPage>
                  <Companies />
                </PublicPage>
              }
            />
            <Route
              path="/companies/:id"
              element={
                <PublicPage>
                  <CompanyDetail />
                </PublicPage>
              }
            />
            <Route
              path="/camy-products"
              element={
                <PublicPage>
                  <CamyProducts />
                </PublicPage>
              }
            />
            <Route
              path="/careers"
              element={
                <PublicPage>
                  <Careers />
                </PublicPage>
              }
            />
            <Route
              path="/news"
              element={
                <PublicPage>
                  <News />
                </PublicPage>
              }
            />
            <Route
              path="/news/:slug"
              element={
                <PublicPage>
                  <NewsDetail />
                </PublicPage>
              }
            />
            <Route
              path="/contact"
              element={
                <PublicPage>
                  <Contact />
                </PublicPage>
              }
            />
            <Route
              path="/cookie-policy"
              element={
                <PublicPage>
                  <CookiePolicy />
                </PublicPage>
              }
            />
            <Route path="/shop" element={<Navigate to="/camy-products" replace />} />
            <Route path="/shop/:id" element={<Navigate to="/camy-products" replace />} />
            <Route
              path="/admin/login"
              element={
                <PageTransition>
                  <Login />
                </PageTransition>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <PageTransition>
                    <Dashboard />
                  </PageTransition>
                }
              />
              <Route
                path="companies"
                element={
                  <PageTransition>
                    <CompanyList />
                  </PageTransition>
                }
              />
              <Route
                path="companies/new"
                element={
                  <PageTransition>
                    <CompanyForm />
                  </PageTransition>
                }
              />
              <Route
                path="companies/:id/edit"
                element={
                  <PageTransition>
                    <CompanyForm />
                  </PageTransition>
                }
              />
              <Route
                path="brands"
                element={
                  <PageTransition>
                    <BrandList />
                  </PageTransition>
                }
              />
              <Route
                path="brands/new"
                element={
                  <PageTransition>
                    <BrandForm />
                  </PageTransition>
                }
              />
              <Route
                path="brands/:id/edit"
                element={
                  <PageTransition>
                    <BrandForm />
                  </PageTransition>
                }
              />
              <Route
                path="categories"
                element={
                  <PageTransition>
                    <CategoryList />
                  </PageTransition>
                }
              />
              <Route
                path="categories/new"
                element={
                  <PageTransition>
                    <CategoryForm />
                  </PageTransition>
                }
              />
              <Route
                path="categories/:id/edit"
                element={
                  <PageTransition>
                    <CategoryForm />
                  </PageTransition>
                }
              />
              <Route
                path="products"
                element={
                  <PageTransition>
                    <ProductList />
                  </PageTransition>
                }
              />
              <Route
                path="products/new"
                element={
                  <PageTransition>
                    <ProductForm />
                  </PageTransition>
                }
              />
              <Route
                path="products/:id/edit"
                element={
                  <PageTransition>
                    <ProductForm />
                  </PageTransition>
                }
              />
              <Route
                path="news"
                element={
                  <PageTransition>
                    <NewsList />
                  </PageTransition>
                }
              />
              <Route
                path="news/new"
                element={
                  <PageTransition>
                    <NewsForm />
                  </PageTransition>
                }
              />
              <Route
                path="news/:id/edit"
                element={
                  <PageTransition>
                    <NewsForm />
                  </PageTransition>
                }
              />
              <Route
                path="password-reset"
                element={
                  <PageTransition>
                    <PasswordReset />
                  </PageTransition>
                }
              />
            </Route>
            <Route
              path="*"
              element={
                <PublicPage>
                  <NotFound />
                </PublicPage>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
