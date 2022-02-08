

           /*****  views  *******/

const viewsEl = document.getElementById('count-views')    

updateViews()

function updateViews() {
  fetch('https://api.countapi.xyz/update/psivak/webpage/?amount=1')
   .then(res => res.json())
   .then(res => {
     viewsEl.innerHTML = res.value
    })
}
