import React, { useState } from 'react'; 
import "../style/Log.css"
function Login() {
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
          <form className='in-box' onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            <button type="submit">Log in</button>
            <div className="register">
              <p>
                Don't have a Account <a href="a">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;