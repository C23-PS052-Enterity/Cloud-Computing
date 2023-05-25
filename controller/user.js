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

const updateUserById = async (req, res) => {
  try {
    const { nama_toko, email, password } = req.body;
    const id = req.params.id;

    const foundId = await User.findByPk(id);

    if (!foundId) {
      return res.status(404).json({
        message: 'Id not found',
      });
    }

    const foundEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    if (foundEmail) {
      if (foundEmail.email === foundId.email) {
        await foundId.update({
          nama_toko: nama_toko,
          email: email,
          password: hashPassword(password),
        });

        return res.status(200).json({
          status: 'success',
          message: 'User updated successfully',
          data: foundId,
        });
      } else {
        return res.status(400).json({
          message: 'email already exist',
        });
      }
    }

    await foundId.update({
      nama_toko: nama_toko,
      email: email,
      password: hashPassword(password),
    });
    return res.status(201).json({
      status: 'success',
      message: 'User updated successfully',
      data: foundId,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getUserById, updateUserById };
