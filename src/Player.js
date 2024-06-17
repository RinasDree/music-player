import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import './Player.css';  // Sigurohuni të shtoni stilizimin tuaj këtu


function Player({ songs, currentSongIndex, setCurrentSongIndex }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(error => console.error("Error playing audio:", error));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentSongIndex]);

    const playPauseHandler = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            audioRef.current.play().catch(error => console.error("Error playing audio:", error));
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Kjo linjë rikthen kohën e këngës në fillim
        }
    };

    const nextSongHandler = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    const prevSongHandler = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    };

    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime, duration });
    };

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    useEffect(() => {
        audioRef.current.src = songs[currentSongIndex].url;
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
        setSongInfo({ ...songInfo, duration: audioRef.current.duration });
    }, [currentSongIndex]);

    return (
        <div className="player">
            <audio
                ref={audioRef}
                onError={(e) => console.error("Audio error:", e)}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
            ></audio>
            <div className="controls">
                <input
                    type="range"
                    value={songInfo.currentTime}
                    max={songInfo.duration || 0}
                    onChange={dragHandler}
                    style={{
                        background: `linear-gradient(to right, #1db954 ${songInfo.currentTime / songInfo.duration * 100}%, #fff ${songInfo.currentTime / songInfo.duration * 100}%)`
                    }}
                />
                <div>{getTime(songInfo.currentTime)}/{getTime(songInfo.duration)}</div>
            </div>
            <div className="controls">
                <button onClick={prevSongHandler}>
                    <FontAwesomeIcon icon={faStepBackward} />
                </button>
                <button onClick={playPauseHandler}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button onClick={nextSongHandler}>
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
            </div>
        </div>
    );
}

export default Player;
