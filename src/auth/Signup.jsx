import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const buttonStyle = {
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  cursor: 'pointer',
  position: 'absolute', // Use absolute positioning
  top: '10px', // Distance from the top of signup-container
  left: '10px', // Distance from the left of signup-container
  zIndex: '100', // Ensure it stays above other content
};
function Signup() {
  return (
    <div className="App">
         <div className="signup-container" style={{ position: 'relative'}}>
         <Link to="/" style={buttonStyle}>&#8592; </Link> {/* Back button */}
        <h2>Sign Up</h2>
        <div className="signup-form">
          <input type="email" placeholder="name@domain.com" className="input-field" />
          <input type="text" placeholder="Fullname" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-button">Sign Up</button>
        </div>
        <div className="or-divider">
          <span>or</span>
        </div>
        <div className="social-signup-buttons">
          <button className="google-button">Sign up with Google</button>
          <button className="facebook-button">Sign up with Facebook</button>
          <button className="apple-button">Sign up with Apple</button>
        </div>
        <div className="login-link">
          Already have an account? <a href="/login">Log in here.</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;