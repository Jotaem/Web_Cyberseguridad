$(document).ready(function() {

    // validación del formulario de contacto
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        var email = $('#email').val().trim();
        var isValid = true;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '' || !emailRegex.test(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        } else {
            $('#email').removeClass('is-invalid').addClass('is-valid');
        }

        var formAlert = $('#formAlert');
        formAlert.removeClass('d-none alert-success alert-danger');

        if (isValid) {
            formAlert.addClass('alert-success').text('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            this.reset();
            $('#email').removeClass('is-valid');
        } else {
            formAlert.addClass('alert-danger').text('Por favor, corrige los errores en el formulario.');
        }
        formAlert.removeClass('d-none');
    });

    // Lógica para el Test de Seguridad
    $('#testForm').on('submit', function(event) {
        event.preventDefault();

        var score = 0;
        var totalQuestions = 3;

        // Pregunta 1
        if ($('input[name="q1"]:checked').val() === 'correcto') {
            score++;
        }
        // Pregunta 2
        if ($('input[name="q2"]:checked').val() === 'correcto') {
            score++;
        }
        // Pregunta 3
        if ($('input[name="q3"]:checked').val() === 'correcto') {
            score++;
        }

        var resultText = $('#testResult');
        resultText.removeClass('d-none text-success text-warning text-danger'); 

        if (score === totalQuestions) {
            resultText.addClass('text-success').text('¡Excelente! Has respondido correctamente a todas las preguntas');
        } else if (score >= totalQuestions / 2) {
            resultText.addClass('text-warning').text('¡Bien hecho! pero hay áreas que puedes mejorar');
        } else {
            resultText.addClass('text-danger').text('¡No te desanimes! Sigue aprendiendo para protegerte mejor');
        }
        resultText.removeClass('d-none');
    });

    // Reseteo del form
    $('#securityTestModal').on('hidden.bs.modal', function () {
        $('#testForm')[0].reset();
        $('#testForm :input').prop('disabled', false);
        $('#testResult').addClass('d-none').text('');
    });
});