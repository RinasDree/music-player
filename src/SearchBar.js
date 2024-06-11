import React, { useState } from 'react';
import './SearchBar.css'; // Import CSS file for styling

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search songs, artists, or albums"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default SearchBar;
