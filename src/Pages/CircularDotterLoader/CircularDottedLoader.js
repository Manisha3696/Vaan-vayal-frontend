import React from "react";
import '../../Css/Style.css';

const CircularDottedLoader = () => {
  return (
    <svg className="dotted-spinner" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="#007bff"
        strokeWidth="5"
        strokeDasharray="2 10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default CircularDottedLoader;
