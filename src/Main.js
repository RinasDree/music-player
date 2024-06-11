import React, { useState } from 'react';
import Header from './Header';
import PopularArtists from './PopularArtists';
import ArtistDetails from './ArtistDetails';
import Player from './Player';
import SongList from './SongList';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults'; // Import the SearchResults component

const songs = [
  { id: 1, title: 'Song 1', artist: "Artist 1", url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'Song 2', artist: "Artist 1", url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, title: 'Song 3', artist: "Artist 1", url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
];

function Main({ selectedArtist, onArtistClick, onBackClick }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchResults, setSearchResults] = useState(null); // State to hold search results

  const setCurrentSong = (song) => {
    const index = songs.findIndex(s => s.id === song.id);
    setCurrentSongIndex(index);
  };

  // Function to search music using the API
  const searchMusic = async (query) => {
    const url = `https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5&q=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
        'x-rapidapi-key': '21e1344b33msh10b92b3ddec1d58p1989d7jsnd8b76f75b0d6'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log('API Response:', data); // Log the API response
      // Set the search results
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
      <Header />
      <SearchBar onSearch={searchMusic} />
      {searchResults && <SearchResults results={searchResults} />} {/* Render search results if available */}
      {!searchResults && !selectedArtist && (
        <>
          <PopularArtists onArtistClick={onArtistClick} />
          <SongList songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSongIndex} />
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
