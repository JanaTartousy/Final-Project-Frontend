import React from 'react';

const TourCards = ({ title, copy, image }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className="card" style={backgroundImageStyle}>
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <button className="btn">View Trips</button>
      </div>
    </div>
  );
};

export default TourCards;