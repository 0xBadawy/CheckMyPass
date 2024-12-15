import React from "react";

const ProgressBar = ({ progress = 0, className = "" }) => {
  const getColor = (progress) => {
    if (progress < 25) return "bg-red-500";
    if (progress < 50) return "bg-yellow-500";
    if (progress < 75) return "bg-blue-500";
    return "bg-green-500";
  };

  return (
    <div className={`w-full bg-gray-200 rounded-full h-6 ${className}`}>
      <div
        className={`h-full text-xs font-medium text-white text-center p-0.5 leading-none rounded-full ${getColor(
          progress
        )} transition-all duration-500 ease-in-out flex items-center justify-center`}
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
