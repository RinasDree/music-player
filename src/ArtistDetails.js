import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ArtistDetails({ artist, artistImage, onBackClick }) {
  return (
    <div className="artist-details">
      <a href="#" onClick={onBackClick}><FontAwesomeIcon icon={faArrowLeft} /></a>
      <div className="artist-banner">
        <img src={artistImage} alt={artist.name} />
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
