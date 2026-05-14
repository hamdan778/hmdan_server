const { Schema, model } = require("mongoose");

const PRODUCT_SCHEMA = new Schema({
    product_id: String,
    product_count: Number,
    sale: Number,
})

const ORDERS_SCHEMA = new Schema({
    user_id: String,
    products: [PRODUCT_SCHEMA]
});

const PRODUCT_MODEL = model("product", PRODUCT_SCHEMA);

module.exports = PRODUCT_MODEL;
