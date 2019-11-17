import { API_KEY, END_POINT_BASE } from '../constants';

const getURLForecastByCity = (city) => `${END_POINT_BASE}forecast?q=${city}&&appid=${API_KEY}`;

export default getURLForecastByCity;
