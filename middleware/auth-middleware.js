const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        message: 'Login first to access this resource',
      });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
      if (err) {
        return res.status(500).json({
          message: err.message || 'Failed to authenticate token',
        });
      }
      req.user = decoded.id;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { verifyToken };
