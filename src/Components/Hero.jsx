import React from "react";
import "../style/Hero.css";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero_image">
      {/* <div data-aos="zoom-in-up"> */}
      <div className="heading_div ">
        <div data-aos="fade-down">
          <div className="home-div">
            <h3 className="text-white heading1 ms-5 ">
              CONNECT WITH THE INDIA COMMUNITY OF ARM WRESTLERS <br /><br />
              30,000 MEMBERS AND COUNTING
            </h3>
             
            <div className="container btn_div">
              <Link to={"/equipment"}>
                <button type="button" class="btn2">
                  VIEW EQUIPMENT
                </button>
              </Link>

              <Link to={"/merchandise"}>
                {" "}
                <button type="button" class="btn2 ">
                  MERCHANDISE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Hero;
