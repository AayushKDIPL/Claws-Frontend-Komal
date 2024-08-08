import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../img/logo1.png";
import "../style/Header.css";
import "../style/Search.css";
import Cart from "./Cart";
// Import Bootstrap source files

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleOffcanvasClick = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  const [getCart, setGetCart] = useState([]);
  let count = getCart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const cartData = localStorage.getItem("cartData");
    if (cartData) {
      try {
        const parsedData = JSON.parse(cartData);
        setGetCart(parsedData);
      } catch (error) {
        console.error("Error parsing cartData from localStorage", error);
        setGetCart([]);
      }
    }
  }, []);

  //Merchandise
  const [merchandiseDropdown, setMerchandiseDropdown] = useState([]);
  const getMerchandiseDropdown = async () => {
    try {
      const response = await fetch("http://localhost:3200/merchandise", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'), // Ensure you handle the token properly
        },
      });
      const json = await response.json();
      console.log(json);
      setMerchandiseDropdown(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMerchandiseDropdown();
  }, []);

  //Equipment
  const[equipmentDropdown, setEquipmentDropdown] = useState([]);
  const getEquipmentDropdown = async () => {
    try {
      const response = await fetch("http://localhost:3200/equipment", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'), // Ensure you handle the token properly
        },
      });
      const json = await response.json();
      console.log(json);
      setEquipmentDropdown(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getEquipmentDropdown();
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#1c1b1b" }}
      >
        <div className="container-fluid">
          <a href="/">
            <img className="logo" src={logo1} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <a href="/">
                  <img className="logo" src={logo1} alt="logo" />
                </a>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start text-white flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    HOME
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/merchandise"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MERCHANDISE
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {merchandiseDropdown.map((item) => (
                      <li key={item._id}>
                        <Link
                          to={`/merchandise/${item._id}`}
                          className="dropdown-item"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EQUIPMENT
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                  {equipmentDropdown.map((item) => (
                    <li key={item._id}>
                      <Link
                        to={`/equipment/${item._id}`}
                        className="dropdown-item"
                      >
                        {item.title}
                      </Link>
                    </li>
                     ))}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="/Login"
                    className="nav-link active"
                    aria-current="page"
                  >
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Signup"
                    className="nav-link active"
                    aria-current="page"
                  >
                    SIGNUP
                  </Link>
                </li>
                <div className="so_icon">
                  <ul className="social-icon">
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </ul>
                </div>
              </ul>
            </div>
          </div>

          {/* ------ search and cart icon --------- */}
          <div className="nav-icon d-flex">
            <i className="fas fa-search" onClick={handleSearchClick}></i>
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            ></button>
            <Link className="text-decoration-none list-unstyled" to="/cart">
              <i className="fa-solid fa-store"></i>
              {/* <span className="text-white">{count}</span> */}
            </Link>
          </div>

          {searchOpen && (
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
