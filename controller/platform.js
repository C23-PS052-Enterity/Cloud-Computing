const { platform, User } = require('../models');

const getAllPlatform = async (req, res) => {
  try {
    const query = {
      where: {
        user_id: req.user,
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password', 'id', 'createdAt', 'updatedAt', 'profile_picture', 'email'],
          },
        },
      ],
    };

    const allPlatform = await platform.findAll(query);

    if (!allPlatform) {
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
      data: allPlatform,
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
