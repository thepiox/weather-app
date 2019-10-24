import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, RAIN, SNOW, SUN, WINDY } from '../constants/weather';

const icons = {
  [CLOUD]: 'cloud',
  [CLOUDY]: 'cloudy',
  [RAIN]: 'sun',
  [SNOW]: 'rain',
  [SUN]: 'snow',
  [WINDY]: 'windy'
};

const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];

  if (weatherState) {
    return <WeatherIcons name={icon} size="2x" />;
  }

  return <WeatherIcons name={'day-sunny'} size="2x" />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}
    <span>{`${temperature} °C`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
