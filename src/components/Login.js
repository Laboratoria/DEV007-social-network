export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al Login';
  HomeDiv.classList.add('loginContainer');
  HomeDiv.innerHTML += `
  <div class="imgLogo">
    <img src= "./imagenes/logoFinal.png" class = "logoRed" alt= "logo">
  </div>
`;

  const inputUsermail = document.createElement('input');
  inputUsermail.setAttribute('type', 'text');
  inputUsermail.setAttribute('placeholder', 'Correo electrónico');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'text');
  inputPassword.setAttribute('placeholder', 'Contraseña');

  const loginButton = document.createElement('button');
  loginButton.classList.add('loginButton1');
  loginButton.textContent = 'Iniciar sesión';

  const forgetLink = document.createElement('a');
  forgetLink.classList.add('forgetLk');
  forgetLink.innerHTML += `
  <a href="/passwordReset" class="forgetLk"> ¿Olvidaste tu contraseña? </a>
`;        

  const registerLink = document.createElement('p');
  registerLink.classList.add('registerLk');
  registerLink.innerHTML += `
  ¿No tienes una cuenta aún? <a href="/register" class="linkReg"> Regístrate </a>
`;           

  loginButton.addEventListener('click', () => onNavigate('/home'));

  HomeDiv.appendChild(inputUsermail);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(loginButton);
  HomeDiv.appendChild(forgetLink);
  HomeDiv.appendChild(registerLink);

  return HomeDiv;
};
