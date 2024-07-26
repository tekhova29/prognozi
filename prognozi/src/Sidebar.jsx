import React from "react";

const week = [
  "კვირა",
  "ორშაბათი",
  "სამშაბათი",
  "ოთხშაბათი",
  "ხუთშაბათი",
  "პარასკევი",
  "შაბათი",
];

function Sidebar({ weather, change }) {
  const day1 = new Date();
  const week2 = day1.getDay();

  function func1(index) {
    const x = week2 + index;
    if (x < 7) {
      return week[x];
    } else {
      return week[x - 7];
    }
  }

  const Celsius = (weather.temp - 32) / 1.8;
  return (
    <div className="side">
      <h3>{func1(change)}</h3>
      <p>{weather.date}</p>
      <img src={`../public/img/${weather.icon}.png`} />
      <h2>{Celsius.toFixed()}°C</h2>
      <h3>{weather.desc}</h3>
    </div>
  );
}

export default Sidebar;
