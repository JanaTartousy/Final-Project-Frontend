import React from 'react';
import "./PostPage.css"
import PostHero from '../../components/PostHero/PostHero.js';
import PostCards from '../../components/PostCards/PostCards';

function PostPage() {
  return (
    <div className='post-page-container'>
        <PostHero/>
        <PostCards/>
    </div>
  )
}

export default PostPage