const Sequelize = require("sequelize"),
  { Usuario } = require("../models"),
  { Op } = Sequelize;
// const bcrypt = require("../helpers/bcrypt");

const orderResults = (orderByParam = "id_ASC") => {
  const orderParam = orderByParam.split("_")[0],
    orderDirection = orderByParam.split("_")[1];
  return [[orderParam, orderDirection]];
};

const controller = {
  list: async (req, res, next) => {
    const { page = 1, limit = 10, orderBy } = await req.query,
      order = orderResults(orderBy);
    const { count: total, rows: usuarios } = await Usuario.findAndCountAll({
      order,
      limit,
      offset: (page - 1) * limit,
    });
    res.json({
      usuarios,
      total,
      page,
      pages: Math.ceil(total / limit),
      orderParam: order[0][0],
      orderDirection: order[0][1],
    });
  },
  login: (req, res) => {
    res.send("<h1>Página login</h1>");
  },
  create: async (req, res, next) => {
    try {
      const { primeiro_nome, sobrenome, email, senha, cpf, aniversario } =
        req.body;
      // id_funcao = email.indexOf("@diament.com.br") === -1 ? 2 : 1,
      // senhaHash = await bcrypt.generateHash(senha);

      const usuario = await Usuario.create({
        primeiro_nome,
        sobrenome,
        email,
        senha,
        cpf,
        aniversario,
      });
      if (usuario) {
        res.redirect("/usuarios");
      } else {
        res.status(500).send("Ops... Algo de errado não deu certo!");
      }
    } catch (error) {
      res.status(400).json({ message: "Algo de errado não está certo" });
    }
  },
  forgot: (req, res) => {
    res.send("<h1>Página esqueci a senha</h1>");
  },
  update: (req, res) => {
    res.send(`<h1>Página modificar usuário ${req.params.id}</h1>`);
  },
  delete: (req, res) => {
    res.send(`<h1>Página deletar usuário ${req.params.id}</h1>`);
  },
  show: (req, res) => {
    res.send(`<h1>Página mostrar usuário ${req.params.id}</h1>`);
  },
};

module.exports = controller;
