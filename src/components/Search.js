import React from "react";
import { AutoComplete } from "antd";

const options = [
  {
    value: "Fort Lauderdale",
  },
  {
    value: "Miami",
  },
  {
    value: "Orlando",
  },
];

const Search = ({ inputValue, handleSearch, submitSearch }) => {
  return (
    <div className="search">
      <header className="header">
        <form onSubmit={submitSearch}>
          <label for="search-input" id="label">
            Search Weather
          </label>
          <AutoComplete
            style={{
              width: 300,
            }}
            name="search-input"
            options={options}
            onChange={handleSearch}
            placeholder="Enter city name"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />

          {/* <input
            name="search-input"
            type="text"
            placeholder="Enter City Name"
            id="search-txt"
            value={inputValue}
            onChange={handleSearch}
          ></input> */}

          <button id="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </header>
    </div>
  );
};

export default Search;
