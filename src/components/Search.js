import React from "react";

const Search = ({ search, handleSearch, submitSearch }) => {
  return (
    <div className="search">
      <header className="header">
        <form onSubmit={(e) => submitSearch(e)}>
          <input
            type="text"
            placeholder="Enter City Name"
            id="search-txt"
            value={search}
            onChange={handleSearch}
          ></input>
          <button id="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </header>
    </div>
  );
};

export default Search;
