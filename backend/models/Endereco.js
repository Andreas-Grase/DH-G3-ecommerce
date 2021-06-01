module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define('Endereco', {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      cep: {
        type: DataType.STRING,
        allowNull: false
      },
      rua: {
        type: DataType.STRING,
        allowNull: false
      },
      numero: {
        type: DataType.INTEGER,
        allowNull: false
      },
      complemento: {
        type: DataType.STRING,
      },
      bairro: {
        type: DataType.STRING,
        allowNull: false
      },
      cidade: {
        type: DataType.DATE,
        allowNull: false
      },
      uf: {
        type: DataType.STRING,
        allowNull: false
      },
    }, {
      tableName: 'enderecos',
      timestamps: false
    })
  
    return Endereco
  }