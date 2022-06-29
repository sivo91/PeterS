

const box = document.querySelector('.videosBox')

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

const output = videoData.map(video => {
  return `
    <iframe width="330" height="180" src="${video.src}" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
  `
}).join('')

box.innerHTML = output
