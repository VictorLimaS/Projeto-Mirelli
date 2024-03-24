const menuBurguer = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav_menu');
let clicado = false;

menuBurguer.addEventListener('click', function () {
    this.classList.toggle('open');
});