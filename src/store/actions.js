import { retrieveForecastData } from '../services/index';
import { getForecastData } from '../utils';

const SET_CITY = 'SET_CITY';
const SET_FORECAST = 'SET_FORECAST';

const setCity = (payload) => ({ type: SET_CITY, payload });
const setForecastData = (payload) => ({ type: SET_FORECAST, payload });

const setSelectedCity = (payload) => {
	return (dispatch) => {
		dispatch(setCity(payload));

		return retrieveForecastData(payload).then((forecastResponse) => {
			const newForecast = getForecastData(forecastResponse.data);
			dispatch(setForecastData({ city: payload, forecastData: newForecast }));
		});
	};
};

export { setCity, setSelectedCity, SET_CITY, SET_FORECAST };
