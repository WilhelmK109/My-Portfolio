const hamMenu = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-menu");

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu').forEach((navLink) => navLink.addEventListener('click', () => {
  hamMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));

//Contact form email validation section
const validateForm = document.querySelector('.form');
const errorMsg = document.querySelector('.msg');
errorMsg.className = 'msg';

validateForm.addEventListener('submit', (event) => {
  const emailValue = document.getElementById('email').value;
  if (emailValue.toLowerCase() !== emailValue) {
    event.preventDefault();
    errorMsg.classList.add('active');
    errorMsg.innerHTML = 'Not sent, email should be in lowercase letters';
  } else {
    validateForm.submit();
  }
});
