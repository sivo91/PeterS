


const hamb = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const links = document.querySelectorAll('.nav-link')


 hamb.addEventListener('click', ()=> {
  hamb.classList.toggle('active')
  navMenu.classList.toggle('active') 
})


 links.forEach( link => {
  console.log(link)
  link.addEventListener('click', () => {
    hamb.classList.remove('active')
  })
})
