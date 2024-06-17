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

const Login = () => {
    return (
        <div className="App">
            <div className="signup-container" style={{ position: 'relative'}}>
                <Link to="/" style={buttonStyle}>&#8592; </Link> {/* Back button */}

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