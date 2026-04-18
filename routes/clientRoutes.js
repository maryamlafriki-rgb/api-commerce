const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientController");

router.post("/", controller.createClient);
router.get("/", controller.getClients);
router.put("/:id", controller.updateClient);
router.delete("/:id", controller.deleteClient);

module.exports = router;