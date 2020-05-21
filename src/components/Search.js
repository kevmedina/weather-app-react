import React from "react";

const Search = () => {
  return (
    <div className="search">
      <header className="header">
        <input
          type="text"
          placeholder="Enter City Name"
          id="search-txt"
        ></input>
        <span id="search-btn">
          <i className="fas fa-search"></i>
        </span>
      </header>
    </div>
  );
};

export default Search;
