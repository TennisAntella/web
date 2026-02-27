
const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', ()=> menu.classList.toggle('show'));
}
