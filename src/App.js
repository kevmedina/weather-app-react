import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import CityIcon from "./components/CityIcon";
import Temperature from "./components/Temperature";
import Humidity from "./components/Humidity";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [weatherIcon, SetIcon] = useState(null);

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
        const temp = Math.round(1.8 * parseInt(weather.data.main.temp - 273) + 32) + "°";
        const weatherIcon = `http://openweathermap.org/img/w/${weather.data.weather[0].icon}.png`;
        setTemperature(temp);
        setHumidity(weather.data.main.humidity);
        SetIcon(weatherIcon);
      })
      .catch((err) =>
        console.log("Error while getting weather from the API: ", err)
      );
  };

  return (
    <div className="container">
      <Search
        search={search}
        handleSearch={handleSearch}
        submitSearch={submitSearch}
      />
      <main id="main">
        <CityIcon weatherIcon={weatherIcon} />
        <Temperature temperature={temperature} />
        <Humidity humidity={humidity} />
      </main>
    </div>
  );
};

export default App;
