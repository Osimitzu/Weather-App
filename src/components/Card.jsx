import React from "react";
import "../styles/Card.css";

export const Card = ({ data, nomenclature }) => {
  const Celsius = `${Math.floor(data.main?.temp - 273.15)}°C`;
  const Fahrenheit = `${Math.floor((data.main?.temp * 9) / 5 - 459.67)}°F`;

  const CMax = `${Math.floor(data.main?.temp_max - 273.15)}°C`;
  const FMax = `${Math.floor((data.main?.temp_max * 9) / 5 - 459.67)}°F`;

  const CMin = `${Math.floor(data.main?.temp_min - 273.15)}°C`;
  const FMin = `${Math.floor((data.main?.temp_min * 9) / 5 - 459.67)}°F`;

  return (
    <div className="cardContainer">
      <h1 className="cardH1">{nomenclature ? Celsius : Fahrenheit}</h1>
      <div className="cardImgContainer">
        <img
          src={`/${data.weather?.[0].icon}.png`}
          alt="weatherImage"
          className="cardImg"
        />
      </div>
      <div className="cardPContainer">
        <p className="cardP">
          <span className="cardSpan">Humidity: </span>
          {`${data.main?.humidity}%`}
        </p>
        <p className="cardP">
          <span className="cardSpan">Clouds: </span>
          {`${data.clouds?.all}%`}
        </p>
        <div className="cardMaxMinContainer">
          <p className="cardP">
            <span className="cardSpan">Max: </span>
            {nomenclature ? CMax : FMax}
          </p>
          <p className="cardP">
            <span className="cardSpan">Min: </span>
            {nomenclature ? CMin : FMin}
          </p>
        </div>
      </div>
      <div className="cardH2Container">
        <h2 className="cardH2Country">
          {data.name}, {data.sys?.country}
        </h2>
        <h2 className="cardH2Description">{data.weather?.[0].description}</h2>
      </div>
    </div>
  );
};
