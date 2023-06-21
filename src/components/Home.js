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

  const publicarButton = document.createElement('button');
  publicarButton.classList.add('publicarButton');
  publicarButton.textContent = 'Que estas pensando?';

  publicarButton.addEventListener("click", function () {
    document.querySelector(".modalHome").style.display = "flex";
  });
 
 // const buttonLogin = document.createElement('button');
  //buttonLogin.classList.add('pruebaHome');
  //buttonLogin.textContent = 'Inicia sesion';

  const modalHome = document.createElement('div');
  modalHome.classList.add('modalHome');
  const modalContentHome = document.createElement('div');
  modalContentHome.classList.add('modalContentHome');
  modalContentHome.setAttribute('id', 'modalPeageHome');
  modalContentHome.innerHTML += `
  <h1> CREAR PUBLICACIÓN </h1>
  <input class = "modalInputHome" placeholder = "¿Que estas pensando?"></input>
  <button class = "modalBtnHome"> Publicar </button> 
`;
  const endModalHome = document.createElement('span');
  endModalHome.classList.add('endModalHome');
  endModalHome.innerHTML = '&times;';
  //const timeBtn= document.getElementById("publicarHomeBtn");
  //timeBtn.addEventListener('click', function () {
  //document.querySelector(".modalHome").style.display = 'flex';
  //});

  endModalHome.addEventListener("click", function() {
    document.querySelector(".modalHome").style.display = "none";
  });
  //buttonLogin.addEventListener('click', () => onNavigate('/'));

  //HomeDiv.appendChild(buttonLogin);
  bottomHomePage.appendChild(publicarButton);
  modalContentHome.appendChild(endModalHome);
  modalHome.appendChild(modalContentHome);
  HomeDiv.appendChild(modalHome);
  HomeDiv.appendChild(headerHomepage);
  HomeDiv.appendChild(bottomHomePage);
  return HomeDiv;
};