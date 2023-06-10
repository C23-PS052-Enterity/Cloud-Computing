const Joi = require('joi');

const validateRegistration = Joi.object({
  nama_toko: Joi.string().required().messages({
    'string.empty': 'username tidak boleh kosong',
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.empty': 'email tidak boleh kosong',
      'string.email': 'email harus valid',
    }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required().messages({
    'string.pattern.base':
      'password harus terdiri dari 8 sampai 30 karakter dan hanya mengandung huruf dan angka ',
  }),
});

const validateLogin = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.empty': 'email tidak boleh kosong',
      'string.email': 'email harus valid',
    }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required().messages({
    'string.pattern.base':
      'password harus terdiri dari 8 sampai 30 karakter dan hanya mengandung huruf dan angka ',
  }),
});

module.exports = { validateRegistration, validateLogin };
