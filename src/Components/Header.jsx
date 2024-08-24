import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../img/logo1.png";
import "../style/Header.css";
import "../style/Search.css";
import Cart from "./Cart";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [getCart, setGetCart] = useState([]);
  const [getCategories, setGetCategories] = useState([]);
  const [getMSubcategories, setGetMSubcategories] = useState([]);
  const [getESubcategories, setGetESubcategories] = useState([]);
  const [merchandiseDropdown, setMerchandiseDropdown] = useState([]);
  const [equipmentDropdown, setEquipmentDropdown] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  console.log("get data HJVUVUHVFYCG CGHFKFCUT",getCategories);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleOffcanvasClick = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  useEffect(() => {
    getSubcategory();

    // Check for cart data in localStorage
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

  }, []);




  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const response = await fetch("http://localhost:8000/api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      const data = await response.json();
      alert(data.message); // "signout success"

      // Remove token from localStorage
      localStorage.removeItem("accessToken");

      // Update isLoggedIn state
      setIsLoggedIn(false);
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };





  useEffect(() => {
    getMerchandiseDropdown();
    getEquipmentDropdown();
  }, []);

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

  const getSubcategory = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/subcategory', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      console.log("cjkNSCN DJASD uBDN BACNAIONJ", data.message);

      if (!data.success) {
        throw new Error('Failed to fetch data');
      }

      const subcategories = data.message;

      const eSubcategories = [];
      const mSubcategories = [];

      for (let i = 0; i < subcategories.length; i++) {
        const category = subcategories[i].category;

        if (category && category.name) {
          if (category.name === 'Equipment') {
            eSubcategories.push(subcategories[i]);
          } else {
            mSubcategories.push(subcategories[i]);
          }
        } else {
          console.warn(`Category is undefined or missing name for subcategory with id ${subcategories[i]._id}`);
        }
      }

      setGetESubcategories(eSubcategories);
      setGetMSubcategories(mSubcategories);

      const uniqueCategories = new Set();
      subcategories.forEach(subcategory => {
        if (subcategory.category) {
          uniqueCategories.add(subcategory.category.name);
        }
      });

      const uniqueCategoryArray = Array.from(uniqueCategories);
      setGetCategories(uniqueCategoryArray);

    } catch (e) {
      console.error("An error occurred:", e.message);
    }
  };

  const getMerchandiseDropdown = async () => {
    try {
      const response = await fetch("http://localhost:8000/merchandise", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
      });
      const json = await response.json();
      setMerchandiseDropdown(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getEquipmentDropdown = async () => {
    try {
      const response = await fetch("http://localhost:8000/equipment", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
      });
      const json = await response.json();
      setEquipmentDropdown(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  let count = getCart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#1c1b1b" }}>
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
                  <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
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
                    {getMSubcategories.map((item) => (
                      <li key={item._id}>
                        <Link
                          to={`/merchandise/${item._id}`}
                          className="dropdown-item"
                        >
                          {item.name}
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
                    {getESubcategories.map((item) => (
                      <li key={item._id}>
                        <Link
                          to={`/equipment/${item._id}`}
                          className="dropdown-item"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Conditional Rendering Based on Login Status */}
                {isLoggedIn ? (
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page" onClick={handleLogout}>LOGOUT</Link>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="/Login" className="nav-link active" aria-current="page">LOGIN</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Signup" className="nav-link active" aria-current="page">SIGNUP</Link>
                    </li>
                  </>
                )}
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
