import mongoose from "mongoose";

export const connectDB = async () => { 
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // Use backticks for string interpolation
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // 1 means exit with failure, 0 means success
  }
};
