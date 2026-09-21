import mongoose from "mongoose";

/**
 * Converts a blog title into an SEO-friendly URL slug
 * Example: "Top 10 SEO Strategies for 2026" -> "top-10-seo-strategies-for-2026"
 */
export const generateSlug = (text = "") =>
  text.toString().toLowerCase().trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Convert spaces and underscores to hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens

/**
 * Blog Schema supporting both "draft" and "published" states
 */
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, trim: true, index: true }, // SEO URL slug
  content: { type: String, required: true },       // Rich text HTML/WYSIWYG content
  category: { type: String, default: "Digital Marketing" },
  coverImage: { type: String, default: "" },       // Image URL or Base64
  author: { type: String, default: "DigLip7 Editorial Team" },
  status: { type: String, enum: ["draft", "published"], default: "draft" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);


