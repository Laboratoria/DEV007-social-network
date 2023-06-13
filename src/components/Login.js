export const Login = (onNavigate) => {
  const loginContainer = document.createElement('div');
  loginContainer.classList.add('loginContainer');
  
  const topSection = document.createElement('section');
  topSection.classList.add('topSection');
  topSection.innerHTML += `
  <div class="imgLogo">
    <img src= "./imagenes/logoFinal.png" class = "logoRed" alt= "logo">
  </div>
`;
 
  const bottomSection = document.createElement('section'); 
  bottomSection.classList.add('bottomSection');
  
  const contenedorLogin = document.createElement('div');
  contenedorLogin.classList.add('contenedorLogin');

  const inputUsermail = document.createElement('input');
  inputUsermail.classList.add('inputUsermail');
  inputUsermail.setAttribute('type', 'text');
  inputUsermail.setAttribute('placeholder', 'Correo electrónico');

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputPassword');
  inputPassword.setAttribute('type', 'password');
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

  contenedorLogin.appendChild(inputUsermail);
  contenedorLogin.appendChild(inputPassword);
  contenedorLogin.appendChild(loginButton);
  contenedorLogin.appendChild(forgetLink);
  contenedorLogin.appendChild(registerLink);

  bottomSection.appendChild(contenedorLogin);

  loginContainer.appendChild(topSection);
  loginContainer.appendChild(bottomSection);

  return loginContainer;
};
