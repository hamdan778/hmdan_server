const PRODUCT_ROUTER = require("./productes.routes");
const USER_ROUTER = require("./user.routes")
const ORDER_ROUTER = require("./orders.routes")

const Router = [USER_ROUTER , PRODUCT_ROUTER, ORDER_ROUTER]

module.exports = ()=> Router;