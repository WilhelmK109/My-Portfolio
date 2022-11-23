const hamMenu = document.querySelector('.ham');
const navMenu = document.querySelector('.nav-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu').forEach((navLink) => navLink.addEventListener('click', () => {
  hamMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));
