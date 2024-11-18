let currentIndex = 0;
const cards = document.querySelectorAll('.integrantes-card'); 
const totalCards = cards.length; 

function moverCard(direction) {
    currentIndex += direction;

    if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    }

    atualizarCarrossel();
}

function atualizarCarrossel() {
    const container = document.querySelector('.integrantes-container');
    container.style.transform = `translateX(-${currentIndex * 320}px)`; 
}

document.addEventListener('DOMContentLoaded', atualizarCarrossel);