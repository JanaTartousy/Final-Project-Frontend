import React from 'react';
import "./TourCards.css";
import image from "../../images/Baatara.jpg";

function TourCards() {
  return (
    <div className="tour-card-container">
      <div className="tour-card">
        <img
          className="tour-card-image"
          src={image}
          alt="Tour"
        />
        <div className="tour-card-content">
          <h2 className="tour-card-title">Card Title</h2>
          <p className="tour-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="tour-card-button">Book Now</button>
        </div>
      </div>
      <div className="tour-card">
        <img
          className="tour-card-image"
          src={image}
          alt="Tour"
        />
        <div className="tour-card-content">
          <h2 className="tour-card-title">Card Title</h2>
          <p className="tour-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="tour-card-button">Book Now</button>
        </div>
      </div>
      <div className="tour-card">
        <img
          className="tour-card-image"
          src={image}
          alt="Tour"
        />
        <div className="tour-card-content">
          <h2 className="tour-card-title">Card Title</h2>
          <p className="tour-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="tour-card-button">Book Now</button>
        </div>
      </div>
      <div className="tour-card">
        <img
          className="tour-card-image"
          src={image}
          alt="Tour"
        />
        <div className="tour-card-content">
          <h2 className="tour-card-title">Card Title</h2>
          <p className="tour-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="tour-card-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default TourCards;
