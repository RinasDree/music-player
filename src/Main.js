import React, { useState } from 'react';
import Header from './header/Header';
import PopularArtists from './landinPage/PopularArtists';
import ArtistDetails from './ArtistDetails';
import Player from './Player';
import SongList from './SongList';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './Main.css'; // Import the CSS file
import Dafina1 from './songs/dafina1.mp3'
import Dafina2 from './songs/dafina2.mp3'
import Dafina3 from './songs/dafina3.mp3'

import Mckresha1 from './songs/mckresha1.mp3'
import Mckresha2 from './songs/mckresha2.mp3'
import Mckresha3 from './songs/mckresha3.mp3'

import drake1 from './songs/drake1.mp3'

import ledri from './songs/ledri.mp3'
import ledri1 from './songs/ledri1.mp3'
import ledri2 from './songs/ledri2.mp3'

import majk from './songs/majk.mp3'
import majk1 from './songs/majk1.mp3'
import majk2 from './songs/majk2.mp3'




const songs = [
  { id: 1, title: "'Jom ka du me t’pa'", artist: "Dafina Zeqiri x Yll Limani", url: Dafina1, artistId: '6V6mxrGG67IyLFy2l4poNZ' },
  { id: 2, title: "'Ku ma le forcen'", artist: "Dafina Zeqiri", url: Dafina2, artistId: '6V6mxrGG67IyLFy2l4poNZ' },
  { id: 3, title: "'My love'", artist: "Dafina Zeqiri", url: Dafina3, artistId: '6V6mxrGG67IyLFy2l4poNZ' },
  { id: 4, title: "'Shake it'", artist: "Mc Kresha", url: Mckresha1, artistId: '6fZ3U139Fb4VfOv7g63XhB' },
  { id: 5, title: "'Poem'", artist: "Mc Kresha", url: Mckresha2, artistId: '6fZ3U139Fb4VfOv7g63XhB' },
  { id: 6, title: "'Perla'", artist: "Mc Kresha", url: Mckresha3, artistId: '6fZ3U139Fb4VfOv7g63XhB' },
  { id: 7, title: "'THE HEART PART 6'", artist: "Drake", url: drake1, artistId: '3TVXtAsR1Inumwj472S9r4' },
  { id: 8, title: "'Kill Me'", artist: "Ledri Vula", url: ledri, artistId: '5519qQ4H5p0qIIidEWUOB6' },
  { id: 9, title: "'Cka i bone'", artist: "Dj Geek & YA NINA ft Ledri Vula", url: ledri1, artistId: '5519qQ4H5p0qIIidEWUOB6' },
  { id: 10, title: "'NO LOVE'", artist: "Ledri Vula x Elvana Gjata", url: ledri2, artistId: '5519qQ4H5p0qIIidEWUOB6' },
  { id: 11, title: "'Temelin'", artist: "MAJK", url: majk, artistId: '1Ld3ajH4r4DZd5Ey4zLk5X' },
  { id: 12, title: "' E JEMJA'", artist: "ZUNA x MAJK", url: majk1, artistId: '1Ld3ajH4r4DZd5Ey4zLk5X' },
  { id: 13, title: "'Viking'", artist: "MAJK", url: majk2, artistId: '1Ld3ajH4r4DZd5Ey4zLk5X' }
];

function Main({ selectedArtist, onArtistClick, onBackClick }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchResults, setSearchResults] = useState(null);
  const [displayedSongs, setDisplayedSongs] = useState(songs.slice(0, 10));
  const [artistSongs, setArtistSongs] = useState([]);

  const setCurrentSong = (song) => {
    const index = songs.findIndex(s => s.id === song.id);
    setCurrentSongIndex(index);
  };

  const searchMusic = async (query) => {
    const url = `https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5&q=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
        'x-rapidapi-key': '13780c0c66mshd80d429a92f637dp1d190ajsnd7a980c476e0'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log('API Response:', data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const loadMoreSongs = () => {
    const currentLength = displayedSongs.length;
    const moreSongs = songs.slice(currentLength, currentLength + 10);
    setDisplayedSongs([...displayedSongs, ...moreSongs]);
  };

  const handleArtistClick = (artist) => {
    const filteredSongs = songs.filter(song => song.artistId === artist.id);
    setArtistSongs(filteredSongs);
    onArtistClick(artist); // This function sets the selected artist
  };

  return (
    <div className="main">
      <Header />
      <SearchBar onSearch={searchMusic} />
      {searchResults && <SearchResults results={searchResults} />}
      {!searchResults && !selectedArtist && (
        <>
          <PopularArtists onArtistClick={handleArtistClick} />
          <SongList songs={displayedSongs} setCurrentSong={setCurrentSong} currentSong={currentSongIndex} />
          {displayedSongs.length < songs.length && (
            <button className="load-more" onClick={loadMoreSongs}>Load More</button>
          )}
          <Player
            songs={displayedSongs}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            className="fixed-player"
          />
        </>
      )}
      {selectedArtist && (
        <>
          <ArtistDetails
            artist={selectedArtist}
            artistImage={selectedArtist.images && selectedArtist.images.length > 0 ? selectedArtist.images[0].url : ''}
            onBackClick={onBackClick}
          />
          <SongList songs={artistSongs} setCurrentSong={setCurrentSong} currentSong={currentSongIndex} />
          <Player
            songs={artistSongs}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            className="fixed-player"
          />
        </>
      )}
    </div>
  );
}

export default Main;
