import React, { useState,useEffect } from "react";
import tshirt from "../img/product-1.JPG";
import Categories from "./Categories";
import cable from "../img/cable.jpg";
import Claws_Arm_Wrestling_Table from "../img/Claws_Arm_Wrestling_Table.png";
import table from "../img/table.jpg";
import '../index.css';
import Cart from './Cart'; // Import the Cart component

export default function Others() {
  const [data, setData] = useState(Categories);
  const [cart, setCart] = useState([]); // Initialize the cart state

  const handleAddToCart = (Categories) => {
    // Retrieve the existing cart data from localStorage
    const cartData = localStorage.getItem('cartData');
    let cart = cartData ? JSON.parse(cartData) : [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.title === Categories.title);

    if (existingProductIndex !== -1) {
      // If the product exists, increment the quantity
      cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
    } else {
      // If the product does not exist, add it to the cart with quantity 1
      cart.push({ ...Categories, quantity: 1 });
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
      const response = await fetch("http://localhost:3200/equipment/products", {
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
    <div className="tshirt-container ms-n4  mb-5 mt-5 me-4">
      <h1 className="text-center  text-dark">ALL EQUIPMENT</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-1 ">
          <div className="col-md-12">
            <div className="row">
              {data.map((values) => {
                const { id, title, price, image, offer, discription } = values;
                return (
                  <>
                    <div className="col-md-4" key={id}>
                      <div className="row">
                        <div className="card">
                          <img src={values.image} className="card-img-top imgdata" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{values.title}</h5>
                            <p>Price: ₹{values.price} &nbsp; Offer: {values.offer}%off</p>
                            <p></p>
                            <p className="discription">
                              {values.discription}
                            </p>
                            <button onClick={() => handleAddToCart(values)} className="btn btn-dark w-50">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <br/>
             
              {product.map((item) => (
                <div className="col-md-4" key={item._id}>
                   <div className="row">
                        <div className="card">
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
        </div>
      </div>
    </div>
  );
}