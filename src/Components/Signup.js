// Signup.js
import React from 'react';
import '../Style/Signup.css';

const Signup = () => {
  return (
    <div className="feature-item">
      <div className="container">
        <div className="form-box">
          <h1 id="title">Sign Up</h1>
          <p>Unlock the door to a world of knowledge with Masomo Bora! Begin your child's enriching learning journey today by signing up. </p>
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
            </div>
            <div className="btn-field">
              <button type="button" id="SignupBtn">Sign Up</button>
              <p>Already have an account? <a href="#">Log in</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
