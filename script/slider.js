let slideIndex = 1; // Изначальный слайд

// Функция для перемещения слайдов
function moveSlide(n) {
    showSlide(slideIndex += n);
}

// Функция для отображения конкретного слайда
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Функция для обновления слайдов и индикаторов
function showSlide(n) {
    let slides = document.querySelectorAll('.slider img');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Скрываем все слайды
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Убираем активный класс у всех индикаторов
    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    // Показываем текущий слайд и активируем его индикатор
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Инициализация слайдера
showSlide(slideIndex);