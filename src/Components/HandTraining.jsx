import React from 'react';
import tshirt from "../img/product-1.JPG";
import "../style/Tshirt.css"; // Import your CSS file for additional styling

export default function Tshirt() {
  return (
    <div className="tshirt-container">
      <div className="card-container">
        <div className="card">
          <img src={tshirt} className="card-img" alt="T-shirt 1" />
          <p className="card-title">T-shirt Design 1</p>
          <p className="card-info">High-quality cotton T-shirt with a cool design.</p>
          <button className="btn btn-secondary">View more...</button>
        </div>
        <div className="card">
          <img src={tshirt} className="card-img" alt="T-shirt 2" />
          <p className="card-title">T-shirt Design 2</p>
          <p className="card-info">Stylish and comfortable T-shirt for everyday wear.</p>
          <button className="btn btn-secondary">View more...</button>
        </div>
        <div className="card">
          <img src={tshirt} className="card-img" alt="T-shirt 3" />
          <p className="card-title">T-shirt Design 3</p>
          <p className="card-info">Trendy T-shirt with a unique graphic print.</p>
          <button className="btn btn-secondary">View more...</button>
        </div>
        <div className="card">
          <img src={tshirt} className="card-img" alt="T-shirt 4" />
          <p className="card-title">T-shirt Design 4</p>
          <p className="card-info">Another trendy T-shirt option.</p>
          <button className="btn btn-secondary">View more...</button>
        </div>
        {/* Repeat the cards for additional items */}
      </div>
    </div>
  );
}
