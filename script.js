document.addEventListener("DOMContentLoaded", function() {
    // Mostrar los botones con un fade desde su centro
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.add('fade-up');
    });

    // Mostrar el cuadro de texto al hacer clic en cualquier botón
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const textBox = document.getElementById('text-box');
            textBox.style.display = 'block';
            textBox.classList.add('fade-up');
            // Aquí puedes insertar el texto dentro del cuadro de texto
        });
    });

    // Mostrar el cuadro de video al hacer clic en el botón del medio
    const button2 = document.getElementById('button2');
    button2.addEventListener('click', function() {
        const videoBox = document.getElementById('video-box');
        videoBox.style.display = 'block';
        videoBox.classList.add('fade-up');
        // Aquí puedes insertar el código para reproducir el video de YouTube
        // Puedes usar la API de YouTube o simplemente insertar un iframe con el video
    });

    // Reiniciar la página al hacer clic en el botón de inicio
    const buttonHome = document.getElementById('buttonHome');
    buttonHome.addEventListener('click', function() {
        window.location.reload();
    });
});
