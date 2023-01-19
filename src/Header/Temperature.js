import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="current">
        {" "}
        {props.current}
        {props.unit}
      </div>
      <div className="feelTemp">
        <div>feels like</div>
        {props.feelTemp}
        {props.unit}
      </div>
    </div>
  );
}
