import React from 'react';
import './SearchResults.css'; // Import CSS file for styling

function SearchResults({ results }) {
  return (
    <div className="search-results">
      <h2 className="results-heading">Search Results</h2>
      <div className="result-container">
        {results && results.artists && (
          <div className="result-section">
            <h3 className="section-heading">Artists</h3>
            <div className="artists-container">
              {results.artists.items.map((item, index) => (
                <div key={index} className="artist-item">
                  {item.data.visuals && item.data.visuals.avatarImage && item.data.visuals.avatarImage.sources && (
                    <img src={item.data.visuals.avatarImage.sources[0].url} alt={item.data.profile.name} className="artist-image" />
                  )}
                  <p className="artist-name">{item.data.profile.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {results && results.albums && (
          <div className="result-section">
            <h3 className="section-heading">Albums</h3>
            <div className="albums-container">
              {results.albums.items.map((item, index) => (
                <div key={index} className="album-item">
                  {item.data.coverArt && item.data.coverArt.sources && (
                    <img src={item.data.coverArt.sources[0].url} alt={item.data.name} className="album-image" />
                  )}
                  <p className="album-name">{item.data.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {results && results.tracks && (
          <div className="result-section">
            <h3 className="section-heading">Tracks</h3>
            <div className="tracks-container">
              {results.tracks.items.map((item, index) => (
                <div key={index} className="track-item">
                  {item.data.albumOfTrack && item.data.albumOfTrack.coverArt && item.data.albumOfTrack.coverArt.sources && (
                    <img src={item.data.albumOfTrack.coverArt.sources[0].url} alt={item.data.name} className="track-image" />
                  )}
                  <p className="track-name">{item.data.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
