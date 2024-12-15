import React from "react";

const InputField = ({
  id = "input",
  label = "Input Label",
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full p-4 text-gray-900 border font-semibold text-2xl border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
