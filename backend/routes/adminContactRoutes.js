import express from "express";
import { getAllContacts } from "../controllers/contactController.js";
import  authMiddleware  from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin protected route to get all contacts
router.get("/contacts", authMiddleware, getAllContacts);

export default router;
