import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const searchInputRef = useRef(null); // Reference for search input
  const navigate = useNavigate(); // Hook to navigate between pages

  // List of possible pages to search for
  const pages = [
    { name: 'Home', path: '/Home' },
    { name: 'Counter', path: '/Counter' },
    { name: 'TodoList', path: '/TodoList' },
    { name: 'Stopwatch', path: '/Stopwatch' },
    { name: 'SearchFilter', path: '/Search' },
    { name: 'Theme', path: '/theme' },
    { name: 'Focus', path: '/Focus' },
  ];

  const handleSearch = () => {
    const searchQuery = searchInputRef.current.value.trim().toLowerCase(); // Get search query
    if (searchQuery) {
      const page = pages.find(p => p.name.toLowerCase().includes(searchQuery)); // Find matching page
      if (page) {
        navigate(page.path); // Navigate to the matched page
      } else {
        alert('Page not found!'); // Show alert if no match
      }
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <input
        type="text"
        placeholder="Search for a page..."
        ref={searchInputRef} // Attach the ref
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px' }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
