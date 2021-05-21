const express = require('express'),
  router = express.Router(),
  contato = require('./contato'),
  produtos = require('./produtos'),
  controller = require('../controllers/')

// router.get('/', controller.index)

router.use('/contato', contato)
router.use('/produtos', produtos)


module.exports = router
