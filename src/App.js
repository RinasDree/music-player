import React, { useState } from 'react';
import './App.css';
import Sidebar from './SideBar';
import Main from './Main';

function App() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
  };

  const handleBackClick = () => {
    setSelectedArtist(null);
  };

  return (
    <div className="app">
      <Sidebar />
      <Main 
        selectedArtist={selectedArtist} 
        onArtistClick={handleArtistClick}
        onBackClick={handleBackClick}
      />
    </div>
  );
}

export default App;
