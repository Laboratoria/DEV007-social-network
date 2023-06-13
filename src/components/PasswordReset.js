export const passwordReset = (onNavigate) => {
   const HomeDiv = document.createElement('div');
   HomeDiv.innerHTML += `
    <div class="textPasswordReset">
      <h1> ¿Tienes problemas para iniciar sesión? </h1>
      <p> Ingresa tu correo electrónico, y te enviaremos un enlace para que recuperes el acceso a tu cuenta. </p>
    </div>
   `;  

   //HomeDiv.classList.add('loginContainer');
   
    const inputUsermailReset = document.createElement('input');
    inputUsermailReset.setAttribute('type', 'text');
    inputUsermailReset.setAttribute('placeholder', 'Correo electrónico');

    const sendMail = document.createElement('button');
    sendMail.classList.add('sendMail');
    sendMail.textContent = 'Enviar enlace de inicio de sesión';

   
    sendMail.addEventListener('click', () => onNavigate('/'));

    HomeDiv.appendChild(inputUsermailReset);
    HomeDiv.appendChild(sendMail);

    return HomeDiv;
};