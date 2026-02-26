const USER_MODEL = require("../modules/user.module");

const createUser = (req, res) => {

  const {
    lastname,
    firstname,
    image,
    pass,
    userName,
  } = req.body;

  USER_MODEL.create({
    lastname,
    firstname,
    userName,
    pass,
    image,

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


const login = async (req, res) => {

  const { pass, userName } = req.body

  if(!userName || ! pass) {
    return res
    .status(500)
    .json({error: true,errorMessage:"userName and pass not found"})
  }
    const user = await USER_MODEL.findOne({userName: userName});

  if (!user) {
    return res
      .status(404).json({
        error: true,
        errorMessage: "user not found"
      });

  }

  const isValid = user.pass == pass;

  res
    .status(isValid ? 200 : 408)
    .json({ valid: isValid, user: null });



}
module.exports = {
  createUser,
  login,

};
