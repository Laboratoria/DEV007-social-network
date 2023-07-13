import { home } from './components/home';
import { register } from './components/register';
import { login } from './components/login';
import { wall } from './components/wall';
import { recommendations } from './components/recommendations';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/wall': wall,
  '/recommendations': recommendations,
};

//  PARA RENDERIZAR EN SPA PACKAGE.JSON
//  "start":"serve src/ -s"         "start": "npm run dev",

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
