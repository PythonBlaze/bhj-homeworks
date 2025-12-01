document.addEventListener('DOMContentLoaded', () => {
  const book = document.getElementById('book');
  const fontSizes = document.querySelectorAll('.font-size');

  fontSizes.forEach(fontSize => {
    fontSize.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем переход по ссылке

      // Удаляем класс font-size_active у всех элементов font-size
      fontSizes.forEach(item => item.classList.remove('font-size_active'));

      // Добавляем класс font-size_active к текущему элементу
      fontSize.classList.add('font-size_active');

      // Получаем значение data-size
      const size = fontSize.dataset.size;

      // Удаляем классы book_fs-small и book_fs-big
      book.classList.remove('book_fs-small', 'book_fs-big');

      // Добавляем соответствующий класс в зависимости от размера
      if (size === 'small') {
        book.classList.add('book_fs-small');
      } else if (size === 'big') {
        book.classList.add('book_fs-big');
      }
    });
  });
});
