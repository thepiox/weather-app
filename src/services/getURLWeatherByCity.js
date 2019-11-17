import { API_KEY, END_POINT_BASE } from '../constants';

const getURLWeatherByCity = (city) => `${END_POINT_BASE}weather?q=${city}&&appid=${API_KEY}`;

export default getURLWeatherByCity;
