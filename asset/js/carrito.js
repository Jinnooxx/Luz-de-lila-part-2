let carrito = JSON.parse(localStorage.getItem('carritoLuzDeLila')) || [];

const guardarCarrito = () => {
    localStorage.setItem('carritoLuzDeLila', JSON.stringify(carrito));
};

const actualizarContadorMenu = () => {
    const contador = document.getElementById('cart-counter');
    if (!contador) return;
    
    const totalItems = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    
    contador.innerText = totalItems;
};

export const carritoInit = () => {
    
    document.querySelectorAll('.btn-agregar-neon').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const btn = e.target;
            const id = btn.dataset.id;
            
            const existe = carrito.find(item => item.id === id);
            
            if (existe) {
                existe.cantidad++;
            } else {
                carrito.push({
                    id: id,
                    nombre: btn.dataset.nombre,
                    precio: parseFloat(btn.dataset.precio),
                    cantidad: 1
                });
            }
            
            guardarCarrito(); 
            actualizarContadorMenu(); 
        });
    });
};