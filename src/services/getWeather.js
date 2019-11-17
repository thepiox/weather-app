import axios from 'axios';

const getWeather = (URL) => {
	return axios.get(URL);
};

export default getWeather;
