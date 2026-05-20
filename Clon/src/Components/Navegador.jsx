import home from '../assets/home.png'
import bruj from '../assets/bruj.png'
import reel from '../assets/reel.png'
import noti from '../assets/noti.png'
import igtv from '../assets/igtv.png'
import like from '../assets/like.png'
import follow from '../assets/follow.png'
import '../App.css'

function Navegador() {
  return (
    <>
    <div className="navegador">
    <img src=""></img>
    <h2>Name</h2>
    <p>@username</p>
    <button><img src={follow} alt="Personas" /></button>
    <button><img src={like} alt="Likes" /></button>

    <div>
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