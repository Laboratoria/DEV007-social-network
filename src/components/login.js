import { crearUsuarioConCorreoYContraseña } from "../lib";

export const login = (onNavigate) => {
    const loginDiv = document.createElement('div');
    loginDiv.className = 'login-wrap';

    loginDiv.innerHTML += `
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Iniciar sesion</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab" ><a href='/register'>Registrarse</a></label>
      <div class="login-form">
        <div class="sign-in-htm">
          <div class="group">
            <label for="user" class="label">Correp Eléctronico</label>
            <input id="input-email" type="text" class="input">
          </div>
          <div class="group">
            <label for="pass" class="label">Contraseña</label>
            <input id="input-password" type="password" class="input" data-type="password">
          </div>
          <div class="group">
            <input id="check" type="checkbox" class="check" checked>
          </div>
          <div class="group">
            <input type="submit" class="button" value="Iniciar Sesion">
          </div>
          <div class="hr"></div>
          <div class="group">
            <button class="google-btn">
              <span class="icon"></span>
              Iniciar sesion con Google
            </button>
          </div>
          <div class="foot-lnk">
            <a href="#forgot">Olvidaste tu contraseña?</a>
          </div>
        </div>
      </div>
    </div>
  `;
    /*const loginButton = document.createElement('button');
    loginButton.textContent = 'Iniciar sesión';
    loginButton.className = 'button';

    loginDiv.appendChild(loginButton);
    loginDiv.appendChild(loginDiv);*/

    /*const inputEmail = loginDiv.querySelector('#input-email');
    const inputPassword = loginDiv.querySelector('#input-password');

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        crearUsuarioConCorreoYContraseña(
            inputEmail.value,
            inputPassword.value
        ).then(() => {
            onNavigate('/pagina');
        });
    });*/

    return loginDiv;
};
