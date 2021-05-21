const express = require("express"),
  router = express.Router(),
  controller = require("../../backend/controllers/products");

router.put("/update/:id", controller.update);
router.delete("/delete/:id", controller.delete);
router.get("/promo", controller.showPromo);
router.post("/create", controller.create);
router.get("/:id", controller.show);
router.get("/", controller.pesquisar);

module.exports = router;