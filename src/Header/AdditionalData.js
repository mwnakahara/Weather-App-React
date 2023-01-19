import React from "react";
import "./AdditionalData.css";

export default function AdditionalData(props) {
  return (
    <div className="AdditionalData">
      <ul>
        <li className="description">{props.description}</li>
        <li>Humidity: {props.humidity}%</li>
        <li>Wind Speed: {props.windSpeed}km/h</li>
      </ul>
    </div>
  );
}
