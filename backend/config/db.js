import mongoose from "mongoose";
import dotenv from "dotenv";


export const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};