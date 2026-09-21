import mongoose from "mongoose";

/**
 * Contact Schema for lead generation & CRM management
 */
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: "" },
    company: { type: String, trim: true, default: "" },
    service: { type: String, trim: true, default: "General Consultation" },
    message: { type: String, required: true, trim: true },
    // Lead Pipeline Status
    status: {
      type: String,
      enum: ["New", "Contacted", "In Progress", "Converted", "Closed", "Not Interested", ""],
      default: "",
    },
    // Lead Source tracking (e.g. "Contact Form", "Home Page Modal")
    source: { type: String, default: "Contact Form" },
    // Admin follow-up internal notes
    notes: [
      {
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);


