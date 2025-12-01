document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    // Функция для активации следующего элемента
    const rotate = () => {
      // Сбрасываем класс active у текущего элемента
      cases[currentIndex].classList.remove('rotator__case_active');

      // Переходим к следующему индексу, закольцовывая
      currentIndex = (currentIndex + 1) % cases.length;

      // Устанавливаем класс active новому элементу
      cases[currentIndex].classList.add('rotator__case_active');

      // Получаем скорость и цвет из атрибутов текущего элемента
      const speed = cases[currentIndex].dataset.speed || 1000; // default speed = 1000, если не указано
      const color = cases[currentIndex].dataset.color;

      // Устанавливаем цвет, если он указан
      if (color) {
        cases[currentIndex].style.color = color;
      }

      // Запускаем следующий цикл с новой скоростью
      setTimeout(rotate, speed);
    };

    // Инициализируем первый запуск ротатора
    const initialSpeed = cases[currentIndex].dataset.speed || 1000;
    const initialColor = cases[currentIndex].dataset.color;

    if (initialColor) {
      cases[currentIndex].style.color = initialColor;
    }
    setTimeout(rotate, initialSpeed);
  });
});
