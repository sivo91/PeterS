
const cards = document.querySelectorAll('.karticka')

  // SINGLE CLICK - TURN CARD
 cards.forEach(function(card) {
   card.addEventListener('click', flipCard)
 })

 let front, back
 let turnedCard = false


function flipCard() {
  //console.log(this)
  this.classList.toggle('turn')
  let audioEffect = new Audio('../sound/click.mp3')
  audioEffect.play()
  audioEffect.volume = .1

  if(!turnedCard) {
    // prvy click
     turnedCard = true 
     front = this 
  } else {
    // druhy click
    turnedCard = false
    back = this
  }
}

