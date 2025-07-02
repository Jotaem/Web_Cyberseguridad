$(document).ready(function() {
    console.log("jQuery y el script personalizado están listos.");

    // Lógica para mostrar/ocultar información en las tarjetas de Amenazas
    $('.toggle-info').on('click', function() {
        var targetId = $(this).data('target'); 
        $(targetId).slideToggle(); 

        if ($(this).text() === 'Ver más') {
            $(this).text('Ver menos');
        } else {
            $(this).text('Ver más');
        }
    });

});