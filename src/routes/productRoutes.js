const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.getProductHome);
router.get('/productos', productController.getAllProducts); 

router.get('/detalle/:id', productController.getProductById);

router.get('/contacto', (req, res) => {
    res.render('pages/contacto');
});

// ====== RUTAS DE LOGIN ======

// 1. GET: Para mostrar la página de login (cuando haces clic en el botón)
router.get('/login', (req, res) => {
    res.render('pages/login');
});

// 2. POST: Para recibir los datos que el usuario escribe cuando presiona "LOGIN"
// Esta es la parte que "funciona" y se conectará a la base de datos luego.
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Intento de login recibido:', email);

    // Por ahora, solo lo redirigimos a la home para simular que salió bien
    res.redirect('/');
});

module.exports = router;