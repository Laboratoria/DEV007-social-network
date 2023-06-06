import { onNavigate } from "../main.js";

export const Register = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = 'Bienvenida al registro';
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'Regresar al Home';

    buttonRegister.addEventListener('click', () => onNavigate('/')); //renderiza a home
    HomeDiv.appendChild(buttonHome);

    return HomeDiv;
};

//onnavigate cambia la ruta -> ese es el comportamiento de SPA