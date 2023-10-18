import React from "react";
import "../styles/Card.css";

export const Card = ({ data, nomenclature }) => {
  const Celsius = `${Math.floor(data.main?.temp - 273.15)} °C`;
  const Fahrenheit = `${Math.floor((data.main?.temp * 9) / 5 - 459.67)} °F`;

  return (
    <div className="cardContainer">
      <h1>{nomenclature ? Celsius : Fahrenheit}</h1>
      <img src={`/${data.weather?.[0].icon}.png`} alt="weatherImage" />
      <p>
        <span>Wind speed: </span>
        {`${data.wind?.speed}m/s`}
      </p>
      <p>
        <span>Clouds: </span>
        {`${data.clouds?.all}%`}
      </p>
      <p>
        <span>Humidity: </span>
        {`${data.main?.humidity}%`}
      </p>
      <h2>
        {data.name}, {data.sys?.country}
      </h2>
      <h2>{data.weather?.[0].description}</h2>
    </div>
  );
};
