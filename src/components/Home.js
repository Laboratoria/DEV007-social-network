import { auth, db, } from "../firebase";
import {
  agregarUnNuevoPost,
} from "../lib";

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

  publicarButton.addEventListener("click", function () {
    document.querySelector(".modalHome").style.display = "flex";
  });

  const modalHome = document.createElement('div');
  modalHome.classList.add('modalHome');
  
  const modalContentHome = document.createElement('div');
  modalContentHome.classList.add('modalContentHome');
  modalContentHome.setAttribute('id', 'modalPeageHome');
  modalContentHome.innerHTML += `
  <h1> CREAR PUBLICACIÓN </h1>
  <input class = "modalInputHome" placeholder = "¿Qué estás pensando?"></input>
  <button class = "modalBtnHome"> Publicar </button> 
`;
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