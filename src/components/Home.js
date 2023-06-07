
export const Home = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    const buttonLogin = document.createElement('button');
    const buttonRegister = document.createElement('button');

    buttonLogin.textContent = 'Inicia sesion';
    buttonRegister.textContent = 'Registrate';
    
    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    HomeDiv.appendChild(buttonLogin);
    HomeDiv.appendChild(buttonRegister);

    return HomeDiv;

};