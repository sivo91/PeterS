
const awardBox = document.querySelector('.awardsBox')
const medaileBox = document.querySelector('.medaileBox')



const data = [
   {
    team: 'Alaska Aces',
    yr: '2013-2014',
    img : '../awards/akk1.jpg'
    },
   {
    team: 'Alaska Aces',
    yr: '2013-2014',
    img : '../awards/akk2.jpg'
    },
   {
    team: 'Alaska Aces',
    yr: '2013-2014',
    img : '../awards/akk3.jpg'
    },
   {
    team: 'Alaska Aces',
    yr: '2013-2014',
    img : '../awards/akk3.jpg'
    }
   ]

const med = [
  {
    img: '../madials/brondz.jpg',
    team: 'HK Dukla Trencin',
    place: 'Bronze'
  },
  {
    img: '../madials/gold.jpg',
    team: 'HK Dukla Trencin',
    place: 'Gold'
  },
  {
    img: '../madials/silver.jpg',
    team: 'HK Dukla Trencin',
    place: 'Silver'
  }
] 

const output = data.map( box => {
  const { team, yr, img } = box
  return `
    <div class="card ak" style="width: 12rem;">
              <img src="${img}" class=" w-100" class="card-img-top" alt="brondz">
              <div class="card-body">
                <h6 class="card-title text-center">${team}</h6>
                <p class="card-text text-center">${yr}</p>
              </div>
            </div>
  `
}).join('')


const outp = med.map(medails => {
  const {img , place, team} = medails
  return `
    <div class="card tn" style="width: 12rem;">
              <img src="${img}" class=" w-100" class="card-img-top" alt="brondz">
              <div class="card-body">
                <h6 class="card-title text-center">${team}</h6>
                <p class="card-text text-center">${place}</p>
              </div>
            </div>
  `
 }).join('')


medaileBox.innerHTML = outp
awardBox.innerHTML = output



