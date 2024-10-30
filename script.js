document.addEventListener('DOMContentLoaded', function() {
    // Simular envÃ­o de formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado con Ã©xito');
    });

    // AÃ±adir interacciones en enlaces de redes sociales
    const redes = document.querySelectorAll('entrar a la red social');
    redes.forEach(red => {
        red.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Enlace a ' + red.textContent);
        });
    });
});