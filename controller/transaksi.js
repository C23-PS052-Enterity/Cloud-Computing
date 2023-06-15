const { transaksi } = require('../models');

const totalTransaction = async (req, res) => {
  try {
    const dataTransaksi = await transaksi.findAll();

    if (!dataTransaksi) {
      return res.status(404).json({
        code: 200,
        status: 'failed',
        message: 'Transaksi not found',
      });
    }

    return res.status(200).json({
      code: 200,
      status: 'failed',
      message: 'Transaksi found',
      total: `${dataTransaksi.length} kali transaksi`,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'failed',
      message: error.message,
    });
  }
};

module.exports = { totalTransaction };
