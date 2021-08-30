let hamburger = document.getElementById('hamburger');
let mobile_menu = document.getElementById('mobile_menu');
let times = document.getElementById('fa-times');
let header = document.getElementById('header');
/*let mobile_menu_items = document.getElementsByClassName('mobile_menu_items';)*/

document.querySelectorAll('.mobile_menu_items').forEach((item) => {
    item.addEventListener('click', () => {
      mobile_menu.style.display = 'none';
      times.style.display = "none";
      hamburger.style.display = 'block';
    });
  });

hamburger.addEventListener('click', function() {
    mobile_menu.style.display = 'block';
    times.style.display = 'block';
    hamburger.style.display = 'none';
    /*header.style.display = 'none';*/
});

times.addEventListener('click', function() {
    mobile_menu.style.display = 'none';
    times.style.display = 'none';
    hamburger.style.display = 'block';
    /*header.style.display = 'none';*/
});