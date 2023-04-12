const menu = document.querySelector('nav ul');
const garis = document.querySelector('.garis');

garis.addEventListener('click', function () {
   menu.classList.toggle('active');
});
