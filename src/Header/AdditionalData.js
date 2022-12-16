import React from "react";
import "./AdditionalData.css";

export default function AdditionalData(props) {
  return (
    <div className="AdditionalData">
      <div className="symbol-now">{props.symbol}</div>
      <div>
        <div className="additional-data">
          <ul>
            <li className="description">{props.description}</li>
            <li>Humidity: {props.humidity}</li>
            <li>Wind Speed: {props.windSpeed}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
