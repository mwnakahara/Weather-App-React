import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="current">
        {" "}
        {props.current} {props.unit}
      </div>
      <div className="maxMin">
        {props.maximum} {props.unit} <span>/ </span>
        {props.minimum} {props.unit}
      </div>
    </div>
  );
}
