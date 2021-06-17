const { compare, hash } = require("bcrypt");
module.exports = {
  generateHash: async (payload) => await hash(payload, 10),
  compareHash: async (payload, hashed) => await compare(payload, hashed),
  // compareHash: async (payload, hashed) =>
  //   await compare(payload, hashed.substr(0, hashed.length - 15)),
};
