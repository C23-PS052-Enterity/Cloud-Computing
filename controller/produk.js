const { produk } = require('../models');

const getAllProduk = async (req, res) => {
  try {
    const allProduk = await produk.findAll();

    if (!allProduk) {
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
      totalProduk: allProduk.length,
      data: allProduk,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'failed',
      message: error.message,
    });
  }
};

module.exports = { getAllProduk };
