import { onNavigate } from "../main.js";

export const Login = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = 'Bienvenida al login';
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'Regresar al Home';

    buttonRegister.addEventListener('click', () => onNavigate('/'));

    HomeDiv.appendChild(buttonHome);

    return HomeDiv;
};