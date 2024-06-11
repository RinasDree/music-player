import React, { useState, useRef } from 'react';

const MusicPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value / 100;
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={audioSrc}></audio>
      <div className="controls">
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
