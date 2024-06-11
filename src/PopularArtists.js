import React, { useState, useEffect } from 'react';
import './PopularArtists.css'; // Import CSS file for styling

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
  { name: "The Weekend", image: TheWeekendImage, bio: "Bio for The Weekend", albums: [] },
  { name: "Dafina Zeqiri", image: DafinaImage, bio: "Bio for Dafina Zeqiri", albums: [] },
  { name: "Noizy", image: NoizyImage, bio: "Bio for Noizy", albums: [] },
  { name: "Mc Kresha", image: McKreshaImage, bio: "Bio for Mc Kresha", albums: [] },
  { name: "Drake", image: DrakeImage, bio: "Bio for Drake", albums: [] },
  { name: "The Weekend", image: TheWeekendImage, bio: "Bio for The Weekend", albums: [] },
  { name: "Dafina Zeqiri", image: DafinaImage, bio: "Bio for Dafina Zeqiri", albums: [] },
  { name: "Noizy", image: NoizyImage, bio: "Bio for Noizy", albums: [] },
  { name: "Mc Kresha", image: McKreshaImage, bio: "Bio for Mc Kresha", albums: [] },
  { name: "Drake", image: DrakeImage, bio: "Bio for Drake", albums: [] },
  { name: "The Weekend", image: TheWeekendImage, bio: "Bio for The Weekend", albums: [] },
  { name: "Dafina Zeqiri", image: DafinaImage, bio: "Bio for Dafina Zeqiri", albums: [] },
  { name: "Noizy", image: NoizyImage, bio: "Bio for Noizy", albums: [] },
  { name: "Mc Kresha", image: McKreshaImage, bio: "Bio for Mc Kresha", albums: [] },
  { name: "Drake", image: DrakeImage, bio: "Bio for Drake", albums: [] },
  { name: "The Weekend", image: TheWeekendImage, bio: "Bio for The Weekend", albums: [] },
  { name: "Dafina Zeqiri", image: DafinaImage, bio: "Bio for Dafina Zeqiri", albums: [] },
  { name: "Noizy", image: NoizyImage, bio: "Bio for Noizy", albums: [] },
  { name: "Mc Kresha", image: McKreshaImage, bio: "Bio for Mc Kresha", albums: [] },
  { name: "Drake", image: DrakeImage, bio: "Bio for Drake", albums: [] },
  { name: "The Weekend", image: TheWeekendImage, bio: "Bio for The Weekend", albums: [] },
  { name: "Dafina Zeqiri", image: DafinaImage, bio: "Bio for Dafina Zeqiri", albums: [] },
  { name: "Noizy", image: NoizyImage, bio: "Bio for Noizy", albums: [] },
  { name: "Mc Kresha", image: McKreshaImage, bio: "Bio for Mc Kresha", albums: [] },
  { name: "Drake", image: DrakeImage, bio: "Bio for Drake", albums: [] },
  { name: "The Weekend", image: TheWeekendImage, bio: "Bio for The Weekend", albums: [] },
  // Repeat the artists for demonstration
];

function PopularArtists({ onArtistClick }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPosition = scrollPosition + 200; // Adjust as needed for smooth scrolling
      setScrollPosition(nextPosition % (artists.length * 100)); // Reset to 0 when reaching the end
    }, 2500); // Change the duration of auto-scrolling here (in milliseconds)

    return () => clearInterval(interval);
  }, [scrollPosition]);

  return (
    <section className="popular-artists fade-in" id="popularArtists">
      <h2>Popular artists</h2>
      <div className="artist-slider">
        <div className="artist-list" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {artists.map((artist, index) => (
            <div key={index} className="artist" onClick={() => onArtistClick(artist)}>
              <img src={artist.image} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularArtists;
