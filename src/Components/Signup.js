// Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Signup.css';

const Signup = () => {
  // Assume you have a function to handle signup logic
  const handleSignup = () => {
    // Perform signup logic here
    // Redirect the user to the Dashboard after successful signup
    // You can use react-router's useHistory hook for this
    // history.push('/dashboard');
  };

  return (
    <div className="feature-item">
      <div className="container">
        <div className="form-box">
          <h1 id="title">Sign Up</h1>
          <p className='Sul'>
            Unlock the door to a world of elimu bora with Masomo Bora! Begin your child's enriching learning journey today by signing up.
          </p>
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
              {/* Use Link to navigate to the Dashboard */}
              <Link to="/Home">
                <button type="button" id="SignupBtn" onClick={handleSignup}>
                  Sign Up
                </button>
              </Link>
              <p className='Sul'>Already have an account? <Link to="/signin">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
