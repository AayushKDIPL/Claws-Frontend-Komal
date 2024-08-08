import React, { useState,useEffect } from 'react';
import tshirt from "../img/product-1.JPG";
import "../style/Tshirt.css"; // Import your CSS file for additional styling
// import products from "./products";
export default function Tshirt() {
  // Define an array of product details
  const products = [
    {
      title: 'Drip Streets/Off White',
      price: 799.00,
      originalPrice: 1499.00,
      description: 'Shipping and taxes included.',
      image: tshirt,
    },
    {
      title: 'Drip Stree',
      price: 799.00,
      originalPrice: 199.00,
      description: 'Shipping and taxes included.',
      image: tshirt,
    },
    {
      title: 'D/Off White',
      price: 79.00,
      originalPrice: 1499.00,
      description: 'Shipping and taxes included.',
      image: tshirt,
    },
    {
      title: 'Drip Strehite',
      price: 799.00,
      originalPrice: 1499.00,
      description: 'Shipping and taxes included.',
      image: tshirt,
    },
  ];

  const handleAddToCart = (product) => {
    // Retrieve the existing cart data from localStorage
    const cartData = localStorage.getItem('cartData');
    let cart = cartData ? JSON.parse(cartData) : [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.title === product.title);

    if (existingProductIndex !== -1) {
      // If the product exists, increment the quantity
      cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
    } else {
      // If the product does not exist, add it to the cart with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart data to localStorage
    localStorage.setItem('cartData', JSON.stringify(cart));

    // Provide feedback to the user
    alert('Product added to cart!');
  };

   //Products

   const[product, setProduct] = useState([]);
   const getProduct = async () => {
     try {
       const response = await fetch("http://localhost:3200/merchandise/products", {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
           'auth-token': localStorage.getItem('token'), // Ensure you handle the token properly
         },
       });
       const json = await response.json();
       console.log(json);
       setProduct(json);
     } catch (error) {
       console.log(error.message);
     }
   };
 
   useEffect(() => {
     getProduct();
   }, []);

  return (
    <div className="tshirt-container">
      <div className="card-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} className="card-img" alt={product.title} />
            <p className="card-title">{product.title}</p>
            <p>Price: ₹{product.price} &nbsp; Offer: {product.originalPrice - product.price > 0 ? `${Math.round((1 - product.price / product.originalPrice) * 100)}% off` : 'No Offer'}</p>
            <p className="card-info">{product.description}</p>
            <button type="button" onClick={() => handleAddToCart(product)} className="btn btn-dark w-50">
              Add to Cart
            </button>
          </div>
        ))}
        <hr/>
              {product.map((item) => (
                <div className="col-md-4" key={item._id}>
                   <div className="row ms-2">
                        <div className="card  ">
                          <img src={item.img} className="card-img-top imgdata" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p>Price: ₹{item.price} &nbsp; Offer: {item.offer}%off</p>
                            <p></p>
                            <p className="discription">
                              {item.description}
                            </p>
                            <button onClick={() => handleAddToCart(item)} className="btn btn-dark w-100">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                </div>

                ))}
      </div>
    </div>
  );
}
