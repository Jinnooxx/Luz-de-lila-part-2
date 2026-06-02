const getCarritoPage = (req, res) => {
    const productosCarrito = req.session?.carrito || []; 
    
    let total = 0;
    productosCarrito.forEach(item => {
        total += item.precio * item.cantidad;
    });

    res.render('pages/carrito', { 
        productos: productosCarrito, 
        totalGeneral: total 
    });
};

const eliminarProducto = (req, res) => {
    const idProducto = req.params.id;
    let carrito = req.session?.carrito || [];
    
    req.session.carrito = carrito.filter(item => item.id !== idProducto);
    res.redirect('/carrito');
};

module.exports = { 
    getCarritoPage,
    eliminarProducto
};