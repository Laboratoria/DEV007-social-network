import { iniciarsesion } from '../Firebase.js';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.setAttribute('class', 'home-div');
  const viewLogin = `
  <div><img src = "./img/Waffles.jpg" class = "imgMain" alt = "imgen de Waffles - Cocinemos Juntos "></div>
  <section class = "container">
    <img class = "logo3" src = "./img/Logo3.png">
    <h2>Inicia sesión</h2>
    <label> Ingresa tu correo </label>
    <input type = "email" class = "email" id = "input-email" placeholder = "ejemplo@gmail.com" />
    <label> Ingresa tu contraseña </label>
    <input type = "password" class = "password" id = "input-password" placeholder = "xxxxxxx" />
    <p id="mensajeError"></p>
  </section>
  `;

  HomeDiv.innerHTML = viewLogin;

  const section2 = document.createElement('section');
  section2.classList.add('section2');

  const buttonPosting = document.createElement('button');
  buttonPosting.classList.add('buttonsPrincipals');
  buttonPosting.textContent = 'Ingresar';
  // buttonPosting.addEventListener('click', () => onNavigate('/posting'));

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  const inputEmail = HomeDiv.querySelector('#input-email');
  const inputPassword = HomeDiv.querySelector('#input-password');
  const messageContainer = HomeDiv.querySelector('#mensajeError');

  HomeDiv.appendChild(section2);
  section2.appendChild(buttonPosting);
  section2.appendChild(buttonHome);

  buttonPosting.addEventListener('click', (e) => {
    e.preventDefault();
    iniciarsesion(inputEmail.value, inputPassword.value)
      .then(() => {
        onNavigate('/posting');
      })
      .catch((error) => {
        /* validaciones de firebase */
        messageContainer.setAttribute('class', 'error');
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-email') {
          messageContainer.innerHTML = '❌ Correo inválido';
          // alert('usuario no registrado');
        } else if (errorCode === 'auth/wrong-password') {
          messageContainer.innerHTML = '❌ Contraseña incorrecta';
        } else if (errorCode === 'auth/user-not-found') {
          messageContainer.innerHTML = '❌ Usuario no registrado';
        }
      });
  });

  /* Quitar el mensaje de error cuando el usuario escriba */
  const clearErrorMessage = (e) => {
    if (e.target.tagName === "INPUT") {
      messageContainer.innerHTML = "";
    }
  };
  return HomeDiv;
};
