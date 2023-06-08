const { iconPlatform } = require('../models');

const getAllIconPlatforms = async (req, res) => {
  try {
    const iconPlatforms = await iconPlatform.findAll();

    return res.status(200).json({
      code: 200,
      status: 'success',
      message: 'get all platform',
      data: iconPlatforms,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'error',
      message: error.message,
    });
  }
};

module.exports = { getAllIconPlatforms };
