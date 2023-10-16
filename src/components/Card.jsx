import React from "react";
import "../styles/Card.css";

export const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      <h2>{data.main?.temp}</h2>
      <h2>location</h2>
      <img src="weatherImage" alt="weatherImage" />
      <p>Other Info</p>
    </div>
  );
};
