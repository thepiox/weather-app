import axios from 'axios';
import { API_KEY, END_POINT_BASE } from '../constants';

const getForecast = (city) => axios.get(`${END_POINT_BASE}forecast?q=${city}&&appid=${API_KEY}`);
const getWeather = (city) => axios.get(`${END_POINT_BASE}weather?q=${city}&&appid=${API_KEY}`);

export { getForecast, getWeather };
