import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for your frontend domain
app.use(cors({
  origin: process.env.FRONTEND_URL || "*"
}));

app.use(express.json());

// Basic health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Add your API routes here
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

// Important: Listen on all interfaces
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
