import React, { useEffect, useState } from 'react';
import './Product.css';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [getData, setGetData] = useState({});
  const { id } = useParams();

  // Fetch product data by ID
  const fetchDataById = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/product/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setGetData(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/product', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();

      if (Array.isArray(data.message)) {
        // Filter the products based on the search term from `getData`
        const filteredProducts = data.message.filter((product) => {
          const name = product.name ? product.name.toLowerCase() : '';
          const description = product.description ? product.description.toLowerCase() : '';
          const category = product.subcategory?.category ? product.subcategory.category.toLowerCase() : '';
          const categoryName = product.subcategory?.name ? product.subcategory.name.toLowerCase() : '';

          return (
            name.includes(getData.name?.toLowerCase()) ||
            description.includes(getData.name?.toLowerCase()) ||
            category.includes(getData.name?.toLowerCase()) ||
            categoryName.includes(getData.name?.toLowerCase())
          );
        });

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

  useEffect(() => {
    // First fetch the product by ID
    fetchDataById();
  }, [id]);

  useEffect(() => {
    // Fetch related products after `getData` is set
    if (getData.name) {
      fetchProducts();
    }
  }, [getData]);

  const handleAddToCart = (product) => {
    const cartData = localStorage.getItem('cartData');
    let cart = cartData ? JSON.parse(cartData) : [];
    const existingProductIndex = cart.findIndex((item) => item.name === product.name);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartData', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  return (
    <div>
      <div className="product">
        <div className="product-main">
          <div className="product-image">
            <img src={`http://localhost:8000/${getData.images}`} alt="product" />
          </div>
          <div className="product-details">
            <h2 className="product-details-h2">{getData.name}</h2>
            <p id="product-price-p">₹ {getData.price}</p>
            <p className="product-details-p">
              HospiView offers the ultimate in web-based remote monitoring for all CPX alarm systems. All CPX systems are automatically monitored and alarms can be sent directly to critical alarm service contractors, either through our HospiView web interface or through existing BMS infrastructure. This allows facilities managers to respond faster, reducing patient risk and saving clinical staff time. Alerts can be customised and directed to different personnel, via SMS, email, telephone or web notifications.
            </p>
            <button type="button" className="product-btn2" onClick={() => handleAddToCart(getData)}>Add to cart</button>
          </div>
        </div>
        <div className="related">
          <h2>Related products</h2>
          <div className="related-product">
              {productData.length > 0 ? (
                productData.map((e) => (
                  <div key={e.id}>
                      <Link to={`/product/${e._id}`}><img className='related-img' src={`http://localhost:8000/${e.images}`} alt={e.name} /></Link>
                      <h2>{e.name}</h2>
                  </div>
                ))
              ) : (
                <p>No related products available</p>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
