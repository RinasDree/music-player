import React, { useRef, useEffect } from 'react';
import './VolumeControl.css';  // Stilizimi i kontrollit të volumit

const VolumeControl = ({ iframeRef }) => {
    const volumeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const iframeWindow = iframe.contentWindow;

        // Dëgjuesi për dërgimin e vlerës së volumit nga iframe
        const messageListener = (event) => {
            const { type, volume } = event.data;
            if (type === 'volumeChange') {
                volumeRef.current.value = volume;
            }
        };

        iframeWindow.addEventListener('message', messageListener);

        // Funksioni për të dërguar vlerën e volumit në iframe
        const sendVolumeMessage = (volume) => {
            iframeWindow.postMessage({ type: 'setVolume', volume }, '*');
        };

        // Dëgjuesi për ndryshimin e vlerës së volumit lokal
        const handleVolumeChange = (e) => {
            const newVolume = parseFloat(e.target.value);
            sendVolumeMessage(newVolume);
        };

        // Regjistro dëgjuesin për volumin lokal
        volumeRef.current.addEventListener('input', handleVolumeChange);

        return () => {
            // Hiq dëgjuesin kur komponenti zhduket
            iframeWindow.removeEventListener('message', messageListener);
            volumeRef.current.removeEventListener('input', handleVolumeChange);
        };
    }, [iframeRef]);

    return (
        <div className="volume-control">
            <label htmlFor="volume">Volume: </label>
            <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="1"
                step="0.01"
                ref={volumeRef}
            />
        </div>
    );
};

export default VolumeControl;
