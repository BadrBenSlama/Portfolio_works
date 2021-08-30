let hamburger = document.getElementById('hamburger');
let mobile_menu = document.getElementById('mobile_menu');
let times = document.getElementById('fa-times');

hamburger.addEventListener('click', function() {
    mobile_menu.style.display = 'block';
    times.style.display = 'block';
    hamburger.style.display = 'none';
});

times.addEventListener('click', function() {
    mobile_menu.style.display = 'none';
    times.style.display = 'none';
    hamburger.style.display = 'block';
});