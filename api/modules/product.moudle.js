const { Schema } = require("mongoose");

const PRODUCT_SCHEMA = new Schema({

productImage:[String],
productName:String,
productPrice :String,
prudoctTopping:[String]
})

const PRODUCT_MODEL = model("product", PRODUCT_SCHEMA);
module.exports = PRODUCT_MODEL;

