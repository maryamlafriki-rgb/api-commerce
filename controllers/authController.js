const User = require("../models/User");
const jwt = require("jsonwebtoken");

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).populate("role");

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user._id },
    "secretkey",
    { expiresIn: "1h" }
  );

  res.json({ token });
};