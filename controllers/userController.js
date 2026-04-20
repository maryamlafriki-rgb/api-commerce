const User = require("../models/User");

// CREATE
exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

// GET
exports.getUsers = async (req, res) => {
  const users = await User.find().populate("role");
  res.json(users);
};