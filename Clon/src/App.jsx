import { useState } from 'react'
import { useEffect } from 'react'
import Post from './Components/Post.jsx'
import { getCatImage } from './services/api.js'
import './App.css'
import Header from './Components/Header.jsx'
import Navegador from './Components/Navegador.jsx'

function App() {
  const [imagenes, setImagenes] = useState([])

  useEffect(() => {
    getCatImage().then((response) => {
      setImagenes(response.data.slice(0, 10).map(img => img.url))
    })
  }, [])

  return (
    <>
    <Header />
    <div className="col-sm-4">
      <Navegador/>
    </div>
    <div className="col-sm-8">
      <h2>For you page</h2>
      {/*imagenes.map((image, index) => (
        <Post key={index} image={image} />
      ))*/}
    </div>
      
    </>
  )
}

export default App
