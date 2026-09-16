import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Loader2, Lock, ShieldCheck, User } from "lucide-react";
import { authAPI, getErrorMessage, type LoginCredentials } from "@/services/api";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Seo from "@/components/Seo";
import "./Admin.css";

const logo = "/supun-group-of-companies-logo.png";
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (credentials: LoginCredentials) => {
    setError("");
    setIsLoading(true);
    try {
      const response = await authAPI.login(credentials);
      localStorage.setItem("admin_token", response.token);
      localStorage.setItem("admin_user", JSON.stringify(response.user));
      navigate("/admin");
    } catch (loginError) {
      setError(getErrorMessage(loginError));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#eef2f4] p-4 sm:p-7 lg:p-10">
      <Seo title="Admin Login | Supun Group of Companies" noindex />
      <div className="admin-login-shell mx-auto min-h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_90px_rgba(7,27,45,0.18)] sm:min-h-[calc(100vh-3.5rem)]">
        <section className="relative hidden overflow-hidden bg-[linear-gradient(145deg,#061927,#0b3153)] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-28 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-12 -top-8 h-48 w-48 rounded-full border border-[#efbd55]/20" />
          <div className="relative inline-flex w-fit items-center rounded-2xl bg-white p-3 shadow-xl">
            <img src={logo} alt="Supun Group of Companies" className="h-14 w-auto" />
          </div>
          <div className="relative max-w-lg space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#efbd55]">Content management workspace</p>
            <h1 className="text-5xl font-semibold leading-[1.08]">Manage the Group website with clarity.</h1>
            <p className="max-w-md text-lg leading-8 text-white/60">Keep company profiles, brands, products, categories, and news current from one secure workspace.</p>
            <div className="grid grid-cols-2 gap-3 pt-3">
              {["Database-backed content", "Secure administrator access"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                  <CheckCircle2 size={17} className="shrink-0 text-[#91c865]" />{item}
                </div>
              ))}
            </div>
          </div>
          <p className="relative text-xs text-white/35">Supun Group of Companies · Administration portal</p>
        </section>

        <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:hidden"><img src={logo} alt="Supun Group of Companies" className="h-16 w-auto" /></div>
            <div className="mb-8">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#eaf2e5] text-[#4f8d2c]"><ShieldCheck size={24} /></span>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a66d0d]">Secure administration</p>
              <h2 className="text-3xl font-semibold text-[#071b2d]">Welcome back</h2>
              <p className="mt-3 leading-7 text-[#647386]">Sign in with your administrator credentials to continue.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-[#10233f]">Username</Label>
                <div className="relative"><User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#78879a]" /><Input id="username" autoComplete="username" placeholder="Enter your username" className="h-12 rounded-xl border-[#d9e0e6] pl-11" {...register("username")} disabled={isLoading} /></div>
                {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#10233f]">Password</Label>
                <div className="relative"><Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#78879a]" /><Input id="password" type="password" autoComplete="current-password" placeholder="Enter your password" className="h-12 rounded-xl border-[#d9e0e6] pl-11" {...register("password")} disabled={isLoading} /></div>
                {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
              </div>
              <Button type="submit" className="h-12 w-full rounded-xl bg-[#071b2d] text-white hover:bg-[#0b3153]" disabled={isLoading}>
                {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Signing in...</> : <>Sign in to dashboard <ArrowRight className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
            <p className="mt-8 flex items-center gap-2 text-xs leading-5 text-[#8490a0]"><Lock size={13} />Access is restricted to authorized Supun Group administrators.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
