import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Minebar from "./Minebar";
import Input from "./Input";
import Day from "./Day";

function App() {
  const [weather, setWeather] = useState({});
  const [days, setDays] = useState([]);
  const [change, setChange] = useState(0);

  console.log(change);

  useEffect(() => {
    func1();
  }, [change]);
  async function func1(a = "Kutaisi") {
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${a}?key=3DGCS8AQ24RQ4PYWDGJ57F4N4`
    );
    const data = await res.json();

    setDays(data.days);

    setWeather({
      day: "Thursday",
      date: data.days[change].datetime,
      icon: data.days[change].icon,
      temp: data.days[change].temp,
      desc: data.days[change].conditions,
      max: ((data.days[change].tempmax - 32) / 1.8).toFixed(),
      min: ((data.days[change].tempmin - 32) / 1.8).toFixed(),
      feels: ((data.days[change].feelslike - 32) / 1.8).toFixed(),
      humidity: ((data.days[change].humidity - 32) / 1.8).toFixed(),
      wind: data.days[change].windspeed,
      place: data.resolvedAddress,
    });
  }

  return (
    <div className="div1">
      <div className="div2">
        <div className="div3">
          <Sidebar weather={weather} change={change} />
        </div>
        <div className="div-mine">
          <Input search={func1} />
          <Minebar weather={weather} />
        </div>
      </div>
      <div>
        <Day days={days} change={setChange} change1={change} />
      </div>
    </div>
  );
}

export default App;
