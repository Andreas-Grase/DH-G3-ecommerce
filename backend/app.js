const express = require('express'),
  app = express()
  port = 3000

rotasContato = require('../backend/routes/contato'),
rotasPrincipais = require('../backend/routes/index'),
rotasProdutos = require('../backend/routes/produtos')
rotasUsers = require('../backend/routes/users')

// app.use('/users', rotasUsers)
// app.use('/produtos', rotasProdutos)
app.use('/', rotasPrincipais)

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})