// Funcionalidad del botón responsive ☰
document.addEventListener("DOMContentLoaded", function () {
    const btnMenu = document.getElementById('btn-menu');
    const nav = document.getElementById('menu');

    btnMenu.addEventListener('click', function () {
        nav.classList.toggle('mostrar');
    });

    // OPCIONAL: Cierra el menú al hacer clic en cualquier enlace (en móviles)
    const enlaces = nav.querySelectorAll('a');
    enlaces.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('mostrar');
        });
    });
});
