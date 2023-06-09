export const Posting = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewPosting = `
      <div><img src="./img/Pizza.jpg" class="imgMain" alt="En Construcción - Cocinemos Juntos "></div>
      <img class="logo3" src="./img/Logo3.png">
      <section class="container">
        <h2> Página en Construcción</h2>
      </section>
      `;
  HomeDiv.innerHTML = viewPosting;

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return (HomeDiv);
};
