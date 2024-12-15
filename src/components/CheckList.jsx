import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle, IoIosWarning } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { capitalCheck, numberCheck, smallCheck, specialCheck } from "../functions/functions";

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
      
    setLength({ leg: value.length, strong: value.length < 8 ? -1 : 1 });
  }, [value]);

  return (
    <div className="space-y-4 p-4 text-right">
      <div className="flex flex-row">
        <div>{Check(length.strong)}</div>
        <div className="text-xl font-semibold">طول كلمة السر</div>
        <div className="text-xl font-semibold">{length.leg}</div>
      </div>
      <div className="flex flex-row">
        <div>{Check(capital)}</div>
        <div className="text-xl font-semibold">حروف كبيرة</div>
        <div className="text-xl font-semibold">{capital}</div>
          </div>
          <div className="flex flex-row">
              <div>{Check(small)}</div>
                <div className="text-xl font-semibold">حروف صغيرة</div>
              <div className="text-xl font-semibold">{small}</div>
          </div>
            <div className="flex flex-row">
                <div>{Check(number)}</div>
                <div className="text-xl font-semibold">أرقام</div>
              <div className="text-xl font-semibold">{number}</div>
          </div>
          <div className="flex flex-row">
                <div>{Check(special)}</div>
                <div className="text-xl font-semibold">رموز خاصة</div>
              <div className="text-xl font-semibold">{special}</div>
              </div>

    </div>
  );
};

const Check = (strong = 0) => {
  if (strong >0) {
    return <IoIosCheckmarkCircle className="text-green-500 text-3xl" />;
  } else {
    return <IoCloseCircle className="text-red-500 text-3xl" />;
  }
};

export default CheckList;


// else if (strong === 0) {
//     return <IoIosWarning className="text-yellow-500 text-3xl" />;
//   } 
