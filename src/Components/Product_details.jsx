import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import array from "./CardsData.js";
import { Link } from "react-router-dom";

function Product_details() {
  console.log(array);
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = array.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // add data

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container my-2 p-2">
        <h3 className="text-center p-3" style={{ fontWeight: '500', fontFamily: 'Montserrat;' }}>Iteams Details Page</h3>
        <hr />
        <section className="container mt-3 ">
          <div className="container-fluid">
            {data.map((ele) => {
              return (
                <>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="container "  >
                        <img style={{ boxShadow: '3px 3px 3px 6px grey', borderRadius: '5px' }} className='img-fluid mb-3 mt-3' src={ele.imgdata} alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6">

                      <div className="container">
                        <h3>
                          <strong>{ele.rname}</strong>
                        </h3>
                        <h4><strong>Details</strong></h4>
                        <ul>

                          {ele.somedata.split(",").map((ele) => {
                            return <li>{ele}</li>;
                          })}

                        </ul>
                        <strong>Description : </strong>{" "}
                        <p>
                          Discover the ultimate workout buddy: {ele.rname} gym
                          gear! With weights, resistance bands, mats, and
                          more, our products are built to boost your fitness
                          journey. Get comfy, stable, and durable equipment
                          that'll help you crush your goals. From newbies to
                          pros, {ele.rname} has what you need for a stellar
                          workout every time.
                        </p>
                        <strong>Price : </strong>
                        {ele.price}
                      </div>
                      <div className="row mt-3">
                        <div className="col-6">
                          {/* <button
                          className="btn btn-outline"
                          
                        >
                          Add to card
                        </button> */}
                          <button class="button">
                            <span class="button_lg" onClick={() => send(ele)}>
                              <span class="button_sl"></span>
                              <span class="button_text">Add to cart!</span>
                            </span>
                          </button>
                        </div>
                        <div className="col-6">
                          <Link to="/product_details">
                            {" "}
                            
                            <button class="button">
                            <span class="button_lg" >
                              <span class="button_sl"></span>
                              <span class="button_text">Back</span>
                            </span>
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>


                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Product_details;
