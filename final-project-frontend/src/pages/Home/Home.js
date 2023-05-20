import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import PostSection from '../../components/PostSection/PostSection';
import TourSection from '../../components/TourSection/TourSection';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import AboutSection from '../../components/AboutSection/AboutSection';

function Home() {
  return (
    <div className='home-container'>
    <HeroSection/>
    <PostSection/>
    <TourSection/>
    <FeedbackSection/>
    <AboutSection/>
    </div>
  )
}

export default Home