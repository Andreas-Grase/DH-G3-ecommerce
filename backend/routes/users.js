const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

router.post("/search/:searchParam/:searchValue", controller.search);
router.get("/search/:searchParam/:searchValue", controller.search);
router.get("/add", controller.addUser);
router.post("/endereco", controller.registerAddress);
router.post("/login", controller.login);
router.delete("/:id", controller.delete);
router.get("/:id", controller.index);
router.post("/:id", controller.update);
router.get("/", controller.list);
router.post("/", controller.registerUser);

module.exports = router;
