const menu = document.querySelector('#menu')
const burguer = document.querySelector("#burguer");

burguer.addEventListener('click',() => { menu.classList.toggle('hidden') })
window.addEventListener('resize', e => {
  if (e.currentTarget.innerWidth > 767 && e.currentTarget.innerWidth < 769) {
    if (!menu.classList.contains('hidden')) menu.classList.add('hidden')
  }
})
