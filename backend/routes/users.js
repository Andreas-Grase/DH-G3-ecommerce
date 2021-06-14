const express = require("express");
const router = express.Router();
const controller = require("../controllers/users"),
  authMiddleware = require("../middlewares/auth"),
  isAdminMiddleware = require("../middlewares/isAdmin");

router.post("/search/:searchParam/:searchValue", controller.search);
router.get("/search/:searchParam/:searchValue", controller.search);
router.get("/add", controller.addUser);
router.post("/endereco", controller.registerAddress);
router.post("/login", controller.login);
router.get("/is-admin", authMiddleware, isAdminMiddleware, controller.isAdmin);
router.delete("/:id", controller.delete);
router.get("/:id", controller.index);
router.put("/:id", controller.update);
router.get("/", authMiddleware, controller.list);
router.post("/", controller.registerUser);

module.exports = router;
