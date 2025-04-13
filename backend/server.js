import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js"; // Connects to MongoDB
import Product from "./models/Product.model.js"; // Make sure this exists and is imported
import  productRoutes from "./routes/Product.route.js"; // Import the product routes

dotenv.config();

const app = express();
const PORT= process.env.PORT ||5000;

const _dirname = path.resolve();
app.use(express.json()); // Middleware to parse JSON in request body

app.use ("/api/products",productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})
}

// Start the server
app.listen(PORT , () => {
   connectDB(); // Ensure DB is connected before listening
  console.log("✅ Server started at http://localhost:"+ PORT);
})
