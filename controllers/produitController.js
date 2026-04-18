const Produit = require("../models/Produit");

// CREATE
exports.createProduit = async (req, res) => {
  const produit = await Produit.create(req.body);
  res.status(201).json(produit);
};

// READ
exports.getProduits = async (req, res) => {
  const produits = await Produit.find();
  res.json(produits);
};

// UPDATE
exports.updateProduit = async (req, res) => {
  const produit = await Produit.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(produit);
};

// DELETE
exports.deleteProduit = async (req, res) => {
  await Produit.findByIdAndDelete(req.params.id);
  res.json({ message: "Produit supprimé" });
};