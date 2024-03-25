// HAMBURGUER

const menuBurguer = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav_menu');
let clicado = false;

menuBurguer.addEventListener('click', function () {
    this.classList.toggle('open');
});

// CARROSSEL

const imagens = [
    ["/assets/img/fundomain.JPG", "/assets/img/fundomain.JPG", "/assets/img/fundomain.JPG", "/assets/img/fundomain.JPG", "/assets/img/fundomain.JPG"],
    ["img1_card2.jpg", "img2_card2.jpg", "img3_card2.jpg", "img4_card2.jpg", "img5_card2.jpg"],
    ["img1_card3.jpg", "img2_card3.jpg", "img3_card3.jpg", "img4_card3.jpg", "img5_card3.jpg"],
    ["img1_card4.jpg", "img2_card4.jpg", "img3_card4.jpg", "img4_card4.jpg", "img5_card4.jpg"],
    ["img1_card5.jpg", "img2_card5.jpg", "img3_card5.jpg", "img4_card5.jpg", "img5_card5.jpg"],
    ["img1_card6.jpg", "img2_card6.jpg", "img3_card6.jpg", "img4_card6.jpg", "img5_card6.jpg"],
    ["img1_card7.jpg", "img2_card7.jpg", "img3_card7.jpg", "img4_card7.jpg", "img5_card7.jpg"],
    ["img1_card8.jpg", "img2_card8.jpg", "img3_card8.jpg", "img4_card8.jpg", "img5_card8.jpg"]
];

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            document.getElementById('imgs').style.display = 'flex';
        });
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('imgs').style.display = 'none';
    });
});


