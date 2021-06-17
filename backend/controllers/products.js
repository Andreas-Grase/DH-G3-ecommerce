const db = require("../models");

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
    const { page = 1, limit = 20, orderBy } = await req.query,
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
  search: async (req, res, next) => {
    let { searchParam, searchValue } = await req.body;
    if (!searchParam || !searchValue)
      searchParam = await req.params.searchParam;
    if (!searchValue) searchValue = await req.params.searchValue;

    let whereClause = {};
    whereClause[searchParam] = { [Op.like]: `%${searchValue}%` };

    const { page = 1, limit = 10, orderBy } = await req.query,
      order = orderResults(orderBy);

    const { count: total, rows: produtos } = await Produto.findAndCountAll({
      where: whereClause,
      order,
      limit,
      offset: (page - 1) * limit,
    }).catch(function (err) {
      res
        .status(400)
        .json({ message: "Ops... houve algum erro em nossa busca" });
    });
    if (produtos) {
      res.json({
        produtos,
        total,
        page,
        pages: Math.ceil(total / limit),
        orderParam: order[0][0],
        orderDirection: order[0][1],
      });
    } else {
      res
        .status(500)
        .json({ message: "Ops... houve algum erro em nossa busca" });
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
  create: async (req, res, next) => {
    try {
      console.log(req.body);
      const { nome, marca, quantidade, preco, id_categoria } = req.body;

      const produto = await Produto.create({
        nome: nome,
        marca: marca,
        quantidade: quantidade,
        preco: preco,
        id_categoria: id_categoria,
      });
      if (produto) {
        res.status(200).json({ produto });
      } else {
        res.status(500).send("Ops... Algo de errado não deu certo!");
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Algo de errado não está certo" });
    }
  },
  view: async (req, res, next) => {
    const { id } = req.params,
      { nome, marca, quantidade, preco } = req.body,
      produto = await Produto.view(
        {
          nome,
          marca,
          quantidade,
          preco,
        },
        { where: { id } }
      );
    if (produto) {
      res.json({ message: "sucesso" });
    } else {
      res.status(500).send("Ops... Algo de errado não deu certo!");
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params,
        { nome, marca, quantidade, preco } = req.body,
        produto = await Produto.update(
          {
            nome,
            marca,
            quantidade,
            preco,
          },
          { where: { id } }
        );
      if (produto) {
        res.json({ message: "sucesso" });
      } else {
        res.status(500).send("Ops... Algo de errado não deu certo!");
      }      
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Algo de errado não está certo" });
    }
  },
  delete: async (req, res, next) => {
    console.log("controller delete");
    try {
      const { id } = req.params;
      await Produto.destroy({
        where: { id },
      });
      res.status(200).json({ message: "Produto deletado" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controller;
