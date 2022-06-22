


 /* w3school  */
function paragr1() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

 /*  trying other way */
let p2 = document.querySelector('.p2')
let text2 = `I graduated from Solano Community College in Web Development and Design. Also, I am currently a student in Santa Rosa Junior College where I am finishing Full-Stack Development Certificate and I am shceduled to graduate in the fall 2022. I divide my time among school, family life and a part time job. `


p2.innerHTML = text2.substring(0,23) + ' ... ' + '<button onclick="paragr2()" id="btn2">Read More</button>'

function paragr2() {
  const btn2 = document.getElementById('btn2')

  if(btn2.textContent === 'Read More'){
    p2.innerHTML = text2.substring(0,313) + ' <button onclick="paragr2()" id="btn2">Read Less</button>'
  } else {
    p2.innerHTML = text2.substring(0,23) + ' ... ' + '<button onclick="paragr2()" id="btn2">Read More</button>'
  }
}


let p3 = document.querySelector('.p3')
let text3 = `My goal is to remain productive member of our family and continue to achieve success in life, to become a leader and recognized expert in a new field. I admire computerized information technology because I believe it’s going to play even greater role in our life than it does now , beyond one wildest imagination.`


p3.innerHTML = text3.substring(0,38) + ' ... ' + '<button onclick="paragr3()" id="btn3">Read More</button>'

function paragr3() {
  const btn3 = document.getElementById('btn3')

  if(btn3.textContent === 'Read More'){
    p3.innerHTML = text3.substring(0,513) + ' <button onclick="paragr3()" id="btn3">Read Less</button>'
  } else {
    p3.innerHTML = text3.substring(0,38) + ' ... ' + '<button onclick="paragr3()" id="btn3">Read More</button>'
  }
}

let p4 = document.querySelector('.p4')
let text4 = `The past twenty years had taught me how to succeed and shine in crowd, taught me resilience and discipline. I learned to fight for every moment and learned to keep winning momentum. My past career molded my hard working  character and righteous personality. I am used to work under pressure and deliver consistent work in the least amount of time.`

p4.innerHTML = text4.substring(0,54) + ' ... ' + '<button onclick="paragr4()" id="btn4">Read More</button>'

function paragr4() {
  const btn4 = document.getElementById('btn4')

  if(btn4.textContent === 'Read More'){
    p4.innerHTML = text4.substring(0,513) + ' <button onclick="paragr4()" id="btn4">Read Less</button>'
  } else {
    p4.innerHTML = text4.substring(0,54) + ' ... ' + '<button onclick="paragr4()" id="btn4">Read More</button>'
  }
}

let p5 = document.querySelector('.p5')
let text5 = `The past twenty years had taught me how to succeed and shine in crowd, taught me resilience and discipline. I learned to fight for every moment and learned to keep winning momentum. My past career molded my hard working  character and righteous personality. I am used to work under pressure and deliver consistent work in the least amount of time.`

p5.innerHTML = text5.substring(0,54) + ' ... ' + '<button onclick="paragr5()" id="btn5">Read More</button>'

function paragr5() {
  const btn5 = document.getElementById('btn5')

  if(btn5.textContent === 'Read More'){
    p5.innerHTML = text5.substring(0,513) + ' <button onclick="paragr5()" id="btn5">Read Less</button>'
  } else {
    p5.innerHTML = text5.substring(0,54) + ' ... ' + '<button onclick="paragr5()" id="btn5">Read More</button>'
  }
}









