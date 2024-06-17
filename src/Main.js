import React, { useState } from 'react';
import Header from './header/Header';
import PopularArtists from './landinPage/PopularArtists';
import ArtistDetails from './ArtistDetails';
import Player from './Player';
import SongList from './SongList';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults'; // Import the SearchResults component

// Përcakto këngët që dëshironi të mbetën në listë
const songs = [
  { id: 1, title: 'Song 1', artist: "Artist 1", url: 'https://www.example.com/song1.mp3' },
  { id: 2, title: 'Song 2', artist: "Artist 1", url: 'https://www.example.com/song2.mp3' },
  { id: 3, title: 'Song 3', artist: "Artist 1", url: 'https://www.example.com/song3.mp3' }
];

function Main({ selectedArtist, onArtistClick, onBackClick }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchResults, setSearchResults] = useState(null); // State to hold search results

  const searchMusic = async (query) => {
    const url = `https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5&q=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
        'x-rapidapi-key': '7db7ec5184msh590607ee60acb8ep1b4909jsnb146d8d002c9'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log('API Response:', data); // Log the API response
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
      <Header />
      <SearchBar onSearch={searchMusic} />
      {searchResults && <SearchResults results={searchResults} />}
      {!searchResults && !selectedArtist && (
        <>
          <PopularArtists onArtistClick={onArtistClick} />
          <SongList songs={songs} setCurrentSongIndex={setCurrentSongIndex} currentSongIndex={currentSongIndex} />
          <Player
            songs={songs}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
          />
        </>
      )}
      {selectedArtist && <ArtistDetails artist={selectedArtist} onBackClick={onBackClick} />}
    </div>
  );
}

export default Main;
