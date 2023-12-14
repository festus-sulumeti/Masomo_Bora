// Signin.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Signin.css';


const Signin = () => {
   // Assume you have a function to handle signup logic
   const handleSignin = () => {
    // Perform signup logic here
    // Redirect the user to the Dashboard after successful signup
    // You can use react-router's useHistory hook for this
    // history.push('/dashboard');
  };

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
                <input type="text" placeholder="email" />
              </div>

              <div className="input-field">
                <i className="uil uil-padlock"></i>
                <input type="password" placeholder="user password" />
              </div>
            </div>
            <div className="btn-field">
              
              <Link to="/Home">
                <button type="button" id="SignupBtn" onClick={handleSignin}>
                  Log In
                </button>
              </Link>
              <p className='Sul'>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
