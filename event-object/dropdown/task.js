document.addEventListener('DOMContentLoaded', () => {
  // Находим все элементы с классом .dropdown
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    // Обработчик клика по кнопке с классом .dropdown__value
    valueElement.addEventListener('click', () => {
      listElement.classList.toggle('dropdown__list_active');
    });

    // Обработчик клика по каждому пункту списка
    dropdown.querySelectorAll('.dropdown__link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // предотвращает переход по ссылке
        // Обновляем значение в .dropdown__value
        valueElement.textContent = link.textContent.trim();
        // Закрываем список
        listElement.classList.remove('dropdown__list_active');
      });
    });
  });

  // Опционально — закрывать все открытые списки при клике вне любого dropdown
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown__list').forEach(list => {
      if (!list.closest('.dropdown').contains(e.target)) {
        list.classList.remove('dropdown__list_active');
      }
    });
  });
});
