import { auth, db } from '../firebase';
import { agregarUnNuevoPost } from '../lib';
import { getTask } from '../lib'; 
import { onGetTask } from '../lib';

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

  publicarButton.addEventListener('click', function () {
    document.querySelector('.modalHome').style.display = 'flex';
  });

  const modalHome = document.createElement('div');
  modalHome.classList.add('modalHome');

  const modalContentHome = document.createElement('div'); 
  modalContentHome.classList.add('modalContentHome');
  modalContentHome.setAttribute('id', 'modalPeageHome');
  modalContentHome.innerHTML += `
    <label for= "description"> CREAR PUBLICACIÓN: </label>
    <textarea id = "description" class = "modalInputHome" rows = "5" placeholder = "¿Qué estás pensando?"></textarea>
    <button class = "modalBtnHome"> Publicar </button>
 `;

  const endModalHome = document.createElement('span');
  endModalHome.classList.add('endModalHome');
  endModalHome.innerHTML = '&times;';

  endModalHome.addEventListener('click', function () {
    document.querySelector('.modalHome').style.display = 'none';
  });

  const sectionPost = document.createElement('section');
  sectionPost.classList.add('sectionPost');

  const postContent = document.createElement('div');
  postContent.classList.add('postContent');
  postContent.setAttribute('id', 'postContent');

  const buttonsPost = document.createElement('div');
  buttonsPost.classList.add('buttonsPost');


  modalContentHome
    .querySelector('.modalBtnHome')
    .addEventListener('click', () => {
      const contenidoDelText = HomeDiv.querySelector('.modalInputHome');
      agregarUnNuevoPost(contenidoDelText.value, db, auth)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    });

  
  window.addEventListener('DOMContentLoaded', async () => {
    const taskContainer = document.getElementById('postContent');
    onGetTask((querySnapshot) => {
      let html = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      html += `
      <div>
      
       <p>${post.contenido}</p>
      </div>
     `;
    });
    taskContainer.innerHTML = html;
    
    });

  });

  sectionPost.appendChild(postContent);
  sectionPost.appendChild(buttonsPost);
  postPublicar.appendChild(publicarButton);

  bottomHomePage.appendChild(postPublicar);
  bottomHomePage.appendChild(sectionPost);

  modalContentHome.appendChild(endModalHome);
  modalHome.appendChild(modalContentHome);

  HomeDiv.appendChild(modalHome);
  HomeDiv.appendChild(headerHomepage);
  HomeDiv.appendChild(bottomHomePage);

  return HomeDiv;
};
