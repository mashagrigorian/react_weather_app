import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../../services/weatherService";

import "./temperature.css";

function TemperatureDetails({
  weather: { details, icon, temp, speed, humidity, feels_like },
}) {
  return (
    <div>
      <div className="detailed_container">
        <p>{details}</p>
      </div>

      <div className="detailed_info">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="temp_info">
          <div className="temp_icons">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span>{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="temp_icons">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span>{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="temp_icons">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span>{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureDetails;
