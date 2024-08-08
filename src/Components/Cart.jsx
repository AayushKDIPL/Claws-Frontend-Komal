import React, { useState, useEffect } from 'react';
import '../style/Cart.css';

function Cart() {
    const [getCart, setGetCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);


    useEffect(() => {
        const cartData = localStorage.getItem('cartData');
        if (cartData) {
            try {
                const parsedData = JSON.parse(cartData);
                setGetCart(parsedData);
            } catch (error) {
                console.error('Error parsing cartData from localStorage', error);
                setGetCart([]);
            }
        }
    }, []);

    useEffect(()=>{
        const calculateTotalPrice = () => {
            let total = 0;
            getCart.forEach(item=>{
                total += item.quantity * item.price;
            });
            setTotalPrice(total);
        };
        calculateTotalPrice();
    }, [getCart]);

    const handleIncrease = (index) => {
        const updatedCart = [...getCart];
        updatedCart[index].quantity += 1;
        setGetCart(updatedCart);
        localStorage.setItem('cartData', JSON.stringify(updatedCart));
        // window.location.reload(); 
         // Reload the page
    };

    const handleDecrease = (index) => {
        const updatedCart = [...getCart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
        } else {
            // Remove the item from the cart if the quantity is 1 and the user clicks "-"
            updatedCart.splice(index, 1);
        }
        setGetCart(updatedCart);
        localStorage.setItem('cartData', JSON.stringify(updatedCart));
        // window.location.reload(); 
         // Reload the page
    };

    const handlePayment = () => {
        setShowPaymentDetails(true);
    };

    return (
 
        <div className='cart-item '>
            <div className='cart-container ms-n5 '>
                <div className='row'>
                    <div className='col-2   '>
                        <h5>ITEM</h5>
                    </div>
                    <div className='col-3 '>
                        <h5 >Description</h5>
                    </div>
                    <div className='col-2 price'>
                        <h5>Price</h5>
                    </div>
                    <div className='col-2 '>
                        <h5>Quantity</h5>
                    </div>
                    <div className='col-3  '>
                        <h5>Total</h5>
                    </div>
                </div>
            </div>


            {getCart.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                getCart.map((e, index) => {
                    const totalPrice = e.quantity * e.price;
                    return (
                        <div key={index}>
                            <div className='container '>
                                <div className='row item-div mt-3'>
                                    <div className='col-2'>
                                        <img className='cart_img' src={e.image} alt=""/>
                                    </div>
                                    <div className='col-3 title mt-4'>
                                        <h6>{e.title}</h6>
                                    </div>
                                    <div className='col-2 mt-4 price'>
                                        <h6>{e.price}</h6>
                                    </div>


                                    <div className='col-2 mt-3'>
                                        <div className='quantity-control'>
                                            <button className=' btn-add m-0  ' onClick={() => handleDecrease(index)}> -</button>
                                            <span>{e.quantity}</span>
                                            <button className=' btn-add   ' onClick={() => handleIncrease(index)}>+</button>
                                        </div>
                                    </div>
                                    <div className='col-3   mt-4'>
                                        <h6>{totalPrice}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}


   
    <div className='container'>
      <div className='row mt-3 ms-0 me-0'>
        <div className='col-12 d-flex align-items-center justify-content-between'>
          <p className='mb-0'>Total Price: ₹{totalPrice}</p>
          <button className='btn btn-primary pay-btn ' onClick={handlePayment}>Proceed to Payment</button>
        </div>
      </div>
    </div>
  

                
           
            {showPaymentDetails && (
                <div className='container mt-5'>
                    <h5>Payment Details:</h5>
                    <div className='row'>
                        <div className='col-12'>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {getCart.map((e, index) => (
                                        <tr key={index}>
                                            <td>{e.title}</td>
                                            <td>{e.quantity}</td>
                                            <td>₹{e.price}</td>
                                            <td>₹{e.quantity * e.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3">Total:</td>
                                        <td>₹{totalPrice}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;