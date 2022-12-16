import React from "react";
import "./LocalData.css";

export default function LocalData(props) {
  return (
    <div className="LocalData">
      <div class="city">{props.city}</div>
      <div class="date">{props.date}</div>
    </div>
  );
}
