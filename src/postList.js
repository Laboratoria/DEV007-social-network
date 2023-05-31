
const postList = document.querySelector('.posts');

export  const setupPosts = (data) => {
if (data.length) {
let html = ''
    data.forEach(doc => {
     console.log(doc);

        const post = doc.data()
        //console.log(post) ;
        const li = `
        <li class="list-group-item">
            <h5>${post.title}</h5>
            <p>${post.content}</p>
        </li>
        `
        html += li
    })
  //  console.log('loop posts');
  postList.innerHTML = html
}else{
   postList.innerHTML = '<h1> Login to see posts </h1>'  // aparecera luego de cerrar sesion
}
}