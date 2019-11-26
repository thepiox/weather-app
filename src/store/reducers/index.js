import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import city from './city';
import { cities, getForecastByCity as _getForecastByCity, getWeatherCities as _getWeatherCities } from './cities';

const getCity = createSelector(
	(state) => state.city,
	(city) => city
);

const getForecastByCity = createSelector(getCity, (state) => state.cities, _getForecastByCity);
const getWeatherCities = createSelector((state) => state.cities, _getWeatherCities);

export default combineReducers({
	cities,
	city,
});

export { getCity, getForecastByCity, getWeatherCities };
