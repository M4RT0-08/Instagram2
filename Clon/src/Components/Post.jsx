import anonimo from '../assets/anonimo.png'
import like from '../assets/like.png'
import comment from '../assets/comm.png'
import enviar from '../assets/enviar.png'
import { FiX, FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi'
import { useState } from 'react'
import '../App.css'

function Post({ image, usuario, fotoPerfil }) {
  const [isLiked, setIsLiked] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50000) + 1000)
  const [commentCount, setCommentCount] = useState(Math.floor(Math.random() * 500) + 50)

  const handlePostClick = () => {
    setShowModal(true)
  }

  const handleLikeClick = (e) => {
    e.stopPropagation()
    if (!isLiked) {
      setLikeCount(likeCount + 1)
    } else {
      setLikeCount(likeCount - 1)
    }
    setIsLiked(!isLiked)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleModalClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      handleCloseModal()
    }
  }

  return (
    <>
      <div className="Post">
        <div className="post-header">
          <img className="FotoPerfil" src={fotoPerfil} alt="Perfil" />
          <p>{usuario}</p>
        </div>
        <img
          className="post-image"
          src={image}
          alt="Descripción de la imagen"
          onClick={handlePostClick}
          style={{ cursor: 'pointer' }}
        />
        <div className="buttons">
          <button onClick={handleLikeClick}>
            <img
              className={`buttonPost ${isLiked ? 'liked' : ''}`}
              src={like}
              alt="Like"
            />
          </button>
          <button onClick={handlePostClick}>
            <img className="buttonPost" src={comment} alt="Comentar" />
          </button>
          <button>
            <img className="buttonPost" src={enviar} alt="Enviar" />
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>
              <FiX size={28} />
            </button>
            
            <div className="modal-image-section">
              <img src={image} alt="Post completo" className="modal-image" />
            </div>

            <div className="modal-info-section">
              <div className="modal-header">
                <img src={fotoPerfil} alt="Perfil" className="modal-profile-pic" />
                <div>
                  <p className="modal-username">{usuario}</p>
                  <p className="modal-time">hace 2 horas</p>
                </div>
              </div>

              <div className="modal-description">
                <p>Disfrutando del momento Natura pura en su máxima expresión #viaje #naturaleza #aventura</p>
              </div>

              <div className="modal-stats">
                <div className="stat-item">
                  <FiHeart size={24} className="stat-icon" />
                  <span className="stat-value">{likeCount.toLocaleString()}</span>
                  <span className="stat-label">Me gusta</span>
                </div>
                <div className="stat-item">
                  <FiMessageCircle size={24} className="stat-icon" />
                  <span className="stat-value">{commentCount}</span>
                  <span className="stat-label">Comentarios</span>
                </div>
                <div className="stat-item">
                  <FiShare2 size={24} className="stat-icon" />
                  <span className="stat-value">{Math.floor(Math.random() * 200) + 10}</span>
                  <span className="stat-label">Compartidas</span>
                </div>
              </div>

              <div className="modal-comments">
                <h4>Comentarios destacados</h4>
                <div className="comment">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=comment1" alt="comentario" />
                  <div>
                    <p className="comment-author">@usuario1</p>
                    <p className="comment-text">¡Qué lugar más hermoso! Definitivamente tengo que visitarlo</p>
                  </div>
                </div>
                <div className="comment">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=comment2" alt="comentario" />
                  <div>
                    <p className="comment-author">@usuario2</p>
                    <p className="comment-text">Las fotos están increíbles, muy buena composición</p>
                  </div>
                </div>
              </div>

              <div className="modal-action">
                <button className="action-btn like-btn" onClick={handleLikeClick}>
                  <FiHeart size={18} />
                  {isLiked ? 'Dislike' : 'Like'}
                </button>
                <button className="action-btn comment-btn">
                  <FiMessageCircle size={18} />
                  Comentar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Post