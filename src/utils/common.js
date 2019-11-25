import convert from 'convert-units';
import 'moment/locale/es';
import moment from 'moment';
import { THUNDER, DRIZZEL, RAIN, SNOW, SUN, CLOUD } from '../constants';

const GUID = () => {
	const S4 = () =>
		Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);

	return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

const getTemperature = (kelvinTemperature) =>
	Number(
		convert(kelvinTemperature)
			.from('K')
			.to('C')
			.toFixed(0)
	);

const getWeatherState = (weatherState) => {
	switch (weatherState) {
		case 300:
			return THUNDER;

		case 400:
			return DRIZZEL;

		case 600:
			return RAIN;

		case 700:
			return SNOW;

		case 800:
			return SUN;

		default:
			return CLOUD;
	}
};

const getWeatherData = (weatherReponse) => {
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

const getForecastData = (forecastReponse) => {
	if (Array.isArray(forecastReponse) && forecastReponse.length > 0) {
		return [];
	}

	return forecastReponse.list
		.filter(
			(itemList) =>
				moment
					.unix(itemList.dt)
					.utc()
					.hour() %
					6 ===
				0
		)
		.map((itemList) => ({
			id: GUID(),
			weekDay: moment.unix(itemList.dt).format('dddd'),
			hour: moment.unix(itemList.dt).hour(),
			data: getWeatherData(itemList),
		}));
};

export { getWeatherData, getForecastData };
