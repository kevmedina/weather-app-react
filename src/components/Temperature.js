import React from "react";

const Temperature = ({ temperature }) => {
  return (
    <div className="temperature">
      <div id="temp">{temperature}</div>
    </div>
  );
};

export default Temperature;
