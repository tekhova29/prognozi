import React from "react";
import "./minebar.css";

function Minebar({ weather }) {
  return (
    <div className="mine">
      <div className="mine-1">
        <h1>{weather.place}</h1>
        <img src="../public/img/loca.png" alt="" />
      </div>
      <div className="mine-2">
        <div>
          <p className="max">{weather.max}°C</p>
          <span>Max temp</span>
        </div>
        <div>
          <p className="min">{weather.min}°C</p>
          <span>Min temp</span>
        </div>
      </div>
      <div className="mine-3">
        <div>
          <p>{weather.feels}</p>
          <span>Feels like</span>
          <img src="../public/img/Group.png" alt="" />
        </div>
        <div>
          <p>{weather.humidity}%</p>
          <span>Humidity</span>
          <img src="../public/img/Vector.png" alt="" />
        </div>
        <div>
          <p>{weather.wind} m/s</p>
          <span>Wind</span>
          <img src="../public/img/Shape.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Minebar;
