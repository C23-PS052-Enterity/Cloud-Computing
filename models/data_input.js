'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_input extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      data_input.belongsTo(models.produk, {
        foreignKey: 'produk_id',
      });
    }
  }
  data_input.init(
    {
      dayOfYear: DataTypes.INTEGER,
      Quantity_Ordered: DataTypes.INTEGER,
      produk_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'data_input',
    },
  );
  return data_input;
};
