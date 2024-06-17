import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Sidebar from './sidebar/SideBar';
import Main from './Main';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Header from './header/Header';
import Layout from './Layout';

function App() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
  };

  const handleBackClick = () => {
    setSelectedArtist(null);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <Layout>
              <Main 
                selectedArtist={selectedArtist} 
                onArtistClick={handleArtistClick}
                onBackClick={handleBackClick}
              />
            </Layout>
          } />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
