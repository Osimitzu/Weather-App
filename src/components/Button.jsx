import React from "react";
import "../styles/Button.css";

export const Button = ({ changeNom, nomenclature }) => {
  return (
    <div className="buttonContainer">
      <button
        onClick={changeNom}
        className="buttonNom transform transition-transform text-colorP8 dark:text-colorP4 bg-gradient-to-br from-colorP7 to-colorP3 dark:bg-gradient-to-bl dark:from-colorP11 dark:to-colorP7"
      >{`${nomenclature ? "Change to °F" : "Change to °C"}`}</button>
    </div>
  );
};
