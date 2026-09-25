import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Blog from "../models/Blog.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Escapes characters that are illegal in XML
 */
const escapeXml = (unsafe = "") =>
  unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Comprehensive fallback static routes in case App.jsx cannot be read in production
 */
const fallbackRoutes = [
  "/",
  "/about",
  "/contact",
  "/blogview",
  "/privacy-policy",
  "/terms-and-conditions",

  // Digital Marketing Services
  "/digital-market",
  "/digital-market/seoservices",
  "/digital-market/PPC-Advertising",
  "/digital-market/social-media-marketing",
  "/digital-market/content-marketing",
  "/digital-market/email-marketing",
  "/digital-market/online-repulation-management(ORM)",
  "/digital-market/local-SEO-services",
  "/digital-market/e-commerce-marketing",
  "/digital-market/video-marketing",
  "/digital-market/influencer-marketing",
  "/digital-market/Ai-powered-Digital-Marketing",
  "/digital-market/voice-search-optimization",
  "/digital-market/programmatic-advertising",
  "/digital-market/Mobile-marketing",
  "/digital-market/performance-marketing",

  // Design Services
  "/design",
  "/design/UI-UX",
  "/design/graphic-design",

  // Development Services
  "/development",
  "/development/web-development",
  "/development/mobile-app-development",
  "/development/e-commerce-development",
  "/development/custom-software_development",
  "/development/cms-development",
  "/development/api-development&Integration",
  "/development/cloud-application-development",
];

/**
 * Priority and changefreq rules based on URL depth and type
 */
const getRouteMetadata = (url) => {
  if (url === "/") return { priority: "1.0", changefreq: "weekly" };
  if (url === "/about" || url === "/contact") return { priority: "0.9", changefreq: "monthly" };
  if (url === "/blog" || url === "/blogview") return { priority: "0.9", changefreq: "daily" };
  if (url.startsWith("/privacy") || url.startsWith("/terms")) return { priority: "0.5", changefreq: "monthly" };
  return { priority: "0.8", changefreq: "weekly" };
};
/**
 * AUTOMATIC ROUTE DISCOVERY:
 * Scans src/App.jsx in real-time to find every public <Route path="..." /> definition.
 * Any new page or route added to the React project is discovered automatically!
 */
const getAutoDiscoveredRoutes = () => {
  try {
    const appJsxPath = path.resolve(__dirname, "../../src/App.jsx");
    if (!fs.existsSync(appJsxPath)) return fallbackRoutes;
    const content = fs.readFileSync(appJsxPath, "utf-8");

    // Extract only Public Routes inside <Route element={<PublicLayout />}>
    const publicSectionMatch = content.match(
      /<Route element=\{<PublicLayout \/>\}>([\s\S]*?)<\/Route>/
    );
    const targetSection = publicSectionMatch ? publicSectionMatch[1] : content;

    const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
    const routes = new Set();
    let match;

    while ((match = routeRegex.exec(targetSection)) !== null) {
      const routePath = match[1];

      // Exclude admin routes, wildcards (*), dynamic parameterized routes (/:slug), and duplicate aliases
      const ignoredAliases = new Set(["/privacy", "/terms", "/terms-conditions", "/blog"]);
      if (
        !routePath.includes("*") &&
        !routePath.startsWith("/admin") &&
        !routePath.includes("/:") &&
        !ignoredAliases.has(routePath.startsWith("/") ? routePath : `/${routePath}`)
      ) {
        const formatted = routePath.startsWith("/") ? routePath : `/${routePath}`;
        routes.add(formatted);
      }
    }

    return routes.size > 0 ? Array.from(routes) : fallbackRoutes;
  } catch (err) {
    console.error("Error auto-discovering routes from App.jsx:", err);
    return fallbackRoutes;
  }
};

/**
 * Helper to render an XML <url> entry
 */

const renderUrlNode = (loc, lastmod, changefreq, priority) => `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

/**
 * Real-time dynamic XML sitemap generator
 * - Automatically discovers all React pages from App.jsx
 * - Automatically fetches all published blogs from MongoDB
 */

const generateSitemap = async (req, res) => {
  try {
    const baseUrl = "https://diglip7.com";
    const today = new Date().toISOString().split("T")[0];

    // 1. AUTO-DISCOVER all React pages from App.jsx
    const discoveredPages = getAutoDiscoveredRoutes();

    // 2. Generate XML for all discovered project pages
    const pagesXml = discoveredPages
      .map((urlPath) => {
        const meta = getRouteMetadata(urlPath);
        return renderUrlNode(`${baseUrl}${urlPath}`, today, meta.changefreq, meta.priority);
      })
      .join("\n");

    // 3. AUTO-FETCH all published blogs from MongoDB in real-time
    const blogs = await Blog.find({ status: "published" })
      .select("slug createdAt updatedAt _id")
      .sort({ createdAt: -1 })
      .lean()
      .catch((err) => {
        console.error("Error querying blogs for sitemap:", err);
        return [];
      });

    const dynamicBlogXml = blogs
      .map((b) => {
        const dateRaw = b.updatedAt || b.createdAt || new Date();
        const date = new Date(dateRaw).toISOString().split("T")[0];
        const slug = b.slug || b._id.toString();
        return renderUrlNode(`${baseUrl}/blog/${slug}`, date, "daily", "0.7");
      })
      .join("\n");

    // 4. Assemble complete XML document
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pagesXml}
${dynamicBlogXml ? `\n${dynamicBlogXml}` : ""}
</urlset>`;

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    return res.status(200).send(xml);
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return res.status(500).send("Error generating sitemap");
  }
};

router.get("/sitemap.xml", generateSitemap);
router.get("/sitemap", generateSitemap);

export default router;
