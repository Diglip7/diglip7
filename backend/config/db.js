import mongoose from "mongoose";

/**
 * Connect to MongoDB Atlas database using connection string from environment variables
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Stop application if database connection fails
  }
};

export default connectDB;


