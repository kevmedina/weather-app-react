import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import CityIcon from "./components/CityIcon";
import Temperature from "./components/Temperature";
import Humidity from "./components/Humidity";
import axios from "axios";

const App = () => {
  const [state, setState] = useState({
    inputValue: "",
    temperature: null,
    humidity: null,
    weatherIcon: null,
  });

  const handleSearch = ({ target: { value } }) =>
    setState((prev) => ({ ...prev, inputValue: value }));

  const submitSearch = (e) => {
    e.preventDefault();
    let searchLink = `https://api.openweathermap.org/data/2.5/weather?q=${state.inputValue}&appid=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(searchLink)
      .then((weather) => {
        const temp =
          Math.round(1.8 * parseInt(weather.data.main.temp - 273) + 32) + "°";
        const weatherIcon = `http://openweathermap.org/img/w/${weather.data.weather[0].icon}.png`;
        setState((prev) => ({
          ...prev,
          humidity: weather.data.main.humidity,
          temperature: temp,
          weatherIcon,
        }));
      })
      .catch((err) =>
        console.log("Error while getting weather from the API: ", err)
      );
  };

  return (
    <div className="container">
      <Search
        inputValue={state.inputValue}
        handleSearch={handleSearch}
        submitSearch={submitSearch}
      />
      <main id="main">
        <CityIcon weatherIcon={state.weatherIcon} />
        <Temperature temperature={state.temperature} />
        <Humidity humidity={state.humidity} />
      </main>
    </div>
  );
};

export default App;
