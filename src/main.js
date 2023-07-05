// Este es el punto de entrada de tu aplicacion
import { home } from './components/home';
import { register } from './components/register';
import { login } from './components/login';
import { pagina } from './components/pagina';

const rootDiv = document.getElementById('root');

const routes = {
    '/': home,
    '/register': register,
    '/login': login,
    '/pagina': pagina,
};


export const onNavigate = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }

    rootDiv.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname](onNavigate));
};

rootDiv.appendChild(component(onNavigate));

/*const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  rootDiv.appendChild(routes['/login'](onNavigate));
} else { // si no existe el usuario en storage..
  const pathname = window.location.pathname;
  if (routes[pathname] && pathname !== '/login') {
    // ejecuta () el llamado de la ruta donde está el usuario e ingresa el resultado al div del HTML
    rootDiv.appendChild(routes[pathname](onNavigate));
  } else { // si no existe la ruta en routes..
    rootDiv.appendChild(routes['/'](onNavigate));
  }
}*/
