const { iconPlatform } = require('../models');

const getAllIconPlatforms = async (req, res) => {
  try {
    const iconPlatforms = await iconPlatform.findAll();

    return res.status(200).json({
      status: 'success',
      message: 'get all platform',
      data: iconPlatforms,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getAllIconPlatforms };
