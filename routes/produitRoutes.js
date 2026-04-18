const express = require("express");
const router = express.Router();
const controller = require("../controllers/produitController");

router.post("/", controller.createProduit);
router.get("/", controller.getProduits);
router.put("/:id", controller.updateProduit);
router.delete("/:id", controller.deleteProduit);

module.exports = router;