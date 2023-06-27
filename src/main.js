import { Home } from "./components/Home.js";
import { Register } from "./components/Register.js";
import { Login } from "./components/Login.js";

const rootDiv = document.getElementById("root");

const routes = {
  "/": Login,
  "/register": Register,
  "/home": Home,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

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




/*------------enlistar las publicaciones--------------*/
  //console.log('works')
  
//const modalTaskForm = document.getElementById('modalPeageHome')
  //modalTaskForm.addEventListener('submit', (e) => {
  //e.preventDefault()
  //console.log('submitted')
 //const descriptionForm = modalTaskForm['description']
 //console.log(descriptionForm.value)
//modalTaskForm.reset()
  //})

