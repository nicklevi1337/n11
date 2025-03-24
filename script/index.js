// Функция для открытия и закрытия бургер-меню
function toggleMenu() {
  const burgerMenu = document.getElementById('burgerMenu');
  const burger = document.getElementById('burger');
  burgerMenu.classList.toggle('open');
  burger.classList.toggle('open');
}

// Функция для закрытия меню при нажатии на крестик
function closeMenu() {
  const burgerMenu = document.getElementById('burgerMenu');
  const burger = document.getElementById('burger');
  burgerMenu.classList.remove('open');
  burger.classList.remove('open');
}


// Функция для прокрутки наверх
function scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавная прокрутка
}

// Показываем кнопку, когда прокрутили вниз
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
if (window.scrollY > 300) { // Показываем кнопку после 300px прокрутки
    scrollToTopButton.classList.add('visible');
} else {
    scrollToTopButton.classList.remove('visible');
}
});



function toggleCallbackMenu() {
const menu = document.getElementById('callbackMenu');
if (menu.style.display === 'block') {
    menu.style.display = 'none';
} else {
    menu.style.display = 'block';
}
}

