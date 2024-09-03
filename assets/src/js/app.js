let app = {
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
    }
}