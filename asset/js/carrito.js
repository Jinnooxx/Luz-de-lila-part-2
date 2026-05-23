export const carritoInit = () => {
    // Buscar si ya había cosas guardadas en el navegador
    let carrito = JSON.parse(localStorage.getItem('carritoLuzDeLila')) || [];

    const panelCarrito = document.getElementById('carrito-panel');
    const btnCerrar = document.getElementById('cerrar-carrito');
    const btnAbrir = document.getElementById('cart-btn');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    // Cortamos la ejecución si estamos en una página que no tiene carrito
    if (!panelCarrito) return;

    // --- FUNCIONES BÁSICAS ---
    const toggleCarrito = () => panelCarrito.classList.toggle('abierto');
    if (btnCerrar) btnCerrar.addEventListener('click', toggleCarrito);
    if (btnAbrir) btnAbrir.addEventListener('click', toggleCarrito);

    const guardarCarrito = () => {
        localStorage.setItem('carritoLuzDeLila', JSON.stringify(carrito));
        dibujarCarrito();
    };

    const eliminarDelCarrito = (index) => {
        carrito.splice(index, 1);
        guardarCarrito();
    };

    // --- DIBUJAR LOS PRODUCTOS ---
    const dibujarCarrito = () => {
        listaCarrito.innerHTML = '';
        let total = 0;
        
        carrito.forEach((item, index) => {
            total += item.precio * item.cantidad;
            listaCarrito.innerHTML += `
                <div class="item-carrito">
                    <div>
                        <h4 style="margin:0; color:#fff; font-size: 1rem;">${item.nombre}</h4>
                        <p style="margin:5px 0 0; color:rgb(198,141,251);">$${item.precio} x ${item.cantidad}</p>
                    </div>
                    <button class="btn-borrar-item" data-index="${index}">Borrar</button>
                </div>
            `;
        });
        
        // Asignar el evento a los botones de borrar
        document.querySelectorAll('.btn-borrar-item').forEach(btn => {
            btn.addEventListener('click', (e) => eliminarDelCarrito(e.target.dataset.index));
        });
        
        totalCarrito.innerText = `$${total.toFixed(2)}`;
    };

    // --- AGREGAR AL CARRITO ---
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
            panelCarrito.classList.add('abierto'); // Abre el panel al comprar
        });
    });

    // Arrancar dibujando lo que haya guardado
    dibujarCarrito();
};