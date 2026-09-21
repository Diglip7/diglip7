import express from "express";
import {
  createContact,
  getAllContacts,
  deleteContact,
  deleteMultipleContacts,
  updateContactStatus,
} from "../controllers/contactController.js";

const router = express.Router();

// Public Lead Submission Form (Includes spam honeypot validation)
router.post("/contact", createContact);

// Direct Contact Management routes (fallback endpoints mounted on /api)
router.get("/contacts", getAllContacts);
router.delete(["/contacts/:id", "/contact/:id"], deleteContact);
router.post("/contacts/bulk-delete", deleteMultipleContacts);
router.all(["/contacts/:id/status", "/contact/:id/status"], updateContactStatus);

export default router;


