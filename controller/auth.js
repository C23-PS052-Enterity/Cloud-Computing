const { User } = require('../models');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const { validateRegistration, validateLogin } = require('../validator/auth-joiSchema');
const sendToken = require('../helpers/sendToken');

const register = async (req, res) => {
  try {
    const { nama_toko, email, password } = req.body;

    const { error } = validateRegistration.validate(req.body);
    if (error) {
      return res.status(400).json({
        code: 200,
        status: 'error',
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
        code: 200,
        status: 'error',
        message: 'email has been registered',
      });
    }

    const encryptedPassword = await hashPassword(password);
    const createdUser = await User.create({
      id: `user-${uuid()}`,
      nama_toko: nama_toko,
      email: email,
      password: encryptedPassword,
      profile_picture:
        'https://storage.googleapis.com/assets-enterity/profile_picture/Enterity_logo.png',
    });

    return res.status(201).json({
      code: 200,
      status: 'success',
      message: 'User created Succesfully',
      data: createdUser,
    });
  } catch (err) {
    return res.status(500).json({
      code: 200,
      status: 'error',
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
        code: 200,
        status: 'error',
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
        code: 200,
        status: 'error',
        message: 'Email is not registered',
      });
    }

    const passwordMatches = await comparePassword(password, retrievedUser.password);

    if (passwordMatches) {
      const accessToken = sendToken.accessToken(retrievedUser);
      const refreshToken = sendToken.refreshToken(retrievedUser);

      res.cookie =
        ('refreshToken',
        refreshToken,
        {
          httpOnly: true,
          maxAge: process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000,
          secure: true,
        });

      return res.status(200).json({
        code: 200,
        status: 'success',
        message: 'user logged in Succesfully',
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    }
  } catch (err) {
    return res.status(500).json({
      code: 200,
      status: 'error',
      message: err.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(400).json({
        code: 200,
        status: 'error',
        message: 'user not logged in',
      });
    }

    res.clearCookie('refreshToken');
    res.status(200).json({
      code: 200,
      status: 'success',
      message: 'user logged out succesfully',
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'error',
      message: error.message,
    });
  }
};

module.exports = { register, login, logout };
