import { useState } from 'react'
import { useEffect } from 'react'
import Post from './Components/Post.jsx'
import Stories from './Components/Stories.jsx'
import { getCatImage } from './services/api.js'
import './App.css'
import Header from './Components/Header.jsx'
import Navegador from './Components/Navegador.jsx'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getCatImage().then((response) => {
      const postData = response.data.slice(0, 6).map((img, index) => ({
        id: index,
        usuario: "@user_name",
        fotoPerfil: "https://api.dicebear.com/7.x/avataaars/svg?seed=user" + index,
        imagen: img.url
      }))
      setPosts(postData)
    })
  }, [])

  return (
    <>
    <Header />
    <div className="main-container">
      <div className="sidebar">
        <Navegador/>
      </div>
      <div className="feed-container">
        <Stories />
        <h2>For you page</h2>
        <div className="posts-feed">
          {posts.map((post) => (
            <Post 
              key={post.id} 
              image={post.imagen}
              usuario={post.usuario}
              fotoPerfil={post.fotoPerfil}
            />
          ))}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
