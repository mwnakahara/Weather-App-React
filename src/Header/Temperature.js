import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit(value) {
    return Math.round((value * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <div className="temp col">
          <div className="current">
            {props.current}
            <span className="units">
              ℃ |{" "}
              <a href="/" onClick={showFahrenheit}>
                ℉
              </a>
            </span>
          </div>
          <div className="feelTemp">
            <div>feels like</div>
            {props.feelTemp}°
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <div className="temp col">
          <div className="current">
            {fahrenheit(props.current)}
            <span className="units">
              <a href="/" onClick={showCelsius}>
                ℃
              </a>{" "}
              | ℉
            </span>
          </div>
          <div className="feelTemp">
            <div>feels like</div>
            {fahrenheit(props.feelTemp)}°
          </div>
        </div>
      </div>
    );
  }
}
