import { THUNDER, DRIZZEL, RAIN, SNOW, SUN, CLOUD } from '../constants';

const getWeatherState = (weatherState) => {
	if (weatherState < 300) return THUNDER;
	if (weatherState < 400) return DRIZZEL;
	if (weatherState < 600) return RAIN;
	if (weatherState < 700) return SNOW;
	if (weatherState === 800) return SUN;

	return CLOUD;
};

export default getWeatherState;
