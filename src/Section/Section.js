import React from "react";
import Forecast from "./Forecast";
import "./Section.css";

export default function Section(props) {
  if (!props.forecastData) return <></>;
  return (
    <div className="Section">
      <h2>5-day weather forecast</h2>
      <div className="row">
        {props.forecastData.map(function (dailyForecast, index) {
          if (index >= 1 && index <= 5) {
            return (
              <div className="col" key={index}>
                <Forecast forecastData={dailyForecast} />
              </div>
            );
          } else return null;
        })}
      </div>
    </div>
  );
}
