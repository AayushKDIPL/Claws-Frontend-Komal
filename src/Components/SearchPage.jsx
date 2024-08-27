import React, { useState,useEffect } from 'react';
import tshirt from "../img/product-1.JPG";
import "../style/Tshirt.css";  
import { Link, useLocation } from 'react-router-dom';
// import products from "./products";
export default function SearchPage() {
  // Define an array of product details

  const [productData, setProductData] = useState([]); // Initialize as an empty array
  const location = useLocation();
  // Extract search query from URL parameters
  const query = new URLSearchParams(location.search).get('query');
  console.log("Search term", productData);


  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const res = await fetch('http://localhost:8000/api/product', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });
          const data = await res.json();
    
          if (Array.isArray(data.message)) {
            // Filter the products based on the search term "Table"
            const filteredProducts = data.message.filter((product) => {
              // Convert all relevant fields to lowercase for case-insensitive comparison
              const name = product.name ? product.name.toLowerCase() : '';
              const description = product.description ? product.description.toLowerCase() : '';
              const category = product.subcategory.category ? product.subcategory.category.toLowerCase() : '';
              const categoryName = product.subcategory.name ? product.subcategory.name.toLowerCase() : '';
    
              // Check if the search term exists in any of these fields
              return (
                name.includes(query.toLowerCase()) ||
                description.includes(query.toLowerCase()) ||
                category.includes(query.toLowerCase()) ||
                categoryName.includes(query.toLowerCase()) 
              );
            });
    
            // Store the filtered products in state
            setProductData(filteredProducts);
          } else {
            console.error('Expected an array but got:', data.message);
            setProductData([]);
          }
        } catch (e) {
          console.log('Failed to fetch products:', e);
          setProductData([]);
        }
      };

    fetchProducts();
  }, [query]);

  const handleAddToCart = (product) => {
    const cartData = localStorage.getItem('cartData');
    let cart = cartData ? JSON.parse(cartData) : [];
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartData', JSON.stringify(cart));
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
    <div className="product-page mt-5">
      <center>
        <h1 className="product-title mt-5">All Products</h1>
      </center>
      <div className="product-grid">
        {productData.length > 0 ? (
          productData.map((product) => (
            <Link to={`/product/${product._id}`} style={{textDecoration: 'none'}}>
                <div key={product._id} className="product-card ">

                    {/* images */}
                    <div className="product-images">
                      {product.images.length > 0 ? (
                        product.images.map((image, index) => (
                          <img
                            key={index}
                            src={`http://localhost:8000/${image}`}
                            className="product-img   imgdata"
                            alt={`Product image ${index + 1}`}
                          />
                        ))
                      ) : (
                        <p>No images available</p>
                      )}
                    </div>

                    <div className="product-body card-body">

                      <h5 className="product-name card-title">{product.name}</h5>

                      <p className="product-price">
                        Price: ₹{product.price} &nbsp; Offer: {product.offer}% off
                      </p>

                      <p className="product-description description">{product.description}</p>

                      <button onClick={() => handleAddToCart(product)} className="btn btn-dark w-100">
                          Add to Cart
                      </button>


                    </div>
                    </div>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
