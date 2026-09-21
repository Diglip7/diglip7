import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  Loader2,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  CheckCircle2,
  Globe,
  Headphones,
  FileCheck,
} from "lucide-react";
import projectLogo from "../../images/logo1.jpeg";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/admin/login`, {
        email: email.trim(),
        password,
      });

      if (res.data?.token) {
        login(res.data.token);
        navigate("/admin");
      } else {
        setErrorMessage("Unexpected response from server. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      const msg =
        err.response?.data?.message ||
        "Invalid credentials. Please verify your administrator email and password.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-10 font-sans relative overflow-hidden">
      {/* Soft Ambient Light Gradient Mesh */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-100/60 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      {/* Main Split-Screen Container Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* ================= LEFT COLUMN: BRAND & VALUE SHOWCASE (5 COLS) ================= */}
        <div className="lg:col-span-5 bg-gradient-to-br from-teal-900 via-teal-950 to-slate-900 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          {/* Top Brand Tag */}
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-2 flex items-center justify-center shadow-lg">
                <img
                  src={projectLogo}
                  alt="DigLip7"
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<span class="font-black text-teal-300 text-lg">D7</span>';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl tracking-tight text-white">
                    DigLip<span className="text-teal-400">7</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full border border-teal-400/30">
                    Console
                  </span>
                </div>
                <p className="text-xs text-teal-200/70">Enterprise Operations Platform</p>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                Powering Digital Growth & Management
              </h2>
              <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal">
                Access incoming consultation leads, publish agency blogs, and supervise all digital operations from a unified workspace.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Real-Time Lead Ingestion</p>
                  <p className="text-[11px] text-teal-200/70">Instant capture of web consultations</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Editorial & CMS Suite</p>
                  <p className="text-[11px] text-teal-200/70">Draft, format, and index articles</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Encrypted RBAC Security</p>
                  <p className="text-[11px] text-teal-200/70">JWT Token-secured administration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Info */}
          <div className="relative z-10 pt-6 border-t border-teal-800/60 flex items-center justify-between text-[11px] text-teal-200/60">
            <span>DigLip7 Operations Suite</span>
            <span className="font-mono">v3.0 Production</span>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: LUXURY AUTHENTICATION FORM (7 COLS) ================= */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
          <div className="space-y-6 max-w-md mx-auto w-full">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Executive Login</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Welcome back
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Enter your authorized credentials to access mission control
              </p>
            </div>

            {/* Error Notification */}
            {errorMessage && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-xs text-rose-800 animate-shake">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="leading-snug font-medium">{errorMessage}</div>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Administrator Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="admin@diglip7.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition shadow-2xs"
                    required
                    autoFocus
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Master Password
                  </label>
                  <span className="text-[11px] text-slate-400 font-medium">Encrypted Session</span>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition shadow-2xs"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-2 text-slate-400 hover:text-slate-700 absolute right-3 top-1/2 -translate-y-1/2 rounded-xl transition cursor-pointer"
                    tabIndex={-1}
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 flex items-center justify-center gap-2 py-4 px-6 bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-bold text-sm rounded-2xl shadow-lg shadow-teal-900/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Validating Session...</span>
                  </>
                ) : (
                  <>
                    <span>Enter Mission Control</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer Back Link */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-semibold text-teal-800 hover:text-teal-950 hover:underline transition"
            >
              <span>&larr; Return to Public Website</span>
            </Link>
            <span className="hidden sm:inline">DigLip7 Systems</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;


