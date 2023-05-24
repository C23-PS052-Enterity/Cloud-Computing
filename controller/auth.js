const { User } = require('../models');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const { validateRegistration } = require('../validator/auth-joiSchema');

const register = async (req, res) => {
  try {
    const { nama_toko, email, password } = req.body;

    const { error } = validateRegistration.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    const existingEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return res.status(400).json({
        message: 'email has been registered',
      });
    }

    const encryptedPassword = await hashPassword(password);
    const createdUser = await User.create({
      id: `user-${uuid()}`,
      nama_toko: nama_toko,
      email: email,
      password: encryptedPassword,
      profile_picture: null,
    });

    return res.status(201).json({
      status: 'success',
      message: 'User created Succesfully',
      data: createdUser,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'failed',
      message: err.message,
    });
  }
};

module.exports = { register };
