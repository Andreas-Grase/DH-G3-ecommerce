module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataType.STRING,
        allowNull: false
      },
      marca: {
        type: DataType.STRING,
        allowNull: false
      },
      quantidade: {
        type: DataType.INTEGER,
        allowNull: false
      },
      preco: {
        type: DataType.DECIMAL,
        allowNull: false
      },
      id_categoria: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
      },
    }, {
      tableName: 'produtos',
      timestamps: false
    })
  
    return Produto
  }