# Instagram2

**Organizacion:**
Empezamos por crear los componentes individualmente, iniciando por el header, luego los posts, el feed y por ultimo el perfil.

**Componentes:**
Header, feed, publicacion y los elementos del perfil

**Responsabilidad:**
El header se va a ocupar de mostrar usuarios, el feed se va a ocupar de mostrar las publicaciones, la sidebar se ocupa de mostrar el perfil del usuario y el navegador solo esta ahi :(

**Deciciones:**
Decidimos estos componentes porque fueron los que pudimos identificar en el figma que elegimos, modularizando la mayor parte

**Comunicacion(props)**:
Los props que usamos es para renderizar los post junto a la foto de usuario y su nombre, son las unicas props que usamos

**Hooks:**
- useState
  - App.jsx: guarda `posts` (feed)
  - Post.jsx: controla `isLiked`, `showModal`, `likeCount`, `commentCount`
  - Stories.jsx: controla `currentStoryIndex`

- useEffect
  - App.jsx: carga las imágenes con `getCatImage()` al montar.

**Figma:** https://www.figma.com/design/O9ppMObtMLcu3UtnfZhLKZ/%C4%B0nstagram-Modern-Web-Design--Community-?node-id=0-1&p=f&t=qmhOBDThgbsawvbd-0

**Visualizacion individual:**
Creamos el componente de los post para poder modularizarlo y repetirlo de manera facil, y con la api, le pedimos las imagenes para renderizarlas.

**Usuario:**
Simplemente hardcodeamos todos los datos, creamos todo en jsx para luego con css darle color y forma

**Datos:**
El nombre de usuario, su foto, los seguidos y los likes que dio

**Estados:**

- [App.jsx]
  - (useState): array de posts cargado desde la API; fuente del feed.
  - Pasa a cada [Post] sus props: [image], [usuario], [fotoPerfil].

- [Post.jsx]
  - [showModal] (useState): controla apertura del popup/modal del post.
  - [isLiked] (useState): controla estado de like local.
  - [likeCount], [commentCount] (useState): contadores locales mostrados en el modal.

- Otros
  - [Stories.jsx]: `currentStoryIndex` para el carrusel.
  - [Navegador.jsx]: [isFollowing] como ejemplo de estado local.
