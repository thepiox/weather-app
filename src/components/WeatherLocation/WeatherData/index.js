import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';
import { SUN } from '../../../constants';

const WeatherData = () => (
  <div className="weather-data__container">
    <WeatherTemperature temperature={20} weatherState={SUN} />
    <WeatherExtraInfo humidity={80} wind={'2m/s'} />
  </div>
);

export default WeatherData;
