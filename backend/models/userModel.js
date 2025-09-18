// backend/models/userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" } // default admin role
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;

