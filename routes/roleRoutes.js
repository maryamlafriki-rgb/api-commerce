const express = require("express");
const router = express.Router();
const controller = require("../controllers/roleController");

router.post("/", controller.createRole);
router.get("/", controller.getRoles);
router.delete("/:id", controller.deleteRole);

module.exports = router;