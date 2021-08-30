const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile_menu');
const times = document.getElementById('fa-times');
const body = document.querySelector('body');

document.querySelectorAll('.mobile_items').forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    times.style.display = 'none';
    hamburger.style.display = 'block';
    body.style.overflow = 'scroll';
  });
});

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  times.style.display = 'block';
  hamburger.style.display = 'none';
  body.style.overflow = 'hidden';
});

times.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  times.style.display = 'none';
  hamburger.style.display = 'block';
  body.style.overflow = 'scroll';
});
