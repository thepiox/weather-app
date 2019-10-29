import { getTemperature, getWeatherState } from './'

const getWeatherData = (weatherReponse) => {
	const {
		main: { humidity, temp },
		wind: { speed },
	} = weatherReponse;

	const data = {
		humidity,
		temperature: getTemperature(temp),
		weatherState: getWeatherState(),
		wind: `${speed} m/s`,
	};

	return data;
};

export default getWeatherData;
