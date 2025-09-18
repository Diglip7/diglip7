import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import adminContactRoutes from "./routes/adminContactRoutes.js";
import blogroutes from "./routes/blogRoutes.js"

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Public routes
app.use("/api", contactRoutes);
app.use("/api", blogroutes );      // /api/contact

// Admin routes
app.use("/api/admin", adminRoutes);          // /api/admin/login etc
app.use("/api/admin", adminContactRoutes);   // /api/admin/contacts

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
