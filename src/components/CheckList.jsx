import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle, IoIosWarning } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import {
  capitalCheck,
  numberCheck,
  seqanceCheck,
  smallCheck,
  specialCheck,
} from "../functions/functions";

const CheckList = ({ value }) => {
  const [length, setLength] = useState({ leg: 0, strong: 0 });
  const [capital, setCapital] = useState(0);
  const [small, setSmall] = useState(0);
  const [number, setNumber] = useState(0);
  const [special, setSpecial] = useState(0);
  const [seq, setSeq] = useState(0);

  useEffect(() => {
    setCapital(capitalCheck(value));
    setSmall(smallCheck(value));
    setNumber(numberCheck(value));
    setSpecial(specialCheck(value));
    setSeq(seqanceCheck(value));

    setLength({ leg: value.length, strong: value.length < 8 ? -1 : 1 });
  }, [value]);

  const checkListItems = [
    { label: "طول كلمة السر", value: length.leg, check: length.strong },
    { label: "حروف كبيرة", value: capital, check: capital },
    { label: "حروف صغيرة", value: small, check: small },
    { label: "أرقام", value: number, check: number },
    { label: "رموز خاصة", value: special, check: special },
    { label: "تسلسل", value: seq, check: seq },
  ];

  return (
    <div className="space-y-4 p-6 bg-white ">
      {checkListItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between border-b border-gray-200 pb-2 transition-all duration-300 hover:bg-gray-50 rounded-lg p-2"
        >
          <div className="text-xl font-semibold text-gray-800">
            {item.label}
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xl font-semibold text-gray-800">
              {item.value}
            </div>
            <div>{Check(item.check)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Check = (strong = 0) => {
  if (strong > 0) {
    return <IoIosCheckmarkCircle className="text-green-600 text-3xl" />;
  } else if (strong === 0) {
    return <IoIosWarning className="text-yellow-600 text-3xl" />;
  } else {
    return <IoCloseCircle className="text-red-600 text-3xl" />;
  }
};

export default CheckList;
