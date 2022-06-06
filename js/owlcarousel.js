

const loading = document.querySelector('.project-content ul')

// direction from server
 const urlForCarousel = 'https://firstserver.peter119.repl.co/Adobe_Projects';

 const urlForPopUp = 'https://firstserver.peter119.repl.co/Adobe_PopUps';


  //  data for carousel
 async function getData () {

     try {
         // loading text
         loading.innerHTML = ` 
         <button class="btn btn-dark ms-5" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
         </button>   
         `

         const res = await fetch(urlForCarousel)
         const data = await res.json()
         //console.log(data)
         return data

         //displayOwlCarousel(data) 
         
     } catch (err) {
         console.log(err)
         loading.innerHTML = '<h4 class="loading text-center">There is a problem with server.</h4>'
     }
 }



   // display owl 
 const displayOwlCarousel = (data) => {
   
    const owlOutput = data.map(foto => {
        return `
           <div class="item">
           <img src="${foto.img}" data-bs-toggle="modal" data-bs-target="#exampleModal${foto.id}" alt="img">
           </div>
        `
    }).join('')
    /* console.log(owlOutput)
    const owlCarousel = document.querySelector('.owl-carousel')
    owlCarousel.innerHTML = owlOutput */
    const owlData = ` <div class="owl-carousel owl-theme">${owlOutput}</div>`
    loading.innerHTML = `<div class="loading-adobe-projects"> ${owlData} </div>`

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

 // lebo getData je asyng return me da pending a start bud asyng alebo .then
 const start = async() => {
     const data = await getData()
     displayOwlCarousel(data)
 }

 start()

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
 


