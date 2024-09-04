let app = {

    init: function () {
        const navLinks = document.querySelectorAll('#navbar-sticky a');
        navLinks.forEach(link => {
            link.addEventListener('click', app.closeNavbar);
        });

        app.initSplide();
    },

    initSplide: function () {
        var splide = new Splide( '#clientSlide', {
            type   : 'loop',
            perPage: 5,
            arrows: false,
            pagination: true,
            autoplay: true,
            interval: 3000,
            gap: '1rem',
            breakpoints: {
                1200: {
                    perPage: 4,
                },
                992: {
                    perPage: 3,
                },
                575: {
                    perPage: 2,
                },
          }
        });
        splide.mount();
    },

    scrollToElementById: function (elementId) {
        const element = document.getElementById(elementId);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - 65;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with ID "${elementId}" not found.`);
            }      
    },

    closeNavbar: function() {
        const toggleButton = document.getElementById('navbar-toggler');
        if (toggleButton) {
            toggleButton.click();
        }
    }
}

document.addEventListener('DOMContentLoaded', app.init);