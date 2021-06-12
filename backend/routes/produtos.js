const express = require("express"),
  router = express.Router(),
  controller = require("../../backend/controllers/products");

router.get("/promo", controller.showPromo);
router.delete("/:id", controller.delete);
// router.get("/:id", controller.show);
router.post("/search", controller.search);
router.get("/:id", controller.index);
router.put("/:id", controller.update);
router.post("/", controller.create);
router.get("/", controller.list);

module.exports = router;
