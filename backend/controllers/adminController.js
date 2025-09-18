// backend/controllers/adminController.js
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    // Plain text password comparison
    if (password !== user.password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
      console.error(err); 
    res.status(500).json({ msg: "Server error" });
  }
};

// Register Admin (plain text password storage)
