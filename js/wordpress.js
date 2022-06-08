
const Loading = document.querySelector('.display-projects')


async function getProjects() {
  try {
         // loading text
         Loading.innerHTML = ` 
         <button class="btn btn-dark vstack mx-auto"  type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
         </button>   
         `
 
         const res = await fetch('../JSON/wpJSON.json')
         const data = await res.json()
         //console.log(data)
         return data

         } catch (err) {
         console.log(err)
         Loading.innerHTML = '<h4 class="loading text-center">There is a problem with server.</h4>'
     } 
}


// display data
async function displayProjects (data) {
   const projectsOutPut = data.map( item => {
     return `
         <div class="project-card">
                  <div class="project-card-img">
                    <img src="${item.img}"  class="project-image" alt="img">
                  </div>
                  <div class="project-content-card">
                    <h5>${item.title}</h5>
                    <h6>${item.describe}</h6>
                    <button type="button" class="btn btn-outline-secondary project-btn"><a href="${item.url}" class="project-link-card" >
                      ${item.icon}
                      </i> Project</a></button>
                  </div>
                </div>
     `
   }).join('')

   const output = ` <div class="projects-container"> ${projectsOutPut} </div>`;
   Loading.innerHTML = output

}

const start = async () => {
  const data = await getProjects()
  displayProjects(data)
}

start()