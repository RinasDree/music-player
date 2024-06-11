import React, { useState } from 'react';
import Header from './Header';
import PopularArtists from './PopularArtists';
import ArtistDetails from './ArtistDetails';
import Player from './Player';
import SongList from './SongList';

const songs = [
  { id: 1, title: 'Song 1', artist:"Artist 1", url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'Song 2', artist:"Artist 1", url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, title: 'Song 3', artist:"Artist 1", url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
];

function Main({ selectedArtist, onArtistClick, onBackClick }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const setCurrentSong = (song) => {
    const index = songs.findIndex(s => s.id === song.id);
    setCurrentSongIndex(index);
  };

  return (
    <div className="main">
      <Header />
      {selectedArtist ? (
        <ArtistDetails artist={selectedArtist} onBackClick={onBackClick} />
      ) : (
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
    </div>
  );
}

export default Main;
