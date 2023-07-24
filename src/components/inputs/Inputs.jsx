import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

import "./inputs.css";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="searchbar_container">
      <div className="searchbar_marks">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city..."
          className="searchbar"
        />
        <UilSearch
          className="searchbar_icons"
          size={25}
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          className="searchbar_icons"
          size={25}
          onClick={handleLocationClick}
        />
      </div>

      <div className="searchbar_info">
        <button
          className="searchbar_icons"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="searchbar_line">|</p>
        <button
          className="searchbar_icons"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
