const USER_MODEL = require("../modules/user.module");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, userName, pass } = req.body;

    // 1. Simple validation
    if (!userName || !pass) {
      return res.status(400).json({ error: true, errorMessage: "Missing fields" });
    }

    // 2. Check if user already exists
    const existingUser = await USER_MODEL.findOne({ userName });
    if (existingUser) {
      return res.status(409).json({ error: true, errorMessage: "Username already taken" });
    }

    // 3. Create the user
    const newUser = await USER_MODEL.create({
      firstName,
      lastName,
      userName,
      pass
    });

    res.status(201).json(newUser); // 201 means "Created"

  } catch (e) {
    res.status(500).json({
      error: true,
      errorMessage: "Server error during registration",
      message: e.message
    });
  }
};

const login = async (req, res) => {
  const { pass, userName } = req.body;

  // 1. Validation: 400 (Bad Request) is better than 500 for missing input
  if (!userName || !pass) {
    return res.status(400).json({
      error: true,
      errorMessage: "Username and password are required"
    });
  }

  // 2. Find the user
  const user = await USER_MODEL.findOne({ userName });

  // 3. Check existence and password
  // Use 401 (Unauthorized) for login failures
  if (!user || user.pass !== pass) {
    return res.status(401).json({
      error: true,
      errorMessage: "Invalid username or password"
    });
  }

  // 4. Success
  res.status(200).json(user);
};

module.exports = {
  createUser,
  login,

};
