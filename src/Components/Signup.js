// Signup.js

import React from 'react';
import '../Style/Signup.css';

const SignupPage = () => {
  return (
    <div className="feature-item">
      <div className="container">
        <div className="form-box">
          <h1 id="title">Sign Up</h1>
          <form action="">
            <div className="input-group">
              <div className="input-field" id="nameField">
                <i className="uil uil-user"></i>
                <input type="text" placeholder="username" />
              </div>

              <div className="input-field">
                <i className="uil uil-envelope-minus"></i>
                <input type="email" placeholder="user email" />
              </div>

              <div className="input-field">
                <i className="uil uil-padlock"></i>
                <input type="password" placeholder="user password" />
              </div>
              <p>Lost password <a href="">Click Here</a></p>
            </div>
            <div className="btn-field">
              <button type="button" id="signupBtn">Sign Up</button>
              <button type="button" id="SigninBtn">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
