module.exports = (sequelize, DataType) => {
    const Regra = sequelize.define('Regra', {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataType.STRING,
        allowNull: false,
        unique: true
      },
      slug: {
        type: DataType.STRING,
      },
      descricao: {
        type: DataType.STRING,
      },
    }, {
      tableName: 'regras',
      timestamps: false
    })
  
    return Regra
  }