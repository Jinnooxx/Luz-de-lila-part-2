import { menuInit } from './menu.js';
import { carritoInit } from './carrito.js';

const actualizarContadorMenu = () => {
    const contador = document.getElementById('cart-counter');
    if (!contador) return; 
  
    const carrito = JSON.parse(localStorage.getItem('carritoLuzDeLila')) || [];
    const totalItems = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);

    contador.innerText = totalItems;
};

document.addEventListener('DOMContentLoaded', () => {
    menuInit();
    carritoInit();
    actualizarContadorMenu(); 
});