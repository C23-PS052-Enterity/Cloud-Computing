const { transaksi, pelanggan, platform_produk, platform, Op, sequelize } = require('../models');

const totalTransaction = async (req, res) => {
  try {
    const dataTransaksi = await transaksi.findAll();
    const totalChannel = await transaksi.findAll({
      attributes: ['platform_produk_id'],
      include: [
        {
          model: platform_produk,
          attributes: ['platform_id'],
          include: [
            {
              model: platform,
              attributes: ['nama_channel'],
            },
          ],
        },
      ],
    });

    if (!dataTransaksi) {
      return res.status(404).json({
        code: 200,
        status: 'failed',
        message: 'Transaksi not found',
      });
    }

    return res.status(200).json({
      code: 200,
      status: 'success',
      message: 'Transaksi found',
      total: `${dataTransaksi.length} kali transaksi`,
      totalChannel: totalChannel,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'failed',
      message: error.message,
    });
  }
};

// get customers with platform
const getCustomersIncludePlatform = async (req, res) => {
  try {
    const dataTransaksi = await transaksi.findAll({
      attributes: ['id'],
      include: [
        {
          model: pelanggan,
          attributes: ['url_pelanggan', 'nama_pelanggan', 'email'],
        },
        {
          model: platform_produk,
          attributes: ['platform_id'],
          include: [
            {
              model: platform,
              attributes: ['nama_channel'],
            },
          ],
        },
      ],
    });

    return res.status(200).json({
      code: 200,
      status: 'success',
      message: 'Transaksi found',
      data: dataTransaksi,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'failed',
      message: error.message,
    });
  }
};

module.exports = { totalTransaction, getCustomersIncludePlatform };
