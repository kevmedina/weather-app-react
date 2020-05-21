import React from "react";
import "./App.css";
import Search from "./components/Search";
import CityIcon from "./components/CityIcon";
import Temperature from "./components/Temperature";
import Humidity from "./components/Humidity";

const App = () => {
  return (
    <div className="container">
      <Search />
      <main id="main">
        <CityIcon />
        <Temperature />
        <Humidity />
      </main>
    </div>
  );
};

export default App;
