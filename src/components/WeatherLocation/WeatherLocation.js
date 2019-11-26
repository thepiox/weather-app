import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import WeatherData from '../WeatherData/WeatherData';
import Location from './Location';
import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
	<div className="weather-location__container" onClick={onWeatherLocationClick}>
		<Location city={city} />
		{data ? <WeatherData data={data} /> : <CircularProgress />}
	</div>
);

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func.isRequired,
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	}),
};

export default WeatherLocation;
