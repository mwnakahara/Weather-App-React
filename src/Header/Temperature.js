import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [currentTemp, setcurrentTemp] = useState(props.current);
  const [feelTemp, setFeelTemp] = useState(props.feelTemp);
  const [unitSymbol, setUnitSymbol] = useState("℃");

  function handleClickCelsius(event) {
    setcurrentTemp(props.current);
    setFeelTemp(props.feelTemp);
    setUnitSymbol("℃");
  }

  function handleClickFahrenheit(event) {
    setcurrentTemp(Math.round((props.current * 9) / 5 + 32));
    setFeelTemp(Math.round((props.feelTemp * 9) / 5 + 32));
    setUnitSymbol("℉");
  }

  return (
    <div className="Temperature">
      <div className="current">
        {" "}
        {currentTemp}
        {unitSymbol}
      </div>
      <div className="feelTemp">
        <div>feels like</div>
        {feelTemp}
        {unitSymbol}
      </div>
      <div className="ConversionButton">
        <div>
          display in:
          <br />
          <button type="button" onClick={handleClickCelsius}>
            Celsius
          </button>{" "}
          <button type="button" onClick={handleClickFahrenheit}>
            Fahrenheit
          </button>
        </div>
      </div>
    </div>
  );
}
