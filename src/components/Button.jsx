import React from "react";
import "../styles/Button.css";

export const Button = ({ changeNom, nomenclature }) => {
  return (
    <div className="buttonContainer">
      <button onClick={changeNom} className="buttonNom">{`${
        nomenclature ? "Change to °F" : "Change to °C"
      }`}</button>
    </div>
  );
};
