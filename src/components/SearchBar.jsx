import React, { useState, useEffect } from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [query, setQuery] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(query), 300); // Debounce input changes
    return () => clearTimeout(timer);
  }, [query, setSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search Recipes..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="p-2 border rounded-md w-full sm:w-3/4 lg:w-1/2"
    />
  );
};

export default SearchBar;
