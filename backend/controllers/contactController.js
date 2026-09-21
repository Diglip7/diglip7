import Contact from "../models/contactModel.js";

// Standard RFC Email validation regex pattern
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * @desc    Public Lead Submission with Anti-Spam Honeypot
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, company, service, message, source, website_hp } = req.body;

    // 1. Honeypot Anti-Spam Trap: Bots fill hidden input 'website_hp'; silently respond OK if populated
    if (website_hp?.trim()) {
      return res.status(200).json({ success: true, msg: "Thank you for reaching out! We will be in touch shortly." });
    }

    // 2. Clean and sanitize incoming payload
    const trimmed = {
      name: name?.trim() || "",
      email: email?.trim().toLowerCase() || "",
      phone: phone?.trim() || "",
      company: company?.trim() || "",
      service: service?.trim() || "General Consultation",
      message: message?.trim() || "",
      source: source?.trim() || "Contact Form",
    };

    // 3. Validation checks
    if (!trimmed.name) return res.status(400).json({ success: false, msg: "Please provide your full name." });
    if (!trimmed.email || !EMAIL_REGEX.test(trimmed.email)) {
      return res.status(400).json({ success: false, msg: "Please provide a valid email address." });
    }
    if (!trimmed.message) return res.status(400).json({ success: false, msg: "Please provide your message/inquiry." });

    // 4. Save new inquiry with default 'New' status
    const contact = await Contact.create({ ...trimmed, status: "New" });
    res.status(200).json({
      success: true,
      msg: "Thank you! Your message has been received. Our team will get back to you shortly.",
      contact,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server error", error: error.message });
  }
};

/**
 * @desc    Get all contact inquiries sorted newest first
 * @route   GET /api/admin/contacts
 * @access  Protected (Admin JWT)
 */
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching contacts", error: error.message });
  }
};

/**
 * @desc    Delete a single contact inquiry by MongoDB ID
 * @route   DELETE /api/admin/contacts/:id
 * @access  Protected (Admin JWT)
 */
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Contact not found" });
    res.status(200).json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting contact", error: error.message });
  }
};

/**
 * @desc    Bulk delete multiple contact records by ID list
 * @route   POST /api/admin/contacts/bulk-delete
 * @access  Protected (Admin JWT)
 */
export const deleteMultipleContacts = async (req, res) => {
  try {
    const { ids } = req.body;
    if (!Array.isArray(ids) || !ids.length) {
      return res.status(400).json({ success: false, message: "No IDs provided" });
    }
    const result = await Contact.deleteMany({ _id: { $in: ids } });
    res.status(200).json({
      success: true,
      message: `Deleted ${result.deletedCount} contact records`,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Bulk delete failed", error: error.message });
  }
};

/**
 * @desc    Update CRM status, company name, or add a follow-up note
 * @route   PATCH /api/admin/contacts/:id/status
 * @access  Protected (Admin JWT)
 */
export const updateContactStatus = async (req, res) => {
  try {
    const { status, company, note } = req.body;
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });

    // Update fields if provided
    if (status) contact.status = status;
    if (company !== undefined) contact.company = company;
    if (note?.trim()) {
      contact.notes = contact.notes || [];
      contact.notes.unshift({ text: note.trim(), createdAt: new Date() }); // Add note to beginning
    }

    await contact.save();
    res.status(200).json({ success: true, message: "Contact updated successfully", contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Update failed", error: error.message });
  }
};


