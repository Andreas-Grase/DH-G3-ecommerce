const { Usuario } = require("../models");
module.exports = async (req, res, next) => {
  try {
    const usuario = await Usuario.findOne({ where: { id: req.user.id } });
    console.log(usuario);
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Você não é admin" });
  }
};
