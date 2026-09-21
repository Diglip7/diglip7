import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FileText,
  FileEdit,
  Trash2,
  Search,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  X,
  Plus,
  Globe,
  LayoutGrid,
  List as ListIcon,
  User,
  BookOpen,
  Info,
  Calendar,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export const generateSlug = (text = "") => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default function BlogList() {
  const navigate = useNavigate();

  // Data Collections
  const [drafts, setDrafts] = useState([]);
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [filteredDrafts, setFilteredDrafts] = useState([]);
  const [filteredPublishedBlogs, setFilteredPublishedBlogs] = useState([]);

  // UI State
  const [activeTab, setActiveTab] = useState("published"); // "published" | "drafts" | "all"
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Modals & Alerts
  const [toasts, setToasts] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);

  const categories = [
    "Digital Marketing",
    "SEO & Search Optimization",
    "Web & App Development",
    "Social Media & Meta Ads",
    "UI/UX Design & Branding",
    "Tech & AI Innovation",
    "Strategy & Growth",
  ];

  // Load articles on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [draftsRes, publishedRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/getdraft`).catch(() => ({ data: [] })),
        axios.get(`${import.meta.env.VITE_API_URL}/publishedblogs`).catch(() => ({ data: [] })),
      ]);

      const dData = Array.isArray(draftsRes.data) ? draftsRes.data : [];
      const pData = Array.isArray(publishedRes.data) ? publishedRes.data : [];

      setDrafts(dData);
      setPublishedBlogs(pData);
    } catch (err) {
      console.error("Failed to load blog collections:", err);
      showToast("Error loading articles", "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Filter drafts and published items by query & category
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();

    const matchesFilter = (item) => {
      const matchQuery =
        !query ||
        (item.title || "").toLowerCase().includes(query) ||
        (item.category || "").toLowerCase().includes(query) ||
        (item.author || "").toLowerCase().includes(query);

      const matchCat =
        selectedCategoryFilter === "All" ||
        item.category === selectedCategoryFilter;

      return matchQuery && matchCat;
    };

    setFilteredDrafts(drafts.filter(matchesFilter));
    setFilteredPublishedBlogs(publishedBlogs.filter(matchesFilter));
  }, [drafts, publishedBlogs, searchQuery, selectedCategoryFilter]);

  // Toast notifications
  const showToast = (message, type = "success") => {
    const id = Date.now().toString();
    const newToast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Delete confirmations
  const openConfirmModal = (type, id, title) => {
    setConfirmAction({ type, id, title });
    setShowConfirmModal(true);
  };

  const handleConfirmAction = async () => {
    if (!confirmAction) return;

    try {
      if (confirmAction.type === "draft") {
        await axios.delete(`${import.meta.env.VITE_API_URL}/deletedraft/${confirmAction.id}`);
        showToast("Draft deleted successfully!", "success");
        setDrafts((prev) => prev.filter((d) => d._id !== confirmAction.id));
      } else {
        await axios.delete(`${import.meta.env.VITE_API_URL}/deletePublishedBlog/${confirmAction.id}`);
        showToast("Published article deleted successfully!", "success");
        setPublishedBlogs((prev) => prev.filter((b) => b._id !== confirmAction.id));
      }
    } catch (err) {
      console.error("Delete failed:", err);
      showToast("Failed to delete article", "error");
    } finally {
      setShowConfirmModal(false);
      setConfirmAction(null);
    }
  };

  // Helper to extract cover image from item or content
  const getCardImage = (item) => {
    if (item.coverImage && item.coverImage.trim()) return item.coverImage;
    if (!item.content) return null;
    const match = item.content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  // Category styling
  const getCategoryTheme = (cat = "") => {
    const map = {
      "Digital Marketing": "from-teal-600 to-emerald-600 text-teal-700 bg-teal-50 border-teal-200",
      "SEO & Search Optimization": "from-blue-600 to-indigo-600 text-blue-700 bg-blue-50 border-blue-200",
      "Web & App Development": "from-purple-600 to-violet-600 text-purple-700 bg-purple-50 border-purple-200",
      "Social Media & Meta Ads": "from-rose-600 to-pink-600 text-rose-700 bg-rose-50 border-rose-200",
      "UI/UX Design & Branding": "from-amber-600 to-orange-600 text-amber-800 bg-amber-50 border-amber-200",
      "Tech & AI Innovation": "from-cyan-600 to-teal-600 text-cyan-800 bg-cyan-50 border-cyan-200",
      "Strategy & Growth": "from-emerald-600 to-green-600 text-emerald-800 bg-emerald-50 border-emerald-200",
    };
    return map[cat] || "from-teal-600 to-slate-700 text-teal-700 bg-teal-50 border-teal-200";
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-20 font-sans text-slate-800 max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* ================= FLOATING TOASTS ================= */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-2xl shadow-2xl flex items-start justify-between gap-3 text-white text-xs sm:text-sm font-medium pointer-events-auto backdrop-blur-md transition-all duration-300 animate-in slide-in-from-top-2 ${
              toast.type === "success"
                ? "bg-slate-900/95 border border-teal-500/50 shadow-teal-900/20"
                : toast.type === "error"
                ? "bg-slate-900/95 border border-rose-500/50 shadow-rose-900/20"
                : "bg-slate-900/95 border border-amber-500/50 shadow-amber-900/20"
            }`}
          >
            <div className="flex items-start gap-2.5">
              {toast.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              ) : toast.type === "error" ? (
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              ) : (
                <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              )}
              <span className="leading-snug text-slate-100">{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 hover:text-slate-300 transition shrink-0 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* ================= CONFIRMATION MODAL ================= */}
      {showConfirmModal && confirmAction && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-md w-full border border-slate-100 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Confirm Permanent Deletion</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Are you sure you want to permanently delete{" "}
                <strong className="text-slate-900 font-bold">"{confirmAction.title}"</strong>?
                This action cannot be undone.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  setConfirmAction(null);
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition shadow-md shadow-rose-600/20 cursor-pointer"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= HERO COMMAND BAR ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-teal-500/20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-500/20 text-teal-300 border border-teal-400/30">
                <Layers className="w-3.5 h-3.5 text-teal-300" />
                Article Management & Repository
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-white/10 text-slate-300 border border-white/10">
                <Globe className="w-3 h-3 text-emerald-400" />
                Live Content Hub
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Published & Draft Articles
            </h1>
            <p className="text-xs sm:text-sm text-teal-100/80 max-w-2xl leading-relaxed">
              Manage your complete article repository. Browse live posts, review unfinished drafts, preview SEO covers, and launch into the editor studio.
            </p>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 pt-1 flex-wrap text-xs">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300">Live Published:</span>
                <span className="font-extrabold text-white text-sm">{publishedBlogs.length}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-slate-300">Saved Drafts:</span>
                <span className="font-extrabold text-white text-sm">{drafts.length}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition backdrop-blur-md cursor-pointer hover:shadow-lg"
            >
              <Globe className="w-4 h-4 text-teal-300" />
              <span>View Public Blog</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={() => navigate("/admin/blog")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 text-xs font-black transition shadow-lg shadow-teal-500/20 cursor-pointer active:scale-95"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Create New Article</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= REPOSITORY CONTROLS & LISTINGS ================= */}
      <div className="rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-7 shadow-xs space-y-6">
        {/* Top Control Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 w-fit">
            <button
              onClick={() => setActiveTab("published")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === "published"
                  ? "bg-white text-slate-900 shadow-xs ring-1 ring-slate-200/60 font-extrabold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileText className="w-4 h-4 text-teal-600" />
              <span>Published Articles</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-extrabold bg-teal-50 text-teal-800 border border-teal-200">
                {publishedBlogs.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("drafts")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === "drafts"
                  ? "bg-white text-slate-900 shadow-xs ring-1 ring-slate-200/60 font-extrabold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileEdit className="w-4 h-4 text-amber-500" />
              <span>Saved Drafts</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-extrabold bg-amber-50 text-amber-800 border border-amber-200">
                {drafts.length}
              </span>
            </button>
          </div>

          {/* Search, Filter & View Mode */}
          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            {/* Category Filter */}
            <div className="relative min-w-[160px]">
              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="w-full pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white cursor-pointer"
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition"
              />
            </div>

            {/* Grid/List View Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition cursor-pointer ${
                  viewMode === "grid" ? "bg-white text-teal-800 shadow-2xs" : "text-slate-400 hover:text-slate-700"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg transition cursor-pointer ${
                  viewMode === "list" ? "bg-white text-teal-800 shadow-2xs" : "text-slate-400 hover:text-slate-700"
                }`}
                title="List View"
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= ARTICLES CARDS / TABLE DISPLAY ================= */}
        {isLoading ? (
          <div className="py-20 text-center text-slate-400 space-y-2">
            <div className="w-8 h-8 border-3 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-semibold text-slate-500">Loading articles...</p>
          </div>
        ) : activeTab === "published" ? (
          <div>
            {filteredPublishedBlogs.length === 0 ? (
              <div className="py-16 text-center text-slate-400 space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 mx-auto flex items-center justify-center border border-teal-100">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">No Published Articles Found</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {searchQuery ? "Try refining your search keyword." : "Articles you publish live will appear here."}
                  </p>
                </div>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredPublishedBlogs.map((blog) => {
                  const cardImg = getCardImage(blog);
                  const theme = getCategoryTheme(blog.category);
                  const blogSlug = blog.slug || generateSlug(blog.title) || blog._id;

                  return (
                    <div
                      key={blog._id}
                      className="group rounded-2xl border border-slate-200/90 bg-white hover:border-teal-400/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                    >
                      {/* Top Visual Cover Image */}
                      <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                        {cardImg ? (
                          <img
                            src={cardImg}
                            alt={blog.title || "Blog Article"}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${theme.split(" ")[0]} ${theme.split(" ")[1]} flex flex-col items-center justify-center text-white/90 p-4 text-center`}>
                            <Globe className="w-8 h-8 opacity-40 mb-1" />
                            <span className="text-[11px] font-extrabold uppercase tracking-widest opacity-70">
                              {blog.category || "Article"}
                            </span>
                          </div>
                        )}

                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-emerald-600 text-white shadow-md flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Live on Site
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-md">
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${theme.split(" ").slice(2).join(" ")}`}>
                              {blog.category || "Digital Marketing"}
                            </span>
                            <a
                              href={`/blog/${blogSlug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-teal-700 transition"
                              title="View live post on site"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>

                          <h4 className="font-extrabold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-teal-800 transition">
                            {blog.title || "Untitled Article"}
                          </h4>

                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                            {blog.content
                              ? blog.content.replace(/<[^>]+>/g, "").slice(0, 110) + "..."
                              : "No text preview content."}
                          </p>
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                            <span className="truncate max-w-[100px]">{blog.author || "Editorial"}</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => navigate(`/admin/blog?id=${blog._id}&type=published`)}
                              className="px-3.5 py-1.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1 shadow-xs"
                            >
                              <FileEdit className="w-3 h-3 text-teal-300" />
                              <span>Edit in Studio</span>
                            </button>
                            <button
                              onClick={() => openConfirmModal("published", blog._id, blog.title || "Untitled Article")}
                              className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                              title="Delete Published Article"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Tabular View */
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-4">Article</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Author</th>
                      <th className="py-3 px-4">Published Date</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredPublishedBlogs.map((blog) => {
                      const cardImg = getCardImage(blog);
                      const blogSlug = blog.slug || generateSlug(blog.title) || blog._id;

                      return (
                        <tr key={blog._id} className="hover:bg-teal-50/30 transition bg-white">
                          <td className="py-3 px-4 flex items-center gap-3">
                            <div className="w-12 h-10 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                              {cardImg ? (
                                <img src={cardImg} alt="" className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full bg-teal-100 flex items-center justify-center text-teal-600">
                                  <Globe className="w-4 h-4" />
                                </div>
                              )}
                            </div>
                            <span className="font-bold text-slate-900 truncate max-w-xs">
                              {blog.title || "Untitled Article"}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                              {blog.category || "General"}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-600">{blog.author || "Editorial"}</td>
                          <td className="py-3 px-4 text-slate-400">{new Date(blog.createdAt).toLocaleDateString()}</td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <a
                                href={`/blog/${blogSlug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-lg text-slate-400 hover:text-teal-700 cursor-pointer"
                                title="View Live"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                              <button
                                onClick={() => navigate(`/admin/blog?id=${blog._id}&type=published`)}
                                className="px-3 py-1 rounded-lg bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs cursor-pointer"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => openConfirmModal("published", blog._id, blog.title || "Untitled Article")}
                                className="p-1 rounded-lg text-slate-400 hover:text-rose-600 cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          /* Drafts Tab */
          <div>
            {filteredDrafts.length === 0 ? (
              <div className="py-16 text-center text-slate-400 space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 mx-auto flex items-center justify-center border border-amber-100">
                  <FileEdit className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">No Saved Drafts Found</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {searchQuery ? "Try refining your search keyword." : "Articles you save as draft will be organized here."}
                  </p>
                </div>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredDrafts.map((draft) => {
                  const cardImg = getCardImage(draft);
                  const theme = getCategoryTheme(draft.category);

                  return (
                    <div
                      key={draft._id}
                      className="group rounded-2xl border border-slate-200/90 bg-white hover:border-amber-400/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                    >
                      {/* Top Visual Cover Image */}
                      <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                        {cardImg ? (
                          <img
                            src={cardImg}
                            alt={draft.title || "Draft"}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${theme.split(" ")[0]} ${theme.split(" ")[1]} flex flex-col items-center justify-center text-white/90 p-4 text-center`}>
                            <BookOpen className="w-8 h-8 opacity-40 mb-1" />
                            <span className="text-[11px] font-extrabold uppercase tracking-widest opacity-70">
                              {draft.category || "Article"}
                            </span>
                          </div>
                        )}

                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-amber-500 text-white shadow-md">
                            Draft
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-md">
                            {new Date(draft.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${theme.split(" ").slice(2).join(" ")}`}>
                            {draft.category || "Digital Marketing"}
                          </span>

                          <h4 className="font-extrabold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-amber-800 transition">
                            {draft.title || "Untitled Draft"}
                          </h4>

                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                            {draft.content
                              ? draft.content.replace(/<[^>]+>/g, "").slice(0, 110) + "..."
                              : "No text preview content."}
                          </p>
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                            <span className="truncate max-w-[100px]">{draft.author || "Editorial"}</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => navigate(`/admin/blog?id=${draft._id}&type=draft`)}
                              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-teal-900 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1 shadow-xs"
                            >
                              <FileEdit className="w-3 h-3 text-amber-400" />
                              <span>Load in Studio</span>
                            </button>
                            <button
                              onClick={() => openConfirmModal("draft", draft._id, draft.title || "Untitled Draft")}
                              className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                              title="Delete Draft"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Tabular View */
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-4">Article</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Author</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredDrafts.map((draft) => {
                      const cardImg = getCardImage(draft);

                      return (
                        <tr key={draft._id} className="hover:bg-amber-50/30 transition bg-white">
                          <td className="py-3 px-4 flex items-center gap-3">
                            <div className="w-12 h-10 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                              {cardImg ? (
                                <img src={cardImg} alt="" className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                  <FileEdit className="w-4 h-4" />
                                </div>
                              )}
                            </div>
                            <span className="font-bold text-slate-900 truncate max-w-xs">
                              {draft.title || "Untitled Draft"}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                              {draft.category || "General"}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-600">{draft.author || "Editorial"}</td>
                          <td className="py-3 px-4 text-slate-400">{new Date(draft.createdAt).toLocaleDateString()}</td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => navigate(`/admin/blog?id=${draft._id}&type=draft`)}
                                className="px-3 py-1 rounded-lg bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs cursor-pointer"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => openConfirmModal("draft", draft._id, draft.title || "Untitled Draft")}
                                className="p-1 rounded-lg text-slate-400 hover:text-rose-600 cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
