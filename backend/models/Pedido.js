module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define(
    "Pedido",
    {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      numero_pedido: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_usuario: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      tableName: "pedidos",
      timestamps: false,
    }
  );

  return Pedido;
};
