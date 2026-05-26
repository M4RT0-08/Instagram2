import home from '../assets/home.png'
import bruj from '../assets/bruj.png'
import reel from '../assets/reel.png'
import noti from '../assets/noti.png'
import igtv from '../assets/igtv.png'
import like from '../assets/like.png'
import follow from '../assets/follow.png'
import { FiUsers, FiHeart } from 'react-icons/fi'
import { useState } from 'react'
import '../App.css'

function Navegador() {
  const [isFollowing, setIsFollowing] = useState(false)

  const perfil = {
    nombre: "Uğur Mercan",
    usuario: "@uğur_mercan0",
    followers: "121K",
    likes: "900K",
    foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=ugurmerchan"
  }

  return (
    <>
    <div className="navegador">
    <img className="fotoPerfil" src={perfil.foto} alt="Foto de Perfil" />
    <h2>{perfil.nombre} ✓</h2>
    <p>{perfil.usuario}</p>
    <div className="stats">
      <div className="stat">
        <FiUsers size={20} className="stat-icon-small" />
        <p>{perfil.followers}</p>
      </div>
      <div className="stat">
        <FiHeart size={20} className="stat-icon-small" />
        <p>{perfil.likes}</p>
      </div>
    </div>

    <div className="nav-menu">
        <a href=""><img src={home} alt="" /> Home</a>
        <a href=""><img src={bruj} alt="" /> Explore</a>
        <a href=""><img src={reel} alt="" /> Reels</a>
        <a href=""><img src={igtv} alt="" /> iGTV</a>
        <a href=""><img src={noti} alt="" /> Notification</a>
    </div>
    </div>
    </>
  )
}

export default Navegador