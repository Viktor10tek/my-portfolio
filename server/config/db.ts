import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    console.log("MongoDB URI exists:", !!mongoURI);

    if (!mongoURI) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌");
    console.error(error);

    process.exit(1);
  }
};

export default connectDB;
