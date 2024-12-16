import React from "react";

const EntropyDisplay = ({ entropy, entropyStatic }) => {
  // entropyStatic;
  // { capital, small, number, special , length }
  const getEntropyDescription = (entropy) => {
    if (!entropy) return "";
    if (entropy < 28) return "ضعيف جداً";
    if (entropy < 40) return "ضعيف";
    if (entropy < 60) return "متوسط";
    if (entropy < 80) return "قوي";
    return "قوي جداً";
  };

  const getEntropyColor = (entropy) => {
    if (entropy < 28) return "text-red-500 ";
    if (entropy < 40) return "text-orange-500";
    if (entropy < 60) return "text-yellow-500";
    if (entropy < 80) return "text-blue-500";
    return "text-green-500";
  };

  return (
    <div className="bgwhite h-full p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">قيمة الإنتروبيا</h2>
      <div className="text-6xl font-bold mb-2" style={{ direction: "ltr" }}>
        {entropy ? (
          <span className={getEntropyColor(entropy)}>
            {entropy.toFixed(2)} bits
          </span>
        ) : (
          "-- bits"
        )}
      </div>
      <p className="text-xl text-gray-600">{getEntropyDescription(entropy)}</p>
      {entropy ? (
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="text-lg font-semibold text-gray-800">
            الحروف الكبيرة
          </div>
          <div className="text-lg text-gray-800">{entropyStatic.capital}</div>

          <div className="text-lg font-semibold text-gray-800">
            الحروف الصغيرة
          </div>
          <div className="text-lg text-gray-800">{entropyStatic.small}</div>

          <div className="text-lg font-semibold text-gray-800">الأرقام</div>
          <div className="text-lg text-gray-800">{entropyStatic.number}</div>

          <div className="text-lg font-semibold text-gray-800">

            
            الرموز الخاصة
          </div>
          <div className="text-lg text-gray-800">{entropyStatic.special}</div>

          <div className="text-lg font-semibold text-gray-800">
            طول كلمة المرور
          </div>
          <div className="text-lg text-gray-800">{entropyStatic.length}</div>
        </div>
      ) : (
          
          
          ""
          
      )}
    </div>
  );
};

export default EntropyDisplay;
