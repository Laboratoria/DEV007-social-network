import { auth, db } from "../firebase";
import {
  agregarUnNuevoPost
} from "../lib";

import { getTask } from "../lib";    /*nuevo */
//const taskContainer = document.getElementById('public-container')
window.addEventListener('DOMContentLoaded', async () => {
  const querySnapshot = await getTask()
  //let html = ''
//console.log(querySnapshot)
querySnapshot.forEach(doc => {
  console.log(doc.data())
  //const post = doc.data()
  //html += `
  //<div>
  //<p>${post.contenido}</p>
  //</div>
  //`
  //console.log(taskContainer)
})
//taskContainer.innerHTML = html
})


export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.classList.add('HomeDiv');

  const headerHomepage = document.createElement('div');
  headerHomepage.classList.add('headerHomepage');
  headerHomepage.innerHTML += `
    <div class="leftHome">
      <img src= "./imagenes/logoFinal.png" class = "logoHome" alt= "logo">
    </div>
    <div class="rightHome">
      <button type="button" id="HomeResumePageBtn">
        cerrar sesión
      </button>
    </div>
  `;

  const bottomHomePage = document.createElement('div');
  bottomHomePage.classList.add('bottomHomePage');
 
  const postPublicar = document.createElement('section');
  postPublicar.classList.add('postPublicar');

  const publicarButton = document.createElement('button');
  publicarButton.classList.add('publicarButton');
  publicarButton.textContent = '¿Qué estás pensando?';

  //const containerPublicHome = document.createElement('div');       /*nuevo */
  //containerPublicHome.setAttribute('id', 'public-container');

  publicarButton.addEventListener("click", function () {
    document.querySelector(".modalHome").style.display = "flex";
  });

  const modalHome = document.createElement('div');
  modalHome.classList.add('modalHome');
  
  const modalContentHome = document.createElement('form'); /*cambie el div por form */
  modalContentHome.classList.add('modalContentHome');
  modalContentHome.setAttribute('id', 'modalPeageHome');
  modalContentHome.innerHTML += `
  <label for= "description"> CREAR PUBLICACIÓN: </label>
  <textarea id = "description" class = "modalInputHome" rows = "5" placeholder = "¿Qué estás pensando?"></textarea>
  <button class = "modalBtnHome"> Publicar </button>
`;
  const containerPublicHome = document.createElement('div');
  containerPublicHome.setAttribute('id', 'public-container');

  const endModalHome = document.createElement('span');
  endModalHome.classList.add('endModalHome');
  endModalHome.innerHTML = '&times;';

  endModalHome.addEventListener("click", function () {
    document.querySelector(".modalHome").style.display = "none";
  });

  //HomeDiv.appendChild(buttonLogin);
  modalContentHome.querySelector('.modalBtnHome').addEventListener(
    'click',
    () => {
      const contenidoDelText = HomeDiv.querySelector(
        '.modalInputHome'
      );
      agregarUnNuevoPost(contenidoDelText.value, db, auth)
         .then(() => {})
         .catch((err) => {
          console.log(err);
         });
    }
  );

  bottomHomePage.appendChild(postPublicar);

  postPublicar.appendChild(publicarButton);

  modalContentHome.appendChild(endModalHome);
  modalHome.appendChild(modalContentHome);

  HomeDiv.appendChild(modalHome);
  HomeDiv.appendChild(headerHomepage);
  HomeDiv.appendChild(bottomHomePage);
  return HomeDiv;
};
