import { useState, useEffect } from "react";
import "../styles/SearchInput.css";
import axios from "axios";

export const SearchInput = ({ handleInputClick, handleInputChange }) => {
  return (
    <div className="searchContainer relative flex items-center overflow-hidden">
      <input
        type="text"
        placeholder="Search City..."
        className="outline-none border-none rounded-xl text-center bg-colorP2 bg-opacity-40 text-colorP10 dark:text-colorP4 placeholder-opacity-50 focus-within:bg-colorP3 dark:focus-within:bg-colorP8"
        onChange={handleInputChange}
      />
      <button
        className="absolute right-2 w-fit top-1 rounded-full"
        onClick={handleInputClick}
      >
        <i className="bx bx-search-alt-2 bx-tada text-colorP10 dark:text-colorP4"></i>
      </button>
    </div>
  );
};
