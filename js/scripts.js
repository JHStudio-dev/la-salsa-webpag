/*script para el cambio de estilo de la navbar al hacer scroll*/
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.jh-navbar');
    
    // Solo actuamos si la navbar realmente existe
    if (navbar) {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    } else {
        console.error("No se encontró el elemento .jh-navbar en el DOM");
    }
});