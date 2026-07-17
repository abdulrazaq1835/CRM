import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import inquiryRoutes from "./routes/inquiry.routes.js";
import { connectDb } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173",
    "https://crm-58oq.vercel.app",
    ],
      credentials: true,
  
  }),
);

app.use(async (req, res, next) => {
  try {
    await connectDb();
    next();
  } catch (err) {
    res.status(500).json({ success: false, message: "Database connection failed" });
  }
});

app.get("/", (req, res) => {
  res.send("My Server is Running");
});

app.use("/api/inquiry", inquiryRoutes);



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
