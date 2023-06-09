
export const Register = (onNavigate) => {
  const HomeDiv = document.createElement("div");
  HomeDiv.textContent = "Bienvenida al registro";
  const buttonHome = document.createElement("button");
  buttonHome.classList.add('registrateButton');
  buttonHome.textContent = "Regístrate";

  buttonHome.addEventListener("click", () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
