# El rincón del café

## Índice

- [1. Preámbulo](#1-preámbulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Descripción](#3-Descripción)
- [4. Ejecución](#2-Ejecución)



## 1. Preámbulo

Bienvenidos al rincón del café, la red social diseñada exclusivamente para los amantes del café.
Si eres de aquellos que aprecian la magia de una taza de café perfectamente preparada, el aroma embriagador que llena una habitación o la emoción de descubrir nuevas variedades y métodos de preparación, has llegado al lugar adecuado.

En el rincón del café buscamos reunir una comunidad apasionada y comprometida que comparte un gusto en común: el amor por el café. Aquí encontrarás un espacio en el que podrás conectarte con personas de todo el mundo que comparten tus intereses, intercambiar experiencias, descubrir nuevas recetas, y mantenerte al día con las últimas tendencias y novedades del mundo del café.

Imagina una plataforma virtual donde podrás encontrar perfiles de expertos baristas dispuestos a compartir sus conocimientos y consejos, aficionados entusiastas que desean aprender más sobre el arte de la preparación del café y emprendedores que desean presentar sus productos y establecimientos especializados. CaféConnect te brinda la oportunidad de explorar una amplia gama de contenido relacionado con el café y ampliar tus horizontes en este fascinante universo.

La comunidad de El rincón del café es cálida, acogedora y siempre dispuesta a ayudar. Ya sea que estés buscando recomendaciones sobre dónde encontrar el mejor café en tu ciudad, consejos sobre cómo perfeccionar tus habilidades de latte art o simplemente quieras compartir tu amor por una buena taza de café, aquí encontrarás personas con las que puedes compartir tu pasión.

¡Levanta tu taza y brindemos por la pasión compartida del café !

![adem-ay-Tk9m_HP4rgQ-unsplash](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6D8W3FgVJ3D6MZBtwyutOkAUweRT_HJkuQ&usqp=CAU)

## 2. Resumen del proyecto

Tras los avances de la tecnología, nuestra cotidianidad se ve cada vez más y más influenciada por las redes sociales, muchas de ellas ayudándonos a conectar con nuestros seres queridos o bien con personas en las que compartimos algo.
Es por ello que decidimos crear ésta red social en la que no solamente podamos compartir gustos en común, si no disfrutar pequeños placeres de la vida cotidiana como bien podría ser una taza de café, ya sea de camino al trabajo o que busque una experiencia más selecta, cualquier persona pueda dejar por un momento el estrés diario y darse unos minutos para entrar al Rincon del Cafe.Únete a nosotros mientras exploramos el mundo del café juntos y aprovechamos nuestra pasión para crear momentos inolvidables.
![](https://media.istockphoto.com/id/1284603827/es/foto/reuni%C3%B3n-de-amigos-en-la-cafeter%C3%ADa-en-un-fin-de-semana.jpg?s=612x612&w=0&k=20&c=qenRMLujVx7mc8EtsRUCvDycgFl_Ekixb0BMgmEg0UY=)

## 3. Descripción

Nuestra plataforma web busca ser un punto de encuentro para la comunidad cafetera, donde la experiencia y el conocimiento se fusionan en un solo lugar. Aquí puedes compartir tus mejores descubrimientos, desde ese pequeño café escondido en una esquina hasta la última innovación en métodos de preparación. Publica tus recomendaciones, recetas y técnicas favoritas para que otros amantes del café las descubran y las prueben. Además, podrás interactuar con otros usuarios, comentar en sus publicaciones, intercambiar ideas y ampliar tus horizontes. ¡Deja que la cafeína fluya y las conversaciones se vuelvan infinitas en nuestra plataforma social del café!

Hemos desarrollado ésta SPA usando tecnologías web innovadoras y de última generación como bien sería HTML5, Javascript, Css y por supuesto haciendo uso de Firebase, respaldado por google, permitiendo hacer posible esta realidad para cualquier persona. Toda ésta historia comienza desde el momento en el que te registras con el correo electrónico de tu preferencia o bien si el usuario desease ingresar con google también sería algo posible.
![](https://i.postimg.cc/W3xDpdKR/img1.png)

## 3. Formulario de usuario

Se adjuntan a continuación las preguntas y respuestas del formulario de usuario.
Cabe destacar que previo al formulario se definió la temática y se buscó bases de diseño para consultar con el usuario las opciones más agradables para ellos.
![](https://i.postimg.cc/J7BxNZRk/logos.png)
![](https://i.postimg.cc/7ZqNrR03/R1.png)
![](https://i.postimg.cc/QxQqPD9N/r2.png)
![](https://i.postimg.cc/8zwmpbmq/r3.png)
![](https://i.postimg.cc/9fnPTFSb/r4.png)
![](https://i.postimg.cc/MGTbvjsX/r5.png)
![](https://i.postimg.cc/V60qFPP8/Untitled.png)

Tras los resultados se estableció cuáles serían las historias de usuario a aplicar en el proyecto.

### Primera historia de usuario

En un principio se estableció como primera necesidad la creación de la estructura base de la página web según los resultados del formulario.
En esta historia los objetivos fueron:

- Creación de los **prototipo de alta y baja fidelidad**.
- Creación del **repositorio** base en el que se trabajaría, además de su clonación en el equipo de cada una de las participantes.
- Implementación de una **Single page aplication** (SPA), que permita redirigir al usuario según la ruta aplicada.

### Segunda historia de usuario

La segunda historia de usuario se basó en la autenticación de usuario para que el acceso a la aplicación sea restringido .
En esta historia los objetivos fueron:

- Registro de un **usuario nuevo** con correo y contraseña .
- Registro de un usuario con **cuenta de Google**.
- **Inicio de sesión**con usuario registrado previamente.
- Recuperación de contraseña a través de un correo de **recuperación**.

Para la autenticación se asoció la aplicación a una cuenta de **Firebase** y se aplicó la funcionalidad en base a la documentación de este.
Para privacidad del usuario se crearon input de tipo password para ocultar la contraseña y se aplicó la posibilidad de revelar esa contraseña , cambiando a un input de texto.

### Tercera historia de usuario

La tercera historia de usuario se basó en la posibilidad de que el usuario previamente autenticado pueda crear post de recomendaciones que luego puedan ser almacenados y compartidos al resto de usuarios.
En esta historia los objetivos fueron:

- Creación de una **colección de datos** para poder almacenar post creados por el usuario.
- Implementación de la interfaz y funcionalidad para **creación de posts**.
- **Despliegue** de los post en la página de recomendaciones.
- Permitir que los usuarios puedan **modificar y borrar los post creados**.

Para esta historia se activó la base de datos de **Cloud firestore** , creando una colección para post que luego se puedan manipular gracias a las indicaciones de la documentación de esta página.

### Cuarta historia de usuario

La cuarta historia de usuario busca la interacción entre los usuarios a través de la calificación de las publicaciones. En este caso se determinó con la posibilidad de **Dar Likes a las publicaciones** para poder dar puntos de aprobación entre usuarios.

## 4. Ejecución

Para la ejecución del proyecto se dividió el trabajo en:

#### Interfaz

El esqueleto de la aplicación se dió a través de un archivo **HTML** que fue estructurado respetando las reglas de **HTML semántico**, siguiendo la estructura determinada en los prototipos de alta y baja fidelidad.
Para poder crear la **SPA** se utilizó un archivo de **index.html** que se llamó desde un archivo **index.js** para poder aplicar la navegación entre distintas vistas del usuario, según la ruta a seguir.
Para que esto sea posible se insertó elementos html desde los respectivos archivos js , desde los cuales se hizo manipulación activa del **DOM**.

![](https://i.postimg.cc/x8BqVNYd/bajafidelidad.png)



#### Funcionalidad

El lenguaje de programación elegido fue Javascript Vanilla, descartando la utilización de librerías o frameworks.
En este caso fue fundamental la manipulación de archivos primitivos y no primitivos y el uso de promesas para implementar asincronía en la funcionalidad de la aplicación.
Cabe destacar que se utilizó la estructura de módulos para permitir la importación y exportación de funcionalidad entre archivos.
Asi mismo la funcionalidad fue puesta a prueba durante la realización del proyecto para que pudieramos comprobar que la  interfaz y diseño no solamente fuera funcional si no tambien comoda e intuitiva para nuestro usuario.

![](https://i.postimg.cc/5tr16dYH/Testimonio-A.png)
![](https://i.postimg.cc/658rvCmy/Testimonio-B.png)
![](https://i.postimg.cc/9MXTF99X/Testimonio-C.png)


#### Diseño

El diseño previamente establecido en los prototipos de alta y baja fidelidad se implementó a través de un archivo **CSS**. Este nos permitió replicar el diseño original de la manera más exacta posible y se utilizó para dar un diseño **Responsive** a la aplicación, creando su versión web y móvil, según sea la necesidad del usuario.
Es importante destacar que el uso de **Flexbox** ayudó a mantener la estructura de la página evitando tener exceso de código en el archivo respectivo.

![](https://i.postimg.cc/yYBQh3sB/screenscofee.jpg)


#### Calidad del codigo

Ademas de las pruebas de usuario que se han realizado para poder tener un analisis de lo que pudieran penar nuestros usuarios, se han diseñado y realizado pruebas unitarias utilizando Eslint para que nosotras como desarrolladoras pudieramos corroborar que el codigo cumlpe con nuestros criterios base de calidad y de esa forma asegurarnos que al momento en el que arrojamos un nuevo update al mercado no limite la usabilidad del usuario.



