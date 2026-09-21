import express from "express";
import {
  getAllContacts,
  deleteContact,
  deleteMultipleContacts,
  updateContactStatus,
} from "../controllers/contactController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect all contact administration routes with JWT Authentication
router.use(authMiddleware);

// GET /api/admin/contacts -> Retrieve all contact inquiries
router.get("/contacts", getAllContacts);

// DELETE /api/admin/contacts/:id -> Delete single contact record
router.delete(["/contacts/:id", "/contact/:id"], deleteContact);

// POST /api/admin/contacts/bulk-delete -> Delete multiple contact records by ID list
router.post("/contacts/bulk-delete", deleteMultipleContacts);

// PATCH or PUT /api/admin/contacts/:id/status -> Update pipeline status, company, or add note
router.route(["/contacts/:id/status", "/contact/:id/status"])
  .patch(updateContactStatus)
  .put(updateContactStatus);

export default router;


