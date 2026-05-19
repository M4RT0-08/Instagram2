import anonimo from '../assets/anonimo.png'
import like from '../assets/like.png'
import comment from '../assets/comm.png'
import enviar from '../assets/enviar.png'
import '../App.css'

function Post({ image }) {
  const src = image

  return (
    <div className="Post">
      <div>
        <img className="FotoPerfil" src={anonimo} alt="Descripción de la imagen" />
        <p>@Usuario</p>
      </div>
      <img src={src} alt="Descripción de la imagen" />
      <div className="buttons">
      <button><img className="buttonPost" src={like} alt=""/></button>
      <button><img className="buttonPost" src={comment} alt="" /></button>
      <button><img className="buttonPost" src={enviar} alt="" /></button>
      </div>
    </div>
  )
}

export default Post

/*DESCOMENTAR DESPUES DE HACER LA ZONA IZQ*/