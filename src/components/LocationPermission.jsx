import React from "react";
import "../styles/LocationPermission.css";

export const LocationPermission = ({ agreementData, visible }) => {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-colorP7 to-colorP3 dark:bg-gradient-to-b dark:from-colorP11 dark:to-colorP7 flex items-center justify-center fixed z-50"
      style={{ display: visible ? "block" : "none" }}
    >
      <div className="text-center flex items-center justify-center flex-col h-screen gap-5">
        <h1 className="text-center text-4xl text-colorP10 dark:text-colorP4">
          Weather App
        </h1>
        <h2 className=" text-colorP8 p-2 rounded-xl flex-wrap">
          Welcome to our weather app! We'll provide you with the local forecast,
          but first, we need to ask for your location.
        </h2>
        <button
          onClick={agreementData}
          className="buttonNom transform transition-transform text-colorP8 dark:text-colorP4 bg-gradient-to-br from-colorP7 to-colorP3 dark:bg-gradient-to-bl dark:from-colorP11 dark:to-colorP7"
        >
          Accept
        </button>
      </div>
    </div>
  );
};
