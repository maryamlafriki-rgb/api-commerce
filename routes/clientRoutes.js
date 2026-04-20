const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientController");
const auth = require("../middleware/auth");
const permit = require("../middleware/permission");

router.post("/", auth, permit("clients", "create"), controller.createClient);
router.get("/", auth, permit("clients", "read"), controller.getClients);
router.put("/:id", auth, permit("clients", "update"), controller.updateClient);
router.delete("/:id", auth, permit("clients", "delete"), controller.deleteClient);

module.exports = router;