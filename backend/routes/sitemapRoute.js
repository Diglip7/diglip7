import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

/**
 * Static marketing, design, development & legal routes indexed for SEO
 */
const staticPages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.9", changefreq: "monthly" },
  { url: "/contact", priority: "0.9", changefreq: "monthly" },
  { url: "/blog", priority: "0.9", changefreq: "daily" },
  { url: "/blogview", priority: "0.9", changefreq: "daily" },

  // Digital Marketing Services
  { url: "/digital-market", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/seoservices", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/PPC-Advertising", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/social-media-marketing", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/content-marketing", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/email-marketing", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/online-repulation-management(ORM)", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/local-SEO-services", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/e-commerce-marketing", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/video-marketing", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/influencer-marketing", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/Ai-powered-Digital-Marketing", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/voice-search-optimization", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/programmatic-advertising", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/Mobile-marketing", priority: "0.8", changefreq: "weekly" },
  { url: "/digital-market/performance-marketing", priority: "0.8", changefreq: "weekly" },

  // Design Services
  { url: "/design", priority: "0.8", changefreq: "weekly" },
  { url: "/design/UI-UX", priority: "0.8", changefreq: "weekly" },
  { url: "/design/graphic-design", priority: "0.8", changefreq: "weekly" },

  // Development Services
  { url: "/development", priority: "0.8", changefreq: "weekly" },
  { url: "/development/web-development", priority: "0.8", changefreq: "weekly" },
  { url: "/development/mobile-app-development", priority: "0.8", changefreq: "weekly" },
  { url: "/development/e-commerce-development", priority: "0.8", changefreq: "weekly" },
  { url: "/development/custom-software_development", priority: "0.8", changefreq: "weekly" },
  { url: "/development/cms-development", priority: "0.8", changefreq: "weekly" },
  { url: "/development/api-development&Integration", priority: "0.8", changefreq: "weekly" },
  { url: "/development/cloud-application-development", priority: "0.8", changefreq: "weekly" },

  // Legal Pages
  { url: "/privacy-policy", priority: "0.5", changefreq: "monthly" },
  { url: "/terms-and-conditions", priority: "0.5", changefreq: "monthly" },
];

// Helper to format XML <url> entry
const renderUrlTag = (loc, lastmod, changefreq, priority) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

/**
 * GET /sitemap.xml or /api/sitemap.xml
 * Dynamically constructs valid XML sitemap of all static routes + live MongoDB published blogs
 */
router.get("/sitemap.xml", async (req, res) => {
  try {
    const baseUrl = "https://diglip7.com";
    const today = new Date().toISOString().split("T")[0];

    // 1. Fetch live published blogs from MongoDB
    const blogs = await Blog.find({ status: "published" }).sort({ createdAt: -1 }).catch(() => []);

    // 2. Generate XML tags for static pages
    const staticXml = staticPages
      .map((p) => renderUrlTag(`${baseUrl}${p.url}`, today, p.changefreq, p.priority))
      .join("\n");

    // 3. Generate XML tags for dynamic published blog articles
    const dynamicXml = blogs
      .map((b) => {
        const date = b.createdAt ? new Date(b.createdAt).toISOString().split("T")[0] : today;
        const slug = b.slug || b._id;
        return renderUrlTag(`${baseUrl}/blog/${slug}`, date, "daily", "0.7");
      })
      .join("\n");

    // 4. Assemble complete XML document
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${dynamicXml}
</urlset>`;

    res.header("Content-Type", "application/xml").send(xml);
  } catch (error) {
    res.status(500).send("Error generating sitemap");
  }
});

export default router;


