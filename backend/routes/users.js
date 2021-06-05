const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

// router.post("/:id/delete", controller.delete);
// router.get("/:id", controller.show);
// router.post("/:id", controller.update);
router.get("/", controller.list);
router.post("/", controller.create);

module.exports = router;
