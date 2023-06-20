import { home } from "./home";

export const register = (onNavigate) => {
  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Bienvenido, registrate";
  const buttonHome = document.createElement("button");
  const buttonName = document.createElement("input");
  const buttonNewEmail = document.createElement("input");
  const buttonNewPassword = document.createElement("input");
  const buttonSignIn = document.createElement("button");
  const buttonGoogle = document.createElement("img");

buttonGoogle.classList = "logoG";
  buttonGoogle.src = "images/btngo2.png";
  buttonName.value = "Nombre";
  buttonName.classList = "form";
  buttonNewEmail.value = "Ingresar e-mail";
  buttonNewEmail.classList = "form";
  buttonNewPassword.value = "Contraseña";
  buttonNewPassword.classList = "form";
  buttonSignIn.textContent = "Registrarse";
  buttonSignIn.classList = "buttons";

  buttonHome.textContent = "Regresar al inicio";
  buttonHome.classList = "buttons";
  buttonHome.addEventListener("click", () => onNavigate("/"));
  homeDiv.appendChild(buttonName);
  homeDiv.appendChild(buttonNewEmail);
  homeDiv.appendChild(buttonNewPassword);
  homeDiv.appendChild(buttonSignIn);
  homeDiv.appendChild(buttonHome);
  homeDiv.appendChild(buttonGoogle);

  return homeDiv;
};
