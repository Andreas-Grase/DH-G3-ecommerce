const express = require('express'),
  router = express.Router(),
  controller = require('../controllers/contato')

router.get('/', controller.contato)

module.exports = router