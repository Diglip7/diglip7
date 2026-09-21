import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SEO from "../components/SEO";
import "react-quill-new/dist/quill.snow.css";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Check,
  Copy,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Share2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

/**
 * Utility: Converts a string to a clean URL-friendly slug.
 */
export const generateSlug = (text = "") => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Utility: Extracts cover image from post or falls back to content/placeholder.
 */
export const getArticleImage = (item) => {
  if (!item) return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
  if (item.coverImage?.trim()) return item.coverImage;
  if (typeof window === "undefined" || !item.content) {
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
  }
  const div = document.createElement("div");
  div.innerHTML = item.content;
  const img = div.querySelector("img");
  return img?.src || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
};

export default function BlogDetail() {
  const { slug, id } = useParams();
  const identifier = slug || id;

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  // Load article data and related articles
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchArticleData = async () => {
      setLoading(true);
      const cleanIdentifier = decodeURIComponent(identifier || "").trim().toLowerCase();

      try {
        // Step 1: Direct single article lookup (Fastest path)
        const singleRes = await axios
          .get(`${import.meta.env.VITE_API_URL}/publishedblogs/${identifier}`)
          .catch(() => null);

        let foundArticle = null;
        if (
          singleRes?.data &&
          typeof singleRes.data === "object" &&
          !Array.isArray(singleRes.data) &&
          singleRes.data.title
        ) {
          foundArticle = singleRes.data;
          setBlog(foundArticle);
          setLoading(false);
        }

        // Step 2: Fetch published list for related articles & fallback
        const allRes = await axios
          .get(`${import.meta.env.VITE_API_URL}/publishedblogs`)
          .catch(() => ({ data: [] }));

        const publishedList = Array.isArray(allRes.data) ? allRes.data : [];

        // Fallback search in published list if single endpoint was not matched
        if (!foundArticle && publishedList.length > 0) {
          foundArticle = publishedList.find((b) => {
            if (!b) return false;
            const bSlug = (b.slug || "").trim().toLowerCase();
            const bId = (b._id || "").toString().trim().toLowerCase();
            const genSlug = generateSlug(b.title || "").trim().toLowerCase();

            return (
              bSlug === cleanIdentifier ||
              bId === cleanIdentifier ||
              genSlug === cleanIdentifier ||
              (cleanIdentifier.length > 5 &&
                (cleanIdentifier.startsWith(genSlug) || genSlug.startsWith(cleanIdentifier)))
            );
          });

          if (foundArticle) {
            setBlog(foundArticle);
          }
        }

        // Step 3: Fallback check in drafts (for previewing drafted articles)
        if (!foundArticle) {
          const draftRes = await axios
            .get(`${import.meta.env.VITE_API_URL}/getdraft`)
            .catch(() => ({ data: [] }));

          const draftList = Array.isArray(draftRes.data) ? draftRes.data : [];
          foundArticle = draftList.find((b) => {
            if (!b) return false;
            const bSlug = (b.slug || "").trim().toLowerCase();
            const bId = (b._id || "").toString().trim().toLowerCase();
            const genSlug = generateSlug(b.title || "").trim().toLowerCase();

            return (
              bSlug === cleanIdentifier ||
              bId === cleanIdentifier ||
              genSlug === cleanIdentifier ||
              (cleanIdentifier.length > 5 &&
                (cleanIdentifier.startsWith(genSlug) || genSlug.startsWith(cleanIdentifier)))
            );
          });

          if (foundArticle) {
            setBlog(foundArticle);
          }
        }

        // Step 4: Populate related articles (excluding the current article)
        if (publishedList.length > 0) {
          const currentId = foundArticle?._id;
          const others = publishedList.filter((b) => {
            if (currentId) return b._id !== currentId;
            return (
              b.slug !== cleanIdentifier &&
              b._id !== cleanIdentifier &&
              generateSlug(b.title) !== cleanIdentifier
            );
          });
          setRelatedBlogs(others.slice(0, 4));
        }
      } catch (err) {
        console.error("Error loading article:", err);
      } finally {
        setLoading(false);
      }
    };

    if (identifier) {
      fetchArticleData();
    }
  }, [identifier]);

  // Estimate read time based on word count
  const readTime = useMemo(() => {
    if (!blog?.content) return 1;
    const stripped = blog.content.replace(/<[^>]*>/g, "").trim();
    const words = stripped ? stripped.split(/\s+/).length : 0;
    return Math.max(1, Math.ceil(words / 200));
  }, [blog]);

  // Extract clean plain text for SEO meta description
  const plainExcerpt = useMemo(() => {
    if (!blog?.content) return "";
    const div = document.createElement("div");
    div.innerHTML = blog.content;
    const text = div.textContent || div.innerText || "";
    return text.slice(0, 160) + (text.length > 160 ? "..." : "");
  }, [blog]);

  // Resolve main cover image
  const blogImage = useMemo(() => {
    return getArticleImage(blog);
  }, [blog]);

  // Social sharing handlers
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`${blog?.title || "DigLip7 Article"} - ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  };

  // Helper to extract short plain text snippet
  const getExcerpt = (html = "") => {
    if (typeof window === "undefined" || !html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.slice(0, 100) + (text.length > 100 ? "..." : "");
  };

  // Loading Skeleton State
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-36 pb-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-6">
        <div className="h-6 bg-slate-200 rounded-lg w-36 animate-pulse" />
        <div className="h-14 bg-slate-200 rounded-2xl w-4/5 animate-pulse" />
        <div className="h-4 bg-slate-200 rounded w-1/3 animate-pulse" />
        <div className="h-[440px] bg-slate-200 rounded-3xl animate-pulse" />
        <div className="space-y-4 pt-6">
          <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
          <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-slate-200 rounded w-4/6 animate-pulse" />
        </div>
      </div>
    );
  }

  // Not Found State
  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-50 pt-36 flex flex-col items-center justify-center p-6 text-center space-y-4">
        <BookOpen className="w-16 h-16 text-slate-300" />
        <h1 className="text-2xl font-bold text-slate-900">Article Not Found</h1>
        <p className="text-sm text-slate-500 max-w-md">
          The requested article may have been moved, updated, or removed from the publication.
        </p>
        <Link
          to="/blog"
          className="px-5 py-2.5 rounded-xl bg-teal-800 text-white text-xs font-bold transition hover:bg-teal-900"
        >
          &larr; Back to All Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-teal-50/20 text-slate-800 font-sans antialiased pt-20 sm:pt-24">
      <SEO
        title={`${blog.title} | DigLip7 Insights`}
        description={plainExcerpt || "Read the latest digital marketing and tech analysis from DigLip7."}
        canonical={`https://diglip7.com/blog/${blog.slug || generateSlug(blog.title) || blog._id}`}
        keywords={`${blog.category || "digital marketing"}, SEO, web development, growth, DigLip7`}
      />

      {/* Clean Sticky Sub-Bar with proper clearance below fixed navbar */}
      <div className="sticky top-[72px] sm:top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 lg:px-12 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-950 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
          <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
            {blog.category || "Digital Marketing"}
          </span>
        </div>
      </div>

      {/* Main Spacious Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-24 space-y-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
          <Link to="/" className="hover:text-teal-700 transition">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-teal-700 transition">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-teal-800 font-semibold">{blog.category || "Article"}</span>
        </div>

        {/* Hero Header Section */}
        <header className="space-y-5">
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 flex-wrap">
            <span className="bg-teal-50 text-teal-800 border border-teal-200 font-bold px-3.5 py-1 rounded-full uppercase tracking-wider text-[11px]">
              {blog.category || "Digital Marketing"}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {readTime} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18] max-w-5xl">
            {blog.title}
          </h1>

          {/* Author Attribution */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-700 to-emerald-600 text-white font-black flex items-center justify-center text-base shadow-xs">
              {(blog.author || "D")[0].toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                {blog.author || "DigLip7 Editorial Team"}
              </p>
              <p className="text-xs text-slate-400">Digital Strategy & Practice Experts</p>
            </div>
          </div>
        </header>

        {/* Featured Cover Banner */}
        {blogImage && (
          <div className="w-full h-72 sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-100">
            <img
              src={blogImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Dual-Column Article Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-2">
          {/* Main Article Reading Area (8-Column Canvas) */}
          <article className="lg:col-span-8 space-y-10">
            {/* Rich Content Canvas */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xs">
              <div
                className="ql-editor blog-prose-content max-w-none text-slate-800 leading-relaxed font-sans"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-teal-800 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-xs">
                {(blog.author || "D")[0].toUpperCase()}
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="text-base font-bold text-slate-900">
                  Published by {blog.author || "DigLip7 Editorial Team"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  DigLip7 is a full-service digital agency specializing in search engine optimization, paid performance media, modern web applications, and ROI-driven digital growth.
                </p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="text-xs font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1"
                  >
                    <span>Learn more about DigLip7</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Strategy Consultation Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="relative z-10 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Accelerate Your Online Presence
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Ready to implement these strategies for your brand?
                </h3>
                <p className="text-xs sm:text-sm text-teal-100/80 max-w-lg">
                  Get a customized audit and growth roadmap from our digital specialists today.
                </p>
              </div>
              <Link
                to="/contact"
                className="relative z-10 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-extrabold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg shrink-0 cursor-pointer"
              >
                <span>Book Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* Sticky Sidebar (4-Column Layout) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Share Widget (WhatsApp, LinkedIn, Copy Link) */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-teal-700" />
                <h3 className="text-sm font-bold text-slate-900">Share this Article</h3>
              </div>
              <p className="text-xs text-slate-500">
                Found this helpful? Share with your team or network.
              </p>
              <div className="flex flex-col gap-2.5 pt-1">
                <button
                  onClick={shareOnWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-xs font-bold transition cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <span>Share on WhatsApp</span>
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] text-xs font-bold transition cursor-pointer"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                  <span>Share on LinkedIn</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Article Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Consultation Promo Box */}
            <div className="bg-gradient-to-br from-teal-50 via-teal-100/50 to-emerald-50 rounded-3xl p-6 border border-teal-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5 text-teal-300" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                Need Help Scaling Online?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our digital growth team creates bespoke SEO, performance marketing, and web strategies tailored to your industry.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition shadow-xs cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Visual Recommended Reads in Sidebar */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-teal-700" />
                  <h3 className="text-sm font-bold text-slate-900">Recommended Reads</h3>
                </div>
                <div className="space-y-3.5 pt-1">
                  {relatedBlogs.slice(0, 3).map((item) => {
                    const thumb = getArticleImage(item);
                    return (
                      <Link
                        key={item._id}
                        to={`/blog/${item.slug || generateSlug(item.title) || item._id}`}
                        className="group flex items-center gap-3.5 p-2 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80">
                          <img
                            src={thumb}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        </div>
                        <div className="space-y-1 min-w-0 flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block">
                            {item.category || "Article"}
                          </span>
                          <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2 leading-snug">
                            {item.title}
                          </h4>
                          <span className="text-[10px] text-slate-400 block">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Bottom Rich Visual Related Articles Grid */}
        {relatedBlogs.length > 0 && (
          <section className="pt-12 border-t border-slate-200/80 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Explore More Articles
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Discover more strategic insights, tutorials, and guides from DigLip7.
                </p>
              </div>
              <Link
                to="/blog"
                className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1"
              >
                <span>View All Articles</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBlogs.map((item) => {
                const cardImg = getArticleImage(item);
                return (
                  <Link
                    key={item._id}
                    to={`/blog/${item.slug || generateSlug(item.title) || item._id}`}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xs hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Visual Card Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={cardImg}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-teal-900 border border-white/60 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {item.category || "Article"}
                      </span>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {getExcerpt(item.content)}
                        </p>
                      </div>

                      <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                        <span className="font-bold text-teal-700 group-hover:translate-x-1 transition flex items-center gap-1">
                          <span>Read</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {/* Typography & Prose Overrides */}
      <style>{`
        .blog-prose-content {
          font-size: 17px;
          line-height: 1.85;
          color: #334155;
        }
        .blog-prose-content p {
          margin-bottom: 1.35rem;
        }
        .blog-prose-content h1 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2.25rem;
          margin-bottom: 1.15rem;
          line-height: 1.25;
        }
        .blog-prose-content h2 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2rem;
          margin-bottom: 0.95rem;
          line-height: 1.3;
        }
        .blog-prose-content h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          margin-top: 1.65rem;
          margin-bottom: 0.85rem;
        }
        .blog-prose-content h4 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-top: 1.35rem;
          margin-bottom: 0.65rem;
        }
        .blog-prose-content ul {
          list-style-type: disc !important;
          padding-left: 2.25rem !important;
          margin: 1.35rem 0 !important;
        }
        .blog-prose-content ol {
          list-style-type: decimal !important;
          padding-left: 2.25rem !important;
          margin: 1.35rem 0 !important;
        }
        .blog-prose-content li {
          margin-bottom: 0.6rem !important;
          padding-left: 0.35rem;
        }
        .blog-prose-content blockquote {
          border-left: 4px solid #0d9488 !important;
          background: #f0fdfa !important;
          padding: 1.25rem 1.75rem !important;
          border-radius: 0 1.25rem 1.25rem 0 !important;
          margin: 1.75rem 0 !important;
          font-style: italic;
          color: #134e4a;
        }
        .blog-prose-content pre,
        .blog-prose-content .ql-syntax {
          background: #0f172a !important;
          color: #f8fafc !important;
          padding: 1.25rem 1.5rem !important;
          border-radius: 1rem !important;
          overflow-x: auto;
          font-family: monospace;
          margin: 1.75rem 0 !important;
        }
        .blog-prose-content a {
          color: #0f766e !important;
          text-decoration: underline !important;
          text-decoration-color: #0d9488 !important;
          font-weight: 600;
          transition: all 0.2s;
        }
        .blog-prose-content a:hover {
          color: #115e59 !important;
          text-decoration-color: #115e59 !important;
        }
        .blog-prose-content img {
          max-width: 100%;
          height: auto;
          border-radius: 1.5rem;
          margin: 1.75rem auto;
          display: block;
          box-shadow: 0 6px 12px -2px rgba(0, 0, 0, 0.06);
        }
        .blog-prose-content .ql-align-center {
          text-align: center !important;
        }
        .blog-prose-content .ql-align-right {
          text-align: right !important;
        }
        .blog-prose-content .ql-align-justify {
          text-align: justify !important;
        }
        .blog-prose-content .ql-size-small {
          font-size: 0.875rem !important;
        }
        .blog-prose-content .ql-size-large {
          font-size: 1.35rem !important;
        }
        .blog-prose-content .ql-size-huge {
          font-size: 1.85rem !important;
        }
      `}</style>
    </div>
  );
}
