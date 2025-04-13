import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/Product.controller.js"; // Import the controller functions

const router = express.Router();

router.get("/", getProducts);
// POST route to create a product
router.post("/", createProduct);
  router.put("/:id",updateProduct);
  router.delete("/:id", deleteProduct);

export default router; // Export the router to be used in server.js