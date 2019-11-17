import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZEL } from '../../../constants';
import './styles.css';

const icons = {
	[CLOUD]: 'cloud',
	[RAIN]: 'rain',
	[SNOW]: 'snow',
	[SUN]: 'day-sunny',
	[THUNDER]: 'day-thunderstrom',
	[DRIZZEL]: 'day-showers',
};

const getWeatherIcon = (weatherState) => {
	const icon = icons[weatherState];
	const sizeIcon = '4x';

	if (weatherState) {
		return <WeatherIcons className="w-icon" name={icon} size={sizeIcon} />;
	}

	return <WeatherIcons className="w-icon" name={'day-sunny'} size={sizeIcon} />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
	<div className="weather-temperature__container">
		{getWeatherIcon(weatherState)}
		<span className="temperature">{temperature}</span>
		<span className="temperature-type">°C</span>
	</div>
);

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
