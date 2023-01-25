import React from "react";
import "./Footer.css";
import CitySearch from "./CitySearch";
import ConversionButton from "./ConversionButton";
import Credits from "./Credits";

export default function Footer(props) {
  return (
    <div className="Footer">
      <CitySearch updateCityValue={props.updateCityValue} />
      <ConversionButton />
      <Credits />
    </div>
  );
}
