import React from "react";
import Day from "./Day";

const Month = ({ year, month, dayNow }) => {
  function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
  console.log(month);
  let daysInMonthNumber = daysInMonth(year, month);

  const startsOn = new Date(year, month, 1).getDay();

  return (
    <>
      {[...Array(daysInMonthNumber)].map((x, i) => (
        <div
          key={i}
          className={
            i + 1 === dayNow
              ? "today day"
              : i + 1 === 1
              ? `first-day-${startsOn} day`
              : "day"
          }
        >
          <label className="day-label">{i + 1}</label>
          <Day year={year} month={month} dayNow={i + 1} />
        </div>
      ))}
    </>
  );
};

export default Month;
