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

//Modo DarkMode e Menu Slide
// Seleção dos elementos
const darkModeButton = document.getElementById("darkmode");
const menuButton = document.getElementById("menu-toggle");
const slideMenu = document.getElementById("slide-menu");
const body = document.body;

// Carrega o estado inicial do modo escuro do localStorage
const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
if (darkModeEnabled) {
  body.classList.add("darkmode");
  darkModeButton.classList.add("dark");
}

// Alterna entre os modos claro e escuro
darkModeButton.addEventListener("click", () => {
  const isDarkMode = body.classList.toggle("darkmode");
  darkModeButton.classList.toggle("dark");

  // Salva o estado no localStorage
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});

// Alternar menu slide
menuButton.addEventListener("click", () => {
  slideMenu.classList.toggle("open");
});
