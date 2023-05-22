import React from 'react';
import "./PostCards.css"
import images from "../../images/baatara7.webp"

function PostCards() {
  return (
    <div className='post-card-wrapper'>
      <div className="post-card-img">
          <div className="post-card-box">
            <img src={images} alt="Image 1" />
          </div>
          <div className="post-card-box">
            <img src={images} alt="Image 2" />
          </div>
          <div className="post-card-box">
            <img src={images} alt="Image 3" />
          </div>
          <div className="post-card-box">
            <img src={images} alt="Image 4" />
          </div>
          <div className="post-card-box">
            <img src={images} alt="Image 5" />
          </div>
          <div className="post-card-box">
            <img src={images} alt="Image 6" />
          </div>
          </div>
    </div>
  )
}

export default PostCards