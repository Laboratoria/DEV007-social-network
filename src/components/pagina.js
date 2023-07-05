export const pagina = (onNavigate) => {
    const PaginaDiv = document.createElement('div');
    PaginaDiv.textContent = "BIENVENIDO";
    PaginaDiv.className = 'pagina-div';
    const buttonHome = document.createElement('button');

    buttonHome.classList = 'pagina-div__button';
    buttonHome.textContent = 'Regresar a Home';

    buttonHome.addEventListener('click', () => onNavigate('/pagina'));

    PaginaDiv.innerHTML += `
    <div class="new-post__container">
        <textarea class="new-post__container__textarea"></textarea>
        <button class="new-post__container__button">Publicar</button>
    </div>
    <section class="posts">
        <div class="posts__post"></div>
        <p>Hola, soy nuevo aqui.</p>
        <h6>Gabo D.</h6>

    </section>
    `;

    buttonHome.addEventListener('click', () => onNavigate('/home'));

    PaginaDiv.appendChild(buttonHome);

    return PaginaDiv;
};
