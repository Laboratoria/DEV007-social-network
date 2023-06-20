import { home } from "./home";

export const login = (onNavigate) => {
  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Email";
  const buttonHome = document.createElement("button");
  const buttonEmail = document.createElement("input");
  const buttonPassword = document.createElement("input");
  const buttonLogIn = document.createElement("button");
  const buttonForgotPassword = document.createElement("button");
  const buttonLogInGoogle = document.createElement("img");

  buttonEmail.value = "Correo";
  buttonEmail.classList = "form";
  buttonPassword.value = "Contraseña";
  buttonPassword.classList = "form";
  buttonLogIn.textContent = "Iniciar Sesión";
  buttonLogIn.classList = "buttons";
  buttonForgotPassword.textContent = "¿Olvidaste tu contraseña?";
  buttonForgotPassword.classList = "buttons";
  buttonHome.textContent = "Regresar al inicio";
  buttonHome.classList = "buttons";
  buttonGoogle.classList = "logoG";
  buttonGoogle.src = "images/btngo2.png";
 
  buttonHome.addEventListener("click", () => onNavigate("/"));

  homeDiv.appendChild(buttonEmail);
  homeDiv.appendChild(buttonPassword);
  homeDiv.appendChild(buttonLogIn);
  homeDiv.appendChild(buttonForgotPassword);
  homeDiv.appendChild(buttonLogInGoogle);
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
