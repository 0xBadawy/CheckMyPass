import React from "react";

const ProgressBar = ({
  progress = 0, // Progress percentage (0-100)
  backgroundColor = "bg-gray-200", // Outer bar background
  progressColor = "bg-blue-600", // Inner bar background
  textColor = "text-blue-100", // Text color
  className = "", // Additional classes
}) => {
  return (
    <div className={`w-full ${backgroundColor} rounded-full ${className}`}>
      <div
        className={`${progressColor} ${textColor} text-xs font-medium text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
