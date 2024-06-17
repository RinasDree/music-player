import React, { useState, useEffect } from 'react';
import './PopularArtists.css'; // Import CSS file for styling

function PopularArtists({ onArtistClick }) {
  const [artists, setArtists] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const artistIds = [
      '3TVXtAsR1Inumwj472S9r4', 
      '6fZ3U139Fb4VfOv7g63XhB', 
      '6V6mxrGG67IyLFy2l4poNZ', 
      '2SabhGDiBSyaM6QSuBUVqB',
      '5519qQ4H5p0qIIidEWUOB6',
      '1Xyo4u8uXC1ZmMpatF05PJ',
      '2YZyLoL8N0Wb9xBt1NhZWg',
      '6l3HvQ5sa6mXTsMTB19rO5',
      '7aLbqaCIv1zAI6HCfPCMjI',
      '1Ld3ajH4r4DZd5Ey4zLk5X',
      '6YGhVeajpGcixgdaTfakUL',
      '2oemnVL2uc5GiNj9NNH4pz',
      '2bQn1DFQtxawFMLRORIg0A'
    ];

    const url = `https://spotify23.p.rapidapi.com/artists/?ids=${artistIds.join(',')}`; // Join IDs with commas
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
        'x-rapidapi-key': '13780c0c66mshd80d429a92f637dp1d190ajsnd7a980c476e0'
      }
    };

    const fetchArtists = async (url, options) => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.artists) {
          setArtists(data.artists); // Set the artists state with the fetched data
        }
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchArtists(url, options);
  }, []);

  useEffect(() => {
    if (artists.length > 0) {
      const interval = setInterval(() => {
        const nextPosition = scrollPosition + 130; // Adjust as needed for smooth scrolling
        setScrollPosition(nextPosition % (artists.length * 130)); // Reset to 0 when reaching the end
      }, 2800); // Change the duration of auto-scrolling here (in milliseconds)

      return () => clearInterval(interval);
    }
  }, [scrollPosition, artists.length]);

  return (
    <section className="popular-artists fade-in" id="popularArtists">
      <h2>Popular artists</h2>
      <div className="artist-slider">
        <div className="artist-list" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {artists.map((artist, index) => (
            <div key={index} className="artist" onClick={() => onArtistClick(artist)}>
              {artist.images && artist.images[1] && <img src={artist.images[1].url} alt={artist.name} />} {/* Render only the second image */}
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularArtists;