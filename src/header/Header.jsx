import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="auth-buttons">
        <Link to="/sign-up">
          <button className="signup">Sign up</button>
        </Link>
        <button className="login">Log in</button>
      </div>
    </header>
  );
}

export default Header;
