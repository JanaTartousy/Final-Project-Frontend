import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tours from './pages/ToursPage/ToursPage';
import Contact from './pages/ContactPage/ContactPage';
import Profile from './pages/ProfilePage/ProfilePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer.js';
import TourDetails from './pages/TourDetailsPage/TourDetailsPage.js' 
import PostPage from './pages/PostPage/PostPage';

const App = () => {
  return (
    // <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tour-details" element={<TourDetails />} />
          <Route path="/posts" element={<PostPage />} />

        </Routes>
        <Footer/>
      </div>
    // </Router>
  );
};

export default App;
