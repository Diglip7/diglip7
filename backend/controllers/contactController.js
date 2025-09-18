// backend/controllers/contactController.js
import Contact from "../models/contactModel.js";

// @desc   Save contact form data
// @route  POST /api/contact
// @access Public
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "Please fill all required fields" });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res.status(201).json({ msg: "Message sent successfully", contact });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

// ✅ get all contacts (admin only)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error });
  }
};


