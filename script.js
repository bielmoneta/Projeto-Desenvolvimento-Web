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

//Modo DarkMode
const darkModeButton = document.getElementById("darkmode");
const body = document.body;

const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
if (darkModeEnabled) {
  body.classList.add("darkmode");
  darkModeButton.classList.add("dark");
}

// modo claro e escuro
darkModeButton.addEventListener("click", () => {
const isDarkMode = body.classList.toggle("darkmode");
darkModeButton.classList.toggle("dark");

// deixa salvo no localStorage
localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});

//Menu Slide
const menuButton = document.getElementById("menu-toggle");
const slideMenu = document.getElementById("slide-menu");

// alterna o menu slide
menuButton.addEventListener("click", () => {
  slideMenu.classList.toggle("open");
});