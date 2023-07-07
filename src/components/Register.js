import {
  crearUsuarioConCorreoYContraseña,

} from '../Firebase.js';

import tarta from '../img/tarta.jpg';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewRegister = `
  <picture><img src="${tarta}" class = "imgMain" alt = "imgen de Tarta - Cocinemos Juntos "></picture>
  <section class = "container">
    <img class = "logo3" src = "./img/Logo3.png">
    <h2>Registrarse</h2>
    <label> Ingresa tu correo </label>
    <input type = "email" class = "email" id = "email2" placeholder = "ejemplo@gmail.com " />
    <label> Ingresa tu Contraseña </label>
    <input type = "password" class = "password" id = "password2" placeholder = "xxxxxxx" />
    <p id="mensajeError"></p>
    </section>
     
  `;

  HomeDiv.innerHTML = viewRegister;

  // Creando una sección
  const section2 = document.createElement('section');
  section2.classList.add('section2');

  // Boton de resgirarse y escucha el evento
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonsPrincipals');
  buttonLogin.textContent = 'Registrarse';
  buttonLogin.onclick = () => {
    const inputEmail = HomeDiv.querySelector('#email2');
    const inputPassword = HomeDiv.querySelector('#password2');
    // console.log(inputEmail.value);
    // console.log(inputPassword.value);
    const messageContainer = HomeDiv.querySelector('#mensajeError');
    crearUsuarioConCorreoYContraseña(inputEmail.value, inputPassword.value)
      .then(() => {
        onNavigate('/login');
      })
      .catch((error) => {
        /* validaciones de firebase */
        messageContainer.setAttribute('class', 'error');
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-email') {
          messageContainer.innerHTML = '❌ Correo inválido';
          // alert('usuario no registrado');
        } else if (errorCode === 'auth/weak-password') {
          messageContainer.innerHTML = '❌ Mínimo 6 caracteres';
        } else if (errorCode === 'auth/email-already-in-use') {
          messageContainer.innerHTML = '❌ Usuario ya registrado';
        }
      });
  };

  // Quitar el mensaje de error cuando el usuario escriba
  const messageContainer = HomeDiv.querySelector('#mensajeError');
  const clearErrorMessage = (e) => {
    if (e.target.tagName === 'INPUT') {
      messageContainer.innerHTML = '';
    }
  };
  const section = HomeDiv.querySelector('section');
  section.addEventListener('keyup', clearErrorMessage);

  // Boton regresar a Home
  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al home';
  buttonHome.addEventListener('click', () => onNavigate('/')); // esto es para que vuelva al home

  // Declaracion de dependencia
  HomeDiv.appendChild(section2);
  section2.appendChild(buttonLogin);
  section2.appendChild(buttonHome);

  return HomeDiv;
};
