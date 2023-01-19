import React from "react";
import "./LocalData.css";

export default function LocalData(props) {
  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.icon}.png`;
  return (
    <div className="LocalData">
      <div className="icon-now">
        <img src={iconUrl} alt={props.description} />

        {props.symbol}
      </div>
      <div className="city">{props.city}</div>
      <div className="date">{props.date}</div>
    </div>
  );
}
