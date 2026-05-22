const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.getProductHome);
router.get('/productos', productController.getAllProducts); 

router.get('/detalle/:id', productController.getProductById);

router.get('/contacto', (req, res) => {
    res.render('pages/contacto');
});


module.exports = router;