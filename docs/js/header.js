document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Переключение бургер-меню
  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    navLinks.classList.toggle('nav-active');
  });

  // Для мобильных устройств: открытие/закрытие подменю по клику
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
      // Чтобы не закрывался весь бургер-меню при клике
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('open');

        const submenu = dropdown.querySelector('.dropdown-menu');
        if (submenu.style.display === 'block') {
          submenu.style.display = 'none';
        } else {
          submenu.style.display = 'block';
        }
      }
    });
  });

  // При изменении размера окна - убираем открытые меню, чтобы не осталось багов
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('nav-active');
      burger.classList.remove('toggle');
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
        const submenu = dropdown.querySelector('.dropdown-menu');
        if (submenu) submenu.style.display = '';
      });
    }
  });
});
