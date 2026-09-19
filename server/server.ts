import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import contactRoutes from "./routes/contactRoutes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// ================================
// MIDDLEWARE
// ================================

app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-vercel-domain.vercel.app"],
  }),
);

app.use(express.json());

// ================================
// ROUTES
// ================================

app.get("/api", (_req, res) => {
  res.json({
    message: "Portfolio API is running 🚀",
  });
});

app.use("/api/contact", contactRoutes);

// ================================
// DATABASE + SERVER
// ================================

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
