import React from "react";
import "../styles/DarkButton.css";

export const DarkButton = ({ themeInfo }) => {
  return (
    <label className="darkSwitch">
      <input type="checkbox" onClick={themeInfo} />
      <span className="darkSlider" />
    </label>
  );
};
