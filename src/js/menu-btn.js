const btn = document.getElementById('menuButton');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {

  btn.style.outline = "none"
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

})