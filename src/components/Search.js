import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const { value } = e.target;
    console.log(value);
    setSearch(value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    let searchLink = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(searchLink)
      .then((weather) => {
        console.log("City info: ", weather.data);
      })
      .catch((err) =>
        console.log("Error while getting weather from the API: ", err)
      );
  };

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
