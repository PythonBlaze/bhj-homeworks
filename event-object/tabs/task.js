document.addEventListener('DOMContentLoaded', () => {
  // Получаем все вкладки
  const tabs = document.querySelectorAll('.tab');
  // Получаем все содержимое вкладок
  const contents = document.querySelectorAll('.tab__content');

  // Обработчик клика для каждого таба
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Удаляем активный класс у всех вкладок
      tabs.forEach(t => t.classList.remove('tab_active'));
      // Добавляем активный класс выбранной вкладке
      tab.classList.add('tab_active');

      // Скрываем все контейнеры содержимого
      contents.forEach(content => content.classList.remove('tab__content_active'));
      // Показываем содержимое, связанное с этой вкладкой
      contents[index].classList.add('tab__content_active');
    });
  });
});
