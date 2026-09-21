import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SEO from "../components/SEO";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  Sparkles,
  BookOpen,
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

export default function BlogView() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/publishedblogs`);
        const fetched = Array.isArray(res.data) ? res.data : [];
        setBlogs(fetched);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const categories = [
    "All",
    "Digital Marketing",
    "SEO & Search Optimization",
    "Web & App Development",
    "Social Media & Meta Ads",
    "UI/UX Design & Branding",
    "Strategy & Growth",
  ];

  // Helper to extract clean plain text preview
  const getPreviewContent = (content = "") => {
    if (typeof window === "undefined" || !content) return "";
    const div = document.createElement("div");
    div.innerHTML = content;
    const text = div.textContent || div.innerText || "";
    return text.slice(0, 140) + (text.length > 140 ? "..." : "");
  };

  // Helper to extract image from content or coverImage
  const getBlogImage = (blog) => {
    if (blog.coverImage && blog.coverImage.trim()) {
      return blog.coverImage;
    }
    if (typeof window === "undefined" || !blog.content) {
      return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
    }
    const div = document.createElement("div");
    div.innerHTML = blog.content;
    const img = div.querySelector("img");
    return img
      ? img.src
      : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
  };

  // Estimate read time
  const getReadTime = (content = "") => {
    const stripped = content.replace(/<[^>]*>/g, "").trim();
    const words = stripped ? stripped.split(/\s+/).length : 0;
    return Math.max(1, Math.ceil(words / 200));
  };

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        (blog.category || "Digital Marketing").toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        (blog.title || "").toLowerCase().includes(q) ||
        (blog.content || "").toLowerCase().includes(q) ||
        (blog.category || "").toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-teal-50/30 text-slate-800 font-sans antialiased">
      <SEO
        title="Insights, Guides & Digital Growth Articles | DigLip7"
        description="Explore the latest insights, strategies, and industry guides on SEO, PPC, web technologies, and digital marketing from DigLip7 experts."
        canonical="https://diglip7.com/blog"
        keywords="digital marketing blog, SEO guides, PPC tips, web development tutorials, DigLip7 articles"
      />

      {/* ================= HERO EDITORIAL HEADER ================= */}
      <section className="relative pt-24 pb-16 px-6 sm:px-10 lg:px-20 overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-emerald-500/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 font-bold text-xs uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>DigLip7 Insights & Intelligence</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Strategies That Drive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">
              Measurable Growth
            </span>
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Expert insights, tactical guides, and industry analyses on digital marketing, SEO, web engineering, and brand acceleration.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles by topic, keyword, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 shadow-sm transition"
            />
          </div>
        </div>
      </section>

      {/* ================= CATEGORY FILTER STRIP ================= */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 sm:px-10 py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-teal-800 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= MAIN BLOG GRID SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs animate-pulse space-y-4"
              >
                <div className="w-full h-48 bg-slate-100 rounded-2xl" />
                <div className="h-4 bg-slate-100 rounded w-1/3" />
                <div className="h-6 bg-slate-100 rounded w-4/5" />
                <div className="h-4 bg-slate-100 rounded w-full" />
              </div>
            ))}
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 p-8 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No articles found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {searchQuery
                ? "Try adjusting your search keywords or selecting another category"
                : "New articles will be published here soon. Check back shortly!"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => {
              const coverImg = getBlogImage(blog);
              const readTime = getReadTime(blog.content);
              const articleSlug = blog.slug || generateSlug(blog.title) || blog._id;

              return (
                <Link
                  key={blog._id}
                  to={`/blog/${articleSlug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={coverImg}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-teal-900 border border-white/60 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">
                      {blog.category || "Digital Marketing"}
                    </span>
                  </div>

                  {/* Article Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(blog.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {readTime} min read
                        </span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-teal-700 transition leading-snug line-clamp-2">
                        {blog.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {getPreviewContent(blog.content)}
                      </p>
                    </div>

                    {/* Article Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-600 font-medium">
                        <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-[10px]">
                          {(blog.author || "D")[0].toUpperCase()}
                        </div>
                        <span className="truncate max-w-[130px]">
                          {blog.author || "DigLip7 Team"}
                        </span>
                      </div>

                      <span className="px-3.5 py-1.5 rounded-xl bg-teal-800 group-hover:bg-teal-900 text-white font-bold transition flex items-center gap-1.5 shadow-xs">
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}