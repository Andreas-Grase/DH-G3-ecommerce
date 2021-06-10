const db = require("../models");

const Sequelize = require("sequelize"),
  { Usuario } = require("../models"),
  { Op } = Sequelize;
const bcrypt = require("../helpers/bcrypt");

const orderResults = (orderByParam = "id_ASC") => {
  const orderParam = orderByParam.split("_")[0],
    orderDirection = orderByParam.split("_")[1];
  return [[orderParam, orderDirection]];
};

const controller = {
  list: async (req, res, next) => {
    const { page = 1, limit = 20, orderBy } = await req.query,
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
  index: async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findOne({ where: { id } });
    if (usuario) {
      return req.query.edit === "edit"
        ? res.json({
            usuario,
          })
        : res.json({
            usuarios: [usuario],
          });
    } else {
      res
        .status(500)
        .send(`Ops... houve algum erro ao buscar pelo usuário de id ${id}`);
    }
  },
  addUser: async (req, res, next) => {
    res.send("Página de Registro de Usuário");
  },
  register: async (req, res, next) => {
    try {
      console.log(req.body);
      const { primeiro_nome, sobrenome, email, senha, cpf, aniversario } =
          req.body,
        // id_funcao = email.indexOf("@diament.com.br") === -1 ? 2 : 1,
        senhaHash = await bcrypt.generateHash(senha);

      const usuario = await Usuario.create({
        primeiro_nome,
        sobrenome,
        email,
        senha: senhaHash,
        cpf,
        aniversario,
      });
      if (usuario) {
        res.status(200).json({ usuario });
      } else {
        res.status(500).send("Ops... Algo de errado não deu certo!");
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Algo de errado não está certo" });
    }
  },
  update: async (req, res, next) => {
    const { id } = req.params,
      { primeiro_nome, sobrenome, email, senha, cpf, aniversario } = req.body,
      usuario = await Usuario.update(
        { primeiro_nome, sobrenome, email, senha, cpf, aniversario },
        { where: { id } }
      );
    if (usuario) {
      res.redirect("/usuarios");
    } else {
      res.status(500).send("Ops... Algo de errado não deu certo!");
    }
  },
  delete:  async (req, res, next) => {
    console.log("controller delete");
    try {
      const { id } = req.params;
      await Usuario.destroy({
        where: { id },
      });
      res.status(200).json({ message: "Usuario deletado" });
    } catch (error) {
      console.log(error);
    }
  },
  search: async (req, res, next) => {
    let { searchParam, searchValue } = await req.body;
    if (!searchParam || !searchValue)
      searchParam = await req.params.searchParam;
    if (!searchValue) searchValue = await req.params.searchValue;

    let whereClause = {};
    whereClause[searchParam] = { [Op.like]: `%${searchValue}%` };

    const { page = 1, limit = 10, orderBy } = await req.query,
      order = orderResults(orderBy);

    const { count: total, rows: usuarios } = await Usuario.findAndCountAll({
      where: whereClause,
      order,
      limit,
      offset: (page - 1) * limit,
    }).catch(function (err) {
      res
        .status(400)
        .send(
          `<main><h1>Ops... por favor, verifique sua busca.</h1><div><b>Erro 400 | Bad Request: </b><pre>${err}</pre></div></main>`
        );
    });
    if (usuarios) {
      res.json({
        usuarios,
        total,
        page,
        pages: Math.ceil(total / limit),
        orderParam: order[0][0],
        orderDirection: order[0][1],
      });
    } else {
      res.status(500).send(`Ops... houve algum erro em nossa busca`);
    }
  },
  login: (req, res) => {
    res.send("<h1>Página login</h1>");
  },
  forgot: (req, res) => {
    res.send("<h1>Página esqueci a senha</h1>");
  },
};

module.exports = controller;
