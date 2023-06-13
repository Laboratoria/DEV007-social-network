import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { passwordReset } from './components/PasswordReset.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Login,
  '/register': Register,
  '/passwordReset': passwordReset,
  '/home': Home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname](onNavigate));
};

console.log(window);
const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component(onNavigate));
};

rootDiv.appendChild(component(onNavigate));
