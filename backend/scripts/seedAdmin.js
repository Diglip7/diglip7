import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import User from "../models/userModel.js";

// Load env vars
dotenv.config();

const run = async () => {
	try {
		await connectDB();

		const name = process.env.ADMIN_NAME || "Admin User";
		const email = process.env.ADMIN_EMAIL || "admin@example.com";
		const password = process.env.ADMIN_PASSWORD || "admin123"; // plain text to match current login logic
		const role = "admin";

		let user = await User.findOne({ email });
		if (user) {
			console.log(`Admin already exists: ${email}`);
		} else {
			user = await User.create({ name, email, password, role });
			console.log(`Admin created: ${email}`);
		}
	} catch (err) {
		console.error("Seeding failed:", err);
		process.exitCode = 1;
	} finally {
		await mongoose.connection.close();
		console.log("Database connection closed.");
	}
};

run();


