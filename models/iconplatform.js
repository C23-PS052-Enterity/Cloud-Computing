'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class iconPlatform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  iconPlatform.init({
    url_platform: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'iconPlatform',
  });
  return iconPlatform;
};