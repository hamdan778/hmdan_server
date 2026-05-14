const { Router } = require("express");
const { createOrder } = require("../controllers/orders.controller");

const ORDER_ROUTER = Router();

ORDER_ROUTER.post("/createOrder", createOrder);

module.exports = ORDER_ROUTER;



