import React, { useState } from 'react';

function CategorySearch({ fetchPlaces }) {
    const [address, setAddress] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        fetchPlaces(address, category);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default CategorySearch;
