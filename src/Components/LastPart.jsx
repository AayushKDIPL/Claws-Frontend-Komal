import React from 'react';
import "../Style/Lastpart.css";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import product from '../img/category-1.jpg';
import product1 from '../img/product-11.jpg';
import product2 from '../img/product-17.jpg';
import product3 from '../img/product-2.jpg';
import product4 from '../img/product-3.jpg';
import product5 from '../img/product-4.jpg';
import product6 from '../img/product-5.jpg'
import product7 from '../img/product-6.jpg';
import product8 from '../img/product-7.jpg';
import product9 from '../img/product-8.jpg';
import product10 from '../img/product-9.jpg';
import product11 from '../img/product-10.jpg';
import { Link } from "react-router-dom";
import tshirt from '../img/tshirt.JPG';
import table from '../img/table.jpg';



const LastPart = () => {
  return (
    <div>
         <div className="maincon3_container">
      <h3 style={{borderBottom:'1px solid black'}}>
        BEST SELLNG PRODUCTS!
      </h3>
      <div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={tshirt} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="image not load" />
              <h5><strong style={{color:'black', fontSize:'20px'}}>Claws Cotton T-Shirt Black</strong>
              </h5>
              <hr style={{ border: "1px solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
          
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                ><p style={{color:'grey'}}>Cotton Black Coloured Claws Logo Printed T-Shirt for Arm Wrestler Lovers.</p>
                   

                </div>
                <div>
               <Link to={'/Product_details/25'}>
                  <button class="button mt-4">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
               </Link>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={table} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
              <strong style={{color:'black' ,fontSize:'20px'}}>Claws Arm Wrestling Table</strong>
              

              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
            
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                ><p style={{color:'grey'}}>ARMBET Style Portable Arm Wrestling Table Can be assembled and carried in any car & easily transportable.</p>
                 

                </div>
                <div>
                <Link to={'/Product_details/21'}>
        <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
               </Link>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product3} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5><strong style={{color:'black' ,fontSize:'20px'}}>Elliptical Wrist Ball</strong>
              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                ><p style={{color:'grey'}}>Elliptic wrist ball for supination, pronation & raising training and for improving wrist strength, flexibility, and coordination through supination, pronation.</p>
                </div>
                <div>
                <Link to={'/Product_details/12'}>
        <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
               </Link>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product4} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5><strong style={{color:'black' ,fontSize:'20px'}}>Professional Training Strap</strong>
              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
         
       
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                ><p style={{color:'grey'}}>
2 inch wide, very thick and fine quality training strap maximum loading capacity is 150kg,ensuring safety during intense workouts.




                  
                </p>
                     

                </div>
                <div>
                <Link to={'/Product_details/23'}>
          <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
               </Link>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product5} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                <strong style={{color:"black"}}>
                Stainless Steel 15mm C Handle
                </strong>
             
              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
            
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                ><p style={{color:'grey'}}>
Compatible with all products from Wristball.net, this training strap seamlessly integrates into your workout routine.
                </p>
                 
                </div>
                <div>
                <Link to={'/Product_details/19'}>
        <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
               </Link>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product6} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                <strong style={{color:'black' ,fontSize:'20px'}}>
                Hand Winder
                </strong>
              

              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
            
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                ><p style={{color:'grey'}}> Engineered with a specialized hand winder design, provides unparalleled gripping strength enhancement for both pronation and supination movements.</p>
                 

                </div>
                <div>
                <Link to={'/Product_details/10'}>
          <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
               </Link>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product7} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                <strong style={{color:'black' ,fontSize:'20px'}}>
                Wrist Wrench
                </strong>
               

              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
      
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                    <p style={{color:'grey'}}>
                    Constructed with a robust high-pressure PVC pipe boasting a 2-inch diameter, the Wrist Wrench offers exceptional durability and stability.
                    </p>
                 
 
                </div>
                <div>
                <Link to={'/Product_details/4'}>
            <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
               </Link>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product8} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5> 
                <strong style={{color:'black' ,fontSize:'20px'}}>
                Tiranga Eccentric Grip
                </strong>
              

              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
           
         
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                    <p style={{color:'grey'}}>
                    The Tiranga Eccentric Grip, featuring a 70mm eccentric design, is unparalleled in its effectiveness for finger training. 
                    </p>
                

                </div>
                <div>
                <Link to={'/Product_details/7'}>
                  <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
               </Link>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product9} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
              <strong style={{color:'black' ,fontSize:'20px'}}>
              Loading Pin
                </strong>
             

              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
             
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                
                </div>
                <p style={{color:'grey'}}>
                The Loading Pin Equipment, designed for lifting weights with symmetry, boasts a maximum load capacity of 200kg.

                    </p>
                <div>
                  <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product10} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
              <strong style={{color:'black' ,fontSize:'20px'}}>
              
              Table Pulley
                </strong>
             
              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  
                </div>
                <p style={{color:'grey'}}>
                   With its universal design, the Table Pulley seamlessly integrates onto any arm wrestling table, offering a versatile solution for resistance training.
                    </p>
                <div>
          <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product1} height={140} width={250}  style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "red" }}>Hanoi</span>
              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Hanoi
                </div>
                <div>
        <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product11} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "red" }}>Paris</span>
              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Paris
                </div>
                <div>
        <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product10} height={140} width={250} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "red" }}>Hong-Kong</span>
              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Hong-Kong
                </div>
                <div>
        <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={product11} height={140} width={250} style={{borderRadius:"0.5rem"}}alt="" />
              <h5>
                The Best of <span style={{ color: "red" }}>Sydney</span>
              </h5>
              <hr style={{ border: "0.1rem solid red", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                  }}
                >
                  <FaLocationDot /> Sydney
                </div>
                <div>
        <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">View details</span>
    </span>
</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default LastPart
