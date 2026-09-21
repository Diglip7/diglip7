import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import User from "../models/userModel.js";

// Load environment variables (.env)
dotenv.config();

/**
 * CLI script to seed an initial administrative user in MongoDB
 * Usage: npm run seed (or node scripts/seedAdmin.js)
 */
const run = async () => {
  try {
    await connectDB();

    const name = process.env.ADMIN_NAME || "Admin User";
    const email = process.env.ADMIN_EMAIL || "admin@example.com";
    const password = process.env.ADMIN_PASSWORD || "admin123";

    const user = await User.findOne({ email });
    if (user) {
      console.log(`ℹ️ Admin user already exists: ${email}`);
    } else {
      await User.create({ name, email, password, role: "admin" });
      console.log(`✅ Admin user created successfully: ${email}`);
    }
  } catch (err) {
    console.error("❌ Seeding error:", err.message);
  } finally {
    await mongoose.connection.close();
    console.log("🔒 Database connection closed.");
  }
};

run();




