// components/ListingPage.js
import React, { useState, useEffect } from 'react';

const ListingPage = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/listings')
            .then(response => response.json())
            .then(data => setListings(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Listings</h1>
            <ul>
                {listings.map(listing => (
                    <li key={listing._id}>{listing.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListingPage;
