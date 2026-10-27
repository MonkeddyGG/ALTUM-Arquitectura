document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       1. Menú Móvil (Hamburguesa)
       ========================================== */
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const header = document.getElementById("header");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        // Animación del ícono
        const icon = hamburger.querySelector("i");
        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll(".nav-menu ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            const icon = hamburger.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });

    /* ==========================================
       2. Efecto en Header al hacer Scroll
       ========================================== */
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
            header.style.height = "75px"; // Se hace más delgado
        } else {
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
            header.style.height = "90px"; // Tamaño original
        }
    });

    /* ==========================================
       3. Scroll Reveal (Animación de aparición)
       ========================================== */
    // Seleccionamos todos los elementos con la clase .reveal
    const reveals = document.querySelectorAll(".reveal");

    // Configuramos el observador
    const revealOptions = {
        threshold: 0.15, // El 15% del elemento debe ser visible para activarse
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Si no está en pantalla, no hace nada
            } else {
                entry.target.classList.add("active"); // Añade la clase para animar
                observer.unobserve(entry.target); // Deja de observar una vez animado
            }
        });
    }, revealOptions);

    // Observar cada elemento
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});