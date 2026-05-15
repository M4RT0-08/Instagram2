import { useState } from 'react'
import { useEffect } from 'react'
import Post from './Components/Post.jsx'
import { getCatImage } from './services/api.js'
import './App.css'

function App() {
  const [imagen, setImagen] = useState("")

  useEffect(() => {
    getCatImage().then((response) => {
      setImagen(response.data[0].url)
    })
  }, [])

  return (
    <>
      <Post image={imagen} />
    </>
  )
}

export default App
