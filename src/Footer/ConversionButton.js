import React from "react";
import "./ConversionButton.css";

export default function ConversionButton() {
  return (
    <div className="ConversionButton">
      <div>
        display in:
        <br />
        <button>Celsius</button> {}
        <button>Fahrenheit</button>
      </div>
    </div>
  );
}
