import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Sidebar from './sidebar/SideBar';
import Main from './Main';
import Signup from './auth/Signup';
import Header from './header/Header';

function App() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
  };

  const handleBackClick = () => {
    setSelectedArtist(null);
  };

  return (
    <BrowserRouter>
      <div className="app">
      <Header/>
        <Sidebar />

        <Routes>
          <Route path="/" element={
            <Main 
              selectedArtist={selectedArtist} 
              onArtistClick={handleArtistClick}
              onBackClick={handleBackClick}
            />
          } />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
