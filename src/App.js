import React from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Cart from './Components/Cart';
import Home from './Components/Home';
import Cards from './Components/Cards.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Tshirt from './Components/Tshirt';
import ArmWrestlingT from './Components/ArmWrestlingT';
import CupPower from './Components/CupPower';
import Grips from './Components/Grips';  
import Footer from './Components/Footer';
import Merchandise from './Components/Merchandise';
import Others from './Components/Others';
import Login from './Components/Login';
import Signup from './Components/Signup.jsx';
// import Signup from './Components/Signup.jsx'; 
// import CheckoutPage from './Components/CheckoutPage';
import OrderHistory from './Components/OrderHistory';
import OrderDetails from './Components/OrderDetails';
import CheckOut from './Components/CheckOut.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/merchandise/:id" element={<Merchandise />} exact />
        <Route path="/merchandise/tshirt" element={<Tshirt />} exact /> 
        <Route path="/equipment/ArmWrestlingT" element={<ArmWrestlingT />} exact />
        <Route path="/equipment/euip2" element={<CupPower />} exact />
        <Route path="/equipment/euip3" element={<Grips />} exact />
        <Route path="/equipment/Others" element={<Others />} exact /> 
        <Route path="/Login" element={<Login />} exact /> 
        <Route path="/Signup" element={<Signup />} exact /> 
        
        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/order-details/:id" element={<OrderDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkOut" element={<CheckOut />} />
        {/* <Route path="/merchandise/Product_details" element={<Cards />} exact /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;