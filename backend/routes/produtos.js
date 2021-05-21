const express = require("express"),
  router = express.Router(),
  controller = require("../../backend/controllers/products");

router.get("/atualizar/:id", controller.update);
router.get("/deletar/:id", controller.delete);
router.get("/mostrar/:id", controller.show);
router.get("/promo", controller.showPromo);
router.get("/criar", controller.create);
router.get("/", controller.pesquisar);

module.exports = router;