import { useState } from 'react'
import '../App.css'

function Stories() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  const stories = [
    {
      id: 1,
      usuario: "@user_name",
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300"
    },
    {
      id: 2,
      usuario: "@user_name",
      imagen: "https://images.unsplash.com/photo-1504681869696-d977e3b01769?w=300"
    },
    {
      id: 3,
      usuario: "@user_name",
      imagen: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=300"
    },
    {
      id: 4,
      usuario: "@user_name",
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300"
    },
    {
      id: 5,
      usuario: "@user_name",
      imagen: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300"
    },
    {
      id: 6,
      usuario: "@user_name",
      imagen: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300"
    },
    {
      id: 7,
      usuario: "@user_name",
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300"
    },
    {
      id: 8,
      usuario: "@user_name",
      imagen: "https://images.unsplash.com/photo-1504681869696-d977e3b01769?w=300"
    },
  ]

  const handlePrevious = () => {
    setCurrentStoryIndex((prev) => (prev > 0 ? prev - 1 : stories.length - 1))
  }

  const handleNext = () => {
    setCurrentStoryIndex((prev) => (prev < stories.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="stories-container">
      <h3 className="stories-title">STORIES</h3>
      <div className="stories-wrapper">
        <button className="story-nav-btn left" onClick={handlePrevious}>
          ‹
        </button>
        <div className="stories-scroll">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`story ${index === currentStoryIndex ? 'active' : ''}`}
            >
              <img src={story.imagen} alt={story.usuario} />
              <p>{story.usuario}</p>
            </div>
          ))}
        </div>
        <button className="story-nav-btn right" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  )
}

export default Stories
