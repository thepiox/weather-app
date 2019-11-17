import { API_KEY, END_POINT_BASE } from '../constants';

const getURLByCity = (city) => `${END_POINT_BASE}?q=${city}&&appid=${API_KEY}`;

export default getURLByCity;
