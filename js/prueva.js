function showContent(option) {
    // Ocultar todo el contenido
    document.querySelectorAll('.opcion-content').forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostrar el contenido correspondiente a la opción seleccionada
    document.getElementById(option).style.display = 'block';
}
