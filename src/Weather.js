import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  //update city
  let [city, setCity] = useState(" ");
  function updateCity(event) {
    setCity(event.target.value);
  }

  //update weather details
  let [weather, setWeather] = useState(null);
  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      //icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setError(null); // Clear any previous errors
  }

  // handle error
  let [error, setError] = useState(null);
  function handleError(error) {
    setError("City not found, please try again.");
    setWeather(null); // Clear previous weather data
  }

  // handle search submission
  function handleSubmit(event) {
    event.preventDefault();

    if (city.length > 0) {
      // update Weather
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f81614abe2395d5dfecd45b9298041de&units=metric`;
      axios.get(url).then(showWeather).catch(handleError);
    } else {
      alert("Enter a city");
    }
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city..."
          className="search-form-input"
          onChange={updateCity}
          required
          id="search-form-input"
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
      {error && <p>{error}</p>}
      <br />
      {weather && (
        <div>
          <p>
            The Weather in <strong>{city.toUpperCase()}</strong> is:
          </p>
          <ul>
            <li>
              <strong>Temperature:</strong> {weather.temperature} °C
            </li>
            <li>
              <strong>Description:</strong> {weather.description}
            </li>
            <li>
              <strong>Humidity:</strong> {weather.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {weather.wind}km/h
            </li>
          </ul>
        </div>
      )}
      <br />
    </div>
  );
}
