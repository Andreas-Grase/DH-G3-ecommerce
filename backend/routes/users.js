const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')

router.get('/', controller.index)

router.post('/criar', controller.create)

router.put('/modificar/:id', controller.modify)

router.delete('/deletar/:id', controller.delete)

router.get('/:id', controller.show)

module.exports = router