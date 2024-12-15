import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import ProgressBar from "../components/ProgressBar";
import { entropyCheck, seqanceCheck } from "../functions/functions";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    console.log(entropyCheck(inputValue));
  }, [inputValue]);

  return (
    <>
      <div
        className="grid grid-cols-2  pt-32 w-[70%] mx-auto"
        style={{ direction: "rtl" }}
      >
        <div className="bg-red-200 p-3">
          <InputField
            id="large-input"
            label="Large input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter text here"
          />
          <ProgressBar progress={60} />
        </div>
        <div className="bg-red-100">one</div>
      </div>
    </>
  );
};

export default HomePage;
