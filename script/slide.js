document.addEventListener("DOMContentLoaded", () => {
    // Функция для создания независимого слайдера
    function initSlider(sliderSelector, dotSelector) {
        let slideIndex = 1; // Изначальный слайд
        const slides = document.querySelectorAll(`${sliderSelector} img`);
        const dots = document.querySelectorAll(`${dotSelector} .dot`);

        // Функция для отображения конкретного слайда
        function showSlide(n) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            slides.forEach((slide) => (slide.style.display = "none"));
            dots.forEach((dot) => dot.classList.remove("active"));

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add("active");
        }

        // Функция для перемещения слайдов
        function moveSlide(n) {
            showSlide((slideIndex += n));
        }

        // Функция для переключения на конкретный слайд
        function currentSlide(n) {
            showSlide((slideIndex = n));
        }

        // Назначаем события для стрелок
        const prevButton = document.querySelector(`${sliderSelector} .prev`);
        const nextButton = document.querySelector(`${sliderSelector} .next`);
        if (prevButton) prevButton.addEventListener("click", () => moveSlide(-1));
        if (nextButton) nextButton.addEventListener("click", () => moveSlide(1));

        // Назначаем события для точек
        dots.forEach((dot, index) =>
            dot.addEventListener("click", () => currentSlide(index + 1))
        );

        // Инициализация
        showSlide(slideIndex);
    }

    // Инициализируем каждый слайдер по отдельности
    initSlider(".slider1", ".dots1");
    initSlider(".slider2", ".dots2");
});
