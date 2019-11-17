import { getTemperature, getWeatherState } from './';

const getForecastData = (weatherReponse) => {
	const {
		main: { humidity, temp },
		wind: { speed },
		weather,
	} = weatherReponse;

	const data = {
		humidity,
		temperature: getTemperature(temp),
		weatherState: getWeatherState(weather[0].id),
		wind: `${speed} m/s`,
	};

	return data;
};

export default getForecastData;
