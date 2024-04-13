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

let imagensPorCard = [
    ['/assets/img_card/projeto8_1.JPG', '/assets/img_card/projeto8_2.JPG', '/assets/img_card/projeto8_3.JPG', '/assets/img_card/projeto8_4.JPG', '/assets/img_card/projeto8_5.JPG', '/assets/img_card/  .JPG'],
    ['/assets/img_card/projeto1_1.JPG', '/assets/img_card/projeto1_2.JPG', '/assets/img_card/projeto1_3.JPG'],
    ['/assets/img_card/projeto2_1.JPG', '/assets/img_card/projeto2_2.JPG', '/assets/img_card/projeto2_3.JPG'],
    ['/assets/img_card/projeto3_1.JPG', '/assets/img_card/projeto3_2.JPG', '/assets/img_card/projeto3_3.JPG', '/assets/img_card/projeto3_4.JPG'],
    ['/assets/img_card/projeto4_1.JPG', '/assets/img_card/projeto4_2.JPG', '/assets/img_card/projeto4_3.JPG'],
    ['/assets/img/foto5.jpg'],
    ['/assets/img_card/projeto6_1.JPG', '/assets/img_card/projeto6_2.JPG', '/assets/img_card/projeto6_3.JPG'],
    ['/assets/img_card/projeto7_1.JPG', '/assets/img_card/projeto7_2.JPG']
];

let indiceImagemAtual = [0, 0, 0, 0, 0, 0, 0, 0];

function atualizarImagem(cardIndex) {
    let imagensDoCard = imagensPorCard[cardIndex];
    let indiceAtual = indiceImagemAtual[cardIndex];

    let spanItens = document.querySelector('.itens');
    spanItens.style.backgroundImage = `url('${imagensDoCard[indiceAtual]}')`;
};

function proximaImagem(cardIndex) {
    let imagensDoCard = imagensPorCard[cardIndex];
    let indiceAtual = indiceImagemAtual[cardIndex];

    indiceAtual = (indiceAtual + 1) % imagensDoCard.length;
    indiceImagemAtual[cardIndex] = indiceAtual;

    atualizarImagem(cardIndex);
};

function imagemAnterior(cardIndex) {
    let imagensDoCard = imagensPorCard[cardIndex];
    let indiceAtual = indiceImagemAtual[cardIndex];

    indiceAtual = (indiceAtual - 1 + imagensDoCard.length) % imagensDoCard.length;
    indiceImagemAtual[cardIndex] = indiceAtual;

    atualizarImagem(cardIndex);
};

document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
        document.querySelector('.card.ativo')?.classList.remove('ativo');
        card.classList.add('ativo');
        atualizarImagem(index);
    });
});

document.querySelector('.direita').addEventListener('click', () => {
    let cardAtivo = document.querySelector('.card.ativo');
    let cardIndex = Array.from(document.querySelectorAll('.card')).indexOf(cardAtivo);
    proximaImagem(cardIndex);
});

document.querySelector('.esquerda').addEventListener('click', () => {
    let cardAtivo = document.querySelector('.card.ativo');
    let cardIndex = Array.from(document.querySelectorAll('.card')).indexOf(cardAtivo);
    imagemAnterior(cardIndex);
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

// APARECER O NAV

menuBurguer.addEventListener('click', function () {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    menuBurguer.classList.add('active');
});

navMenu.addEventListener('click', function () {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    clicado = true
    if (clicado) {
        menuBurguer.classList.remove('active');
        menuBurguer.classList.toggle('open');
    }
});


