

  let icon = document.querySelector('.bi-toggle-on')
 
    

    let titleH1 = document.querySelector('.title-h1')
    let titleH3 = document.querySelector('.title-h3')
    let titleImg = document.querySelector('.imgtitle')
    let texts = document.querySelector('.texts')
    let alink = document.getElementsByTagName("a");
    let nav = document.querySelector('.fa-bars')
    let dropdown = document.querySelector('.dropdown')
    let w = document.documentElement.clientWidth || window.innerWidth

    
 function togglePage() {
  
   if(icon.classList.contains('bi-toggle-on')){
     icon.classList.replace('bi-toggle-on','bi-toggle-off' )
     icon.style.color = 'white'
     document.body.style.backgroundColor = '#3e054d'
     /* document.body.style.backgroundImage = "url('../main.gif')";
     document.body.style.backgroundRepeat = "no-repeat";
     document.body.style.backgroundSize = "100%"; */
     titleH1.style.color = 'white'
     titleH1.innerHTML = 'Front End Developer'
     titleH3.style.color = 'white'
     titleH3.innerHTML = 'Javascript'
     texts.style.color = 'white'
     dropdown.style.backgroundColor = '#3e054d'

     // mobile nav
     if (w < 768) {
      nav.style.color = 'white'
      dropdown.style.backgroundColor = '#4f135e'
     }

     //all links
     for (let i = 0 ; i < alink.length; i++) {    
       alink[i].style.color = 'white';
     }
     
    
   } else {
     icon.classList.replace('bi-toggle-off','bi-toggle-on' )
     icon.style.color = ''
     document.body.style.backgroundColor = ''
     //document.body.style.backgroundImage = "";
     document.body.style.backgroundImage = ''
     titleH1.style.color = ''
     titleH1.innerHTML = 'Meet Peter'
     titleH3.style.color = ''
     titleH3.innerHTML = 'Web Designer and Developer'
     texts.style.color = ''
      nav.style.color = ''
      dropdown.style.backgroundColor = ''
     
     for (let i = 0 ; i < alink.length; i++) {    
       alink[i].style.color = '';
      }
     }

    }

