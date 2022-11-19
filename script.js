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

// Contact form email validation
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

/*================Popup Window================*/

const ViewHiddenItems = (project_items) => {
  const headerDetails = document.querySelector('.popup-header-container h2');
  headerDetails.textContent = project_items.header;

  const technologiesList = document.querySelector('.post-stories-tech-list');

  document.querySelectorAll('.post-stories-tech').forEach(element => {
      element.remove();
  });

  project_items.technologies.forEach(element => {
      const technnologies_list_item = document.createElement('li');
      technnologies_list_item.classList.add('.post-stories-tech');
      technnologies_list_item.textContent = element;
      technologiesList.appendChild(technnologies_list_item);
  });

  document.querySelector('.popup-info-div img').setAttribute('src', project_items.img_src);
  document.querySelector('.popup-paragraph-container p').textContent = project_items.paragraph;

  const popupDetails = document.querySelector('.popup-container');
  popupDetails.classList.toggle('active');
};

const projectDetails = [
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

function CreateProjectCard (project_items) {

  const projectCardDiv = document.createElement('div');
  projectCardDiv.classList.add('card');
  document.querySelector('.work-container').appendChild(projectCardDiv);

  const projectButton = document.createElement('button');
  projectButton.classList.add('card-hover');
  projectButton.addEventListener('click', function (){
    ViewHiddenItems(project_items);
  });

  projectCardDiv.appendChild(projectButton);

  const projectDetailsDiv = document.createElement('div');
  projectDetailsDiv.classList.add('card-2');
  projectCardDiv.appendChild(projectDetailsDiv);

  const projectHeader = document.createElement('h2');
  projectHeader.textContent = project_items.header;
  projectDetailsDiv.appendChild(projectHeader);

  const projectText = document.createElement('p');
  projectText.textContent = project_items.paragraph;
  projectDetailsDiv.appendChild(projectText);

  const cardTechList = document.createElement('ul');
  cardTechList.classList.add('card-tech-list');
  projectDetailsDiv.appendChild(cardTechList);

  for(let i = 0; i < 3; i++){
      const cardTechListItem = document.createElement('li');
      cardTechListItem.classList.add('card-tech')
      if(i === 0) {cardTechListItem.classList.add('first-tech');}
      cardTechListItem.textContent = project_items.technologies[i];
      cardTechList.appendChild(cardTechListItem);
  }

  const seeProjectDiv = document.createElement('div');
  seeProjectDiv.classList.add('see-project-btn-div');
  projectCardDiv.appendChild(seeProjectDiv);

  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('btn')
  seeProjectBtn.textContent = 'See Project';
  seeProjectBtn.addEventListener('onclick', function (){
    ViewHiddenItems(project_items);
  });
  seeProjectDiv.appendChild(seeProjectBtn);
}

for(let i = 0; i < projectDetails.length; i++){
  CreateProjectCard(projectDetails[i]);
}
  
document.querySelector('.cancel-popup-window').addEventListener('click', function (){
  ViewHiddenItems(projectDetails[0]);
});

document.querySelector('.post-stories-btn-div button').addEventListener('click', function (){
  ViewHiddenItems(projectDetails[0]);
});

const selecBtn = document.querySelectorAll('.card-hover');
const selectPopup = document.querySelector('.popup-container');
const selectPopupWindow = document.querySelector('.popup-window-container');
  selecBtn.forEach((btn) => {
    btn.onclick = () => {
      selectPopup.style.display = 'grid';
    }
    function closePopup() {
      selectPopup.classList.remove('.popup-container');
    }
});

