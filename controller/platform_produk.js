const { sequelize, produk, platform, platform_produk } = require('../models');

const totalRevenues = async (req, res) => {
  try {
    const totalRevenues = await platform_produk.findAll({
      attributes: [[sequelize.fn('sum', sequelize.col('pendapatan')), 'total_revenues']],
    });

    if (!totalRevenues) {
      return res.status(404).json({
        code: 200,
        status: 'failed',
        message: 'Revenues not found',
      });
    }

    return res.status(200).json({
      code: 200,
      status: 'success',
      message: 'Revenues found',
      data: totalRevenues,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'failed',
      message: error.message,
    });
  }
};

const daftarProduk = async (req, res) => {
  try {
    const dataProduk = await platform_produk.findAll({
      attributes: ['platform_id'],
      include: [
        {
          model: platform,
          attributes: ['nama_channel'],
        },
        {
          model: produk,
          attributes: ['id', 'url_produk', 'nama_produk', 'stok'],
        },
      ],
    });

    if (!dataProduk) {
      return res.status(404).json({
        code: 200,
        status: 'failed',
        message: 'Produk not found',
      });
    }

    return res.status(200).json({
      code: 200,
      status: 'success',
      message: 'Produk found',
      totalProduk: dataProduk.length,
      data: dataProduk,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'failed',
      message: error.message,
    });
  }
};

const unitTerjual = async (req, res) => {
  try {
    const dataUnitTerjual = await platform_produk.findAll({
      attributes: [[sequelize.fn('sum', sequelize.col('unit_terjual')), 'total_unit_terjual']],
    });

    if (!dataUnitTerjual) {
      return res.status(404).json({
        code: 200,
        status: 'failed',
        message: 'Unit Terjual not found',
      });
    }

    return res.status(200).json({
      code: 200,
      status: 'success',
      message: 'Unit Terjual found',
      produkTerjual: dataUnitTerjual,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'failed',
      message: error.message,
    });
  }
};
module.exports = { totalRevenues, daftarProduk, unitTerjual };
