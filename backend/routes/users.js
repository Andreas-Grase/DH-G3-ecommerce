const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')

router.get('/criar', controller.create)
router.get('/modificar/:id', controller.modify)
router.get('/deletar/:id', controller.delete)
router.get('/mostrar/:id', controller.show)
router.get('/', controller.index)

module.exports = router