import React, { useState } from 'react';
import axios from 'axios';
import CategorySearch from './components/CategorySearch';
import PlaceCard from './components/PlaceCard';

function App() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPlaces = async (address, category) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/nearby-places`, {
        params: {
          address: address,
          category: category
        }
      });
      setPlaces(response.data);
    } catch (error) {
      console.error("Error fetching places", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Nearby Places Finder</h1>
      <CategorySearch fetchPlaces={fetchPlaces} />
      {loading ? <p>Loading...</p> : null}
      <div className="places-list">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
}

export default App;
