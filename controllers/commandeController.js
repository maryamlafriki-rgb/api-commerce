const Commande = require("../models/Commande");

// CREATE
exports.createCommande = async (req, res) => {
  const commande = await Commande.create(req.body);
  res.status(201).json(commande);
};

// READ
exports.getCommandes = async (req, res) => {
  const commandes = await Commande.find()
    .populate("client")
    .populate("produits.produit");
  res.json(commandes);
};
// UPDATE
exports.updateCommande = async (req, res) => {
  const commande = await Commande.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!commande) {
    return res.status(404).json({ message: "Commande not found" });
  }

  res.json(commande);
};

// DELETE
exports.deleteCommande = async (req, res) => {
  await Commande.findByIdAndDelete(req.params.id);
  res.json({ message: "Commande supprimée" });
};