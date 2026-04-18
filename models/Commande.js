const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  produits: [
    {
      produit: { type: mongoose.Schema.Types.ObjectId, ref: "Produit" },
      quantite: Number
    }
  ],
  total: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Commande", commandeSchema);