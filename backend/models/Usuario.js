module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      primeiro_nome: {
        type: DataType.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: DataType.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      aniversario: {
        type: DataType.DATE,
        allowNull: false,
      },
      id_endereco: {
        type: DataType.INTEGER.UNSIGNED,
      },
      id_regra: {
        type: DataType.INTEGER.UNSIGNED,
      },
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );

  return Usuario;
};
