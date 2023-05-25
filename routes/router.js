const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth-middleware');

const auth = require('../controller/auth');
const user = require('../controller/user');

router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/logout', auth.logout);

router.get('/user/:id', [verifyToken], user.getUserById);
router.put('/user/:id', [verifyToken], user.updateUserById);
module.exports = router;
