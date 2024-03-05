document.addEventListener('DOMContentLoaded', function () {
    const switchInput = document.getElementById('switch');
    const htmlElement = document.querySelector('html');
    const logoImg = document.getElementById('logo');
    const barra3 = document.getElementById('barra-3');
    const barra2 = document.getElementById('barra-2');
    const barra1 = document.getElementById('barra-1');
    
    
    switchInput.addEventListener('change', function () {
        const htmlElement = document.querySelector('html');
        const currentTheme = htmlElement.getAttribute('data-bs-theme');

        if (currentTheme === 'dark') {
            
            htmlElement.setAttribute('data-bs-theme', 'light');
            logoImg.setAttribute('src', 'assets/logo-black.png');
            barra3.style.backgroundColor = "#091717"
            barra2.style.backgroundColor = "#091717"
            barra1.style.backgroundColor = "#091717"

        } else {
            
            htmlElement.setAttribute('data-bs-theme', 'dark');
            logoImg.setAttribute('src', 'assets/logo-white.png');
            barra3.style.backgroundColor = "white"
            barra2.style.backgroundColor = "white"
            barra1.style.backgroundColor = "white"
        }
    });
});