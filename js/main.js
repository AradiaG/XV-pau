const portada = document.getElementById("portada");
const contenido = document.getElementById("contenido");
const audio = document.getElementById("introAudio");

// ANIMACIÓN DE CARTA: Al hacer click en la imagen portada
document.querySelector('#portada img').addEventListener('click', function() {
  portada.classList.add('cerrar-bg');
  document.querySelector('.derecha').classList.add('cerrar');

  // Espera lo que dure tu animación de carta (3s por ejemplo)
  setTimeout(() => {
    contenido.classList.add('visible');
    portada.style.display = 'none';

    // ---- Aquí comienza el código de animación de textos ----
    const animados = document.querySelectorAll('.animado');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Solo una vez por elemento
        }
      });
    }, { threshold: 0.1 });

    animados.forEach(el => observer.observe(el));

    // Extra: fuerza animar los que ya están visibles al cargar (especial para móviles)
    animados.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setTimeout(() => {
          el.classList.add('visible');
          observer.unobserve(el);
        }, 50); // Delay corto solo para asegurar la animación
      }
    });
    // ---- Fin del código de animación de textos ----

  }, 3000); // Cambia este tiempo según tu animación de carta (3s = 3000ms)
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

