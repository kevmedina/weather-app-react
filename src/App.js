import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="search">
          <input
            type="text"
            placeholder="Enter City Name"
            id="search-txt"
          ></input>
          <a id="search-btn" href="#">
            <i className="fas fa-search"></i>
          </a>
        </div>
      </header>

      <main id="main">
        <div className="city-icon">
          <div className="city-icon-holder">
            <div id="city-name"></div>
            <img src="" alt="" id="icon" />
          </div>
        </div>

        <div className="temperature">
          <div id="temp"></div>
        </div>

        <div className="humidity">
          <div id="humidity-div"></div>
        </div>
      </main>
    </div>
  );
};

export default App;
