
const portada = document.getElementById("portada");
const contenido = document.getElementById("contenido");
const audio = document.getElementById("introAudio");

document.querySelector('#portada img').addEventListener('click', function() {
  portada.classList.add('cerrar-bg');
  document.querySelector('.derecha').classList.add('cerrar');
  setTimeout(() => {
    // Muestra el contenido real y oculta la portada
    contenido.classList.add('visible');
    portada.style.display = 'none';
  }, 2000); // El tiempo aquí debe ser igual al de la animación CSS (por ejemplo, 5s = 5000ms)
});


const eventDate = new Date("July 19, 2025 18:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
    document.getElementById("countdown").innerHTML = "¡Ya comenzó la fiesta!";
    clearInterval(countdownFunction);
    return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
    `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
}, 1000);



const animados = document.querySelectorAll('.animado');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Solo una vez
    }
    });
}, {
    threshold: 0.1
});

animados.forEach(el => observer.observe(el));