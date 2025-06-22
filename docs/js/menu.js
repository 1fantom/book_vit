const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

burger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    burger.click();
  }
});
