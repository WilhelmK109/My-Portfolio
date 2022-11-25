
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

/*=================Local Storage==============*/
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (

      e.code === 22

            || e.code === 1014

            || e.name === 'QuotaExceededError'

            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && 

            (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  const inputs = [validateForm.name, validateForm.email, validateForm.message];

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      const dataStorage = {
        fullName: validateForm.name.value,
        email: validateForm.email.value,
        message: validateForm.message.value,
      };

      localStorage.setItem('data', JSON.stringify(dataStorage));
    });
  });

  const getUserInput = JSON.parse(localStorage.getItem('data'));

  if (getInput) {
    validateForm.name.value = getUserInput.fullName;
    validateForm.email.value = getUserInput.email;
    validateForm.message.value = getUserInput.message;
  }
}

const getSavedData = JSON.parse(localStorage.getItem(1));
if (getSavedData !== null) {
  fName.value = getSavedData.name;
  uEmail.value = getSavedData.email;
  uMessage.value = getSavedData.message;
}