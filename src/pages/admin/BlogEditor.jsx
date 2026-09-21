import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import {
  Send,
  Save,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Link as LinkIcon,
  X,
  Plus,
  Eye,
  Image as ImageIcon,
  Check,
  Globe,
  Upload,
  Layers,
  Compass,
  Copy,
  Info,
  ArrowLeft,
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

export default function BlogEditor() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Core Blog States
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Digital Marketing");
  const [author, setAuthor] = useState("DigLip7 Editorial Team");
  const [coverImage, setCoverImage] = useState("");
  const [customSlug, setCustomSlug] = useState("");

  // Editor Tracking State
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [selectedPublished, setSelectedPublished] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  // Modals & UI Controls
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [toasts, setToasts] = useState([]);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [coverImageTab, setCoverImageTab] = useState("url"); // "url" | "upload"
  const [copiedSlug, setCopiedSlug] = useState(false);

  const quillRef = useRef(null);
  const fileInputRef = useRef(null);

  const categories = [
    "Digital Marketing",
    "SEO & Search Optimization",
    "Web & App Development",
    "Social Media & Meta Ads",
    "UI/UX Design & Branding",
    "Tech & AI Innovation",
    "Strategy & Growth",
  ];

  // Load article from URL query params on mount (e.g. ?id=xyz&type=draft or ?id=xyz&type=published)
  useEffect(() => {
    const articleId = searchParams.get("id");
    const articleType = searchParams.get("type");

    if (articleId) {
      loadArticleById(articleId, articleType);
    }
  }, [searchParams]);

  const loadArticleById = async (id, type) => {
    setIsLoading(true);
    try {
      if (type === "draft") {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/getdraft?id=${id}`);
        const data = Array.isArray(res.data) ? res.data.find((d) => d._id === id) : res.data;
        if (data) {
          populateEditor(data, "draft");
        }
      } else if (type === "published") {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/publishedblogs?id=${id}`);
        const data = Array.isArray(res.data) ? res.data.find((b) => b._id === id) : res.data;
        if (data) {
          populateEditor(data, "published");
        }
      } else {
        // Fallback: try published first then draft
        try {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/publishedblogs?id=${id}`);
          const data = Array.isArray(res.data) ? res.data.find((b) => b._id === id) : res.data;
          if (data && data._id) {
            populateEditor(data, "published");
            return;
          }
        } catch {
          // not in published
        }

        const resDraft = await axios.get(`${import.meta.env.VITE_API_URL}/getdraft?id=${id}`);
        const draftData = Array.isArray(resDraft.data) ? resDraft.data.find((d) => d._id === id) : resDraft.data;
        if (draftData) {
          populateEditor(draftData, "draft");
        }
      }
    } catch (err) {
      console.error("Failed to load article for editing:", err);
      showToast("Could not load selected article", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const populateEditor = (data, type) => {
    setTitle(data.title || "");
    setContent(data.content || "");
    setCategory(data.category || "Digital Marketing");
    setAuthor(data.author || "DigLip7 Editorial Team");
    setCoverImage(data.coverImage || "");
    setCustomSlug(data.slug || "");

    if (type === "draft") {
      setSelectedDraft(data._id);
      setSelectedPublished(null);
      showToast(`Draft "${data.title || "Untitled"}" loaded in studio`, "success");
    } else {
      setSelectedPublished(data._id);
      setSelectedDraft(null);
      showToast(`Published article "${data.title || "Untitled"}" loaded in studio`, "success");
    }
  };

  // Content image double-click hyperlink handler
  useEffect(() => {
    const timer = setTimeout(() => {
      const editorContainer = document.querySelector(".ql-editor");
      if (editorContainer) {
        const images = editorContainer.querySelectorAll("img");
        images.forEach((img) => {
          img.removeEventListener("dblclick", handleImageDoubleClick);
          img.addEventListener("dblclick", handleImageDoubleClick);
          img.style.cursor = "pointer";
          img.title = "Double-click to add or edit hyperlink";
        });
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [content]);

  // Extract first image from content if coverImage is not set
  const extractedCoverImage = useMemo(() => {
    if (coverImage && coverImage.trim()) return coverImage;
    if (typeof window === "undefined" || !content) return "";
    const temp = document.createElement("div");
    temp.innerHTML = content;
    const img = temp.querySelector("img");
    return img ? img.src : "";
  }, [coverImage, content]);

  // Effective Slug
  const effectiveSlug = useMemo(() => {
    return customSlug.trim() ? generateSlug(customSlug) : generateSlug(title);
  }, [customSlug, title]);

  // Word count & read time metrics
  const metrics = useMemo(() => {
    const stripped = content.replace(/<[^>]*>/g, "").trim();
    const wordCount = stripped ? stripped.split(/\s+/).length : 0;
    const charCount = stripped ? stripped.length : 0;
    const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));
    return { wordCount, charCount, readTimeMin };
  }, [content]);

  // Plain snippet for SEO SERP preview
  const plainSnippet = useMemo(() => {
    if (!content) return "";
    return content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 155);
  }, [content]);

  // Underline hyperlinks in HTML content
  const ensureLinksUnderlined = (htmlContent) => {
    if (typeof window === "undefined" || !htmlContent) return htmlContent || "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const links = tempDiv.querySelectorAll("a");
    links.forEach((link) => {
      link.style.textDecoration = "underline";
      link.style.textDecorationColor = "#0f766e";
      link.style.textDecorationThickness = "2px";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
    return tempDiv.innerHTML;
  };

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

  // Image link attach
  const handleImageDoubleClick = (e) => {
    e.preventDefault();
    const img = e.target;
    const currentLink = img.parentElement?.tagName === "A" ? img.parentElement.href : "";
    setSelectedImage(img);
    setLinkUrl(currentLink);
    setShowLinkModal(true);
  };

  const handleLinkSubmit = () => {
    if (!selectedImage) return;
    const trimmedUrl = linkUrl.trim();
    if (trimmedUrl) {
      const linkElement = document.createElement("a");
      linkElement.href = trimmedUrl;
      linkElement.target = "_blank";
      linkElement.rel = "noopener noreferrer";
      selectedImage.parentNode?.replaceChild(linkElement, selectedImage);
      linkElement.appendChild(selectedImage);
    } else {
      if (selectedImage.parentElement?.tagName === "A") {
        selectedImage.parentElement.parentNode?.replaceChild(
          selectedImage,
          selectedImage.parentElement
        );
      }
    }
    const editorContainer = document.querySelector(".ql-editor");
    if (editorContainer) {
      setContent(editorContainer.innerHTML);
    }
    setShowLinkModal(false);
    setSelectedImage(null);
    setLinkUrl("");
    showToast("Image hyperlink updated successfully!", "success");
  };

  // Handle Cover Image File Upload (Base64)
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showToast("Please upload an image file (PNG, JPG, WebP)", "warning");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast("Image size must be under 5MB", "warning");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setCoverImage(event.target?.result || "");
      showToast("Cover image uploaded successfully!", "success");
    };
    reader.readAsDataURL(file);
  };

  // Copy slug helper
  const copySlugToClipboard = () => {
    if (!effectiveSlug) return;
    const fullUrl = `https://diglip7.com/blog/${effectiveSlug}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedSlug(true);
    showToast("Blog URL copied to clipboard!", "success");
    setTimeout(() => setCopiedSlug(false), 2000);
  };

  // ================= API CALLS =================
  const saveDraft = async (isAutoSave = false) => {
    if (!title && !content) {
      if (!isAutoSave) {
        showToast("Please enter at least a title or content", "warning");
      }
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        title: title || "Untitled Draft",
        slug: effectiveSlug || generateSlug(title || "untitled-draft"),
        content: ensureLinksUnderlined(content || ""),
        category: category || "Digital Marketing",
        author: author || "DigLip7 Editorial Team",
        coverImage: coverImage || extractedCoverImage || "",
      };

      if (selectedDraft) {
        await axios.put(`${import.meta.env.VITE_API_URL}/updatedraft/${selectedDraft}`, payload);
        setLastSaved(new Date());
        if (!isAutoSave) showToast("Draft updated successfully!", "success");
      } else {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createdraft`, payload);
        setSelectedDraft(response.data._id);
        setLastSaved(new Date());
        if (!isAutoSave) showToast("Draft created successfully!", "success");
      }
    } catch (err) {
      console.error("Draft save error:", err);
      if (!isAutoSave) showToast("Failed to save draft", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const publishBlog = async () => {
    if (!title.trim() || !content.trim()) {
      showToast("Title and article content are required to publish", "warning");
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        title: title.trim(),
        slug: effectiveSlug || generateSlug(title.trim()),
        content: ensureLinksUnderlined(content),
        category: category || "Digital Marketing",
        author: author || "DigLip7 Editorial Team",
        coverImage: coverImage || extractedCoverImage || "",
      };

      if (selectedPublished) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/updatepublishedblog/${selectedPublished}`,
          payload
        );
        showToast("Published article updated live on website!", "success");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/createpublishedblog`, payload);

        if (selectedDraft) {
          try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/deletedraft/${selectedDraft}`);
            setSelectedDraft(null);
          } catch (e) {
            console.error("Draft delete error after publish:", e);
          }
        }

        showToast("Article published successfully to the website!", "success");
        resetEditor();
      }
    } catch (err) {
      console.error("Publish error:", err);
      showToast("Failed to publish blog. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const resetEditor = () => {
    setTitle("");
    setContent("");
    setCategory("Digital Marketing");
    setAuthor("DigLip7 Editorial Team");
    setCoverImage("");
    setCustomSlug("");
    setSelectedDraft(null);
    setSelectedPublished(null);
    setLastSaved(null);
    navigate("/admin/blog", { replace: true });
  };

  // Quill Toolbar Configuration
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        ["link", "image", "video"],
        ["clean"],
      ],
    }),
    []
  );

  const formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "list",
    "bullet",
    "indent",
    "script",
    "blockquote",
    "code-block",
    "link",
    "image",
    "video",
    "clean",
  ];

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

      {/* ================= IMAGE LINK MODAL ================= */}
      {showLinkModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-md w-full border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-teal-700" />
                <h3 className="text-base font-bold text-slate-900">Attach Image Hyperlink</h3>
              </div>
              <button
                onClick={() => {
                  setShowLinkModal(false);
                  setSelectedImage(null);
                  setLinkUrl("");
                }}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Enter target destination URL. Clicking the image in the live blog reader will open this link in a new tab.
            </p>

            <input
              type="url"
              placeholder="https://diglip7.com/services/seo"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition"
            />

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  setShowLinkModal(false);
                  setSelectedImage(null);
                  setLinkUrl("");
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleLinkSubmit}
                className="px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition shadow-xs cursor-pointer"
              >
                Apply Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= STUDIO TOP BAR ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/blogs"
            className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-teal-800 hover:border-teal-300 transition shadow-2xs"
            title="Back to All Articles"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                Editorial Studio
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-medium text-slate-500">
                {selectedPublished ? "Editing Live Article" : selectedDraft ? "Editing Saved Draft" : "Drafting New Post"}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              {title || "Untitled Article Workspace"}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <Link
            to="/admin/blogs"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition shadow-2xs cursor-pointer"
          >
            <Layers className="w-4 h-4 text-teal-700" />
            <span>Articles Library</span>
          </Link>

          <button
            onClick={() => {
              resetEditor();
              showToast("New blank article workspace initialized", "success");
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-teal-900 text-white text-xs font-bold transition shadow-sm cursor-pointer"
          >
            <Plus className="w-4 h-4 text-teal-300" />
            <span>New Post</span>
          </button>
        </div>
      </div>

      {/* ================= MASTER EDITORIAL WORKSPACE ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ================= LEFT MAIN CANVAS (8 COLS on desktop) ================= */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Header Title with live SEO indicator */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <label htmlFor="blog-title" className="flex items-center gap-1.5">
                  <span>ARTICLE HEADLINE</span>
                  <span className="text-rose-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      title.length === 0
                        ? "text-slate-400 bg-slate-100"
                        : title.length <= 70
                        ? "text-teal-700 bg-teal-50 border border-teal-200"
                        : "text-amber-700 bg-amber-50 border border-amber-200"
                    }`}
                  >
                    {title.length} / 70 SEO title chars
                  </span>
                </div>
              </div>

              <input
                id="blog-title"
                type="text"
                placeholder="e.g. 10 Proven SEO Strategies to Accelerate Organic Traffic in 2026..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-2xl text-base sm:text-lg font-extrabold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 focus:bg-white transition"
              />

              {/* Slug Preview & Quick Copy */}
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/60 overflow-hidden">
                <Globe className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span className="text-slate-400 font-mono truncate">
                  diglip7.com/blog/
                  <strong className="text-slate-800 font-bold font-mono">
                    {effectiveSlug || "your-article-slug"}
                  </strong>
                </span>
                <button
                  type="button"
                  onClick={copySlugToClipboard}
                  className="ml-auto p-1 text-slate-400 hover:text-teal-700 transition cursor-pointer"
                  title="Copy preview URL"
                >
                  {copiedSlug ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Rich Quill Text Editor Canvas */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>BODY CONTENT & RICH MEDIA</span>
                <div className="flex items-center gap-3 text-slate-400 font-normal">
                  <span className="hidden sm:inline-flex text-[11px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-semibold">
                    💡 Double-click any image to attach a hyperlink
                  </span>
                  <span className="font-semibold text-slate-600">
                    {metrics.wordCount} words ({metrics.readTimeMin} min read)
                  </span>
                </div>
              </div>

              <div className="quill-wrapper border border-slate-200 rounded-2xl bg-white shadow-xs focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:border-teal-600 transition overflow-hidden">
                <ReactQuill
                  ref={quillRef}
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                  placeholder="Draft your high-impact article content, insert images, format quotes, code, bullet points, and headings..."
                  className="min-h-[460px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT INSPECTOR & PUBLISHING SIDEBAR (4 COLS on desktop) ================= */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
          {/* Action Center & Publish Controls */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    selectedPublished
                      ? "bg-emerald-500 animate-pulse"
                      : selectedDraft
                      ? "bg-amber-500"
                      : "bg-teal-500"
                  }`}
                />
                <h3 className="font-extrabold text-slate-900 text-sm tracking-tight">
                  {selectedPublished
                    ? "Editing Live Post"
                    : selectedDraft
                    ? "Editing Saved Draft"
                    : "Drafting New Article"}
                </h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Studio Status
              </span>
            </div>

            <p className="text-xs text-slate-500">
              {lastSaved ? `Last saved at ${lastSaved.toLocaleTimeString()}` : "Ready to write and publish"}
            </p>

            {/* Primary Action Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={publishBlog}
                disabled={isLoading || !title.trim() || !content.trim()}
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-black text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-teal-700/20 cursor-pointer disabled:opacity-40 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isLoading
                    ? "Processing..."
                    : selectedPublished
                    ? "Update Live Article"
                    : "Publish Live to Website"}
                </span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => saveDraft(false)}
                  disabled={isLoading || (!title && !content)}
                  className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer disabled:opacity-40"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{isLoading ? "Saving..." : "Save Draft"}</span>
                </button>

                <button
                  onClick={() => setPreviewModalOpen(true)}
                  disabled={!title && !content}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-40"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </button>
              </div>

              {(selectedDraft || selectedPublished || title || content) && (
                <button
                  onClick={resetEditor}
                  className="w-full py-2 text-center text-xs font-semibold text-slate-400 hover:text-slate-700 transition cursor-pointer"
                >
                  Clear & Start Fresh
                </button>
              )}
            </div>
          </div>

          {/* ================= COVER IMAGE MANAGER CARD ================= */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-teal-700" />
                <h3 className="font-extrabold text-slate-900 text-sm">Featured Cover Image</h3>
              </div>
              {coverImage && (
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="text-[10px] text-rose-600 hover:underline font-bold cursor-pointer"
                >
                  Remove Image
                </button>
              )}
            </div>

            {/* Visual Cover Preview Thumbnail */}
            <div className="relative h-36 w-full rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden group">
              {extractedCoverImage ? (
                <img
                  src={extractedCoverImage}
                  alt="Featured Cover Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                  <ImageIcon className="w-8 h-8 text-slate-300 mb-1" />
                  <span className="text-xs font-semibold">No Cover Image Selected</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    Upload an image, paste a URL, or embed one in the article
                  </span>
                </div>
              )}
            </div>

            {/* Mode Switcher: URL vs File Upload */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setCoverImageTab("url")}
                className={`flex-1 py-1.5 text-center text-xs font-bold rounded-lg transition cursor-pointer ${
                  coverImageTab === "url" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500"
                }`}
              >
                Image URL
              </button>
              <button
                type="button"
                onClick={() => setCoverImageTab("upload")}
                className={`flex-1 py-1.5 text-center text-xs font-bold rounded-lg transition cursor-pointer ${
                  coverImageTab === "upload" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500"
                }`}
              >
                Upload File
              </button>
            </div>

            {coverImageTab === "url" ? (
              <input
                type="url"
                placeholder="https://example.com/images/hero-cover.jpg"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white"
              />
            ) : (
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2.5 px-3 border border-dashed border-teal-600/40 bg-teal-50/50 hover:bg-teal-50 text-teal-800 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Choose Image File from Computer</span>
                </button>
              </div>
            )}
          </div>

          {/* ================= TAXONOMY & ATTRIBUTION CARD ================= */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-xs space-y-4">
            <h3 className="font-extrabold text-slate-900 text-sm pb-2 border-b border-slate-100">
              Taxonomy & Attribution
            </h3>

            {/* Category */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">ARTICLE CATEGORY</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Author */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">AUTHOR NAME</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="DigLip7 Editorial Team"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white"
              />
            </div>

            {/* Custom Slug Override */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">CUSTOM URL SLUG</label>
              <input
                type="text"
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
                placeholder="auto-generated-from-title"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white font-mono"
              />
            </div>
          </div>

          {/* ================= GOOGLE SERP SEARCH PREVIEW CARD ================= */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <Compass className="w-4 h-4 text-blue-600" />
              <h3 className="font-extrabold text-slate-900 text-sm">Google SERP Preview</h3>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                <span className="text-emerald-700 font-semibold font-mono">https://diglip7.com</span>
                <span>›</span>
                <span className="text-slate-500 font-mono">blog</span>
                <span>›</span>
                <span className="text-slate-500 font-mono truncate">{effectiveSlug || "post-slug"}</span>
              </div>
              <h4 className="text-blue-700 font-bold text-xs sm:text-sm hover:underline cursor-pointer line-clamp-1">
                {title || "Untitled Article | DigLip7 Insights"}
              </h4>
              <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                {plainSnippet || "Discover the latest insights, case studies, and actionable digital growth strategies from DigLip7."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ARTICLE LIVE PREVIEW MODAL ================= */}
      {previewModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-6 relative">
            <button
              onClick={() => setPreviewModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Preview Banner */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-900 px-3 py-1 rounded-full">
                  {category}
                </span>
                <span className="text-xs text-slate-400">
                  {metrics.readTimeMin} min read • {new Date().toLocaleDateString()}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {title || "Untitled Preview Article"}
              </h1>

              <div className="flex items-center gap-3 text-xs text-slate-500 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-teal-800 text-white font-bold flex items-center justify-center text-xs">
                  {author ? author[0].toUpperCase() : "D"}
                </div>
                <span>By {author || "DigLip7 Editorial Team"}</span>
              </div>

              {extractedCoverImage && (
                <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src={extractedCoverImage}
                    alt="Cover Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Rendered HTML Content */}
              <div
                className="ql-editor blog-prose-content max-w-none text-slate-800 leading-relaxed font-sans pt-4"
                dangerouslySetInnerHTML={{ __html: content || "<p>No content entered yet.</p>" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Custom Quill CSS Overrides for Premium Aesthetic */}
      <style>{`
        .ql-toolbar.ql-snow {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          background: #f8fafc;
          padding: 10px 14px;
          border-radius: 16px 16px 0 0;
        }
        .ql-container.ql-snow {
          border: none !important;
          font-family: inherit;
          font-size: 15px;
          min-height: 460px;
        }
        .ql-editor {
          min-height: 460px;
          padding: 20px 24px;
          line-height: 1.8;
          color: #1e293b;
        }
        .ql-editor.ql-blank::before {
          color: #94a3b8;
          font-style: normal;
        }
        .ql-snow .ql-picker {
          color: #475569;
          font-weight: 600;
        }
        .ql-snow .ql-stroke {
          stroke: #475569;
        }
        .ql-snow .ql-fill {
          fill: #475569;
        }
        .ql-snow .ql-picker.ql-expanded .ql-picker-options {
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          padding: 6px;
        }
      `}</style>
    </div>
  );
}