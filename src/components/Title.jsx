import React from "react";
import "../styles/Title.css";

export const Title = () => {
  return (
    <>
      <div>
        <a href="https://osimitzu-weather-app.netlify.app">
          <h1 className="title text-center text-2xl text-colorP10 dark:text-colorP4">
            Weather App
          </h1>
        </a>
      </div>
    </>
  );
};
