
    const portada = document.getElementById("portada");
    const contenido = document.getElementById("contenido");
    const audio = document.getElementById("introAudio");

    portada.addEventListener("click", () => {
      audio.play();
      portada.style.transition = "opacity 1s";
      portada.style.opacity = 0;

      setTimeout(() => {
        portada.style.display = "none";
        contenido.style.display = "block";
        contenido.style.opacity = 0;
        contenido.style.transition = "opacity 1s";
        setTimeout(() => {
          contenido.style.opacity = 1;
        }, 10);
      }, 1000);
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