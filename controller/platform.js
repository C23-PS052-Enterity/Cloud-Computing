const { platform } = require('../models');

const getAllPlatform = async (req, res) => {
  try {
    const foundPlatform = await platform.findAll();

    if (!foundPlatform) {
      return res.status(404).json({
        code: 200,
        status: 'failed',
        message: 'Platform not found',
      });
    }

    return res.status(200).json({
      code: 200,
      status: 'success',
      message: 'Platform found',
      data: foundPlatform,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'failed',
      message: error.message,
    });
  }
};

module.exports = { getAllPlatform };
