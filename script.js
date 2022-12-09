/*====================Mobile Menu====================*/
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

            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')

            && (storage && storage.length !== 0);
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

  const getInput = JSON.parse(localStorage.getItem('data'));

  if (getInput) {
    validateForm.name.value = getInput.fullName;
    validateForm.message.value = getInput.message;
    validateForm.email.value = getInput.email;
  }
}

const savedData = JSON.parse(localStorage.getItem(1));
if (savedData !== null) {
  fName.value = savedData.name;
  uEmail.value = savedData.email;
  uMessage.value = savedData.message;
}

/*==========POPUP WINDOW==========*/
function showPopup() {
  document.querySelector('.popup-window-container');
  document.querySelector('.popup-container');
}

var projectCardData = [
  {
      header: "Profesional Art Printing Data More",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Snapshoot-Portfolio.png",
      liveLink: '#',
      sourceLink: '#',
  },
  {
      header: "Data Dashboard Healthcare",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Snapshoot-Portfolio.png",
      liveLink: '#',
      sourceLink: '#',
  },
  {
      header: "Website Portfolio",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Img-1.png",
      liveLink: '#',
      sourceLink: '#',
  },
  {
      header: "Profesional Art Printing Data",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Snapshoot-Portfolio.png",
      liveLink: '#',
      sourceLink: '#',
  },
  {
      header: "Profetional Art Printing Data More",
      paragraph: "We must create better relations with the EARTHLINGS",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Img-1.png",
      liveLink: '#',
      sourceLink: '#',
  },
  {
      header: "Website Portfolio",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Snapshoot-Portfolio.png",
      liveLink: '#',
      sourceLink: '#',
  }
];

function CreateProjectCard (project_card) {

  const projectCardDiv = document.createElement('div');
  projectCardDiv.classList.add('card');
  document.querySelector('.work-container').appendChild(projectCardDiv);

  const projectButton = document.createElement('button');
  projectButton.classList.add('card-hover');
  projectButton.addEventListener('click', function (){
    displayPopupItems(project_card);
  });

  const projectCardDataDiv = document.createElement('div');
  projectCardDataDiv.classList.add('card-2');

  let projectHeader = document.createElement('h2');
  projectHeader.textContent = project_card.header;

  let projectText = document.createElement('p');
  projectText.textContent = project_card.paragraph;

  let cardTechList = document.createElement('ul');
  cardTechList.classList.add('card-tech-list');

  projectCardDiv.appendChild(projectButton);
  projectCardDiv.appendChild(projectCardDataDiv);
  projectCardDataDiv.appendChild(projectHeader);
  projectCardDataDiv.appendChild(projectText);
  projectCardDataDiv.appendChild(cardTechList);

  for(let i = 0; i < 3; i++){
      let cardTechListItem = document.createElement('li');
      cardTechListItem.classList.add('card-tech')
      if(i === 0) {cardTechListItem.classList.add('first-tech');}
      cardTechListItem.textContent = project_card.technologies[i];
      cardTechList.appendChild(cardTechListItem);
  }

  const seeProjectDiv = document.createElement('div');
  seeProjectDiv.classList.add('see-project-btn-div');
  projectCardDiv.appendChild(seeProjectDiv);
  seeProjectDiv.addEventListener('click', function (){
    displayPopupItems(project_card);
  });

  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('btn2')
  seeProjectBtn.textContent = 'See Project';
  seeProjectBtn.addEventListener('onclick', function (){
    displayPopupItems(project_card);
  });
  seeProjectDiv.appendChild(seeProjectBtn);
}

let displayPopupItems = (project_card) => {
  let headerDetails = document.querySelector('.popup-header-container h2');
  headerDetails.textContent = project_card.header;

  let technologiesList = document.querySelector('.popup-tech-list');

  document.querySelectorAll('.popup-tech-list-items').forEach(element => {
      element.remove();
  });

  project_card.technologies.forEach(element => {
      let technnologies_list_item = document.createElement('li');
      technnologies_list_item.classList.add('popup-tech-list-items');
      technnologies_list_item.textContent = element;
      technologiesList.appendChild(technnologies_list_item);
  });

  document.querySelector('.popup-card-details img').setAttribute('src', project_card.img_src);
  document.querySelector('.popup-para-div p').textContent = project_card.paragraph;

  let popupDetails = document.querySelector('.popup-window-container');
  popupDetails.classList.toggle('active');
};

for(let i = 0; i < projectCardData.length; i++){
  CreateProjectCard(projectCardData[i]);
}
  
document.querySelector('.btn').addEventListener('click', function (){
  displayPopupItems(projectCardData[0]);
});

document.querySelector('.btn-div button').addEventListener('click', function (){
  displayPopupItems(projectCardData[0]);
});

function openModal (modal) {
  modal.classList.add('active') 
}

function closeModal(modal) {
  modal.classList.remove('active')
}

let openModalBtn = document.querySelectorAll('[data-modal-target]');
let closeModalBtn = document.querySelector('.close-popup-btn');

openModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    let modal = document.querySelector('.popup-window-container');
    openModal(modal)
  })
})

closeModalBtn.addEventListener('click', () => {
    let modal = document.querySelector('.popup-window-container')
    closeModal(modal)
  })

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button').forEach(trigger => {
    trigger.addEventListener('click', function() {
      document.querySelectorAll('body').forEach(target => target.classList.add('no-scroll'));
    });
  });
  document.querySelectorAll('.close-popup-btn').forEach(trigger => {
    trigger.addEventListener('click', function() {
      document.querySelectorAll('body').forEach(target => target.classList.remove('no-scroll'));
    });
  });
});
