const { pelanggan } = require('../models');

const getAllPelanggan = async (req, res) => {
  try {
    const result = await pelanggan.findAll();
    res.status(200).json({
      message: 'Get all pelanggan success',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const totalPelanggan = async (req, res) => {
  try {
    const result = await pelanggan.count();
    res.status(200).json({
      code: 200,
      status: 'success',
      message: 'Get total pelanggan success',
      data: `${result} pelanggan`,
    });
  } catch (error) {
    res.status(500).json({
      code: 200,
      status: 'failed',
      message: 'Internal server error',
    });
  }
};

module.exports = { getAllPelanggan, totalPelanggan };
