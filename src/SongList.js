import React, { useState, useEffect } from 'react';
import './SongList.css';

function SongList({ songs, setCurrentSong, currentSong }) {
    const [songDurations, setSongDurations] = useState([]);

    useEffect(() => {
        const durations = [];
        songs.forEach(song => {
            const audio = new Audio(song.url);
            audio.addEventListener('loadedmetadata', () => {
                const durationInSeconds = Math.floor(audio.duration);
                const minutes = Math.floor(durationInSeconds / 60);
                const seconds = durationInSeconds % 60;
                durations.push({
                    id: song.id,
                    duration: `${minutes}:${seconds < 10 ? '0' : ''}${seconds}` // Format minutes and seconds
                });
                if (durations.length === songs.length) {
                    setSongDurations(durations);
                }
            });
            audio.addEventListener('error', () => {
                console.error('Error loading audio file:', song.url);
                durations.push({
                    id: song.id,
                    duration: '00:00' // If there's an error loading the audio file, set duration to 00:00
                });
                if (durations.length === songs.length) {
                    setSongDurations(durations);
                }
            });
            audio.src = song.url;
        });
    }, [songs]);

    return (
        <div className="song-list">
            {songs.map((song, index) => (
                <div key={song.id} className="song-item"
                    style={{ backgroundColor: index === currentSong ? '#1db954' : 'transparent' }}
                    onClick={() => setCurrentSong(song)}>
                    <div className="song-info">
                        <div className="play-pause-icon">
                            {index === currentSong ? (
                                <span>&#10074;&#10074;</span> // Pause icon
                            ) : (
                                <span>&#9654;</span> // Play icon
                            )}
                        </div>
                        <div className="song-title">{song.title}</div>
                        <div className="song-artist">{song.artist}</div>
                    </div>
                    <div className="song-duration">{song.duration}</div>
                    <div className="song-duration">{songDurations.find(item => item.id === song.id)?.duration || 'Calculating...'}</div>

                </div>
            ))}
        </div>
    );
}

export default SongList;