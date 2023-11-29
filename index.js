
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Aquí es donde implementarás la lógica para enviar los datos a la API
    enviarDatosAPI();
});

function enviarDatosAPI() {
    // Obtener datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Construir el cuerpo de la solicitud
    const datos = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        // Otros campos del formulario

    };
    
    // Enviar datos a la API utilizando fetch
    fetch('https://portal-webs-be.vercel.app/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta de la API:', data);
        // Puedes realizar acciones adicionales según la respuesta de la API
        // Muestra una alerta después de enviar el formulario
        alert('¡Formulario enviado con éxito!');
    })
    .catch(error => {
        console.error('Error al enviar datos a la API:', error);
    });
      // Limpia los valores del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
}