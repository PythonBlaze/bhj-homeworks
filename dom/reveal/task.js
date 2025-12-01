function checkReveal() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();

    // Элемент считается видимым, если его верхняя граница ниже нижней части окна
    // и нижняя граница выше верхней части окна
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('reveal_active');
    } else {
      el.classList.remove('reveal_active');
    }
  });
}

// проверка при прокрутке
window.addEventListener('scroll', checkReveal);

// проверка при загрузке страниицы
window.addEventListener('load', checkReveal);
