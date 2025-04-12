import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mvpdb";

mongoose.connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB verbunden"))
  .catch(err => console.error("❌ MongoDB Fehler:", err));

app.get("/", (_req, res) => {
  res.send("Backend läuft mit TypeScript 🚀");
});

app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
