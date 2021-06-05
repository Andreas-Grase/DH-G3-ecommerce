const Sequelize = require("sequelize"),
  { Produto } = require("../models"),
  { Op } = Sequelize;
// const bcrypt = require("../helpers/bcrypt");

const orderResults = (orderByParam = "id_ASC") => {
  const orderParam = orderByParam.split("_")[0],
    orderDirection = orderByParam.split("_")[1];
  return [[orderParam, orderDirection]];
};

const controller = {
  list: async (req, res) => {
    const { page = 1, limit = 10, orderBy } = await req.query,
      order = orderResults(orderBy);
    const { count: total, rows: produtos } = await Produto.findAndCountAll({
      order,
      limit,
      offset: (page - 1) * limit,
    });
    res.json({
      produtos,
      total,
      page,
      pages: Math.ceil(total / limit),
      orderParam: order[0][0],
      orderDirection: order[0][1],
    });
  },
  index: async (req, res, next) => {
    const { id } = req.params,
      produto = await Produto.findOne({ where: { id } });
    if (produto) {
      return req.query.edit === "edit"
        ? res.json({
            produtos,
            total,
            page,
            pages: Math.ceil(total / limit),
            orderParam: order[0][0],
            orderDirection: order[0][1],
          })
        : res.json({
            produtos: [produto],
            total,
            page,
            pages: Math.ceil(total / limit),
            orderParam: order[0][0],
            orderDirection: order[0][1],
          });
    } else {
      res
        .status(500)
        .send(`Ops... houve algum erro ao buscar pelo produto de id ${id}`);
    }
  },
  addProduto: async (req, res, next) => {
    res.render("addProduto", {
      title: "Página de Registro de Usuário",
      subtitle:
        "Preencha o formulário e cadastre-o clicando em 'Adicionar Usuário'",
    });
  },

  show: (req, res) => {
    res.send(`<h1>Página produto ${req.params.id}</h1>`);
  },
  showPromo: (req, res) => {
    res.send("<h1>Página de promoções</h1>");
  },
  create: (req, res) => {
    res.send("<h1>Criar produto</h1>");
  },
  update: (req, res) => {
    res.send(`<h1>Atualizar produto ${req.params.id}</h1>`);
  },
  delete: async (req, res) => {
    const { id } = req.params,
      produto = await Produto.destroy({
        where: { id },
        force: true,
      });
  },
};

module.exports = controller;
