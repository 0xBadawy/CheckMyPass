import React, { useState } from "react";
import { checkPasswordStrength } from "../functions/functions";

const ApiChecker = ({ value }) => {
  const [inputValue, setInputValue] = useState("");
const checkPassword = async () => {
    const result = await checkPasswordStrength(value);
    setInputValue(result);
};

  return (
    <div
      className="container mx-auto px-6 py-32 max-w-7xl bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg"
      style={{ direction: "rtl", opacity: 1 }}
    >
      <div className="text-center mb-8">
        <button
          onClick={checkPassword}
          className="px-6 py-3 text-4xl font-semibold text-white bg-indigo-700 hover:bg-indigo-800 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mb-4"
        >
          فاحص قوة كلمة المرور
        </button>
        <p className="text-2xl font-medium text-white mt-4">{inputValue}</p>
      </div>
    </div>
  );
};

export default ApiChecker;
