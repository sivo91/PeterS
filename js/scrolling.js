
const main = document.querySelector('main')
const progressBar = document.querySelector('.progress')


function animProgressBar() {

  let scrollDistance = -main.getBoundingClientRect().top
  let progressWidth = (scrollDistance / 
    ( main.getBoundingClientRect().height - document.documentElement.clientHeight )) * 100

    let value = Math.floor(progressWidth)
    console.log(value)

   progressBar.style.width = value + '%'

   if(value < 0) {
     progressBar.style.width = '0%'
   }
}



window.addEventListener('scroll', animProgressBar)

