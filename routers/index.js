const express = require("express");
const productRoutes = require("./products/products.routes");

const router = express.Router();

// Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Routes
router.use("/products", productRoutes);

module.exports = router;
