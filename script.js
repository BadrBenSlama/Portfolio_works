const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile_menu');
const times = document.getElementById('fa-times');
const body = document.querySelector('body');
const backimg = document.getElementById('backimg');
const mainContainer = document.querySelector('.main_container');

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
