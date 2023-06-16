import {iniciarSesionConCorreoYContraseña} from '../lib';

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
  inputUsermail.setAttribute('type', 'email');
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

  const googleButton = document.createElement('button');
  googleButton.classList.add('googleButton');
  googleButton.innerHTML += `
  <p class = "textGoogle"> Continuar con Google </p>
`;

  //googleButton.textContent = 'Continuar con Google';

  const googleLogoContainer = document.createElement('div');
  googleLogoContainer.classList.add('googleLogoContainer');

  const logoGoogle = document.createElement('img');
  logoGoogle.src = "./imagenes/logo-google.png";
  logoGoogle.classList.add('logoGoogle');
  loginButton.alt = 'Google';

  const registerLink = document.createElement('p');
  registerLink.classList.add('registerLk');
  registerLink.innerHTML += `
  ¿No tienes una cuenta aún? <a href="/register" class="linkReg"> Regístrate </a>
`;

  const errorContainer = document.createElement('div');
  errorContainer.classList.add('errorContainer');

  const errorUsermail = document.createElement('span');
  errorUsermail.classList.add('errorUsermail');
  errorUsermail.textContent = '';

  const errorPassword = document.createElement('span');
  errorPassword.classList.add('errorPassword');
  errorPassword.textContent = '';



  //loginButton.addEventListener('click', () => onNavigate('/home'));

  loginButton.addEventListener('click', async () => {
    try {
    const loginEmail = inputUsermail.value;	    
    const loginPassword = inputPassword.value;
    const userInfoLogin = await iniciarSesionConCorreoYContraseña(loginEmail, loginPassword);
    console.log(userInfoLogin);
    alert('Inicio de sesión exitoso');
    onNavigate('/home');
 } catch (error) {
      console.error(error);
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      if (errorCode === 'auth/wrong-password') {
        loginContainer.querySelector('.loginContainer .errorPassword').textContent = 'Contraseña incorrecta';
      }
      if (errorCode === 'auth/user-not-found') {
        loginContainer.querySelector('.loginContainer .errorUsermail').textContent = 'Usuario no registrado';
      }
    }
  });

  googleLogoContainer.appendChild(logoGoogle);
  googleButton.appendChild(googleLogoContainer);

  contenedorLogin.appendChild(inputUsermail);
  contenedorLogin.appendChild(errorUsermail);
  contenedorLogin.appendChild(inputPassword);
  contenedorLogin.appendChild(errorPassword);
  contenedorLogin.appendChild(loginButton);
  contenedorLogin.appendChild(forgetLink);
  contenedorLogin.appendChild(googleButton);
  contenedorLogin.appendChild(registerLink);

  bottomSection.appendChild(contenedorLogin);
  bottomSection.appendChild(errorContainer);

  loginContainer.appendChild(topSection);
  loginContainer.appendChild(bottomSection);

  return loginContainer;
};
