const { Usuario } = require("../models");
module.exports = async (req, res, next) => {
  try {
    const usuario = await Usuario.findOne({ where: { id: req.usuario.id } });
    // console.log(usuario);
    if (usuario.id_regra !== 1)
      return res.status(403).json({ message: "Você não é admin" });
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Você não é admin" });
  }
};
