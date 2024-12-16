import React from "react";
import { calculateTimePC } from "../functions/functions";

const TimeCheck = ({ value }) => {
  const { years, months, days, hours, minutes, seconds } =
    calculateTimePC(value);

  const timeParts = [
    years > 0 ? `${years} سنوات` : "",
    months > 0 ? `${months} أشهر` : "",
    days > 0 ? `${days} أيام` : "",
    hours > 0 ? `${hours} ساعات` : "",
    minutes > 0 ? `${minutes} دقائق` : "",
    true ? `${seconds} ثواني` : "",
  ].filter(Boolean);

  return (
    <div className="text-center my-14">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        الوقت المستغرق لاختراق كلمة المرور
      </h2>
      <q className="text-gray-600 text-sm">
        و دا طبعا بى افتراض اننا بنعمل 10.000 محاولة فى الثانية
      </q>
      <div className="mt-4">
        <p className="text-center text-gray-700 font-medium">
          {timeParts.join(" - ")}
        </p>
      </div>
    </div>
  );
};

export default TimeCheck;
