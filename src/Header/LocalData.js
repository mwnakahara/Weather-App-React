import React from "react";
import "./LocalData.css";

export default function LocalData(props) {
  return (
    <div className="LocalData">
      <div className="symbol-now">{props.symbol}</div>
      <div className="city">{props.city}</div>
      <div className="date">{props.date}</div>
    </div>
  );
}
