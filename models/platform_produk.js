'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class platform_produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      platform_produk.belongsTo(models.platform, {
        foreignKey: 'platform_id',
      });

      platform_produk.belongsTo(models.produk, {
        foreignKey: 'produk_id',
      });

      platform_produk.hasMany(models.transaksi, {
        foreignKey: 'platform_produk_id',
      });
    }
  }
  platform_produk.init(
    {
      produk_id: DataTypes.STRING,
      platform_id: DataTypes.INTEGER,
      unit_terjual: DataTypes.INTEGER,
      pendapatan: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'platform_produk',
    },
  );
  return platform_produk;
};
