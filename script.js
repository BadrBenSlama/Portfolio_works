const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile_menu');
const times = document.getElementById('fa-times');
const times2 = document.getElementById('close_icon');
const body = document.querySelector('body');
const backimg = document.getElementById('backimg');
const mainContainer = document.querySelector('.main_container');
const aboutContainer = document.querySelector('.about');
const contactContainer = document.getElementById('contact');
const popupContainer = document.querySelector('.popup_container');

document.querySelectorAll('.mobile_items').forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    times.style.display = 'none';
    hamburger.style.display = 'block';
    body.style.overflow = 'scroll';
    backimg.style.filter = 'blur(0px)';
    mainContainer.style.filter = 'blur(0px)';
  });
});

// Event Listeners
hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  times.style.display = 'block';
  hamburger.style.display = 'none';
  body.style.overflow = 'hidden';
  backimg.style.filter = 'blur(5px)';
  mainContainer.style.filter = 'blur(5px)';
});

times.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  times.style.display = 'none';
  hamburger.style.display = 'block';
  body.style.overflow = 'scroll';
  backimg.style.filter = 'blur(0px)';
  mainContainer.style.filter = 'blur(0px)';
});

times2.addEventListener('click', () => {
  popupContainer.style.display = 'none';
  mainContainer.style.filter = 'blur(0px)';
  aboutContainer.style.filter = 'blur(0px)';
  contactContainer.style.filter = 'blur(0px)';
  body.style.overflow = 'scroll';
});

// blur any items
function blurItem(items) {
  items.forEach((item) => {
    item.style.filter = 'blur(5px)';
  });
}
// Array of html content
const workProjects = [
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    info: ['CANOPY', 'Back End Dev', '2015'],
    image: {
      infoImage: './img/circle.png',
      imageUrl: '.img/Snapshoot_Portfolio1.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    title: 'Multi-Post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    info: ['CANOPY', 'Back End Dev', '2015'],
    image: {
      infoImage: './img/circle.png',
      imageUrl: '.img/Snapshoot_Portfolio2.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    info: ['CANOPY', 'Back End Dev', '2015'],
    image: {
      infoImage: './img/circle.png',
      imageUrl: '.img/Snapshoot_Portfolio3.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    title: 'Multi-Post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    info: ['CANOPY', 'Back End Dev', '2015'],
    image: {
      infoImage: './img/circle.png',
      imageUrl: '.img/Snapshoot_Portfolio4.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    seeLive: '#',
    seeSource: '#',
  },
];
// Loop through projects and fill them up
let htmlDocument = '';

workProjects.forEach((item) => {
  htmlDocument += `<section class="card">
  <div class="right_card">
      <div class="project_highlight">
          <p class="Tonic">${item.title}</p>
          <div class="project_details">
              <h3 class="canopy">${item.info[0]}</h3>
              <div><img class="grey_circle" alt="grey" src="img/circle.png"></div>
              <div class="grey_text">${item.info[1]}<img class="grey_circle" alt="grey"
                      src="img/circle.png">${item.info[2]}
              </div>
          </div>
          <h3 class="project_text">A daily selection of privately personalized reads; no accounts or
              sign-ups
              required.</h3>
      </div>
      <ul class="languages">
          <li class="html_button">html</li>
          <li class="css_button">css</li>
          <li class="js_button">javascript</li>
      </ul>
      <button type="button" class="project_button">See Project</button>
  </div>
  <div><img class="image_container" alt="Snapshoot_Portfolio4" src="img/Snapshoot_Portfolio4.png"></div>
</section>`;
});

mainContainer.innerHTML = htmlDocument;
// event listner for project button click
document.querySelectorAll('.project_button').forEach((projectButton) => {
  projectButton.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    body.style.overflow = 'hidden';
    blurItem([mainContainer, aboutContainer, contactContainer]);
  });
});

// Form validation

const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.querySelector('.error');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    error.style.display = 'block';
    error.textContent = 'Please use LOWER CASE letter in your email ;)';
    error.style.textAlign = 'center';
    error.style.marginTop = '5px';
    error.style.marginBottom = '5px';
    error.style.marginRight = '20px';
  }
});

// Local Storage
const namee = document.getElementById('name');
const message = document.getElementById('message');

form.addEventListener('input', () => {
  const formInput = {
    nameInput: namee.value,
    emailInput: email.value,
    messageInput: message.value,
  };

  localStorage.setItem('forminput', JSON.stringify(formInput));
});

const fetchData = JSON.parse(localStorage.getItem('forminput'));

if (fetchData) {
  namee.value = fetchData.nameInput;
  email.value = fetchData.emailInput;
  message.value = fetchData.messageInput;
}
