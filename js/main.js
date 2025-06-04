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
    // Ya no hay nada de IntersectionObserver ni animaciones
  }, 2000); // El tiempo aquí debe ser igual al de la animación CSS
});

// ==== Cuenta regresiva ====
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

// Carrusel personalizado Pau-Tazas
const imagenesPersonal = [
  "images/Pau.jpg",
  "images/Tazas.png"
];
let actualPersonal = 0;

function mostrarImagenPersonal(idx) {
  actualPersonal = idx;
  document.getElementById("carrusel-img-personal").src = imagenesPersonal[actualPersonal];
  // Indicadores activos
  let indicadores = document.querySelectorAll('.indicador-personal');
  indicadores.forEach((el, i) => {
    el.classList.toggle('active', i === actualPersonal);
  });
}

function cambiarImagenPersonal(dir) {
  actualPersonal += dir;
  if (actualPersonal < 0) actualPersonal = imagenesPersonal.length - 1;
  if (actualPersonal >= imagenesPersonal.length) actualPersonal = 0;
  mostrarImagenPersonal(actualPersonal);
}

// Inicializa en la primera imagen cuando cargue el DOM
document.addEventListener("DOMContentLoaded", function() {
  mostrarImagenPersonal(0);
});
