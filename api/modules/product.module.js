const { Schema, model } = require("mongoose");

const PRODUCT_SCHEMA = new Schema({

    productImage: [String],
    productName: String,
    productPrice: String,

})

const PRODUCT_MODEL = model("product", PRODUCT_SCHEMA);
module.exports = PRODUCT_MODEL;

