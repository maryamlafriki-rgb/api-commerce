const Role = require("../models/Role");

// CREATE
exports.createRole = async (req, res) => {
  const role = await Role.create(req.body);
  res.status(201).json(role);
};

// GET
exports.getRoles = async (req, res) => {
  const roles = await Role.find();
  res.json(roles);
};

// DELETE
exports.deleteRole = async (req, res) => {
  await Role.findByIdAndDelete(req.params.id);
  res.json({ message: "Role supprimé" });
};