document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// -----
document.addEventListener("DOMContentLoaded", function () {
    // Obtén los elementos h2 y p dentro de la sección de introducción
    const title = document.querySelector('section#introduccion h2');
    const paragraph = document.querySelector('section#introduccion p');

    // Aplica la clase 'appear' después de un breve retraso para simular el efecto de escritura
    setTimeout(function () {
        title.classList.add('appear');
        paragraph.classList.add('appear');
    }, 500); // 500 milisegundos (ajústalo según sea necesario)
});
