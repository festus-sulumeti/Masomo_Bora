// Signin.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Signin.css';


const Signin = () => {
  return (
    <div className="feature-item">
      <div className="container">
        <div className="form-box">
          <h1 id="title">Log In</h1>
          <p className='Sul'>Welcome to Masomo Bora! Log in the learning journey.</p>
          <form action="">
            <div className="input-group">
              <div className="input-field" id="nameField">
                <i className="uil uil-user"></i>
                <input type="text" placeholder="username or email" />
              </div>

              <div className="input-field">
                <i className="uil uil-padlock"></i>
                <input type="password" placeholder="user password" />
              </div>
            </div>
            <div className="btn-field">
              <button type="button" id="SigninBtn">Log In</button>
              <p className='Sul'>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
