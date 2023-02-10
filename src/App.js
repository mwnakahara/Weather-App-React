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
  const [forecastData, setForecastData] = useState(false);
  const [city, setCity] = useState("Vancouver");

  function handleResponseWeather(response) {
    setWeatherData({
      currentTemp: Math.round(response.data.temperature.current),
      feelTemp: Math.round(response.data.temperature.feels_like),
      icon: response.data.condition.icon,
      city: response.data.city,
      date: response.data.time,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windSpeed: Math.round(response.data.wind.speed * 10) / 10,
      ready: true,
    });
  }

  function handleResponseForecast(response) {
    setForecastData(response.data.daily);
  }

  let unit = "metric";
  let apiKey = "ddbtd8ao7c32a7441a0c22f296b0d389";
  let apiUrlWeather = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${unit}`;

  function handleCity(city) {
    let apiUrlWeather = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrlWeather).then(handleResponseWeather);
    axios.get(apiUrlForecast).then(handleResponseForecast);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <Header weatherData={weatherData} />
          <Section forecastData={forecastData} />
          <Footer updateCityValue={setCity} handleCity={handleCity} />
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
