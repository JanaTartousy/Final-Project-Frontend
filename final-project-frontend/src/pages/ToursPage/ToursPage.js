import React from 'react';
import TourCards from "../../components/TourCards/TourCards.js";
import TourHero from '../../components/TourHero/TourHero.js';

function ToursPage() {
  return (
    
     <main className="page-content">
      <TourHero/>
      <TourCards/>
     
    </main>
  );
};


export default ToursPage