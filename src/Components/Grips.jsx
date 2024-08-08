import React, { useState } from "react";
import tshirt from "../img/product-1.JPG";
// Import your CSS file for additional styling
import Categories from "./Categories";
import handle1 from "../image/handle1.JPG"; 
import handle2 from "../image/handle2.JPG"; 
import handle3 from "../image/handle3.JPG"; 
import table from "../img/table.jpg" 
import '../index.css';

 
export default function Grips() {
  const [data,setData]=useState([Categories]);
  return (
    <div className="tshirt-container me-4">
      <h1 className="text-center text-dark">Power Handle</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 ">
           
          <div className="col-md-12">
            <div className="row">
              {data.map((values)=>{
                const {id,title,price,image}=values;
                return(
                  <>
                  <div className="col-md-12" key={id} >
                    <div className="row">
                <div className="card">
                  <img src={handle2} className="card-img-top w-200 h-30"  alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>Price: ₹399.00  &nbsp; Offer: 20%off</p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button href="#" class="btn btn-dark w-50">
                      Buy now
                    </button>
                  </div>
                </div>
                <div className="card">
                  <img src={handle1} className="card-img-top imgdata" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>Price: ₹299.00  &nbsp; Offer: 20%off</p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button href="#" class="btn btn-dark w-50">
                      Buy now
                    </button>
                  </div>
                </div>
                <div className="card">
                  <img src={handle3} className="card-img-top imgdata" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>Price: ₹499.00  &nbsp; Offer: 20%off</p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button href="#" class="btn w-50 btn-dark">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
              </div>
                  </>
                )
              })}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
