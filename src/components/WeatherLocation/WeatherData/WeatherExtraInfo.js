import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weather-extra-info__container">
    <span className="extra-info-text">Humedad: {humidity}% - </span>
    <span className="extra-info-text">Vientos: {wind}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;
