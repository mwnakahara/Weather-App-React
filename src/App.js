import "bootstrap/dist/css/bootstrap.css";
//import { ButtonToolbar } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecastData, setForecastData] = useState({});

  function handleResponseWeather(response) {
    setWeatherData({
      currentTemp: Math.round(response.data.temperature.current),
      feelTemp: Math.round(response.data.temperature.feels_like),
      icon: response.data.condition.icon,
      city: response.data.city,
      date: "today",
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windSpeed: Math.round(response.data.wind.speed * 10) / 10,
      ready: true,
    });
  }

  function handleResponseForecast(response) {
    console.log(response);
    setForecastData({
      test: "Test succesful",
    });
  }

  let apiKey = "ddbtd8ao7c32a7441a0c22f296b0d389";
  let unit = "metric";
  let defaultCity = "Vancouver";
  let apiUrlWeather = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=${unit}`;
  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${defaultCity}&key=${apiKey}&units=${unit}`;

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <Header weatherData={weatherData} />
          <Section forecastData={forecastData} />
          <Footer />
        </div>
      </div>
    );
  } else {
    axios.get(apiUrlWeather).then(handleResponseWeather);
    axios.get(apiUrlForecast).then(handleResponseForecast);

    return (
      <div className="App">
        <h2 className="loadFiller">Loading data, please wait...</h2>
      </div>
    );
  }
}

export default App;
