// backend/routes/adminRoutes.js
import express from "express";
import { loginAdmin } from "../controllers/adminController.js";

const router = express.Router();

// POST /api/admin/login
router.post("/login", loginAdmin);

// POST /api/admin/register  (optional, for creating new admins)


export default router;
