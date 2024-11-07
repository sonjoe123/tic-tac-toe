import React from "react";

export const Search = () => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Enter your search term..."
      />
      <button className="search-button">Search</button>
    </div>
  );
};
