import React from "react";
import "./CitySearch.css";

export default function CitySearch() {
  return (
    <div className="CitySearch">
      <div>Search city:</div>
      <form>
        <input
          className="searchBar"
          type="text"
          placeholder="Enter city"
          autocomplete="off"
        />
        <input className="searchButton" type="submit" value="Go" />
      </form>
    </div>
  );
}
