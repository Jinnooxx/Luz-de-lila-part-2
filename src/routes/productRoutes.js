const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

router.get('/', productController.getProductHome);
router.get('/productos', productController.getAllProducts); 

router.get('/detalle/:id', productController.getProductById);

router.get('/contacto', productController.getContacto);

// ====== RUTAS DE LOGIN ======

router.get('/login', productController.getLogin);


router.post('/login', authController.getLoginPost);

module.exports = router;