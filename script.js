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
    errorMsg.innerHTML = 'Not sent. Email address should be in lowercase letters';
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

var projectCardData = [
  {
      header: "Profesional Art Printing Data More",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Snapsoot-Portfolio-Large.png",
      liveLink: '#',
      sourceLink: '#',
  },
  {
      header: "Data Dashboard Healthcare",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Snapshoot-Portfolio-Large.png",
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
      img_src: "img/Snapshoot-Portfolio-Large.png",
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
      header: "Website Protfolio",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Snapshoot-Portfolio-Large.png",
      liveLink: '#',
      sourceLink: '#',
  }
];

function CreateProjectCard (project_card) {

  var projectCardDiv = document.createElement('div');
  projectCardDiv.classList.add('card');
  document.querySelector('.work-container').appendChild(projectCardDiv);

  var projectButton = document.createElement('button');
  projectButton.classList.add('card-hover');
  projectButton.addEventListener('click', function (){
    displayPopupItems(project_card);
  });

  projectCardDiv.appendChild(projectButton);

  var projectCardDataDiv = document.createElement('div');
  projectCardDataDiv.classList.add('card-2');
  projectCardDiv.appendChild(projectCardDataDiv);

  var projectHeader = document.createElement('h2');
  projectHeader.textContent = project_card.header;
  projectCardDataDiv.appendChild(projectHeader);

  var projectText = document.createElement('p');
  projectText.textContent = project_card.paragraph;
  projectCardDataDiv.appendChild(projectText);

  var cardTechList = document.createElement('ul');
  cardTechList.classList.add('card-tech-list');
  projectCardDataDiv.appendChild(cardTechList);

  for(let i = 0; i < 3; i++){
      var cardTechListItem = document.createElement('li');
      cardTechListItem.classList.add('card-tech')
      if(i === 0) {cardTechListItem.classList.add('first-tech');}
      cardTechListItem.textContent = project_card.technologies[i];
      cardTechList.appendChild(cardTechListItem);
  }

  var seeProjectDiv = document.createElement('div');
  seeProjectDiv.classList.add('see-project-btn-div');
  projectCardDiv.appendChild(seeProjectDiv);

  var seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('btn')
  seeProjectBtn.textContent = 'See Project';
  seeProjectBtn.addEventListener('onclick', function (){
    displayPopupItems(project_card);
  });
  seeProjectDiv.appendChild(seeProjectBtn);
}

var displayPopupItems = (project_card) => {
  var headerDetails = document.querySelector('.popup-header-container h2');
  headerDetails.textContent = project_card.header;

  var technologiesList = document.querySelector('.post-stories-tech-list');

  document.querySelectorAll('.post-stories-tech').forEach(element => {
      element.remove();
  });

  project_card.technologies.forEach(element => {
      var technnologies_list_item = document.createElement('li');
      technnologies_list_item.classList.add('.post-stories-tech');
      technnologies_list_item.textContent = element;
      technologiesList.appendChild(technnologies_list_item);
  });

  document.querySelector('.popup-info-div img').setAttribute('src', project_card.img_src);
  document.querySelector('.popup-paragraph-container p').textContent = project_card.paragraph;

  var popupDetails = document.querySelector('.popup-window-container');
  popupDetails.classList.toggle('active');
};

for(let i = 0; i < projectCardData.length; i++){
  CreateProjectCard(projectCardData[i]);
}
  
document.querySelector('.cancel-popup-window').addEventListener('click', function (){
  displayPopupItems(projectCardData[0]);
});

document.querySelector('.post-stories-btn-div button').addEventListener('click', function (){
  displayPopupItems(projectCardData[0]);
});

var selectBtn = document.querySelectorAll('.btn');
var closeBtn = document.querySelector('.close-btn');
var selectPopupWindow = document.querySelector('.popup-window-container');
  selectBtn.forEach((btn) => {
    btn.onclick = () => {
      selectPopupWindow.style.display = 'grid';
    }
  })
  
  closeBtn.forEach((btn) => {
    btn.onclick = () => {
      selectPopupWindow.classList.remove('.popup-window-container');
    }
  });




/*var displayPopupItems = (project_card) => {
  var headerDetails = document.querySelector('.popup-header-div h2');
  headerDetails.textContent = project_card.header;
  
  var technologiesList = document.querySelector('.post-stories-tech-list');

  document.querySelectorAll('.post-stories-tech').forEach(element => {
      element.remove();
  });

  project_card.technologies.forEach(element => {
      var technnologies_list_item = document.createElement('li');
      technnologies_list_item.classList.add('post-stories-tech');
      technnologies_list_item.textContent = element;
      technologiesList.appendChild(technnologies_list_item);
  });

  document.querySelector('.popup-info-div img').setAttribute('src', project_card.img_src);
  document.querySelector('.popup-para-container p').textContent = project_card.paragraph;

  var popupDetails = document.querySelector('popup-window-container');
  popupDetails.classList.toggle('active');
};
  

var projectCardData = [
  {
      header: "Profesional Art Printing Data More",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Snapsoot-Portfolio.png",
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
      header: "Website Protfolio",
      paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies: ['html', 'css', 'javascript'],
      img_src: "img/Snapshoot-Portfolio.png",
      liveLink: '#',
      sourceLink: '#',
  }
];

function createProjectCards (project_card) {

  var projectCardDiv = document.createElement('div');
  projectCardDiv.classList.add('card');
  document.getElementsByClassName('.work-container').appendChild(projectCardDiv);

  var projectButton = document.createElement('button');
  projectButton.classList.add('card-hover');
  projectButton.addEventListener('click', function (){
    displayPopupItems(project_card);
  });

  projectCardDiv.appendChild(projectButton);

  var projectDetailsDiv = document.createElement('div');
  projectDetailsDiv.classList.add('card-2');
  projectCardDiv.appendChild(projectDetailsDiv);

  var projectHeader = document.createElement('h2');
  projectHeader.textContent = project_card.header;
  projectDetailsDiv.appendChild(projectHeader);

  var projectText = document.createElement('p');
  projectText.textContent = project_card.paragraph;
  projectDetailsDiv.appendChild(projectText);

  var cardTechList = document.createElement('ul');
  cardTechList.className.add('card-tech-list');
  projectDetailsDiv.appendChild(cardTechList);

  for(let i = 0; i < 3; i++){
      var cardTechListItem = document.createElement('li');
      cardTechListItem.classList.add('card-tech')
      cardTechListItem.textContent = project_card.technologies[i];
      cardTechList.appendChild(cardTechListItem);
      /*if(i === 0) {cardTechListItem.classList.add('first-tech');}*/
  /*}

  var firstTechListItem = document.querySelector(cardTechListItem)[0];
  firstTechListItem.classList.add('first-tech');

  var seeProjectBtnDiv = document.createElement('div');
  seeProjectBtnDiv.classList.add('see-project-btn-div');
  projectCardDiv.appendChild(seeProjectBtnDiv);

  var createSeeProjectBtn = document.createElement('button');
  createSeeProjectBtn.classList.add('btn')
  createSeeProjectBtn.innerHTML = "See Project";
  seeProjectBtnDiv.addEventListener('onclick', function (){
    displayPopupItems(project_card);
  });
  seeProjectBtnDiv.appendChild(createSeeProjectBtn);
}

for (let i = 0; i < projectCardData.length; i++) {
  createProjectCards(projectCardData[i]);
}

document.querySelector('.post-stories-btn-div button').addEventListener('click', function (){
  displayPopupItems(projectCardData[0]);
});

document.querySelector('.cancel-popup-window').addEventListener('click', function (){
  displayPopupItems(projectCardData[0]);
});

document.querySelector('.post-stories button').addEventListener('click', function (){
  displayPopupItems(projectCardData[0]);
});*/

/*var popupWindowSection = document.getElementById("popup-window-section");
var button = document.getElementsByClassName('.btn');

button.onclick = function () {
  if(popupWindowSection.classNmae == "open") {
    // shrink the popup window
    popupWindowSection.className = "";
  } else {
    //epand the popup window
    popupWindowSection.className = open;
 }
};*/
