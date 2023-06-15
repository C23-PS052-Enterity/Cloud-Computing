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
const produk = require('../controller/produk');
const platformProduk = require('../controller/platform_produk');
const pelanggan = require('../controller/pelanggan');
const transaksi = require('../controller/transaksi');

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

router.get('/platforms', [verifyToken], platform.getAllPlatform);

router.get('/products', [verifyToken], produk.getAllProduk);

router.get('/products/revenues', [verifyToken], platformProduk.totalRevenues);
router.get('/products/list', [verifyToken], platformProduk.daftarProduk);
router.get('/products/unitsold', [verifyToken], platformProduk.unitTerjual);

router.get('/customers', [verifyToken], pelanggan.getAllPelanggan);
router.get('/customers/count', [verifyToken], pelanggan.totalPelanggan);

router.get('/transactions/count', [verifyToken], transaksi.totalTransaction);

module.exports = router;
