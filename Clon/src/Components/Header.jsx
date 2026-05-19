import instagramLogo from '../assets/instagram.png'

import '../App.css'

function Header() {
  return (
    <header className="header">
      <img className="logo" src={instagramLogo} alt="Instagram Logo" />
      <h1>Instagram</h1>
      <input type="text" placeholder='Buscar...' />
    </header>
  )
}

export default Header