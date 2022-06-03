
   
 // direction from server
 const urlForCarousel = 'https://firstserver.peter119.repl.co/Adobe_Projects';

 const urlForPopUp = 'https://firstserver.peter119.repl.co/Adobe_PopUps';



  //  data for carousel
 (async function getData () {

     try {
         const res = await fetch(urlForCarousel)
         const data = await res.json()
         console.log(data)

         displayOwlCarousel(data) 
         
     } catch (err) {
         console.log(err)
     }
 })()

   // display owl 
 const displayOwlCarousel = (fotos) => {
   
    const owlOutput = fotos.map(foto => {
        return `
           <div class="item">
           <img src="${foto.img}" data-bs-toggle="modal" data-bs-target="#exampleModal${foto.id}" alt="img">
           </div>
        `
    }).join('')
    console.log(owlOutput)
    const owlCarousel = document.querySelector('.owl-carousel')
    owlCarousel.innerHTML = owlOutput

    owlMechanism()
 } 


   // owl mechanism plugin
const owlMechanism = () => {
  var owl = $('.owl-carousel');
    owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

var owl = $('.owl-carousel2');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
}


// data for popup  NEJDE :|
   (async function getPopUpData() {
    try {
        const res = await fetch(urlForPopUp)
        const data2 = await res.json()
        console.log(data2)
        showPopUP(data2)

    } catch (err) {
        console.log(err)
    }
})()


const showPopUP = (data2) => {
    const modals = document.querySelector('.modals-box')

    const newModals = data2.map(item => {
        return `
           <div class="modal fade" id="exampleModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel${item.id}" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-body">
            <img src="${item.img}" class="adobeImg w-100" alt="img">
          </div>
      </div>
    </div>
        `
    }).join('')
    modals.innerHTML = newModals
} 
 

