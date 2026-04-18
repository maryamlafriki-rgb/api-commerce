const express = require("express");
const router = express.Router();
const controller = require("../controllers/commandeController");

router.post("/", controller.createCommande);
router.get("/", controller.getCommandes);
router.put("/:id", controller.updateCommande);
router.delete("/:id", controller.deleteCommande);

module.exports = router;