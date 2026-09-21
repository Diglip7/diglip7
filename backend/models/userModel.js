import mongoose from "mongoose";

/**
 * Admin User Schema for dashboard authentication
 */
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Admin login password
    role: { type: String, default: "admin" },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);



