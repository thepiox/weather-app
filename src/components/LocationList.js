import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectLocation }) => {
	const handleWeatherLocationClick = (city) => {
		onSelectLocation(city);
	};

	const weatherLocationItem = (cities) => {
		return cities.map((city, index) => (
			<WeatherLocation city={city} onWeatherLocationClick={() => handleWeatherLocationClick(city)} key={index} />
		));
	};

	return <div className="location-list">{weatherLocationItem(cities)}</div>;
};

LocationList.prototype = {
	cities: PropTypes.arrayOf(PropTypes.string).isRequired,
	onSelectLocation: PropTypes.func.isRequired,
};

export default LocationList;
