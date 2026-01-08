const {Router} = require("express");
const { createProduct } = require("../controllers/product.controller");

const PRODUCT_ROUTER = Router();

PRODUCT_ROUTER.post("/createProduct", createProduct);

module.exports = PRODUCT_ROUTER;

