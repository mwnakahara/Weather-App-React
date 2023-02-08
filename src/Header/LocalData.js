import React from "react";
import "./LocalData.css";
import CurrentDate from "./CurrentDate";

export default function LocalData(props) {
  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.icon}.png`;

  return (
    <div className="LocalData">
      <div className="icon-now">
        <img src={iconUrl} alt={props.description} />
      </div>
      <div className="city">{props.city}</div>
      <div className="date">
        <CurrentDate date={props.date} />
      </div>
    </div>
  );
}
