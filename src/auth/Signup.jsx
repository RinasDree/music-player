import React from 'react';
import '../App.css';

function Signup() {
  return (
    <div className="App">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="signup-form">
          <input type="email" placeholder="name@domain.com" className="input-field" />
          <button className="next-button">Next</button>
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
          Already have an account? <a href="#login">Log in here.</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
