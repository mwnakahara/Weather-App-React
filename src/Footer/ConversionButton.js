import React from "react";
import "./ConversionButton.css";

export default function ConversionButton(props) {
  return (
    <div className="ConversionButton d-none">
      <div>
        display in:
        <br />
        <button>Celsius</button> {}
        <button>Fahrenheit</button>
        <br />
        <strong>
          <em>Sorry, currently not functional.</em>
        </strong>
      </div>
    </div>
  );
}
