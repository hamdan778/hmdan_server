// const USER_MODEL = require("../modules/user.module");

const { json } = require("express");
const PRODUCT_MODEL = require("../modules/product.moudle");

const createProduct = (req, res) => {

    const {

        productPrice,
        productImage,
        productName,

    } = req.body;

    PRODUCT_MODEL.create({
        productPrice,
        productImage,
        productName,
    })

        .then((createRes) => {
            res.status(200).json(createRes);

        })

        .catch((e) =>
            res.status(500).json({
                error: true,
                errorMessage: e,

            })
        )
};


const Findproduct = (req, res) => {
    const { productName, productPrice, productImage } = req.body

    PRODUCT_MODEL.Find({
        productName,
        productPrice,
        productImage,
    })
        .then((FindRes) => {

            res.status(200).json(FindRes)

        })
        .catch((e) => {
            res.status(500).json({
                error: true,
                errorMessage: e
            })
        })

}

const getAllProducts = (req, res) => {
    PRODUCT_MODEL.find().then(allProducts => {
        res.status(200).json({
            response: allProducts
        })
    })
        .catch((e) => {
            res.status(200).body({
                error: true,
                errorMessage: e,
            })
        })
}

const getAllProductsbytybe = (req, res) => {

    const { type } = req.body

    PRODUCT_MODEL.find({ type: type }).then(AllProductsbytybe => {
        res.status(200).body({

        })
    })
        .catch((e))
    res.status(200).json({
        error: true,
        errorMessage: e,
    })
}


module.exports = {
    createProduct,
    getAllProducts,
    getAllProductsbytybe,
};


