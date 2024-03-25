// HAMBURGUER

const menuBurguer = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav_menu');
let clicado = false;

menuBurguer.addEventListener('click', function () {
    this.classList.toggle('open');
});

// CARROSSEL
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            document.getElementById('imgs').style.display = 'flex';
        });
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('imgs').style.display = 'none';
    });
});

// IMAGENS DO CARROSSEL

const fotosCards = [
    ['foto1_card1.jpg', 'foto2_card1.jpg', 'foto3_card1.jpg', 'foto4_card1.jpg', 'foto5_card1.jpg'],
    ['foto1_card2.jpg', 'foto2_card2.jpg', 'foto3_card2.jpg', 'foto4_card2.jpg', 'foto5_card2.jpg'],
    ['foto1_card3.jpg', 'foto2_card3.jpg', 'foto3_card3.jpg', 'foto4_card3.jpg', 'foto5_card3.jpg'],
    ['foto1_card4.jpg', 'foto2_card4.jpg', 'foto3_card4.jpg', 'foto4_card4.jpg', 'foto5_card4.jpg'],
    ['foto1_card5.jpg', 'foto2_card5.jpg', 'foto3_card5.jpg', 'foto4_card5.jpg', 'foto5_card5.jpg'],
    ['foto1_card6.jpg', 'foto2_card6.jpg', 'foto3_card6.jpg', 'foto4_card6.jpg', 'foto5_card6.jpg'],
    ['foto1_card7.jpg', 'foto2_card7.jpg', 'foto3_card7.jpg', 'foto4_card7.jpg', 'foto5_card7.jpg'],
    ['foto1_card8.jpg', 'foto2_card8.jpg', 'foto3_card8.jpg', 'foto4_card8.jpg', 'foto5_card8.jpg']
  ];
  
  const itens = document.querySelector('.itens');
  let currentIndex = 0; 

  function updateFoto() {
    itens.style.backgroundImage = `url(${fotosCards[currentIndex]})`;
  }
  
  document.querySelector('.direita').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % fotosCards.length;
    updateFoto();
  });
  
  document.querySelector('.esquerda').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + fotosCards.length) % fotosCards.length;
    updateFoto();
  });

  // SCROLL LENTO DA NAV

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelectorAll("ul li a");

    nav.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

// LINKS

const iconesLink = document.querySelectorAll('.rede1, .rede2, .rede3');

iconesLink.forEach(icon => {
    icon.addEventListener('click', () => {
        let link;
        if (icon.classList.contains('rede1')) {
            link = 'https://wa.me/5513991873274';
        } else if (icon.classList.contains('rede2')) {
            link = 'https://www.instagram.com/mirellioliveira.interiores';
        } else if (icon.classList.contains('rede3')) {
            link = 'https://pin.it/3OwjxV8iy';
        }

        if (link) {
            window.open(link, '_blank');
        }
    });
});
  
