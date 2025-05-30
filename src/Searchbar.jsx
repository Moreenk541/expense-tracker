// Searchbar.jsx
import React from 'react';

function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <div class ="Display">
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
