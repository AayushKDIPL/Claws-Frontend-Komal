 
import React, { useState } from 'react';
function Search() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <i className="Sicon fas fa-search" onClick={handleSearchClick} />
          </li>
        </ul>
      </nav>
      {searchOpen && (
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      )}
    </div>
  );
}

export default Search;