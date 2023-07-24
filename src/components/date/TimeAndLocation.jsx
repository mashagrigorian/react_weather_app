import React from "react";
import { formatToLocalTime } from "../../services/weatherService";

import "./date.css";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div>
      <div className="date_container">
        <p className="date_title">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="country_container">
        <p className="country_title" >{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
