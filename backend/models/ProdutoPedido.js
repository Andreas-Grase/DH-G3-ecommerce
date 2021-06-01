module.exports = (sequelize, DataType) => {
    const ProdutoPedido = sequelize.define('ProdutoPedido', {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_produto: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
      },
      id_pedido: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
      },
      quantidade_produto: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
      },
    }, {
      tableName: 'produtos_pedidos',
      timestamps: false
    })
  
    return ProdutoPedido
  }