import React, { useState } from 'react';

function AddToCart({ productId }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    const userId = 'some-user-id'; // This should come from authentication
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, productId, quantity }),
    });
    const result = await response.json();
    if (response.ok) {
      alert('Product added to cart');
    } else {
      alert('Error adding product to cart');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AddToCart;
