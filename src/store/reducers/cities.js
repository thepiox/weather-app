import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';
import { SET_FORECAST, GET_WEATHER_CITY, SET_WEATHER_CITY } from '../actions';

const objectToArray = (cities) => toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.weather }));

const getForecastByCity = createSelector(
	(city, cities) => cities[city] && cities[city].forecastData,
	(forecastData) => forecastData
);

const getWeatherCities = createSelector(
	(state) => objectToArray(state),
	(cities) => cities
);

const cities = (state = {}, action) => {
	switch (action.type) {
		case SET_FORECAST: {
			const { city, forecastData } = action.payload;
			return { ...state, [city]: { ...state[city], forecastData, forecastDate: new Date() } };
		}

		case GET_WEATHER_CITY: {
			const city = action.payload;
			return { ...state, [city]: { weather: null } };
		}

		case SET_WEATHER_CITY: {
			const { city, weather } = action.payload;
			return { ...state, [city]: { ...state[city], weather } };
		}

		default:
			return state;
	}
};

export { cities, getForecastByCity, getWeatherCities };
