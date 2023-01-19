import React from "react";
import "./CitySearch.css";

export default function CitySearch() {
  return (
    <div className="CitySearch">
      <p>Search city:</p>
      <form>
        <input
          className="searchBar"
          type="text"
          placeholder="Enter city"
          autoComplete="off"
        />
        <input className="searchButton" type="submit" value="Go" />
      </form>
    </div>
  );
}
