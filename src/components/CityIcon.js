import React from "react";

const CityIcon = ({ weatherIcon }) => {
  return (
    <div className="city-icon">
      <div className="city-icon-holder">
        <div id="city-name"></div>
        <img src={weatherIcon} alt="" id="icon" />
      </div>
    </div>
  );
};

export default CityIcon;
