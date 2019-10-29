import { API_KEY, END_POINT_BASE } from '../constants';
import axios from 'axios';

const URL_BASE = `${END_POINT_BASE}?q=Toledo&&appid=${API_KEY}`;

const getWeather = () => {
	return axios.get(URL_BASE);
}

export default getWeather;
