import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import ProgressBar from "../components/ProgressBar";
import {
  entropyCheck,
  calculateEntropy,
  entropyStatics,
  passwordStrength,
  enhancePassword,
} from "../functions/functions";
import CheckList from "../components/CheckList";
import EntropyDisplay from "../components/EntropyDisplay";
import ApiChecker from "../components/ApiChecker";
import TimeCheck from "../components/TimeCheck";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [sugestedPassword, setSugestedPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [entropy, setEntropy] = useState(0);
  const [entropyStatic, setEntropyStatic] = useState();

  useEffect(() => {
    const entropyValue = calculateEntropy(inputValue);
    setEntropy(entropyValue);
    const statics = entropyStatics(inputValue);
    setEntropyStatic(statics);
    const entropyCheckValue = passwordStrength(inputValue);
    setStrength(entropyCheckValue);

    setSugestedPassword(enhancePassword(inputValue));
  }, [inputValue]);

  return (
    <div
      className="container mx-auto px-4 py-28 max-w-7xl "
      style={{ direction: "rtl", opacity: 1 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          فاحص قوة كلمة المرور 💪
        </h1>
        <p className="text-xl mt-3 text-gray-600">اجعل كلمة مرورك قوية وآمنة</p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 rounded-lg">
        <div className="bg- white  p-6">
          <InputField
            id="password-input"
            label="أدخل كلمة المرور"
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="اكتب كلمة المرور هنا"
          />
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              قوة كلمة المرور
            </h2>
            <ProgressBar progress={strength} />
            {strength < 70 && (
              <div className="mt-10">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  كلمة المرور المقترحة
                </h2>
                <div className="mt-4 flex text-center justify-between">
                  <p className="text-gray-600">{sugestedPassword}</p>
                  <div>
                    <button
                      className=" bg-blue-500 text-white py-1 rounded text-[10px] px-2"
                      onClick={() => setInputValue(sugestedPassword)}
                    >
                      استخدم
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <CheckList value={inputValue} />
        </div>
        <div>
          <EntropyDisplay entropy={entropy} entropyStatic={entropyStatic} />
        </div>
      </div>
      {inputValue ? <TimeCheck value={inputValue} /> : ""}
      {/* <ApiChecker value={inputValue} /> */}
    </div>
  );
};

export default HomePage;
