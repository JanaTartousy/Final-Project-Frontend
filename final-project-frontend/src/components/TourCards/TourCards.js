import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TourCards.css';

function TourCards() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/tour`);
        const data = response.data;
        setTours(data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="tour-card-container">
      {tours.map((tour) => (
        <div className="tour-card" key={tour._id}>
          <img className="tour-card-image" src={tour.image} alt="Tour" />
          <div className="tour-card-content">
            <h2 className="tour-card-title">{tour.title}</h2>
            <p className="tour-card-description">{tour.description}</p>
            <Link to="/tour-details" className="tour-card-button">
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourCards;
