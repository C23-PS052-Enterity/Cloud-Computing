const jwt = require('jsonwebtoken');

const accessToken = ({ id, nama_toko, email }) => {
  return jwt.sign({ id, nama_toko, email }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '1d' });
};

const refreshToken = ({ id, nama_toko, email }) => {
  return jwt.sign({ id, nama_toko, email }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '7d' });
};

module.exports = { accessToken, refreshToken };
