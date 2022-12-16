import React from "react";
import "./Header.css";
import LocalData from "./LocalData";
import Temperature from "./Temperature";
import AdditionalData from "./AdditionalData";
import LocationButton from "./LocationButton";

export default function Header() {
  return (
    <div className="Header">
      <h1>Today's weather forecast</h1>
      <LocalData city="Vancouver, CA" date="10/24" />
      <Temperature current="7" maximum="9" minimum="5" unit="℃" />
      <AdditionalData
        symbol="☁"
        description="overcast clouds"
        humidity="80%"
        windSpeed="2.5 km/h"
      />
      <LocationButton />
    </div>
  );
}
