import { getForecastData, getWeatherData } from '../services';
import { retrieveForecastData, retrieveWeatherData } from '../utils';

const SET_CITY = 'SET_CITY';
const SET_FORECAST = 'SET_FORECAST';
const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = (payload) => ({ type: SET_CITY, payload });
const setForecastData = (payload) => ({ type: SET_FORECAST, payload });
const getWeatherCity = (payload) => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = (payload) => ({ type: SET_WEATHER_CITY, payload });

const setSelectedCity = (payload) => {
	return (dispatch, getState) => {
		dispatch(setCity(payload));

		const state = getState();
		const date = state.cities[payload] && state.cities[payload].forecastDate;
		const newDate = new Date();

		if (date && newDate - date < 1 * 60 * 1000) {
			return;
		}

		return getForecastData(payload).then((forecastResponse) => {
			const newForecast = retrieveForecastData(forecastResponse.data);
			dispatch(setForecastData({ city: payload, forecastData: newForecast }));
		});
	};
};

const setWeather = (payload) => {
	return (dispatch) => {
		payload.forEach((city) => {
			dispatch(getWeatherCity(city));

			getWeatherData(city).then((weatherResponse) => {
				const newWeather = retrieveWeatherData(weatherResponse.data);
				dispatch(setWeatherCity({ city, weather: newWeather }));
			});
		});
	};
};

export { SET_CITY, SET_FORECAST, GET_WEATHER_CITY, SET_WEATHER_CITY, setCity, setSelectedCity, setWeather };
