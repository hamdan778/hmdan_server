const createOrder = (req , res ) => {
    const {
    user_id,
    product,
    } = req.body;

    PRODUCT_MODEL.create({
      user_id,
    product,
    })
};

module.exports = {
    createOrder
}



//   const { PRODUCT_MODEL } = require("../modules/orders.module");

// const createorder = (req, res) => {
//     const {
//         user_id,
//         location,
//         products,
//         total,
//     } = req.body;

// ORDER_MODEL.create({
//         user_id,
//         location,
//         products,
//         total,
//     })
//     .then((createRes) => {
//         res.status(200).json(createRes);
//     })
//     .catch((e) => {
//         res.status(500).json({
//             error: true,
//             errorMessage: e,
//         })
//     })
// }

// const getAllOrder = (req, res) => {
//     ORDER_MODEL.find().then((allorders) => {
//         res.status(200).json(allorders);
//     })
//     .then((allorders) => {
//         res.status(200).json(allorders);
//     })
//     .catch((e) => res.status(500).json({
//         error: true,
//         errorMessage: e,
//     }))
// }
// const { ORDER_MODEL } = require("../modules/Order.module");

// const createorder = (req, res) => {
//     const {
//         user_id,
//         location,
//         products,
//         total,
//     } = req.body;

//     ORDER_MODEL.create({
//         user_id,
//         location,
//         products,
//         total,
//     })
//     .then((createRes) => {
//         res.status(200).json(createRes);
//     })
//     .catch((e) => {
//         res.status(500).json({
//             error: true,
//             errorMessage: e,
//         });
//     });
// };

// const getAllOrder = (req, res) => {
//     ORDER_MODEL.find().then((allorders) => {
//         res.status(200).json(allorders);
//     })
//     .then((allorders) => {
//         res.status(200).json(allorders);
//     })
//     .catch((e) => res.status(500).json({
//         error: true,
//         errorMessage: e,
//     }));
// };