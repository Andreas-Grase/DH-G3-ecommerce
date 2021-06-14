const { verifyToken } = require("../helpers/jwt");
module.exports = async (req, res, next) => {
  console.log("MIDDLEWARE AUTH");
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(403).json({ message: "Você não possui autorização" });
  const [, token] = authHeader.split(" ");
  try {
    const decoded = verifyToken(token);
    console.log(decoded);
    const { sub } = decoded;
    console.log(sub);
    req.usuario = {
      id: sub,
    };
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Você não possui autorização" });
    console.log(error);
  }
};
