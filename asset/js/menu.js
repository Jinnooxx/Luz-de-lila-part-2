
export const menuInit = () => {
    const menuButton = document.querySelector('#menu-btn');
    const menu = document.querySelector('#menu');

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
    }

    // 2. ACORDEÓN DE CATEGORÍAS
    const btnCategorias = document.getElementById('btn-categorias');
    const listaCategorias = document.getElementById('lista-categorias');
    const iconoFlecha = document.getElementById('icono-flecha');

    if (btnCategorias && listaCategorias) {
        btnCategorias.addEventListener('click', () => {
            listaCategorias.classList.toggle('abierto');
            iconoFlecha.innerText = listaCategorias.classList.contains('abierto') ? '▲' : '▼';
        });
    }

    // 3. FILTRADO EN TIEMPO REAL
    const botonesFiltro = document.querySelectorAll('.filter-btn');
    const tarjetasProducto = document.querySelectorAll('.product-card');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const filtroElegido = e.target.dataset.filtro;

            botonesFiltro.forEach(b => b.classList.remove('activo'));
            e.target.classList.add('activo');

            tarjetasProducto.forEach(tarjeta => {
                const categoriaTarjeta = tarjeta.dataset.categoria;
                
                if (filtroElegido === 'todas' || categoriaTarjeta === filtroElegido) {
                    tarjeta.style.display = ''; 
                } else {
                    tarjeta.style.display = 'none'; 
                }
            });
        });
    });
};