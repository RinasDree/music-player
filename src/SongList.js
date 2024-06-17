import React, { useState, useEffect } from 'react';
import './SongList.css';
import './VolumeControl.js';

const SongList = ({ setCurrentSong, currentSong }) => {
  const [songs, setSongs] = useState([]);
  const [songDurations, setSongDurations] = useState([]);
  const [volume, setVolume] = useState(1);
  const [playingSongId, setPlayingSongId] = useState(null); // Gjendje për të vendosur këngën që po luajt

  useEffect(() => {
    const fetchSongs = async () => {
      const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=6V6mxrGG67IyLFy2l4poNZ,5519qQ4H5p0qIIidEWUOB6,3TVXtAsR1Inumwj472S9r4';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'spotify23.p.rapidapi.com',
          'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY_HERE'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const fetchedSongs = data.tracks.map(track => ({
          id: track.id,
          title: track.name,
          artist: track.artists.map(artist => artist.name).join(', '),
          url: track.preview_url
        }));
        setSongs(fetchedSongs);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    const durations = [];
    songs.forEach(song => {
      if (!song.url) {
        durations.push({
          id: song.id,
          duration: '00:00'
        });
        if (durations.length === songs.length) {
          setSongDurations(durations);
        }
        return;
      }

      const audio = new Audio(song.url);
      audio.volume = volume;
      audio.addEventListener('loadedmetadata', () => {
        const durationInSeconds = Math.floor(audio.duration);
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = durationInSeconds % 60;
        durations.push({
          id: song.id,
          duration: `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
        });
        if (durations.length === songs.length) {
          setSongDurations(durations);
        }
      });
      audio.addEventListener('error', () => {
        console.error('Error loading audio file:', song.url);
        durations.push({
          id: song.id,
          duration: '00:00'
        });
        if (durations.length === songs.length) {
          setSongDurations(durations);
        }
      });
      audio.src = song.url;

      // Shto event listener për kontrollimin e ngjarjes së përfundimit të këngës
      audio.addEventListener('ended', () => {
        setPlayingSongId(null); // Ndrysho gjendjen e këngës që po luajt në 'null' pasi kënga mbaron
      });
    });
  }, [songs, volume]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleSongClick = (song) => {
    setCurrentSong(song);
    setPlayingSongId(song.id); // Ndrysho gjendjen e këngës që po luajt në ID-in e këngës që klikohet
  };

  return (
    <div className="song-list-container">
      <div className="volume-control">
        <label htmlFor="volume">Volume: </label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div className="song-list">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className="song-item"
            style={{ backgroundColor: index === currentSong ? '#1db954' : 'transparent' }}
            onClick={() => handleSongClick(song)}
          >
            <div className="song-info">
              <div className="play-pause-icon">
                {/* Përdorimi i kushteve për të ndryshuar ikonën në bazë të gjendjes së këngës */}
                {playingSongId === song.id ? (
                  <span>&#10074;&#10074;</span> // Ikona për ndalimin e këngës
                ) : (
                  <span>&#9654;</span> // Ikona për fillimin e këngës
                )}
              </div>
              <div className="song-title">{song.title}</div>
              <div className="song-artist">{song.artist}</div>
            </div>
            <div className="song-duration">
              {songDurations.find(item => item.id === song.id)?.duration || 'Calculating...'}
            </div>
          </div>
        ))}
      </div>
      {}
     
    </div>
  );
};

export default SongList;
