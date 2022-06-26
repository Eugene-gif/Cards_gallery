// Находим все слайды и записываем в константу slides
let slides = document.querySelectorAll(".slide__item");
//Бежим циклом по массиву slides и создаем на каждый элемент массива константу slide
for (const slide of slides) {
  //Отслеживаем событие клика на каждом slide с помощью обработчика событий
  slide.addEventListener("click", () => {
    clearActiveClasses(); // Вызываем функцию удаления класса при клике
    slide.classList.add("slide__item--active"); // Добавляем класс элементу при клике
  });
}

// Функция удаления класса (реализовать можно и также как slide.addEventListner())
function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("slide__item--active");
  });
}
