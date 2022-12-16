import React from "react";
import Forecast from "./Forecast";
import "./Section.css";

export default function Section() {
  return (
    <div className="Section">
      <h2>5-day weather forecast</h2>
      <Forecast
        weekday="Tuesday"
        date="10/25"
        icon="☀"
        description="sunny"
        maximum="10"
        minimum="7"
        unit="℃"
      />
      <br />
      <Forecast
        weekday="Wednesday"
        date="10/26"
        icon="🌧"
        description="rainy"
        maximum="11"
        minimum="8"
        unit="℃"
      />
    </div>
  );
}
