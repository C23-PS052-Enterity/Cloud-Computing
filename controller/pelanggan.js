const { pelanggan } = require('../models');

const getAllPelanggan = async (req, res) => {
  try {
    const result = await pelanggan.findAll();
    res.status(200).send({
      message: 'Get all pelanggan success',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Internal server error',
    });
  }
};

module.exports = { getAllPelanggan };
