const USER_MODEL = require("../modules/user.module");

const createProduct = (req, res) => {

    const {

        productPrice,
        productImage,
        productName,
        prudoctTopping,
    } = req.body;

    USER_MODEL.create({
        productPrice,
        productImage,
        productName,
       prudoctTopping,
    })

        .then((createRes) => {
            res.status(200).json(createRes);

        })

        .cath((e) =>
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


module.exports = {
    createProduct,

};
