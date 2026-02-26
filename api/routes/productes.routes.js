const {Router} = require("express");
const { createProduct, getAllProducts, getAllProductsbytybe } = require("../controllers/product.controller");

const PRODUCT_ROUTER = Router();

PRODUCT_ROUTER.post("/createProduct", createProduct);
PRODUCT_ROUTER.get("/getallproducts", getAllProducts    );
PRODUCT_ROUTER.get("/getallproductsByType", getAllProductsbytybe    );
module.exports = PRODUCT_ROUTER;

