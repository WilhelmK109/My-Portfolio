
/*=============Contact form email validation============*/

const validateForm = document.querySelector('.form');
const errorMsg = document.querySelector('.msg');

validateForm.addEventListener('submit', (event) => {
  const emailValue = document.getElementById('email').value;
  if (emailValue.toLowerCase() !== emailValue) {
    event.preventDefault();
    errorMsg.classList.add('active');
    errorMsg.innerHTML =
      'Not sent. Email address should be in lowercase letters';
    event.preventDefault();
  } else {
    validateForm.submit();
  }
});
