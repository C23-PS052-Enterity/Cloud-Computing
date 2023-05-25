const { User } = require('../models');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const { validateRegistration, validateLogin } = require('../validator/auth-joiSchema');

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
      profile_picture: 'https://storage.googleapis.com/enterity/enterity.png',
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { error } = validateLogin.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    const retrievedUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!retrievedUser) {
      return res.status(400).json({
        message: 'Email is not registered',
      });
    }

    const passwordMatches = await comparePassword(password, retrievedUser.password);

    if (passwordMatches) {
      const jwtToken = {
        email: retrievedUser.email,
        payload: retrievedUser.payload,
      };

      const token = jwt.sign(jwtToken, process.env.ACCESS_TOKEN_KEY);

      return res.status(200).json({
        status: 'success',
        message: 'user logged in Succesfully',
        token: token,
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 'failed',
      message: err.message,
    });
  }
};

module.exports = { register, login };
