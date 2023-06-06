import { onNavigate } from '../main.js';
export const Register = () => {
    const HomeDiv = document.createElement ('div');

    const viewRegister = `
    <div><img src="./img/tarta.jpg" class="imgTarta" alt="imgTarta - Cocinemos Juntos "></div>
    <img class="logo" src="./img/Logo.png">
    <section class="newRegister">
      <h2>Registrarse</h2>
      <input type="email" id="email" placeholder="Ingresa tu correo" />
      <input type="password" id="password" placeholder="Contraseña" />
      <input type="password" id="password" placeholder="Confirma tu Contraseña" />
    </section>
    `;
    HomeDiv.innerHTML = viewRegister;
    //return homeDiv;
  
    HomeDiv.textContent = 'Bienvenida al registro';
    const buttonHome = document.createElement ('button');
    
     buttonHome.textContent = 'Regresar al home';

buttonHome.addEventListener('click', () => onNavigate('/')); //esto es para que vuelva al home

     HomeDiv.appendChild(buttonHome);
    
      return HomeDiv;

};
