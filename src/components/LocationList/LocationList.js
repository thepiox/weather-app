import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from '../WeatherLocation/WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectLocation }) => {
	const handleWeatherLocationClick = (city) => {
		onSelectLocation(city);
	};

	const weatherLocationItem = (cities) =>
		cities.map((city) => (
			<WeatherLocation
				key={city.key}
				city={city.name}
				data={city.data}
				onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
			/>
		));

	return <div className="location-list">{weatherLocationItem(cities)}</div>;
};

LocationList.prototype = {
	cities: PropTypes.arrayOf(PropTypes.string).isRequired,
	onSelectLocation: PropTypes.func.isRequired,
};

export default LocationList;
