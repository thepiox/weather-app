import React from 'react';
import './styles.css'
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
  <div className="weather-location__container">
    <Location city={'Toledo'} />
    <WeatherData />
  </div>
);

export default WeatherLocation;
