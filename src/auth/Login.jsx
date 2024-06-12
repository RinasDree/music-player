import React from 'react';
import '../App.css';

function Login() {
  return (
    <div className="App">
      <div className="signup-container">
        <h2>Log In</h2>
        <div className="signup-form">
          <input type="email" placeholder="name@domain.com" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-button">Log In</button>
        </div>
        <div className="or-divider">
          <span>or</span>
        </div>
        <div className="social-signup-buttons">
          <button className="google-button">Log in with Google</button>
          <button className="facebook-button">Log in with Facebook</button>
          <button className="apple-button">Log in with Apple</button>
        </div>
        <div className="login-link">
          Don't have an account? <a href="/sign-up">Sign up here.</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
