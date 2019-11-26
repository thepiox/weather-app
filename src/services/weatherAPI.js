import axios from 'axios';
import { API_KEY, END_POINT_BASE } from '../constants';

const getForecastData = (city) => axios.get(`${END_POINT_BASE}forecast?q=${city}&&appid=${API_KEY}`);
const getWeatherData = (city) => axios.get(`${END_POINT_BASE}weather?q=${city}&&appid=${API_KEY}`);

export { getForecastData, getWeatherData };
