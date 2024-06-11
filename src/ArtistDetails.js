import React from 'react';

function ArtistDetails({ artist, onBackClick }) {
  return (
    <div className="artist-details">
      <a href="#" onClick={onBackClick}><i className="fas fa-arrow-left"></i> Back</a>
      <div className="artist-banner">
        <img src={artist.image} alt={artist.name} />
        <div className="artist-info">
          <h1>{artist.name}</h1>
          <p>Artist</p>
          <button>Follow</button>
        </div>
      </div>
      <div className="artist-bio">
        <h2>Biography</h2>
        <p>{artist.bio}</p>
      </div>
    </div>
  );
}

export default ArtistDetails;
