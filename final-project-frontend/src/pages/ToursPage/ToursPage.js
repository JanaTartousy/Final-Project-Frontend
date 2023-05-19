import React from 'react';
import TourCards from "../../components/TourCards/TourCards.js";

function ToursPage() {
  return (
    
     <main className="page-content">
      <TourCards
        title="Mountain View"
        copy="Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains"
        image="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      />
      <TourCards
        title="To The Beach"
        copy="Plan your next beach trip with these fabulous destinations"
        image="https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      />
      <TourCards
        title="Desert Destinations"
        copy="It's the desert you've always dreamed of"
        image="https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      />
      <TourCards
        title="Explore The Galaxy"
        copy="Seriously, straight up, just blast off into outer space today"
        image="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      />
    </main>
  );
};


export default ToursPage