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
    {
      label: "يجب أن تحتوي كلمة المرور على طول مناسب",
      value: length.leg,
      check: length.strong,
    },
    { label: "يجب أن تحتوي على حروف كبيرة", value: capital, check: capital },
    { label: "يجب أن تحتوي على حروف صغيرة", value: small, check: small },
    { label: "يجب أن تحتوي على أرقام", value: number, check: number },
    { label: "يجب أن تحتوي على رموز خاصة", value: special, check: special },
    { label: "يجب ألا تحتوي على تسلسل غير آمن", value: seq, check: seq },
  ];

  return (
    <div className="space-y-4 h-full p-4 bg-white ">
      {checkListItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between border-b border-gray-200 pb-2 transition-all duration-300 hover:bg-gray-50 rounded-lg p-2"
        >
          <div className="text-sm flex flex-row text-center justify-center gap-3 font-semibold text-gray-800">
            <div>{Check(item.check)}</div>
            {item.label}
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-sm font-semibold text-gray-500">
              {item.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Check = (strong = 0) => {
  if (strong > 0) {
    return (
      <IoIosCheckmarkCircle size={18} className="text-green-600 text-3xl" />
    );
  } else if (strong === 0) {
    return <IoIosWarning size={18}  className="text-yellow-600 text-3xl" />;
  } else {
    return <IoCloseCircle  size={18} className="text-red-600 text-3xl" />;
  }
};

export default CheckList;
