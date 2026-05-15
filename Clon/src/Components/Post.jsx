import anonimo from '../assets/anonimo.png'
import '../App.css'

function Post({ image }) {
  const src = image

  return (
    <div>
      <img ClassName="FotoPerfil" src={anonimo} alt="Descripción de la imagen" />
      <p>@Usuario</p>
      <img src={src} alt="Descripción de la imagen" />
    </div>
  )
}

export default Post