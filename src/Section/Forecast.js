import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="date">{props.weekday}</div>
      {props.date}
      <div className="icon">{props.icon}</div>
      {props.description}
      <br />
      <div className="temperatures">
        max/min
        <br />
        {props.maximum}
        {props.unit}
        <span>/ </span>
        {props.minimum}
        {props.unit}
      </div>
    </div>
  );
}
