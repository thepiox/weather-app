import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderProgress = () => {
	return <CircularProgress />;
};

const renderForecastItemDays = (forecastData) =>
	Array.isArray(forecastData) &&
	forecastData.map((forecastItem) => (
		<ForecastItem
			weekDay={forecastItem.weekDay}
			key={forecastItem.id}
			hour={forecastItem.hour}
			data={forecastItem.data}
		/>
	));

const ForecastExtended = ({ city, forecastData }) => (
	<div className="forecast__container">
		<h2 className="forecast-title">Pronostico extendido {city}</h2>
		{forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
	</div>
);

ForecastExtended.propTypes = {
	city: PropTypes.string,
	forecastData: PropTypes.array,
};

export default ForecastExtended;
