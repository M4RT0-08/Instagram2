import { useState } from 'react'
import { useEffect } from 'react'
import Post from './Components/Post.jsx'
import { getCatImage } from './services/api.js'
import './App.css'
import Header from './Components/Header.jsx'

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
      <h2>For you page</h2>
      {imagenes.map((image, index) => (
        <Post key={index} image={image} />
      ))}
    </>
  )
}

export default App
