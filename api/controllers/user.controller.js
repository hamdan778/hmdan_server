const USER_MODEL = require("../modules/user.module");

const createUser = (req, res )=>{

const  {

      productPrice,
        productImage,
        productName,
}= req.body;

USER_MODEL.create({

      productPrice,
        productImage,
        productName,
})

.then((createRes)=>{
res.status(200).json(createRes);

})

.cath((e)  =>
    res.status(500).json({
        error: true, 
        errorMessage:e,
        
    })
)};


module.exports ={
createUser,

};
