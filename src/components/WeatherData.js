import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import { SUN } from "../constants/weather";

const WeatherData = () => (
  <div>
    <WeatherTemperature temperature={20} weatherState={SUN} />
    <WeatherExtraInfo humidity={80} wind={"2m/s"} />
  </div>
);

export default WeatherData;
