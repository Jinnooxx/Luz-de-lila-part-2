const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const authController = require('../controllers/authController');
const cartController = require('../controllers/cartController');

router.get('/', productController.getProductHome);
router.get('/productos', productController.getAllProducts); 

router.get('/detalle/:id', productController.getProductById);

router.get('/contacto', productController.getContacto);

// ====== RUTAS DE LOGIN ======

router.get('/login', productController.getLogin);


router.post('/login', authController.getLoginPost);


router.get('/reset-password', authController.getResetPassword); 
router.post('/reset-password', authController.resetPassword);   


router.get('/carrito', cartController.getCarritoPage);
router.post('/carrito/eliminar/:id', cartController.eliminarProducto);



module.exports = router;