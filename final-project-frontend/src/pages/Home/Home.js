import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import PostSection from '../../components/PostSection/PostSection';
import TourSection from '../../components/TourSection/TourSection';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';

function Home() {
  return (
    <div className='home-container'>
    <HeroSection/>
    <PostSection/>
    <TourSection/>
    <FeedbackSection/>
    </div>
  )
}

export default Home