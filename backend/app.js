const express = require("express"),
  app = express(),
  port = 5000;

var rotasContato = require("../backend/routes/contato");
var rotasPesquisa = require("../backend/routes/index");
var rotasProdutos = require("../backend/routes/produtos");
var rotasUsers = require("../backend/routes/users");

app.use("/contato", rotasContato);
app.use("/usuarios", rotasUsers);
app.use("/produtos", rotasProdutos);
app.use("/", rotasPesquisa);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
