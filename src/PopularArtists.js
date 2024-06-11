import React from 'react';

import DafinaImage from './images/Dafina.png';
import NoizyImage from './images/Noizy.png';
import McKreshaImage from './images/McKresha.png';
import DrakeImage from './images/Drake.png';
import TheWeekendImage from './images/TheWeekend.png';

const artists = [
  { name: "Dafina Zeqiri", image: DafinaImage, bio: "Bio for Dafina Zeqiri", albums: [] },
  { name: "Noizy", image: NoizyImage, bio: "Bio for Noizy", albums: [] },
  { name: "Mc Kresha", image: McKreshaImage, bio: "Bio for Mc Kresha", albums: [] },
  { name: "Drake", image: DrakeImage, bio: "Bio for Drake", albums: [] },
  { name: "The Weekend", image: TheWeekendImage, bio: "Bio for The Weekend", albums: [] }
];

function PopularArtists({ onArtistClick }) {
  return (
    <section className="popular-artists fade-in" id="popularArtists">
      <h2>Popular artists</h2>
      <div className="artist-list">
        {artists.map(artist => (
          <div key={artist.name} className="artist" onClick={() => onArtistClick(artist)}>
            <img src={artist.image} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularArtists;
