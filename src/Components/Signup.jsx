import React, { useState } from 'react'; 
import "../style/Log.css"
function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission here
    console.log('Form submitted:', { username, password, rememberMe });
  };

  return (
    <section>
      <div className="form-box">
        <div className="from-value">
          <form onSubmit={handleSubmit}>
            <h2 className='mt-3'>Signup</h2>
            <div className="inputbox">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>UserName</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="email"
                // value={password}
                // onChange={(e) => setEmail()}
                required
              />
              <label>Password</label>
            </div>
            <div className="forget">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
                <a href="a">Forget Password</a>
              </label>
            </div>
            <button type="submit">Sign up</button>
            <div className="register">
              <p>
                Already have a Account <a href="a">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;