import React, { useState } from "react";
import "./CitySearch.css";

export default function CitySearch() {
  let [city, setCity] = useState("defaultCity");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(city);
    event.target.value = null;
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
