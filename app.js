const Router = require("./api/routes/router");
const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors()); 
app.use('/',Router)
const mongoURL = "mongodb+srv://hamdan:0527549843a@cluster0.b6kcvzp.mongodb.net/E"
mongoose.connect(mongoURL);

mongoose.connection.on("connected", ()=>{
    console.log("mongo connected");
});

mongoose.connection.on("error", (err)=>{
    console.error("MongoDB connection error:",err)
});
app.get("/mainr", (req, res) => {
    res.status(200).json({
     message:"server is live ♥",
     color:"green"
    });
});

app.get("/main", (req, res) => {
    res.status(200).json({
        name: "hamdan",
        age: 13,
    });
})

app.post("/order", (req, res) => {

    const { order } = req.body;

    if (!order.amount) {
        return res.status(500).json({
            error: true,
            errorMessage: "amount is must",

        })
    }





    res.status(200).json({
        message: "order resived",
        price: order.amount * order.price,

    })
})


app.get("/name", (req, res) => {
    res.status(200).json({

        name: "mhmd",

    })


})


module.exports = app 