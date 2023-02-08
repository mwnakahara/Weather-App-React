import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  let iconCode = props.forecastData.condition.icon;
  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconCode}.png`;

  let time = props.forecastData.time;
  let timeData = new Date(time * 1000);

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[timeData.getDay()];

  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let month = months[timeData.getMonth()];
  if (month < 10) {
    month = `0${month}`;
  }
  let date = timeData.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  function fahrenheit(value) {
    return Math.round((value * 9) / 5 + 32);
  }

  return (
    <div className="Forecast">
      <div className="date">{weekday}</div>
      {month}/{date}
      <div className="icon">
        <img src={iconUrl} alt={props.description} />
      </div>
      <div className="forecast-description">
        {props.forecastData.condition.description}
      </div>
      <br />
      <div className="temperatures">
        max/min
        <div className="celsius">
          {Math.round(props.forecastData.temperature.maximum)}℃<span>/ </span>
          {Math.round(props.forecastData.temperature.minimum)}℃
        </div>
        <div className="fahrenheit">
          {fahrenheit(props.forecastData.temperature.maximum)}℉<span>/ </span>
          {fahrenheit(props.forecastData.temperature.minimum)}℉
        </div>
      </div>
    </div>
  );
}
