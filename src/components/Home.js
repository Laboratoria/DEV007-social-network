export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia sesion';
  buttonLogin.classList.add('btnLogin');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.classList.add('btnRegister');

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Entrar con Google';
  buttonGoogle.classList.add('btnGoogle');

  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

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
