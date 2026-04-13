window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroHeight = document.getElementById('hero-container').offsetHeight;
    const fogLayer = document.getElementById('scroll-fog');
    const heroImage = document.getElementById('hero-image');

    // 1. Efecto de niebla que sube:
    // A medida que haces scroll (hasta la mitad del hero), aumenta la opacidad.
    let fogOpacity = Math.min(scrollPosition / (heroHeight * 0.7), 1);
    fogLayer.style.opacity = fogOpacity;

    // 2. Efecto Parallax muy sutil:
    // Mueve la imagen de fondo un poco más lento.
    if (scrollPosition < heroHeight) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
});
