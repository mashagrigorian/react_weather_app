import React from "react";
import { iconUrlFromCode } from "../../services/weatherService";

import "./forecast.css";

const Forecast = ({ title, items }) => {
  return (
    <div>
      <div>
        <p className="forecast_title">{title}</p>
      </div>
      <hr />

      <div className="forecast_info">
        {items.map((item, index) => (
          <div key={index} className="temperature">
            <p>{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt="" />
            <p>{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
