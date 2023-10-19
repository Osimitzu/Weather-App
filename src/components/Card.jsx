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
    <div className="cardContainer text-colorP10 dark:text-colorP3">
      <h1 className="cardH1 text-colorP8 dark:text-colorP4">
        {nomenclature ? Celsius : Fahrenheit}
      </h1>
      <div className="cardImgContainer">
        <img
          src={`/${data.weather?.[0].icon}.png`}
          alt="weatherImage"
          className="cardImg"
        />
      </div>
      <div className="cardPContainer">
        <p className="cardP text-colorP8 dark:text-colorP4">
          <span className="cardSpan text-colorP10 dark:text-colorP3">
            Humidity:{" "}
          </span>
          {`${data.main?.humidity}%`}
        </p>
        <p className="cardP text-colorP8 dark:text-colorP4">
          <span className="cardSpan text-colorP10 dark:text-colorP3">
            Clouds:{" "}
          </span>
          {`${data.clouds?.all}%`}
        </p>
        <div className="cardMaxMinContainer">
          <p className="cardP text-colorP8 dark:text-colorP4">
            <span className="cardSpan text-colorP10 dark:text-colorP3">
              Max:{" "}
            </span>
            {nomenclature ? CMax : FMax}
          </p>
          <p className="cardP text-colorP8 dark:text-colorP4">
            <span className="cardSpan text-colorP10 dark:text-colorP3">
              Min:{" "}
            </span>
            {nomenclature ? CMin : FMin}
          </p>
        </div>
      </div>
      <div className="cardH2Container">
        <h2 className="cardH2Country text-colorP8 dark:text-colorP4">
          {data.name}, {data.sys?.country}
        </h2>
        <h2 className="cardH2Description">{data.weather?.[0].description}</h2>
      </div>
    </div>
  );
};
