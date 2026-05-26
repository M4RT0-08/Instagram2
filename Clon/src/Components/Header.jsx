import instagramLogo from '../assets/instagram.png'
import { FiSettings, FiCamera, FiSend, FiPlus } from 'react-icons/fi'
import '../App.css'

function Header() {
  return (
    <header className="header">
      <img className="logo" src={instagramLogo} alt="Instagram Logo" />
      <input type="text" placeholder='Username, hashtag and story search' />
      <div className="header-right">
        <button><FiSettings size={24} /></button>
        <button><FiCamera size={24} /></button>
        <button><FiSend size={24} /></button>
        <button className="new-post-btn"><FiPlus size={18} /> New Post</button>
      </div>
    </header>
  )
}

export default Header