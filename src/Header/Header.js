import React from "react";
import "./Header.css";
import LocalData from "./LocalData";
import Temperature from "./Temperature";
import AdditionalData from "./AdditionalData";
import LocationButton from "./LocationButton";

export default function Header(props) {
  return (
    <div className="Header">
      <h1>Today's weather forecast</h1>
      <div className="row">
        <div className="col-md">
          <Temperature
            current={props.weatherData.currentTemp}
            feelTemp={props.weatherData.feelTemp}
          />
        </div>
        <div className="col-md">
          <LocalData
            icon={props.weatherData.icon}
            city={props.weatherData.city}
            date={props.weatherData.date}
          />
        </div>
        <div className="col-md">
          <AdditionalData
            description={props.weatherData.description}
            humidity={props.weatherData.humidity}
            windSpeed={props.weatherData.windSpeed}
          />
        </div>
      </div>
      <LocationButton />
    </div>
  );
}
