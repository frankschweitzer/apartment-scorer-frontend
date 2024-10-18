import React from 'react';

function PlaceCard({ place }) {
    return (
        <div className="place-card">
            <h2>{place.name}</h2>
            <p>{place.address}</p>
            <p>Rating: {place.rating}</p>
        </div>
    );
}

export default PlaceCard;
