

const br = '<br>'


 /*  trying other way  next paragr */
let p2 = document.querySelector('.p2')
let text2 = `
I graduated from Solano Community College in Web Development and Design. Also, I am currently a student in Santa Rosa Junior College where I am finishing Full-Stack Development Certificate and I am shceduled to graduate in the fall 2022. I divide my time among school, family life and a part time job. 
${br}${br}
My goal is to remain productive member of our family and continue to achieve success in life, to become a leader and recognized expert in a new field. I admire computerized information technology because I believe it’s going to play even greater role in our life than it does now , beyond one wildest imagination.
${br}${br}
The past twenty years had taught me how to succeed and shine in crowd, taught me resilience and discipline. I learned to fight for every moment and learned to keep winning momentum. My past career molded my hard working character and righteous personality. I am used to work under pressure and deliver consistent work in the least amount of time.
`


p2.innerHTML = text2.substring(0,323) + ' ... ' + '<button onclick="paragr2()" id="btn2">Read More</button>'

function paragr2() {
  const btn2 = document.getElementById('btn2')
  const modal = document.querySelector('.modal-box')

  if(btn2.textContent === 'Read More'){
    p2.innerHTML = text2.substring(0,10000) + ' <button onclick="paragr2()" id="btn2">Read Less</button>'
    modal.style.left = '100px'
    modal.textContent = 'Open'
  } else {
    p2.innerHTML = text2.substring(0,323) + ' ... ' + '<button onclick="paragr2()" id="btn2">Read More</button>'
    modal.style.left = '-200px'
    modal.textContent = 'Close'
    modal.style.transitionDelay = '0.4s'

  }
}














