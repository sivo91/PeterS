
const awardBox = document.querySelector('.awardsBox')
const medaileBox = document.querySelector('.medaileBox')
const box = document.querySelector('.videosBox')


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

const videoData = [
  {
    src: 'https://www.youtube.com/embed/ZNVmYo6nnZ0'
  },
  {
    src: 'https://www.youtube.com/embed/MyIkQ16n9RI'
  },
  {
    src: 'https://www.youtube.com/embed/c3EzXyf3FFE'
  },
  {
    src: 'https://www.youtube.com/embed/SawfFMiPJdM'
  },
  {
    src: 'https://www.youtube.com/embed/xufdE8Dq7k4'
  },
  {
    src: 'https://www.youtube.com/embed/6yDSAa4eS3I'
  },
  {
    src: 'https://www.youtube.com/embed/OZ1g-jmIUeM'
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

  
    const video = videoData.map(video => {
      return `
        <iframe width="330" height="180" src="${video.src}" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
      `
    }).join('')


medaileBox.innerHTML = outp
awardBox.innerHTML = output
box.innerHTML = video



