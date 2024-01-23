const slider = document.querySelector(".slider__container");
const leftButton = document.querySelector(".slider__button_type_left");
const rightButton = document.querySelector(".slider__button_type_right");
const slides = Array.from(document.querySelectorAll(".slider__slide"));
const pointsContainer = document.querySelector(".slider__points");
const slideCount = slides.length; // Получаем количество слайдов
let slideIndex = 0; // Устанавливаем индекс текущего слайда

// создать точки для каждого слайда
for (let i = 0; i < slideCount; i++) {
    const point = document.createElement("span");
    point.classList.add("slider__point");
    pointsContainer.appendChild(point);
    point.addEventListener('click', function() {
      if (i !== slideIndex) { // Если индекс точки не соответствует индексу текущему индексу слайда
        slideIndex = i; // устанавливаем индекс слайда
        updateSlider(); // и обновляем слайдер
      }
    });
  }

function showNextSlide() {
      slideIndex = (slideIndex + 1) % slideCount;
      // Увеличиваем индекс слайда на 1 
      // и возвращаем остаток от деления на количество слайдов, 
      // чтобы получить циклическое поведение
      updateSlider();
  }

function showPreviousSlide() {
      slideIndex = (slideIndex - 1 + slideCount) % slideCount;
      // Уменьшаем индекс слайда на 1, 
      // добавляем общее количество слайдов и возвращаем остаток от деления
      updateSlider();
  }

function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) { // Если индекс слайда соответствует текущему индексу
        slide.style.display = 'block';
        pointsContainer.childNodes[index].classList.add('slider__point_active');
        // Коллекция childNodes содержит список всех детей
        // Добавляем класс для активной точки
      } else {
        slide.style.display = 'none';
        pointsContainer.childNodes[index].classList.remove('slider__point_active');
      }
    });
  }

leftButton.addEventListener('click', showPreviousSlide);
rightButton.addEventListener('click', showNextSlide);

updateSlider();