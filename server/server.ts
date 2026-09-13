import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import contactRoutes from "./routes/contactRoutes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// ========== MIDDLEWARE==========

app.use(cors());
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
