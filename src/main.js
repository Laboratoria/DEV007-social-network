import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Wall } from './components/Wall.js';

const rootDiv = document.getElementById('root');

const routes = {
  404: './404.html',
  '/': Home,
  '/register': Register,
  '/wall': Wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  if (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component(onNavigate));

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname](onNavigate));
};
