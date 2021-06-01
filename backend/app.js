const express = require("express"),
  app = express();
port = 5000;

rotasContato = require("../backend/routes/contato"),
rotasPesquisa = require("../backend/routes/index"),
rotasProdutos = require("../backend/routes/produtos"),
rotasUsers = require("../backend/routes/users");

app.use("/contato", rotasContato);
app.use("/usuarios", rotasUsers);
app.use("/produtos", rotasProdutos);
app.use("/", rotasPesquisa);

app.listen(port, () => {  console.log(`Example app listening at http://localhost:${port}`);});
