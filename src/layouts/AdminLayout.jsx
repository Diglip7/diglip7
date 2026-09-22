import React, { useState, useContext } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  ExternalLink,
  LogOut,
  Menu,
  X,
  User,
  Globe,
  Plus,
  ChevronRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Command,
  HelpCircle,
  Bell,
  CheckCircle2,
  Settings,
  Briefcase,
  Layers,
  Search,
  Rocket,
} from "lucide-react";
import projectLogo from "../images/logo1.jpeg";

const AdminLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const navItems = [
    {
      label: "Dashboard",
      path: "/admin",
      exact: true,
      icon: LayoutDashboard,
      section: "main",
    },
    {
      label: "Contact Inquiries",
      path: "/admin/getcontact",
      exact: false,
      icon: MessageSquare,
      section: "management",
    },
    {
      label: "Blog & CMS",
      path: "/admin/blog",
      exact: false,
      icon: FileText,
      section: "management",
    },
  ];

  const isNavActive = (item) => {
    if (item.exact) {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-slate-800 font-sans antialiased flex flex-col lg:flex-row selection:bg-teal-500 selection:text-white">
      {/* ================= DARK EXECUTIVE DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:flex flex-col justify-between shrink-0 w-64 xl:w-72 bg-[#0B1320] text-slate-300 border-r border-slate-800/80 shadow-xl z-40 relative">
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Brand Header */}
            <div className="p-6 border-b border-slate-800/60">
              <Link to="/admin" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 p-1 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src={projectLogo}
                    alt="DigLip7"
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<span class="font-black text-teal-400 text-base">D7</span>';
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-lg tracking-tight text-white group-hover:text-teal-400 transition">
                      DigLip<span className="text-teal-400">7</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium truncate">
                    Digital Growth Partner
                  </p>
                </div>
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="p-4 space-y-5">
              {/* Dashboard Link */}
              <div>
                <Link
                  to="/admin"
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    location.pathname === "/admin"
                      ? "bg-[#0D8B7A] text-white shadow-md shadow-teal-900/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
              </div>

              {/* Management Section */}
              <div className="space-y-1.5">
                <div className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                  Management
                </div>

                <Link
                  to="/admin/getcontact"
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    location.pathname.includes("getcontact")
                      ? "bg-[#0D8B7A] text-white shadow-md shadow-teal-900/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Inquiries</span>
                </Link>

                <Link
                  to="/admin/blogs"
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    location.pathname === "/admin/blogs"
                      ? "bg-[#0D8B7A] text-white shadow-md shadow-teal-900/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>All Articles & Drafts</span>
                </Link>

                <Link
                  to="/admin/blog"
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    location.pathname === "/admin/blog"
                      ? "bg-[#0D8B7A] text-white shadow-md shadow-teal-900/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Blog Studio</span>
                </Link>
              </div>

              {/* Quick Links Section */}
              <div className="space-y-1.5 pt-2">
                <div className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                  Quick Links
                </div>

                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-teal-400 hover:bg-slate-800/60 transition group"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-slate-500 group-hover:text-teal-400" />
                    <span>View Website</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-teal-400" />
                </a>
                <a
                  href="/blog"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-teal-400 hover:bg-slate-800/60 transition group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-slate-500 group-hover:text-teal-400" />
                    <span>Public Blog</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-teal-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Sidebar Promo Card & User Badge */}
          <div className="p-4 space-y-3">
            {/* Promotional Card */}
            <div className="rounded-2xl bg-gradient-to-b from-[#0e2137] to-[#081524] p-4 border border-teal-900/40 relative overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center mb-2.5">
                <Rocket className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-white leading-tight">
                Grow Faster with DigLip7
              </h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                Digital marketing, web engineering, SEO, and ROI growth in one place.
              </p>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-400 hover:text-teal-300"
              >
                <span>Visit Website &rarr;</span>
              </a>
            </div>

            {/* User Session Bar */}
            <div className="flex items-center justify-between bg-slate-900/80 rounded-xl p-2.5 border border-slate-800">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-teal-700 text-white font-bold flex items-center justify-center text-xs shrink-0">
                  {user?.name ? user.name[0].toUpperCase() : "A"}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">
                    {user?.name || "Admin User"}
                  </p>
                  <p className="text-[10px] text-slate-400 truncate">Administrator</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                title="Sign Out"
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-900/20 transition cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div className="lg:hidden sticky top-0 z-50 bg-[#0B1320] text-white px-4 py-3 flex items-center justify-between shadow-md border-b border-slate-800">
        <Link to="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 p-1 flex items-center justify-center shrink-0">
            <img
              src={projectLogo}
              alt="DigLip7"
              className="w-full h-full object-contain rounded-md"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<span class="font-black text-teal-400 text-sm">D7</span>';
              }}
            />
          </div>
          <span className="font-black text-lg tracking-tight text-white">
            DigLip<span className="text-teal-400">7</span>
          </span>
        </Link>
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileNavOpen ? <X className="w-5 h-5 text-teal-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Fixed Overlay */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 z-50 bg-[#0B1320]/95 backdrop-blur-md text-slate-300 p-5 overflow-y-auto space-y-4 border-b border-slate-800 animate-in fade-in slide-in-from-top-3">
          <div className="space-y-1.5">
            <div className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
              Navigation
            </div>
            <Link
              to="/admin"
              onClick={() => setMobileNavOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
                location.pathname === "/admin"
                  ? "bg-[#0D8B7A] text-white shadow-md shadow-teal-900/30"
                  : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/admin/getcontact"
              onClick={() => setMobileNavOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
                location.pathname.includes("getcontact")
                  ? "bg-[#0D8B7A] text-white shadow-md shadow-teal-900/30"
                  : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Inquiries</span>
            </Link>

            <Link
              to="/admin/blogs"
              onClick={() => setMobileNavOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
                location.pathname === "/admin/blogs"
                  ? "bg-[#0D8B7A] text-white shadow-md shadow-teal-900/30"
                  : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>All Articles & Drafts</span>
            </Link>

            <Link
              to="/admin/blog"
              onClick={() => setMobileNavOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
                location.pathname === "/admin/blog"
                  ? "bg-[#0D8B7A] text-white shadow-md shadow-teal-900/30"
                  : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Blog Studio</span>
            </Link>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            <div className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
              Quick Links
            </div>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-teal-400 hover:bg-slate-800/60 transition"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-slate-500" />
                <span>View Website</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>

            <a
              href="/blog"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-teal-400 hover:bg-slate-800/60 transition"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Public Blog</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-900/20 transition cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= MAIN CONTENT VIEWPORT ================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Clean Top Application Bar matching screenshot */}
        <header className="hidden lg:flex items-center justify-between bg-white border-b border-slate-200/80 px-8 py-3.5 shrink-0">
          {/* Search Box */}
          <div className="relative w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search inquiries, services, or names..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>

          {/* Right Header Badges */}
          <div className="flex items-center gap-4">
            <div className="relative p-2 rounded-full hover:bg-slate-100 text-slate-500 transition cursor-pointer">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500" />
            </div>

            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white font-bold flex items-center justify-center text-xs">
                {user?.name ? user.name[0].toUpperCase() : "A"}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{user?.name || "Admin User"}</p>
                <p className="text-[10px] text-slate-400">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Outlet */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
