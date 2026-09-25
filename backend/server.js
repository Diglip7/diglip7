import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Route Handlers
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import adminContactRoutes from "./routes/adminContactRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import sitemapRoute from "./routes/sitemapRoute.js";

// Initialize environment variables & database
dotenv.config();
connectDB();

const app = express();

// Global Middlewares: Enable CORS & increase payload limit to 50MB for rich blog images
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Dynamic XML Sitemap for SEO (Accessible via /sitemap.xml and /api/sitemap.xml)
app.use(sitemapRoute);
app.use("/api", sitemapRoute);

// Public API Routes: Contact form inquiries & Blog fetching
app.use("/api", contactRoutes);
app.use("/api", blogRoutes);

// Protected Admin Routes: Authentication & CRM Lead Management
app.use("/api/admin", adminRoutes);
app.use("/api/admin", adminContactRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


