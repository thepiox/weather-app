import axios from 'axios';

const getForecast = (URL) => axios.get(URL);

export default getForecast;
