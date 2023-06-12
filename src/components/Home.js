
export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  buttonLogin.textContent = 'Inicia sesion';
  buttonLogin.classList.add('btnLogin');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.classList.add('btnRegister');
  buttonGoogle.textContent = 'Entrar con Google';
  buttonGoogle.classList.add('btnGoogle');
    HomeDiv.appendChild(buttonLogin);
    HomeDiv.appendChild(buttonRegister);

  HomeDiv.innerHTML += `
  <div class="imgGoogle">
    <img src= "./imagenes/logo-google.png" class = "logoGoogle" alt= "logo">
    <img src= "./imagenes/logo5.png" class = "logoRed" alt= "logoRedSocial">

  </div>
`;

  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonGoogle);
  
  return HomeDiv;
};
