import React from "react";

const Humidity = ({ humidity }) => {
  return (
    <div className="humidity">
      <div id="humidity-div">{humidity}</div>
    </div>
  );
};

export default Humidity;
