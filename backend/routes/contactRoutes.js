// backend/routes/contactRoutes.js
import express from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", createContact);
// ✅ protected route for admin
// router.get("/contacts", verifyAdminToken, getAllContacts);

export default router;
