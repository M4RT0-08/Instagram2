

import '../App.css'

function Slide() {
  return (
    <header className="header">
      <img className="logo" src={instagramLogo} alt="Instagram Logo" />
      <h1>Instagram</h1>
      <input type="text" placeholder='Buscar...' />
    </header>
  )
}

export default Slide