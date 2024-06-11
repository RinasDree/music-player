import React from 'react';
import Header from './Header';
import PopularArtists from './PopularArtists';
import ArtistDetails from './ArtistDetails';

function Main({ selectedArtist, onArtistClick, onBackClick }) {
  return (
    <div className="main">
      <Header />
      {selectedArtist ? (
        <ArtistDetails artist={selectedArtist} onBackClick={onBackClick} />
      ) : (
        <PopularArtists onArtistClick={onArtistClick} />
      )}
    </div>
  );
}

export default Main;
