import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="images/EchoTunes.png" alt="EchoTunes" className="logo" />
      <nav>
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Your Library</a></li>
          <li><a href="#">Liked Songs</a></li>
        </ul>
      </nav>
      <div className="playlist">
        <p>Create your first playlist</p>
        <button>Create playlist</button>
      </div>
      <div className="podcasts">
        <p>Let's find some podcasts to follow</p>
        <button>Browse podcasts</button>
      </div>
      <div className="footer-links">
        <a href="#">Legal</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
        <a href="#">About Ads</a>
      </div>
    </div>
  );
}

export default Sidebar;
