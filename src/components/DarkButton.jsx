import React from "react";
import "../styles/DarkButton.css";

export const DarkButton = ({ themeInfo }) => {
  return (
    <label className="darkSwitch opacity-90">
      <input type="checkbox" onClick={themeInfo} />
      <span className="darkSlider border-colorP10 border-solid border-2"></span>
    </label>
  );
};
