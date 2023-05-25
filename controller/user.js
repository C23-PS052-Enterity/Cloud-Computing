const { User } = require('../models');
const { hashPassword } = require('../helpers/bcrypt');

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const foundId = await User.findByPk(id);

    if (!foundId) {
      return res.status(404).json({
        message: 'Id not found',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'User found',
      data: foundId,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateUserById = async (req, res) => {};

module.exports = { getUserById };
