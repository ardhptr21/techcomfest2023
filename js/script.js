const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  if (navMenu.classList.contains('show')) {
    navToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
