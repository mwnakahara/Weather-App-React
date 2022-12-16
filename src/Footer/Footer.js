import React from "react";
import "./Footer.css";
import CitySearch from "./CitySearch";
import ConversionButton from "./ConversionButton";
import Credits from "./Credits";

export default function Footer() {
  return (
    <div className="Footer">
      <CitySearch />
      <ConversionButton />
      <Credits />
    </div>
  );
}
