

  
  import  jersy from "./jersy.js"
  import datastats from './datastats.js'

 
 /* toggle */

 function toggleClass() {
    var x = document.querySelector('.hamb')
    let nav = document.querySelector('nav')

      if (x) {
       nav.style.top = '-10px'
       x.style.visibility = 'hidden'
      } else {
        nav.style.top = '-220px'
      }
    }



 //  SHOW DRESY

 const modal = document.querySelector('.modal')
 const panel = document.querySelector('.panel-dresy')
 const btnContainer = document.querySelector('.btn-container')
 

 // DOCUMENT EVENT po natiahnuti dam even na logo

 
let pages = []
let index = 0

// outside lebo ju budem vkladat inde na refresh udajov
const setupUI = () => {
   display(pages[index])
   displayButtons(btnContainer, pages, index)
   showModal()
   toolTip()

}


let screenSize = document.getElementById('windowSize')

const initApp = async () => {
 pages = paginate(jersy)
 setupUI()
 resizing()
  
 //console.log(screen.width)
}


const showModal = () => {
   const logoT = document.querySelectorAll('.logoteamu')
 //console.log(logoT)

   // select single logo
   logoT.forEach(item => {   // should call logo instead item
   //console.log(item)
   item.addEventListener('click', (e) => {
    // trafi cisielko
     //console.log(e.currentTarget.dataset.id)
     const logoID = e.currentTarget.dataset.id
     //console.log(logoID)

     // SHOW MODAL & STATS & FOTOS
     modal.innerHTML = datastats.map( item => {
     if(logoID == item.id){
       modal.classList.add('showit') 
     return `
        <div class="bgmodal"></div>
      
        <div class="card" style="width: 350px;">
        <img src="${item.img}" class="card-img-top" alt="img">
        <div class="card-body textbox">
          <h6>Team: ${item.Team}</h6>
          <h6>League: ${item.League}</h6>
          <h6>Country: ${item.Country}</h6>
          <h6>Years: ${item.Years}</h6>
          <h6>Seassons: ${item.Seassons}</h6>
          <h6>Games: ${item.Games}</h6>
          <h6>Goals: ${item.Goals}</h6>
          <h6>Assists: ${item.Assists}</h6>
          <h6>Points: ${item.Points}</h6>
        </div>
      </div>

      <button type="button" class="btn btn-info closebtn">Close</button>
        
     `
    } 
   }).join('') 
   
       // for future add to line 466 for total stats
      /* <i class="fas fa-poll total-stats"></i> */

    
  //  CLOSE MODAL 
 const closeModal = document.querySelectorAll('.closebtn')

          closeModal.forEach(function(done) {
          //console.log(done) ok
          done.addEventListener('click', function(e) {
          const modal = done.parentElement
          
          modal.classList.remove('showit')
          e.preventDefault()
          })
          setupUI()
        }) 

    })
  })
}


btnContainer.addEventListener('click',  function (e) {
  
     if(e.target.classList.contains('btn-container')) return
     if(e.target.classList.contains('page-btn')) {
       //console.log(e.target.dataset.index)
       index = parseInt(e.target.dataset.index)
       setupUI()
     }
     // to right 
     if (e.target.classList.contains('next-btn')) {
       index++
       if(index > pages.length - 1) {
         index = 0
       }
       setupUI()
     }
    // to left
     if (e.target.classList.contains('prev-btn')) {
       index--
       if(index < 0) {
         index = pages.length - 1
       }
       setupUI()
     }
 })


const display = (jersy) => {

  const newFollowers = jersy.map( item => {
  return `
  <div class="paneldresu"> 
    <!--  DRESS + LOGO -->
      <img src="${item.imagejersy}"  class="dres" alt="dres" data-bs-toggle="tooltip" data-bs-placement="top" title="${item.team}">
      <img src="${item.imagelogo}"  class="logoteamu" data-id="${item.id}" alt="orlando">
  </div>
  `
  }).join('') 
  //console.log(newFollowers)
  panel.innerHTML = newFollowers
}


const paginate = (jersy) => {
  const itemsPerPage = 10
  const numberOfPages = jersy.length / itemsPerPage
  //console.log(numberOfPages)
  const newFollowers = Array.from({length:numberOfPages}, (_, index) => {
    const start = index * itemsPerPage
    return jersy.slice(start, start + itemsPerPage)
  })
  return newFollowers
}


const displayButtons = (btnContainer, pages, activeIndex) => {
  //console.log(btnContainer, pages, activeIndex)
  let btns = pages.map((_, pageIndex) => {
     return `<button class="page-btn ${ activeIndex === pageIndex ? 'active-btn' : 'null' }" data-index="${pageIndex}">${pageIndex + 1}</button>` 

  })
  btns.push('<button class="next-btn">></button>')
  btns.unshift('<button class="prev-btn"><</button>')
  btnContainer.innerHTML = btns.join('')
}


const resizing = () => {
  console.log(screen.width)
  /* if(screen.width < 769 ) {
    //console.log('ipad size')
   document.querySelector('.btn-container').style.width = '90%'
   
  } */
}


// tooltip bootstrap on jersey
function toolTip(){
   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
}


 //MUSI BYT POD INIT FUNCTION 
window.addEventListener('load', initApp)






