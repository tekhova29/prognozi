import React, { useState } from "react";
import "./day.css";

const week = ["კვ.", "ორ.", "სამ.", "ოთხ.", "ხუთ.", "პარ.", "შაბ."];

function Day({ days, change, change1 }) {
  const day1 = new Date();
  const week2 = day1.getDay();

  const day = days.slice(1, 8);

  function func1(index) {
    const x = week2 + index;
    if (x < 7) {
      return week[x];
    } else {
      return week[x - 7];
    }
  }

  return (
    <div>
      <div className="div-day">
        {day.map((item, index) => (
          <div
            className={`day ${change1 === index ? "border-click" : "border"}`}
            key={index}
            onClick={() => change(index)}
          >
            <h1>{func1(index)}</h1>
            <h2>{((item.temp - 32) / 1.8).toFixed()}°C</h2>
            <img
              className="img-1"
              src={`../public/img/${item.icon}.png`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
