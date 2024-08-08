// components/AddListing.js
import React, { useState } from 'react';

const AddListing = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/api/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, price }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Optionally redirect or clear form
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </label>
            <button type="submit">Add Listing</button>
        </form>
    );
};

export default AddListing;
