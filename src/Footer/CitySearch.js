import React, { useState } from "react";
import "./CitySearch.css";

export default function CitySearch(props) {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.updateCityValue(city);
    props.handleCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="CitySearch">
      <p>Search city:</p>
      <form onSubmit={handleSubmit}>
        <input
          className="searchBar"
          type="text"
          placeholder="Enter city"
          autoComplete="off"
          onChange={updateCity}
        />
        <input className="searchButton" type="submit" value="Go" />
      </form>
    </div>
  );
}
