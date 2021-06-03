const express = require("express"),
  router = express.Router(),
  controller = require("../../backend/controllers/products");

router.get("/criar", controller.create);
router.get("/promo", controller.showPromo);
router.post("/:id/delete", controller.delete);
router.get("/:id", controller.show);
router.get("/:id", controller.index);
router.post("/:id", controller.update);
router.get("/", controller.list);

module.exports = router;
