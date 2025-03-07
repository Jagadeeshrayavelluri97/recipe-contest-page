import React, { useEffect } from "react";

const SortOptions = ({ sort, setSort }) => {
  useEffect(() => {
    const savedSort = localStorage.getItem("sortOption");  // Load saved sort preference from localStorage
    if (savedSort) {
      setSort(savedSort);
    }
  }, [setSort]);

  const handleSortChange = (e) => {
    const newSort = e.target.value;   // Handle sorting change and save preference
    setSort(newSort);
    localStorage.setItem("sortOption", newSort); // Save to localStorage
  };

  return (
    <select
      value={sort}
      onChange={handleSortChange}
      className="p-2 border rounded-md w-full md:w-auto text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    >
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="highestRated">Highest Rated</option>
      <option value="lowestRated">Lowest Rated</option>
    </select>
  );
};

export default SortOptions;
