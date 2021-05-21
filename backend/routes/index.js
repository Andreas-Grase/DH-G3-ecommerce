const express = require('express'),
  router = express.Router(),
  controller = require('../controllers/index')

router.get('/pesquisar', controller.index)


module.exports = router
