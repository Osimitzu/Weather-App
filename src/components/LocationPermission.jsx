import React from "react";
import "../styles/LocationPermission.css";

export const LocationPermission = ({ agreementData, visible }) => {
  return (
    <div
      className="locationPermissionContainer"
      style={{ display: visible ? "block" : "none" }}
    >
      <h1>We need access to your location</h1>
      <button onClick={agreementData} className="acceptButton">
        Accept
      </button>
    </div>
  );
};
