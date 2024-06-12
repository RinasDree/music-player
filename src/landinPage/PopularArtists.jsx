import React, { useState, useEffect } from 'react';
import './PopularArtists.css'; // Import CSS file for styling

function PopularArtists({ onArtistClick }) {
  const [artists, setArtists] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const ids = '2w9zwq3AktTeYYMuhMjju8'; // Define the ids parameter value
    const url = `https://spotify23.p.rapidapi.com/artists/?ids=${ids}`; // Include the ids parameter in the URL
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
        'x-rapidapi-key': '21e1344b33msh10b92b3ddec1d58p1989d7jsnd8b76f75b0d6'
      }
    };

    // Fetch artists data from the API and set the state with the received data
    const fetchArtists = async (url, options) => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        // Repeat the same artist 20 times
        const repeatedArtists = Array(20).fill(data.artists[0]);
        setArtists(repeatedArtists); // Set the artists state with the repeated data
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchArtists(url, options); // Call the fetchArtists function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPosition = scrollPosition + 195; // Adjust as needed for smooth scrolling
      setScrollPosition(nextPosition % (artists.length * 100)); // Reset to 0 when reaching the end
    }, 2500); // Change the duration of auto-scrolling here (in milliseconds)

    return () => clearInterval(interval);
  }, [scrollPosition, artists.length]);

  return (
    <section className="popular-artists fade-in" id="popularArtists">
      <h2>Popular artists</h2>
      <div className="artist-slider">
        <div className="artist-list" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {artists.map((artist, index) => (
            <div key={index} className="artist" onClick={() => onArtistClick(artist)}>
              {artist.images[1] && <img src={artist.images[1].url} alt={artist.name} />} {/* Render only the second image */}
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}

export default PopularArtists;
