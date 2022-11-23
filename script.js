const hamMenu = document.querySelector('.ham');
const navMenu = document.querySelector('.nav-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu').forEach((navLink) =>
  navLink.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

/*=============Contact form email validation============*/

const validateForm = document.querySelector('.form');
const errorMsg = document.querySelector('.msg');

validateForm.addEventListener('submit', (event) => {
  const emailValue = document.getElementById('email').value;
  if (emailValue.toLowerCase() !== emailValue) {
    errorMsg.classList.add('active');
    event.preventDefault();
    errorMsg.innerHTML =
      'Not sent. Email address should be in lowercase letters';
  } else {
    validateForm.submit();
  }
});
