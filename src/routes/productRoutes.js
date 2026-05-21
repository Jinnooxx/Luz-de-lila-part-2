const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);

router.get('/detalle/:id', productController.getProductById);

router.get('/home', productController.getProductHome);

module.exports = router;