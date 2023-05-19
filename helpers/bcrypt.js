const bcrypt = require('bcrypt');

const hashPassword = (userPassword) => {
  const saltRound = process.env.SALT_ROUND;
  const salt = bcrypt.genSaltSync(saltRound);
  const hash = bcrypt.hashSync(userPassword, salt);
  return hash;
};

const comparePassword = (userPassword, hashedPassword) => {
  return bcrypt.compareSync(userPassword, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
