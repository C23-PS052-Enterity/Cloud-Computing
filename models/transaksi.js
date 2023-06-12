'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaksi.belongsTo(models.platform_produk, {
        foreignKey: 'platform_produk_id',
      });

      transaksi.belongsTo(models.pelanggan, {
        foreignKey: 'pelanggan_id',
      });
    }
  }
  transaksi.init(
    {
      platform_produk_id: DataTypes.INTEGER,
      pelanggan_id: DataTypes.INTEGER,
      harga_total_pembelian: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'transaksi',
    },
  );
  return transaksi;
};
