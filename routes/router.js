const express = require('express');
const router = express.Router();
const Multer = require('multer');
const ImgUpload = require('../helpers/cloudStorage');

const multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize: 5 * 1024 * 1024,
});

const { verifyToken } = require('../middleware/auth-middleware');

const auth = require('../controller/auth');
const user = require('../controller/user');
const platform = require('../controller/platform');

router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/logout', auth.logout);

router.get('/user/:id', [verifyToken], user.getUserById);
router.put(
  '/user/:id',
  [verifyToken],
  multer.single('profile_picture'),
  ImgUpload.uploadToGcs,
  user.updateUserById,
);

router.get('/platforms/', verifyToken, platform.getAllIconPlatforms);

module.exports = router;
