import React from "react";
import "../style/CheckOut.css";

const CheckOut = () => {
  return (
    <section className="checkout-section">
      <div className="container  ">
        {/* Billing Details Form */}
        <div className="form-box bill-box">
          <div className="form-content">
            <h3>Billing Details</h3>
            <form method="post">
              <div className="form-row">
                <div className="inputbox">
                  <input
                    type="text"
                    name="fname"
                    placeholder="Full name *"
                    required
                  />
                  <label>Full name</label>
                </div>
                {/* <div className="inputbox">
                    <input type="text" name="lname" placeholder="Last name *" required />
                    <label>Last name</label>
                </div> */}
              </div>
              <div className="form-row">
                <div className="inputbox">
                  <input
                    type="text"
                    name="billing_address"
                    placeholder="Address *"
                    required
                  />
                  <label>Address</label>
                </div>
                <div className="inputbox">
                  <input
                    type="text"
                    name="billing_address2"
                    placeholder="Address line2"
                  />
                  <label> </label>
                </div>
              </div>
              <div className="form-row">
                <div className="inputbox">
                  <input
                    type="text"
                    name="city"
                    placeholder="City / Town *"
                    required
                  />
                  <label>City / Town</label>
                </div>
                {/* <div className="inputbox">
                    <input type="text" name="state" placeholder="State / County *" required />
                    <label>State / County</label>
                </div> */}
              </div>
              <div className="form-row">
                <div className="inputbox">
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Postcode / ZIP *"
                    required
                  />
                  <label>Postcode / ZIP</label>
                </div>
                <div className="inputbox">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone *"
                    required
                  />
                  <label>Phone</label>
                </div>
              </div>
              <div className="inputbox full-width">
                <input
                  type="text"
                  name="email"
                  placeholder="Email address *"
                  required
                />
                <label>Email address</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        {/* Login Form Container */}
        <div className="login-container">
          <h2>Login</h2>
          <div className="form-box">
            <div className="form-content">
              <div className="login-form">
                <h3>Already have an account?</h3>
                <a
                  href="#loginform"
                  data-bs-toggle="collapse"
                  className="collapsed"
                  aria-expanded="false"
                >
                  Click here to login
                </a>
                <div
                  className="panel-collapse collapse login_form"
                  id="loginform"
                >
                  <form method="post">
                    <div className="inputbox">
                      <input
                        type="text"
                        name="email"
                        placeholder="Username Or Email"
                        required
                      />
                      <label>Username Or Email</label>
                    </div>
                    <div className="inputbox">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <label>Password</label>
                    </div>
                    <div className="forget">
                      <label>
                        <input type="checkbox" name="remember" />
                        Remember Me
                        <a href="#">Forgot password?</a>
                      </label>
                    </div>
                    <button type="submit">Log in</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
